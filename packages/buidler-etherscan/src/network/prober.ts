import { NomicLabsBuidlerPluginError } from "@nomiclabs/buidler/plugins";
import { EthereumProvider } from "@nomiclabs/buidler/types";

import { pluginName } from "../pluginContext";

type NetworkMap = {
  [networkID in NetworkID]: string;
};

// See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids
enum NetworkID {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
}

const networkIDtoEndpoint: NetworkMap = {
  [NetworkID.MAINNET]: "https://api.etherscan.io/api",
  [NetworkID.ROPSTEN]: "https://api-ropsten.etherscan.io/api",
  [NetworkID.RINKEBY]: "https://api-rinkeby.etherscan.io/api",
  [NetworkID.GOERLI]: "https://api-goerli.etherscan.io/api",
  [NetworkID.KOVAN]: "https://api-kovan.etherscan.io/api",
};

export async function getEtherscanEndpoint(provider: EthereumProvider) {
  const chainID: NetworkID = parseInt(await provider.send("eth_chainId"), 16);

  const endpoint = networkIDtoEndpoint[chainID];
  if (typeof endpoint !== "string") {
    throw new NomicLabsBuidlerPluginError(
      pluginName,
      `An etherscan endpoint could not be found for this network. ChainID: ${chainID}`
    );
  }
  return endpoint;
}

export async function retrieveContractBytecode(
  address: string,
  provider: EthereumProvider
) {
  const bytecodeString: string = await provider.send("eth_getCode", [
    address,
    "latest",
  ]);
  const deployedBytecode = bytecodeString.startsWith("0x")
    ? bytecodeString.slice(2)
    : bytecodeString;
  if (deployedBytecode.length === 0) {
    return null;
  }
  return deployedBytecode;
}

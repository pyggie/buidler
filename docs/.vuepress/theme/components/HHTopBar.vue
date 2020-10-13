<template lang="pug">
section.top-bar
  a(
    href="https://medium.com/nomic-labs-blog/better-solidity-debugging-console-log-is-finally-here-fc66c54f2c4a",
    target="_blank",
    rel="noopener noreferrer"
  )
    .top-bar-content.desktop-top-bar
      span
        span.colored.reverse
          | <<<<<<
          |
        span.top-text Better Solidity debugging: stack traces and console.log are finally here
        span.colored.reverse
          |
          | >>>>>>
    .top-bar-content.mobile-top-bar
      span
        span.colored.reverse
          | <<<<
          |
        span.top-text Stack traces and console.log are finally here
        span.colored.reverse
          |
          | >>>>
</template>

<script>
// TODO-HH: Animate arrows
export default {
  name: "HHTopBar",
};
</script>

<style lang="stylus" scoped>

@import "../styles/util/variables.styl"

.top-bar
  background-color #0A0A0A
  text-align center
  font-weight 200
  padding 0.8rem;
  height 48px
  @media screen and (max-width 1000px)
    padding 0.8rem 0
    white-space nowrap

  span
    font-family 'ChivoLight'
    color $hh-yellow

    &.colored
      color $hh-yellow
      font-family inherit

    .top-text
      color white
      font-size 15px
      @media screen and (max-width 1000px)
        font-size 13px

  .top-bar-link
    text-decoration underline
    font-family 'Chivo'
    color inherit
    color white

  .top-bar-content
    line-height 24px

  .desktop-top-bar
    @media screen and (max-width: 600px)
      display none

  .mobile-top-bar
    @media screen and (min-width: 599px)
      display none
</style>

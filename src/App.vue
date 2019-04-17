<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="stylus">
body
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100vw
  height 100vh
  background: #E6F1F3;
  // overflow hidden

.page-enter-active, .page-leave-active {
  transition: opacity .75s, transform .75s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}


</style>

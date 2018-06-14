<template>
  <div id="app" class="app">

      <transition name="fade" mode="out-in">
        <layout v-if="!isAuth"/>
        <auth-layout v-else></auth-layout>
      </transition>

  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout
    },
    created () {
      this.$store.dispatch('GET_TOKEN')
    },
    updated () {
      this.$store.dispatch('GET_TOKEN')
    },
    computed: {
      isAuth () {
        return this.$route.path.match('auth')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";

  .fade-enter-active, .fade-leave-active {
      transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
      opacity: 0;
  }
  
  body {
    height: 100%;
    letter-spacing: .04em;
    font-size: 0.9em;
    #app {
      height: 100%;
    }
  }
  .bg {
      opacity: 0;
      transition: opacity 1s;
      -webkit-transition: opacity 1s;
  }
  .bg-loaded {
      opacity: 1;
  }
  .button {
      border: none !important;
      border-radius:5px !important;
  }
  .button.primary {
      background-color: #00beff;
  }
  .button.secondary {
      background-color: #ff69c0;
  }
  .button span {
      font-family: "Montserrat-Regular", sans-serif;
      font-size: 1.2em;
      font-weight: 400;
      vertical-align: inherit;
  }
  .section {
      padding-top: 60px;
      padding-bottom: 60px;
  }
  h2 {
      font-family: "Montserrat-Bold", sans-serif !important;
      font-size: 2em !important;
      color: #333333;
  }
  h3 {
      font-family: "Montserrat-Regular", sans-serif;
      color: #999;
      text-transform: none;
      font-size: 18px;
  }
  .section .is-divider {
      margin-top:2em;
      margin-bottom:2em;
      max-width:50px;
      background-color:rgb(255, 105, 192);
  }
</style>

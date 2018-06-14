<template>
  <div :class="classObject" v-resize>
    
    <div id="wrapper">
      <navbar></navbar>
      <!-- <sidebar></sidebar> -->
      <!-- <vuestic-breadcrumbs :breadcrumbs="breadcrumbs"/> -->
      <!-- <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader> -->
      <router-view v-show="!isLoading"></router-view>
    </div>

    <div class="absolute-footer dark medium-text-center text-center made-by-footer">
      <div class="container clearfix">
        <div class="footer-primary pull-left">
          <div class="copyright-footer">
            © GETMODEL LTD. GetModel™ is trademark of GETMODEL LTD. All rights reserved.<br>
            <a href="https://key-g.com">Designed and produced by key-g.com</a>
          </div>
        </div><!-- .left -->
      </div><!-- .container -->
    </div><!-- .absolute-footer -->
    
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import Navbar from './navbar/Navbar'
  // import Sidebar from './sidebar/Sidebar'
  import Resize from 'directives/ResizeHandler'

  export default {
    name: 'layout',

    components: {
      Navbar,
      // Sidebar
    },
    directives: {
      resize: Resize
    },
    props: {
      fixed: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      ...mapGetters([
        'sidebarOpened',
        'toggleWithoutAnimation',
        'isLoading'
      ]),
      classObject: function () {
        return {
          'layout-fixed': this.fixed,
          'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
          'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
        }
      },
      breadcrumbs () {
        return this.$store.getters.breadcrumbs(this.$route.name)
      },
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .pre-loader {
    position: absolute;
    left: $vuestic-preloader-left;
    top: $vuestic-preloader-top;
  }

  .content-wrap {
    margin-left: $content-wrap-ml;
    padding: $content-wrap-pt $content-wrap-pr $content-wrap-pb 0;
    transition: margin-left 0.3s ease;

    .sidebar-hidden & {
      margin-left: $sidebar-left;
    }

    @include media-breakpoint-down(md) {
      padding: $content-mobile-wrap;
      margin-left: 0;

      .sidebar-hidden & {
        margin-left: 0;
      }
    }
  }

  .made-by-footer {
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

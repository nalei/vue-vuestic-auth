<template>
  <nav class="navbar app-navbar navbar-toggleable-md">
    <div class="navbar-brand-container d-flex align-items-center justify-content-start">
      <router-link class="navbar-brand" to="/" exact>
        <i :class="locale" class="i-vuestic"></i>
      </router-link>
    </div>

    <div class="row navbar-container">

      <!-- <div class="menu-icon-container d-flex align-items-center justify-content-center justify-content-lg-start col">
        <a class="menu-icon i-menu-expanded" href="#" @click.prevent="toggleSidebar(false)" v-if="sidebarOpened"></a>
        <a class="menu-icon i-menu-collapsed" href="#" @click.prevent="toggleSidebar(true)" v-else></a>
      </div> -->

      <div class="navbar-text offset-md-1 col-md-10 d-none d-lg-flex align-items-center justify-content-center">

        <ul class="header-nav header-nav-main nav nav-right nav-uppercase">
          <!-- <li v-for="(item, index) in menuItems" :key="item.name">
            <router-link
              :to="item.path"
              :target="item.meta.newWindow ? '_blank' : '_self'"
              v-if="item.path" exact>
              {{item.meta.title | translate}}
            </router-link>
          </li> -->
          <li><div style="width: 35px"></div></li>
          <li class="header-contact-wrapper">
            <ul class="nav nav-divided header-contact">
              <li><a href="mailto:info@getmodel.com" title="info@getmodel.com"><i class="fa fa-envelope"></i><span>info@getmodel.com</span></a></li>
              <li><a href="tel:+ 123 456 789" title="+ 123 456 789"><i class="fa fa-phone"></i><span>+ 123 456 789</span></a></li>
            </ul>
          </li>
          <li><div style="width: 20px"></div></li>

          <li v-if="isAuthenticated">
            <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
              <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#"
                @click.prevent="closeMenu">
                <span class="avatar-container">
                  <img src="http://i.imgur.com/nfa5itq.png"/>
                </span>
              </a>
              <div class="dropdown-menu last">
                <div class="dropdown-menu-content">
                  <div class="dropdown-item plain-link-item">
                    <a class="plain-link" href="#">{{'user.profile' | translate}}</a>
                  </div>
                  <div class="dropdown-item plain-link-item">
                    <a class="plain-link" @click="AUTH_LOGOUT" href="/">{{'user.logout' | translate}}</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li v-show="!isAuthenticated" class="html">
            <div class="header-button">
              <router-link :to="{name: 'Choose'}" class="button primary" ><span>{{'auth.register' | translate}}</span></router-link>
            </div>
          </li>
          <li v-show="!isAuthenticated" class="html">
            <div class="header-button">
              <router-link to="/auth/login" class="button primary" ><span>{{'auth.signIn' | translate}}</span></router-link>
            </div>
          </li>

        </ul>

      </div>
      <!-- <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#"
           @click.prevent="closeMenu">
          <span class="i-nav-messages notify"></span>
        </a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
            <a class="dropdown-item" href="#">
              <span class="ellipsis">{{ $t('messages.new', {name: "Oleg M"})}}</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">{{ $t('messages.new', {name: "Andrei H"})}}</span>
            </a>
            <div class="dropdown-item plain-link-item">
              <a class="plain-link" href="#">{{'messages.all' | translate}}</a>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#"
           @click.prevent="closeMenu">
          <span class="i-nav-notification notify"></span>
        </a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
            <a class="dropdown-item" href="#">
              <span class="ellipsis">{{$t('notifications.sentMessage', {name: 'Vasily S'})}}</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">{{$t('notifications.uploadedZip', { name: "Oleg M", type: "typography component"})}}</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">{{$t('notifications.startedTopic',{name: "Andrei H"}) }}</span>
            </a>
            <div class="dropdown-item plain-link-item">
              <a class="plain-link" href="#">{{'notifications.all' | translate}}</a>
            </div>
          </div>
        </div>
      </div> -->
      <language-selector :options="langs"></language-selector>

    </div>
  </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import LanguageSelector from './LanguageSelector'

  export default {
    name: 'navbar',
    components: {
      LanguageSelector
    },
    data () {
      return {
        langs: [
          {
            code: 'en',
            name: 'english'
          },
          {
            code: 'ru',
            name: 'russian'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'isAuthenticated',
        'menuItems',
        'sidebarOpened',
        'toggleWithoutAnimation',
        'locale'
      ])
    },
    methods: {
      ...mapActions([
        'closeMenu',
        'toggleSidebar',
        'isToggleWithoutAnimation',
        'AUTH_LOGOUT'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .nav > li > a {
    font-family:  "Montserrat-Regular", sans-serif;
    -webkit-font-smoothing: auto;
    font-size: .8em;
    font-weight: 400;
  }

  .nav > li {
    > a {
      color: rgb(187, 187, 187);
    }
    > a:hover, &.active > a, &.current > a {
      color: rgb(255, 255, 255);
    }
    > a {
      &.active, &.current {
        color: rgb(255, 255, 255);
      }
    }
  }

  .header-contact > li {
    > a {
      color: rgb(187, 187, 187);
    }
    > a:hover, &.active {
      color: rgb(187, 187, 187);
    }
  }

  .navbar {
    .layout-fixed & {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }

  .navbar.app-navbar {
    z-index: 1000;
    .navbar-container {
      width: 100%;
      height: 66%;
      margin: 0;
    }

    height: $top-nav-height;
    padding-left: $nav-padding-left;
    padding-right: $nav-padding-right;
    background-color: $top-nav-bg;

    .header-button {
      .button {
        padding: 0 3em
      }
      span {
        text-transform: none;
        letter-spacing: .01em;
      }
    }

    .avatar-container {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      border: 2px solid $lighter-gray;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .menu-icon-container {
      padding: 0;
      font-size: $font-size-base;
    }

    .navbar-brand-container {
      position: absolute;
      z-index: 3;
      height: 100%;
      left: $navbar-brand-container-left;
      top: 0;
    }

    .nav-item {
      padding: 0;
      height: 100%;
    }

    .dropdown.navbar-dropdown {
      .dropdown-toggle {
        padding: 0;
        &:after {
          display: none;
        }
      }

      &.show {
        @include media-breakpoint-up(lg) {
          .dropdown-menu {
            left: auto;
            right: 0;
          }
        }
        &:after {
          position: absolute;
          bottom: -$dropdown-show-b;
          right: calc(50% - 10px);
          width: 0;
          height: 0;
          display: block;
          content: '';
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid $darkest-gray;
        }
      }

      .dropdown-menu {
        margin-top: $dropdown-show-b;
        padding-top: 0;
        width: 100%;
      }

      .dropdown-item {
        height: $navbar-dd-item-height;
        cursor: pointer;
        font-size: $font-size-base;

        &:hover, &:active, &:focus, &.active {
          outline: none;
        }

        &.plain-link-item {
          color: $brand-primary;

          &:hover, &:active, &:focus {
            background: $dropdown-background;
          }

          .plain-link {
            text-decoration: none;
          }
        }
      }
    }

    .notify {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: -6px;
        top: -6px;
        background-color: $brand-primary;
        height: 12px;
        width: 12px;
        border-radius: 50%;
      }
    }

    .i-nav-notification.notify::after {
      right: -4px;
      top: 0;
    }

    @include media-breakpoint-down(md) {
      height: $top-mobile-nav-height;
      padding: $nav-mobile-pt $nav-mobile-padding-h $nav-mobile-pb $nav-mobile-padding-h;

      .navbar-brand-container {
        width: $nav-mobile-brand-width;
        top: $nav-mobile-brand-top;
        left: $nav-mobile-brand-left;
        height: auto;
        .navbar-brand {
          height: $font-size-smaller;
          padding: 0;
          font-size: $font-size-smaller;
        }
      }

      .dropdown.navbar-dropdown {
        &.show {
          display: flex;
          &:after {
            bottom: -$dropdown-mobile-show-b;
            z-index: 2;
          }
          .dropdown-menu {
            margin-top: $dropdown-mobile-show-b;
            left: auto;
            &.last {
              right: 0;
            }
          }
        }
      }
    }
  }
</style>

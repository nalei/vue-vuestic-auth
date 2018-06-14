<template>
    <aside class="sidebar-filter">
      <vuestic-widget>

        <form @submit.prevent="search" name="search">
          <fieldset>
            <vuestic-simple-select
              :label="'forms.selects.type' | translate"
              name="type"
              v-model="type"
              v-bind:options="modelTypeOption">
            </vuestic-simple-select>
            <vuestic-simple-select
              :label="'forms.selects.country' | translate"
              name="location"
              v-model="location"
              v-bind:options="countriesList">
            </vuestic-simple-select>
          </fieldset>
          <button class="btn btn-primary" type="submit">
            Найти
          </button>
        </form>

      </vuestic-widget>
    </aside>
</template>

<script>
import Expanding from 'vue-bulma-expanding/src/Expanding'

export default {
  name: 'filter',
  components: {
    Expanding
  },
  data: () => ({
    type: 'Female',
    location: 'USA',
    modelTypeOption: ['Female', 'Male'],
    countriesList: ['USA', 'Russia']
  }),
  created () {
    this.type = this.$route.query.type
    this.location = this.$route.query.location
  },
  methods: {
    search () {
      const props = {
        type: this.type,
        location: this.location
      }
      const queryPath = '?' + Object.entries(props).map((pair) => pair.map(encodeURIComponent).join('=')).join('&')
      this.$router.push('/search' + queryPath)
    }
  }
}
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";

  .sidebar-filter {

    @include media-breakpoint-down(md) {

      top: $sidebar-mobile-top;
      left: $sidebar-mobile-left;
      width: $sidebar-mobile-width;
      z-index: $sidebar-mobile-z-index;
    }

    height: $sidebar-viewport-height;
    .vuestic-scrollbar {
      height: 100%;
      .scrollbar-wrapper {
        box-shadow: $sidebar-box-shadow;
      }
      .scrollbar-content {
        background: $sidebar-bg;
      }
    }

    position: absolute;
    width: $sidebar-width;
    top: $sidebar-top;
    left: $sidebar-left;
    transition: all 0.2s ease;
    opacity: 1;

    .sidebar-hidden_without-animation & {
      transition: none;
    }

    .sidebar-hidden & {
      @include media-breakpoint-down(md) {
        top: $sidebar-hidden-top-mobile;
        opacity: 0;
        z-index: $sidebar-mobile-z-index;
        height: $sidebar-hidden-height-mobile;
      }
      top: $sidebar-hidden-top;
      opacity: 0;
      z-index: $min-z-index;
    }

    .layout-fixed & {
      position: fixed;
    }
  }
</style>

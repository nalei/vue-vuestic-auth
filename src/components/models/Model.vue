<template>
  <div class="dashboard" style="margin-top: 1.875rem;">

    <div class="row">
      <div class="col-md-4 d-flex">
        <vuestic-widget :headerText="$t('extra.profileCard')" class="profile-card-widget">
          <vuestic-profile-card :name="results.name" :location="'Malaga, Spain'" :photoSource="results.photos"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </vuestic-profile-card>
        </vuestic-widget>
      </div>
      <div class="col-md-8">
        <vuestic-widget class="no-padding no-v-padding">
          <vuestic-tabs
            :names="[$t('Детали')]"
            ref="tabs">
            <div :slot="$t('Детали')"></div>
          </vuestic-tabs>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Model',
  data: () => ({
  }),
  computed: {
    results () {
      return this.$store.state.search.results
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('GET_MODEL', this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .profile-card-widget, .chat-widget {
    width: 100%;
    .widget-body {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
        text-align: center
      }
    }
  }

  .row {
    max-width: 1520px;
    &.row-collapse {
      max-width: 1050px;
    }
    &.row-small {
      max-width: 1065px;
    }
    &.row-large {
      max-width: 1110px;
    }
  }

  .photos {
      padding-right: 2rem;
      height: 80px;
      flex-wrap: wrap;
      overflow: hidden;
      .photo {
        background-size: cover !important;
        width: 80px;
        height: 80px;
        margin-right: 2px;
      }
    }
</style>

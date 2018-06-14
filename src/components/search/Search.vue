<template>
  <main id="content-wrap" class="content-wrap" role="main">
    <div class="search-result container">
      <sidebar-filter></sidebar-filter>
      <div class="row">

        <model-box 
          v-for="(model, id) in results"
          :key="id"
          :model-photo="model.photos[0]"
          :model-name="model.name"
          :user-id="model.user_id">
        </model-box>
        
      </div>
    </div>
  </main>
</template>

<script>
  import ModelBox from '../models/ModelBox'
  import Filter from './sidebar/Filter'
  export default {
    name: 'search',
    components: {
      'model-box': ModelBox,
      'sidebar-filter': Filter
    },
    data: () => ({}),
    props: [ 'type', 'location' ],
    computed: {
      results () {
        return this.$store.state.search.results
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        if (this.type && this.location) {
          const props = {
            type: this.type.toLowerCase(),
            location: this.location.toLowerCase()
          }
          this.$store.dispatch('SEARCH_REQUEST', props)
        }
      }
    }
  }
</script>
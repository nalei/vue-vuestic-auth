<template>
  <hollow-dots-spinner
    :animation-duration="1500"
    :dot-size="15"
    :dots-num="3"
    :color="'#ff1d5e'"
  />
</template>

<script>
import {HollowDotsSpinner} from 'epic-spinners'
export default {
  name: 'preloader',
  components: {
    HollowDotsSpinner
  }
}
</script>
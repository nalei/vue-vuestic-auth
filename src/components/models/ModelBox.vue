<template>
  <div class="col medium-4 small-12 large-3">
    <div class="col-inner">
      <div class="box has-hover has-hover box-text-bottom">

        <router-link :to="`model/${userId}`">
          <div class="box-image" :style="`background: url(${modelPhoto})`">
          </div><!-- box-image -->
        </router-link>
        
        <div class="box-text text-left is-small">
          <div class="box-text-inner">
            <h3>{{ modelName }}</h3>
            <p>ID. {{ userId }}</p>
          </div><!-- box-text-inner -->
        </div><!-- box-text -->

      </div><!-- .box  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'model-box',
  data: () => ({}),
  props: ['modelPhoto', 'modelName', 'userId']
}
</script>

<style lang="scss">
    .col {
      .box {
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0,0,0,0.08);
        border-bottom: 4px solid #ff69c0;
        .box-text {
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 0;
          h3 {
            color: #333333;
          }
          td {
            line-height: 0.7;
            border-bottom: none;
          }
          td b {
            color: #333333;
          }
        }
        .box-image {
          background-size: cover !important;
          width: 100%;
          height: 300px;
        }
      }
    }
</style>


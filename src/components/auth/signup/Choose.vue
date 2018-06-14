<template>
  <div class="signup">
    <h2 class="text-center">{{'auth.chooseYourRole' | translate}}</h2>

    <br>

    <div id="button-box" class="text-box banner-layer res-text">
      <div class="text">
        <div class="text-inner text-center">
          <router-link :to="{name: 'Signup'}" class="btn btn-primary"><span>Модель</span></router-link>
          <router-link :to="{name: 'Signup'}" class="btn btn-primary"><span>Заказчик</span></router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Choose',
  data: () => ({
    isAgency: false
  })
}
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .signup {
    width: 40.375rem;

    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
    }

    .down-container {
      margin-top: 1.125rem;
    }
  }
</style>



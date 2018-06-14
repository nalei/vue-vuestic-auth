<template>
  <div style="width:40.375rem;">
    <vuestic-alert type="success" :withCloseBtn="true">
        На указанную Вами почту было отправелно сообщение. Пожалуйста, пройдите по ссылке внутри письма для завершения регистрации.
      <i class="fa fa-close alert-close"></i>
    </vuestic-alert>
  </div>
</template>

<script>
export default {
  name: 'Success',
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



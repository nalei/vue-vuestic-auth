<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <!-- <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> -->
    <div class="text-center">
      <div class="is-divider divider clearfix" style="margin-top:2.5em;margin-bottom:2.5em;background-color:rgb(255, 105, 192);"></div>
    </div>

    <form @submit.prevent="authentificate" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" v-model="mail" required="required">
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" v-model="password" required="required">
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <vuestic-alert v-if="authStatus === 'error'" type="danger" :withCloseBtn="true">
        {{'auth.errorMessage' | translate}}
      </vuestic-alert>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.login' | translate}}
        </button>
        <router-link class="link" :to="{name: 'Choose'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    mail: '',
    password: '',
    type: 'model'
  }),
  computed: {
    ...mapGetters({
      'authStatus': 'authStatus'
    })
  },
  methods: {
    authentificate () {
      const { mail, password, type } = this
      this.$store.dispatch('AUTH_REQUEST', { mail, password, type })
      .then(() => {
        if (this.authStatus === 'success') this.$router.push('/dashboard')
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>

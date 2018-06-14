<template>
  <div class="signup">
    <h2>{{'content.registerOnGetmodel' | translate}}</h2>
    <p class="text-center"></p>
    <div class="text-center">
      <div class="is-divider divider clearfix" style="margin-top:2.5em;margin-bottom:2.5em;background-color:rgb(255, 105, 192);"></div>
    </div>
    <form @submit.prevent="validateBeforeSubmit()" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" v-model="mail" required="required">
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input 
            type="password"
            name="password"
            id="password"
            v-model="password"
            required >
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input
            type="password"
            name="password_confirmation"
            v-validate="'confirmed:password'"
            required >
          <label class="control-label" for="password">{{'auth.passwordConfirm' | translate}}</label><i class="bar"></i>
        </div>
      </div>

      <vuestic-alert v-if="authStatus === 'error'" type="danger" :withCloseBtn="true">
        Этот e-mail уже занят
      </vuestic-alert>
      <vuestic-alert v-if="passConfirmErr" type="danger" :withCloseBtn="true">
        Пароли не совпадают
      </vuestic-alert>

      <vuestic-checkbox
        :id="'checkbox1'"
        v-model="checked">
        <template slot="label">{{'auth.agree' | translate}}
          <router-link to="">{{'auth.termsOfUse' | translate}}</router-link>
        </template>
      </vuestic-checkbox>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class="link" :to="{name: 'Login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Signup',
  data: () => ({
    mail: '',
    password: '',
    type: 'model',
    checked: false,
    passConfirmErr: false
  }),
  computed: {
    ...mapGetters({
      'authStatus': 'authStatus'
    })
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(resp => {
        (resp) ? this.register() : this.passConfirmErr = true
      })
      .catch(err => {
        console.log(err)
      })
    },
    register () {
      const { mail, password, type } = this
      console.log({ mail, password, type })
      this.$store.dispatch('REGISTER_REQUEST', { mail, password, type })
      .then(() => {
        if (this.authStatus === 'success') this.$router.push('/auth/success')
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

  .signup {
    width: 21.375rem;
    
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

    .down-container {
      margin-top: 2.6875rem;
    }
  }
</style>

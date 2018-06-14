<template>
  <div class="setup-profile-tab dashboard-tab">

    <div class="row">

      <div class="col-md-4">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="firstName" v-model.lazy="userData.name" required="required" />
            <label class="control-label">Имя</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="lastName" v-model.lazy="userData.surname" required="required" />
            <label class="control-label">Фамилия</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <fieldset>
          <vuestic-simple-select :label="'forms.selects.type' | translate" name="type" v-model.lazy="userData.sex" v-bind:options="modelTypeOption">
          </vuestic-simple-select>

          <vuestic-simple-select :label="'forms.selects.country' | translate" name="location" v-model.lazy="userData.location" v-bind:options="countriesList">
          </vuestic-simple-select>

          <vuestic-simple-select :label="'Гранжданство'" v-model.lazy="userData.national" v-bind:options="countriesList">
          </vuestic-simple-select>
        </fieldset>
      </div>

      <div class="col-md-12">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="height" v-model.lazy="userData.height" required="required" />
            <label class="control-label">Рост</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="boobs" v-model.lazy="userData.breast" required="required" />
            <label class="control-label">Объём груди</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="waist" v-model.lazy="userData.waist" required="required" />
            <label class="control-label">Объём талии</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="hips" v-model.lazy="userData.hips" required="required" />
            <label class="control-label">Объём бёдер</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="shoeSize" v-model.lazy="userData.shoeSize" required="required" />
            <label class="control-label">Размер обуви</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="clothingSize" v-model.lazy="userData.clothingSize" required="required" />
            <label class="control-label">Размер одежды</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="eyeColor" v-model.lazy="userData.eyeColor" required="required" />
            <label class="control-label">Цвет глаз</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="hairColor" v-model.lazy="userData.hairColor" required="required" />
            <label class="control-label">Цвет волос</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="text" name="hairLength" v-model.lazy="userData.hairLength" required="required" />
            <label class="control-label">Длина волос</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="email" name="email" v-model.lazy="userData.email" required="required" />
            <label class="control-label">Email</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group with-icon-right">
          <div class="input-group">
            <input type="tel" name="phone" v-model.lazy="userData.phone" required="required" />
            <label class="control-label">Phone</label>
            <i class="bar"></i>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" @click="fetchData()">
        Сохранить
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'setup-profile-tab',
  data () {
    return {
      name: '',
      type: 'Female',
      location: 'USA',
      modelTypeOption: ['Female', 'Male'],
      countriesList: ['USA', 'Russia'],
      userData: {
        // breast: 22,
        // clothingSize: 77,
        // email: 'admin@admin.com',
        // eyeColor: 'blue',
        // hairColor: 'red',
        // hairLength: 32,
        // height: 111,
        // hips: 44,
        // location: 'USA',
        // name: 'Yuri',
        // national: 'Russia',
        // phone: '+79167353080',
        // sex: 'Female',
        // shoeSize: 66,
        // surname: 'Anikin',
        // waist: 33
      }
    }
  },
  created () {
  },
  methods: {
    fetchData () {
      const data = {
        'token': this.$store.state.auth.user.token,
        'data': this.userData
      }
      this.$store.dispatch('SAVE_PROFILE_DATA', data)
      .then(resp => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/_variables.scss';
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/breakpoints';

.form-group {
  min-width: 200px;
  max-width: 360px;
  width: 80%;
}

.wizard-completed-tab {
  @include media-breakpoint-up(md) {
    margin-top: -$tab-content-pt;
  }
}
</style>

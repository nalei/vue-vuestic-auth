<template>
  <div>

    <div id="content" role="main">
      <div id="banner" class="banner">
        <div class="banner-inner fill">
          <div class="banner-bg fill">
            <div class="bg fill bg-fill bg-loaded"></div>
          </div><!-- bg-layers -->
          <div class="banner-layers container">
            <div class="fill banner-link"></div>
            <div id="text-box" class="text-box banner-layer x0 md-x0 lg-x0 y50 md-y50 lg-y50 res-text">
              <div class="text">
                <div class="text-inner text-left">
                  <h1 class="uppercase">Getmodel</h1>
                  <p style="font-size: 1.7em;">{{'content.bannerPromo' | translate}}</p>
                  <router-link :to="{name: 'Choose'}" class="button secondary"><span>Присоединиться</span></router-link>
                </div>
              </div><!-- text-box-inner -->
            </div><!-- text-box -->
            <!-- <div id="button-box" class="text-box banner-layer x50 md-x50 lg-x50 y95 md-y95 lg-y95 res-text">
              <div class="text">
                <div class="text-inner text-center">
                  <router-link to="/auth/login" class="button secondary"><span>I` m Model</span></router-link>
                  <router-link to="/auth/login" class="button primary"><span>I` m looking for Model</span></router-link>
                </div>
              </div>
            </div> -->
          </div><!-- .banner-layers -->
        </div><!-- .banner-inner -->
      </div><!-- .banner -->
    </div>

    <section class="section">
      <div class="section-content relative container">

          <div class="row align-center">
            <div class="col custom-col medium-11 small-12 large-11">
              <div class="col-inner">
                <h2 class="text-center uppercase">{{'content.featuresModels' | translate}}</h2>
                <div class="text-center"><div class="is-divider divider clearfix"></div></div><!-- .divider -->
                <p class="text-center">{{'content.featuresModelsText' | translate}}</p>
              </div>
            </div>
          </div>

          <div class="row">
            <model-box
              v-for="(model, id) in results"
              :key="id"
              :model-photo="model.photos[0]"
              :model-name="model.name"
              :user-id="model.user_id">
            </model-box>
          </div>

      </div><!-- .section-content -->
    </section>

    <section id="findmodel" class="section">
      <div class="section-content relative">

        <div class="container">
          <div class="row align-center">
            <div class="col custom-col medium-11 small-12 large-11">
              <div class="col-inner">
                <h2 class="text-center uppercase">{{'content.findPerfectModel' | translate}}</h2>
                <!-- <div class="text-center"><div class="is-divider divider clearfix"></div></div> -->
                <!-- <p class="text-center">{{'content.findPerfectModelText' | translate}}</p> -->
              </div>
            </div>
          </div>
        </div>

        <div class="section wrapper">

          <div class="bg section-bg fill bg-fill bg-loaded">
            <div class="section-bg-overlay absolute fill"></div>
          </div><!-- .section-bg -->

          <div class="container">
            <div class="row row-large align-middle align-center">
              <div class="col small-12 large-12">
                <div class="col-inner" style="padding:30px 0px 0px 0px;">

                  <div class="banner has-hover custom-banner">
                    <div class="banner-inner fill">

                      <div class="banner-bg fill">
                        <div class="bg fill bg-fill bg-loaded"></div>
                        <div class="is-border"></div>
                      </div><!-- bg-layers -->

                      <div class="banner-layers container">

                        <div id="text-box-164001170" class="text-box banner-layer x5 md-x5 lg-x5 y50 md-y50 lg-y50 res-text">
                          <div class="text">
                            <div class="text-inner text-center">
                              <!-- <h2><strong>There are currently</strong></h2> -->
                              <h3>3,000</h3>
                              <p class="lead">Кастингов зарегистрировано на<br>GetModel.com</p>
                            </div>
                          </div><!-- text-box-inner -->
                        </div><!-- text-box -->

                        <div id="text-box-201134109" class="text-box banner-layer x90 md-x90 lg-x90 y50 md-y50 lg-y50 res-text">
                          <div class="text">
                            <div class="text-inner text-left">
                              <!-- <h2><strong>Find your next gig:</strong></h2> -->

                              <form @submit.prevent="search" name="search">
                                <div class="row">
                                  <div class="col-md-12">
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
                                  </div>
                                </div>
                              </form>

                            </div>
                          </div><!-- text-box-inner -->
                        </div><!-- text-box -->

                      </div><!-- .banner-layers -->

                    </div><!-- .banner-inner -->
                  </div><!-- .banner -->

                </div>
              </div>
            </div>
          </div>

        </div>

      </div><!-- .section-content -->
    </section>

    <section class="section">
      <div class="section-content relative container">

        <div class="row align-center">
          <event-calendar></event-calendar>
        </div>

      </div><!-- .section-content -->
    </section>

    <section id="registermodel" class="section">
      <div class="bg section-bg fill bg-fill bg-loaded"></div><!-- .section-bg -->
      <div class="section-content relative container">

        <div class="row row-large align-middle align-center" id="row-2075760759">
          <div class="col small-12 large-12">
            <div class="col-inner" style="padding:30px 0px 0px 0px;">

              <div class="banner has-hover" id="banner-1806536096">
                <div class="banner-inner fill">
                  <div class="banner-bg fill">
                    <div class="bg fill bg-fill bg-loaded"></div>
                  </div><!-- bg-layers -->

                  <div class="banner-layers container">
                    <div class="fill banner-link"></div>

                    <div id="text-box-154733879" class="text-box banner-layer x50 md-x50 lg-x50 y10 md-y10 lg-y10 res-text">
                      <div class="text">
                        <div class="text-inner text-center">
                          <h2 class="uppercase"><b>{{'content.registerOnGetmodel' | translate}}</b></h2>
                          <div class="is-divider divider clearfix"></div><!-- .divider -->
                          <p>{{'content.registerOnGetmodelText' | translate}}</p>
                        </div>
                      </div><!-- text-box-inner -->
                    </div><!-- text-box -->

                    <div id="text-box-1253590428" class="text-box banner-layer x50 md-x50 lg-x50 y95 md-y95 lg-y95 res-text">
                      <div class="text">
                        <div class="text-inner text-center">

                        </div>
                      </div><!-- text-box-inner -->
                    </div><!-- text-box -->

                  </div><!-- .banner-layers -->
                </div><!-- .banner-inner -->
              </div><!-- .banner -->

            </div>
          </div>
        </div>

      </div><!-- .section-content -->
    </section>

    <site-footer></site-footer>

  </div>

</template>

<script>
import Footer from './Footer'
import ModelBox from '../models/ModelBox'
import EventCalendar from './EventCalendar'

export default {
  name: 'Home',
  components: {
    'site-footer': Footer,
    'model-box': ModelBox,
    'event-calendar': EventCalendar
  },
  data: () => ({
    type: 'Female',
    location: 'USA',
    modelTypeOption: ['Female', 'Male'],
    countriesList: ['USA', 'Russia'],
    results: [
      {
        'name': 'Emma Alexander',
        'photos': [ 'https://photos.modelmayhem.com/photos/180428/09/5ae49ed0ac198.jpg' ],
        'user_id': 123456
      },
      {
        'name': 'Tracy Stone',
        'photos': [ 'https://photos.modelmayhem.com/photos/180509/06/5af2f13196937.jpg' ],
        'user_id': 745454
      },
      {
        'name': 'Veronica Kelley',
        'photos': [ 'https://photos.modelmayhem.com/potd/entrants/180503/potd-180503-701169-big.jpg' ],
        'user_id': 534563
      },
      {
        'name': 'Stephanie Jackson',
        'photos': [ 'https://photos.modelmayhem.com/potd/entrants/180504/potd-180504-701220-big.jpg' ],
        'user_id': 634345
      }
    ]
  }),
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

    #banner {
        padding-top: 500px;
    }
    #banner .bg.bg-loaded {
        background-image: url(../../assets/uploads/main-banner.jpg);
    }
    #banner .bg {
        background-position: 50% 40%;
    }
    #banner h1 {
        font-family: "Montserrat-Light", sans-serif;
        letter-spacing: .03em;
        font-weight: 400;
        font-size: 3.2em;
        line-height: 1.2em;
        color: #333;
        -webkit-font-smoothing: auto;
    }
    #button-box {
        width: 100%;
    }
    #banner .text-box .text {
        font-size: 100%;
    }
    #text-box {
        width: 60%;
    }
    @media (min-width:550px) {
        #text-box {
            width: 50%;
        }
    }
    #banner .button {
        width: 300px;
        font-weight: 400;
    }
    #banner .button span {
        line-height: 3;
        color: #fff;
    }

    .section.wrapper {
      padding-top: 59px;
      padding-bottom: 59px;
      min-height: 400px;
      background-color: rgb(171, 171, 171);
      .section-bg-overlay {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .section-bg.bg-loaded {
        background-image: url(../../assets/uploads/casting-banner.jpg);
      }
    }

    #findmodel {
      padding-top: 0;
    }
    #findmodel .banner {
        padding-top: 350px;
        background-color: rgba(0, 0, 0, 0.6);
    }
    #findmodel .banner .is-border {
         border-top: 5px solid #6dcff6;
         border-left: none;
         border-right: none;
         border-bottom: none;
    }
    #findmodel .banner h2 {
        font-family: "Montserrat-Light", sans-serif !important;
        font-size: 2em;
        color: #fff;
        margin-bottom: .6em;
    }
    #findmodel .banner h3 {
        font-family: "Roboto-Regular", sans-serif !important;
        font-size: 6em;
        font-weight: 900;
        color: #6dcff6;
    }
    #findmodel .banner p {
        color: #f1f1f1;
    }
    #findmodel .form-group input {
      color: #f1f1f1;
    }
    #text-box-164001170 {
        width: 60%;
    }
    #text-box-164001170 .text {
        font-size: 100%;
    }
    @media (min-width:550px) {
        #text-box-164001170 {
            width: 40%;
        }
    }
    #text-box-201134109 {
        width: 30%;
    }
    #text-box-201134109 .text {
        font-size: 100%;
    }

    #registermodel.section {
        padding-top: 30px;
        padding-bottom: 30px;
        min-height: 800px;
    }
    #registermodel.section .section-bg.bg-loaded {
        background-image: url(../../assets/uploads/bg_bg.jpg);
    }
    #registermodel.section .section-bg {
        background-position: 50% 50%;
    }
    #registermodel .banner {
        padding-top: 500px;
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 10px;
    }
    #registermodel .banner .is-divider {
        margin-top: 2.5em;
        margin-bottom: 2.5em;
    }
    #registermodel .banner h2 {
        font-size: 2em;
    }
    #registermodel .banner p {
        font-size: .9em;
    }
    #text-box-1253590428 {
        width: 60%;
    }
    #text-box-1253590428 .text {
        font-size: 100%;
    }
    @media (min-width:550px) {
        #text-box-1253590428 {
            width: 70%;
        }
    }
    #text-box-154733879 {
        width: 60%;
    }
    #text-box-154733879 .text {
        font-size: 100%;
    }
    @media (min-width:550px) {
        #text-box-154733879 {
            width: 88%;
        }
    }
</style>

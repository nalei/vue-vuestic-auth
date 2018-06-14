<template>
  <div class="dashboard" style="margin-top: 1.875rem;">

    <div class="row">
      <div class="col-md-4 d-flex">
        <vuestic-widget :headerText="$t('extra.profileCard')" class="profile-card-widget">
          <form id="uploadForm" name="uploadForm" enctype="multipart/form-data">

            <div class="input-group">
              <input id="simple-input" class="input-avatar"  type='file' />
              <label class="control-label avatar-download" for="simple-input">Загрузить аватарку</label>
              <i class="bar"></i>
            </div>

            <input type=button value=Upload @click="this.uploadFiles">

          </form>

          <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'" photoSource="http://i.imgur.com/NLrdqsk.png" :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </vuestic-profile-card>
        </vuestic-widget>
      </div>
      <div class="col-md-8">
        <vuestic-widget class="no-padding no-v-padding">
          <vuestic-tabs
            :names="[$t('dashboard.setupProfile'), $t('dashboard.photos')]"
            ref="tabs">
            <div :slot="$t('dashboard.setupProfile')">
              <setup-profile-tab></setup-profile-tab>
            </div>
            <div :slot="$t('dashboard.photos')">
              <div class="d-flex flex-row justify-content-around photos">
                <div class="photo" v-for="(pieceOfNews, index) in news" :key="index" :style="`background: url(${pieceOfNews.photoURL})`"></div>
              </div>
            </div>
          </vuestic-tabs>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'

  export default {
    name: 'dashboard',
    components: {
      SetupProfileTab
    },
    data: () => ({
      news: [
        {
          photoURL: 'http://i.imgur.com/PiTDDcA.png'
        },
        {
          photoURL: 'http://i.imgur.com/M6GugaM.png'
        },
        {
          photoURL: 'http://i.imgur.com/vEy3fRU.png'
        },
        {
          photoURL: 'http://i.imgur.com/Xrywphx.png'
        },
        {
          photoURL: 'http://i.imgur.com/dqVtQGY.png'
        },
        {
          photoURL: 'http://i.imgur.com/qP7rTCy.png'
        },
        {
          photoURL: 'http://i.imgur.com/6YLsM43.png'
        },
        {
          photoURL: 'http://i.imgur.com/9PAOx55.png'
        },
        {
          photoURL: 'http://i.imgur.com/mVpc04D.png'
        },
        {
          photoURL: 'http://i.imgur.com/WdbTSLn.png'
        },
        {
          photoURL: 'http://i.imgur.com/ZXRIHfk.png'
        }
      ]
    }),
    methods: {
      uploadFiles () {
        var data = new FormData(document.getElementById('uploadForm'))
        data.append('file', document.getElementById('simple-input').files[0])
        console.log(data.get('file'))
        const props = {
          'token': this.$store.state.auth.user.token,
          'data': data
        }
        this.$store.dispatch('SAVE_AVATAR', props)
        .then(resp => {
        })
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
  .input-avatar {
    display: none;
  }

  .avatar-download {
    margin: 0 auto;
    cursor: pointer;
  }
</style>

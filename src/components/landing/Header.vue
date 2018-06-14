<template>
  <header id="header" class="header has-transparent transparent">
    <div class="header-wrapper">
      <nav class="navbar navbar-light bg-faded">
        <div class="header-inner flex-row container logo-left medium-logo-center" role="navigation">
          <!-- Logo -->
          <div class="flex-col logo">
            <router-link to="/" exact>
              <img src="../../assets/uploads/logo_header.png" alt="Getmodel">
            </router-link>
          </div>

          <!-- Right Elements -->
          <div class="flex-col hide-for-medium flex-right">
            <ul class="header-nav header-nav-main nav nav-right nav-uppercase">
              <router-link tag="li" to="/" exact><a>Demo</a></router-link>
              <router-link tag="li" to="about"><a>Shop</a></router-link>
              <router-link tag="li" to="contact"><a>Blog</a></router-link>
              <router-link tag="li" to="tests"><a>Tests</a></router-link>
              <li><div style="width: 35px"></div></li>
              <li class="header-contact-wrapper">
                <ul class="nav nav-divided header-contact">
                  <li><a href="mailto:info@getmodel.com" title="info@getmodel.com"><i class="fa fa-envelope"></i><span>info@getmodel.com</span></a></li>
                  <li><a href="tel:+ 123 456 789" title="+ 123 456 789"><i class="fa fa-phone"></i><span>+ 123 456 789</span></a></li>
                </ul>
              </li>
              <li><div style="width: 20px"></div></li>
              <li class="html">
                <div class="header-button">
                  <router-link to="/auth/signup" class="button primary" ><span>Register</span></router-link>
                </div>
              </li>
              <li class="html">
                <div class="header-button">
                  <router-link to="/auth/login" class="button primary" ><span>Sign In</span></router-link>
                </div>
              </li>
            </ul>
          </div>

        </div><!-- .header-inner -->
      </nav><!-- .header-main -->
    </div><!-- header-wrapper-->
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
    .header-main {
        height: 62px;
    }
    .container {
        width: 100%;
        max-width: 1400px;
    }
    .logo img {
        width: 200px;
    }
    .nav > li > a {
        font-family:  "Montserrat-Regular", sans-serif;
        -webkit-font-smoothing: auto;
        font-size: .8em;
        font-weight: 400;
    }
    .nav > li.active > a {
        color: rgba(000,000,000,1);
    }
    .header-contact > li > a {
        color: rgba(17, 17, 17, 0.85);
    }
    .button {
        padding: 0 3em;
    }
    .button span {
        text-transform: none;
        letter-spacing: .01em;
    }
</style>

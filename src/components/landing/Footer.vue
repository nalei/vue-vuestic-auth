<template>
  <footer id="footer" class="footer-wrapper">

    <div class="footer-widgets footer">
      <div class="row large-columns-4 mb-0">

        <div class="col pb-0 widget">
          <img class="logo-footer" src="../../assets/img/getmodel_logo_footer.png" alt="Logo footer">
        </div>

        <div class="col pb-0 widget">
          <h3 class="widget-title"><b>{{'content.contacts' | translate}}</b></h3>
          <ul>
            <li>Miami + 123 456 789</li>
            <li>Email getmodel@gm.com</li>
            <li>HQ: 1221 Brickell Avenue, Suite</li>
            <li>900 Miami, Florida 33131</li>
          </ul>
        </div>

        <div class="col pb-0 widget">
          <!-- <h3 class="widget-title"><b>Site Map</b></h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Main</li>
                    <li>Browse</li>
                    <li>Casting/travel</li>
                    <li>Forums</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Shout box</li>
                    <li>Help</li>
                    <li>Advertising</li>
                    <li>Contests</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Share</li>
                    <li>Rules</li>
                    <li>Join GetModel</li>
                    <li>Prints</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table> -->
        </div>

        <div class="col pb-0 widget block_widget vuestic-profile-card">
          <div class="social">
            <a href="https://www.facebook.com/getmodelcom/" target="_blank" class="icon brandico brandico-facebook-rect"></a>
            <a href="https://www.instagram.com/getmodelcom/" target="_blank" class="icon brandico brandico-instagram"></a>
            <a href="http://twitter.com" target="_blank" class="icon brandico brandico-twitter"></a>
          </div>
        </div>

      </div><!-- end row -->
    </div><!-- end footer 2 -->

  </footer>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
    @import "../../sass/variables";
    @import "../../sass/icons-styles";

    .row {
        max-width: 1400px;
    }
    .footer {
        padding: 30px 0 0;
    }
    .widget:first-of-type {
        margin-top: 0;
    }
    .widget:nth-of-type(3) {
        padding-left: 15px;
        padding-right: 30px;
    }
    .widget {
        margin-top: 60px;
        padding-right: 40px;
        padding-left: 40px;
        box-shadow: none;
    }
    .widget > ul > li + li {
        border: none;
    }
   .widget table td {
        border-bottom: none !important;
        padding-top: 0;
    }
    .logo-footer {
        display:block;
        margin:auto;
        width:250px;
        margin-bottom: 20px;
        margin-top: 90px;
    }
    p {
        color: #999;
        line-height: 1.4em;
    }
    ul {
        color: #999;
    }
    .button.icon.circle>i:only-child {
        margin-top: -4px;
    }
    .vuestic-profile-card {
      .social {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        margin-top: 1.25rem;
        width: 100%;
        border-top: none;
        .icon {
          color: $gray;
          text-decoration: none;
          font-size: $font-size-h4;
          margin-right: .4375rem;
          margin-left: .4375rem;
          &:hover {
            cursor: pointer;
            color: darken($gray, 50%);
          }
        }
      }
    }
</style>

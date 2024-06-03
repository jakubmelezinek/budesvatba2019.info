<template>
  <div :class="'lang-' + locale">

    <!-- Landing section -->
    <div id="landing" class="main-slider">
      <div class="display-table center-text">
        <div class="display-table-cell">
          <div class="slider-content">
            <h3 class="date">28. září 2024</h3>
            <h1 class="title">MARTINA a JAKUB</h1>
          </div>
          <p><a href="#invitation">
            <i class="droplet"><img src="/icons/droplet-white.png" alt="droplet" width="614"></i>
          </a></p>
        </div>
      </div>
    </div>


    <!-- Invitation section -->
    <section id="invitation" class="section story-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">Milí svatebčané</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">Těšíme se na společnou oslavu našeho svatebního dne. Obřad i následná zábava proběhnou na jednom místě a není tedy potřeba nikam přejíždět.</p>
          </div>

        </div>
      </div>
    </section>


    <!-- Countdown section -->
    <CountdownSection id="countdown" />


    <!-- Timeline section -->
    <section id="timeline" class="section w-details-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title bg-line"><span>Harmonogram</span></h2>
<!--              <span class="heading-bottom"><i class="icon icon-star"></i></span>-->


            </div>

            <div class="wedding-details margin-bottom">

              <div class="w-detail right">
                <i class="fa-solid fa-bus fa-2xl"></i>
                <h4 class="title">AUTOBUS 13:00</h4>
                <p>Od hotelu Vás ke Stodole odveze připravený autobus</p>
              </div>

              <div class="w-detail left">
                <i class="icon icon-wine-glass"></i>
                <h4 class="title">PŘIVÍTÁNÍ 13:30</h4>
                <p>Welcome drink, občerstvení</p>
              </div>

              <div class="w-detail right">
                <i class="icon icon-ciurclke"></i>
                <h4 class="title">OBŘAD 14:00</h4>
              </div>

              <div class="w-detail left">
                <i class="fa-solid fa-utensils"></i>
                <h4 class="title">HOSTINA</h4>
              </div>

              <div class="w-detail right">
                <i class="icon icon-cake"></i>
                <h4 class="title">KRAJENÍ DORTU</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-gesellschaftstanz-50.png" alt="dance" height="56" width="56"></i>
                <h4 class="title">PRVNÍ TANEC</h4>
              </div>

              <div class="w-detail right">
                <i class="icon icon-camera"></i>
                <h4 class="title">FOTOKOUTEK</h4>
              </div>

              <div class="w-detail left">
                <i class="fa-solid fa-question"></i>
                <h4 class="title">MORE</h4>
              </div>

<!--              <div class="w-detail right">-->
<!--                <i class="icon"><img src="/icons/icons8-camellia-56.png" alt="bouquet" height="56" width="56"></i>-->
<!--                <h4 class="title">{{ $t('Timeline.BouquetToss.Heading') }}</h4>-->
<!--              </div>-->

<!--              <div class="w-detail left">-->
<!--                <i class="icon"><img src="/icons/icons8-wedding-56.png" alt="broom and bride" height="56" width="56"></i>-->
<!--                <h4 class="title">{{ $t('Timeline.FunTime.Heading') }}</h4>-->
<!--              </div>-->

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Hotely Location -->


    <!-- Stodola Location -->
    <section id="location" class="section location-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title">Kde se bereme</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 mb-4">

            <p>STODOLA POD LESEM</p>
            <p>
              <a target="_blank" href="https://www.instagram.com/stodolapodlesem"><i class="fa-brands fa-instagram"></i></a>
              &nbsp;
              <a target="_blank" href="https://www.facebook.com/stodolapodlesem"><i class="fa-brands fa-facebook-f"></i></a>
              &nbsp;
              <a target="_blank" href="https://www.stodolapodlesem.cz/"><i class="fa-solid fa-laptop"></i></a>
            </p>
            <p>Jezeřany-Maršovice 188</p>
          </div>
        </div>

      </div>

      <div class="container-fluid">

        <div class="row">

          <div class="col-sm-12 px-0">
            <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ08u1V4HttCMRZuAqhSMANgE&zoom=11&center=49.0758,16.4233&key=AIzaSyBfldStNWi1Jmj6_BH7YcjeyU_LZgODrTg"
                width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>

        </div>

      </div>

<!--   350 x 233   -->

      <div class="container mt-5 galery-stodola">
        <Gallery
          :images="stodolaImages"
        />
      </div>
    </section>


    <!-- RSVP section -->
    <RsvpSection id="rsvp"/>


    <!-- Info section -->
    <section id="info" class="section info-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">{{ $t('Info.Heading') }}</h2>
              <span class="heading-bottom"><i class="color-white icon icon-star"></i></span>
            </div>
          </div>

          <p class="desc margin-bottom">{{ $t('Info.Content') }}</p>

        </div>
      </div>
    </section>


    <!-- Transportation section -->
    <section id="transportation" class="section transportation-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">{{ $t('Transportation.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">{{ $t('Transportation.Content1') }}</p>
            <p v-if="$t('Transportation.Content2')" class="desc margin-bottom">{{ $t('Transportation.Content2') }}</p>
          </div>

        </div>
      </div>
    </section>


    <!-- Gifts section -->
    <section id="gifts" class="section gifts-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">{{ $t('Gifts.Heading') }}</h2>
              <span class="heading-bottom"><i class="color-white icon icon-star"></i></span>
            </div>
          </div>

          <p class="desc margin-bottom">{{ $t('Gifts.Content') }}</p>

        </div>
      </div>
    </section>


    <!-- Gallery section -->
    <section id="gallery" class="section gallery-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title">{{ $t('Gallery.Heading') }}</h2>
            </div>

<!--            <div class="heading">-->
<!--              <h2 class="title">{{ $t('Gallery.Honeymoon.Heading') }}</h2>-->
<!--              <span class="heading-bottom"><i class="icon icon-star"></i></span>-->
<!--            </div>-->

<!--            <Gallery-->
<!--                :images="honneymoonImages"-->
<!--            />-->

<!--            <div class="heading">-->
<!--              <h4 class="title">{{ $t('Gallery.Wedding.Heading') }}</h4>-->
<!--              <span class="heading-bottom"><i class="icon icon-star"></i></span>-->
<!--              <p v-html="$t('Gallery.Wedding.Download')"></p>-->
<!--            </div>-->

<!--            <Gallery-->
<!--                :images="weddingImages"-->
<!--            />-->

            <div class="heading">
              <h4 class="title">Naše cesta životem</h4>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <Gallery
              :images="galleryImages"
            />

          </div>
        </div>
      </div>
    </section>


    <!-- Contact section -->
    <section id="contact" class="section contact-area-2 center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">{{ $t('Contact.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">{{ $t('Contact.Content') }}</p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script src="./index.impl.ts" lang="ts"></script>

<style>

  .w-detail:after {
    top: 28px;
  }

  .wedding-details:after {
    margin-top: 28px;
    margin-bottom: 99px;
  }

  @media (min-width: 405px) {
    .lang-en .wedding-details:after {
      margin-bottom: 68px;
    }
  }

  @media (min-width: 347px) {
    .lang-cs .wedding-details:after {
      margin-bottom: 68px;
    }
  }

  @media (min-width: 480px) {
    .wedding-details:after {
      margin-bottom: 78px;
    }
  }

  @media (min-width: 768px) {
    .wedding-details:after {
      margin-bottom: 119px !important;
    }
  }

  @media (min-width: 992px) {
    .wedding-details:after {
      margin-bottom: 88px !important;
    }
  }

  .section.location-area {
    box-shadow: 0px -10px 19px 0px rgba(0,0,0,.15);
    /*box-shadow: 0px   0px 19px 10px rgba(0,0,0,.15);*/
    border-bottom: 1px solid rgba(0,0,0,.1);
  }


  .section.contact-area-2 {
    box-shadow: 0px -10px 19px 0px rgba(0,0,0,.15);
  }

  .map-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    border-top: 1px solid rgba(0,0,0,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
  }

  @media (min-width: 1024px) {
    .map-responsive {
      padding-bottom: 576px;
    }
  }

  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    max-height: 576px;
    width: 100%;
    position: absolute;
  }

  .galery-stodola {
    img {
      outline: 1px solid white;
      outline-offset: -7px;
    }
  }

  .bg-line{ position: relative; z-index: 1; }

  /*
  .bg-line:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: .03;
    background: url(/images-v1/background/background_ornamenty.jpg);
    background-size: 350px;
  }*/


  .bg-line:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX( -50%);
    height: 100%;
    width: 100vw;
    opacity: .07;
    background: url(/images-v1/background/bg_line_B.jpg) center center;
    background-size: 350px;
    z-index: 0;
  }

  .bg-line span {
    position: relative;
    /*background-color: rgba(256,256,256,0.8);*/

    background-image: linear-gradient(to right, rgba(255,256,256,0.2), rgba(255,256,256,0.8), rgba(255,256,256,0.2));

    width: 100%;
    padding: 0 20px 0 20px;
    z-index: 5;
    /*
  box-shadow: inset 100px 0px 100px -50px #D4D4CC,
              inset -100px 0px 100px -50px #D4D4CC;
    */
  }

</style>

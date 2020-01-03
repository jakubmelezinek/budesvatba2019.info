<template>
  <div :class="'lang-' + locale">

    <!-- Landing section -->
    <div id="landing" class="main-slider">
      <div class="display-table center-text">
        <div class="display-table-cell">
          <div class="slider-content">

            <i class="small-icon icon icon-tie"></i>
            <h3 class="date" v-html="$t('Date')"></h3>
            <h1 class="title">{{ $t('Jana') }} <i class="icon icon-heart"></i> {{ $t('Pepa') }}</h1>

          </div>
        </div>
      </div>
    </div>


    <!-- Invitation section -->
    <section id="invitation" class="section story-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">{{ $t('Invitation.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">{{ $t('Invitation.Content') }}</p>
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
              <h2 class="title">{{ $t('Timeline.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <div class="wedding-details margin-bottom">

              <div class="w-detail right">
                <i class="icon"><img src="/icons/icons8-car-56.png" alt="car" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.Arrival.Heading') }} {{ $t('Timeline.Arrival.Time') }}</h4>
                <p>{{ $t('Timeline.Arrival.Text') }}</p>
              </div>

              <div class="w-detail left">
                <i class="icon icon-wine-glass"></i>
                <h4 class="title">{{ $t('Timeline.Welcoming.Heading') }} {{ $t('Timeline.Welcoming.Time') }}</h4>
                <p>{{ $t('Timeline.Welcoming.Text') }}</p>
              </div>

              <div class="w-detail right">
                <i class="icon icon-ciurclke"></i>
                <h4 class="title">{{ $t('Timeline.Ceremony.Heading') }} {{ $t('Timeline.Ceremony.Time') }}</h4>
              </div>

              <div class="w-detail left">
                <i class="icon icon-camera"></i>
                <h4 class="title">{{ $t('Timeline.Photoshooting.Heading') }}</h4>
              </div>

              <div class="w-detail right">
                <i class="icon icon-cake"></i>
                <h4 class="title">{{ $t('Timeline.Cake.Heading') }}</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-ballroom-dance-56.png" alt="dance" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.FirstDance.Heading') }}</h4>
              </div>

              <div class="w-detail right">
                <i class="icon"><img src="/icons/icons8-camellia-56.png" alt="bouquet" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.BouquetToss.Heading') }}</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-wedding-56.png" alt="broom and bride" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.FunTime.Heading') }}</h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- Vigvam Location -->
    <section id="location" class="section location-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title">{{ $t('Location.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 mb-4">
            <div class="heading">
              <h3 class="title">{{ $t('Location.Contact') }}</h3>
            </div>

            <p v-html="$t('Location.Address')"></p>
          </div>
        </div>

      </div>

      <div class="container-fluid">

        <div class="row">

          <div class="col-sm-12 px-0">
            <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287479.1817694367!2d15.144418232662131!3d50.13044375814819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c8fe04b2f390e72!2sPension+Vigvam!5e0!3m2!1sen!2sde!4v1562159283436!5m2!1sen!2sde"
                width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>

        </div>

      </div>

      <div class="container mt-5">
        <Gallery
          :images="vigvamImages"
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

            <div class="heading">
              <h4 class="title">{{ $t('Gallery.Wedding.Heading') }}</h4>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
              <p v-html="$t('Gallery.Wedding.Download')"></p>
            </div>

            <Gallery
                :images="weddingImages"
            />

            <div class="heading">
              <h4 class="title">{{ $t('Gallery.Dating.Heading') }}</h4>
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
</style>

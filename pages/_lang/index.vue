<template>
  <div class="exactly-one">


    <!-- landing section -->
    <div class="main-slider">
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


    <!-- info section -->
    <section class="section story-area center-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">

            <div class="heading">
              <h2 class="title">{{ $t('Intro.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">{{ $t('Intro.Content') }}</p>

          </div>
        </div>
      </div>
    </section>


    <!-- counter section -->
    <CountdownSection/>


    <!-- timeline section -->
    <section class="section w-details-area center-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">

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
                <p>{{ $t('Timeline.Ceremony.Text') }}</p>
              </div>

              <div class="w-detail left">
                <i class="icon icon-camera"></i>
                <h4 class="title">{{ $t('Timeline.Photoshooting.Heading') }}</h4>
              </div>

              <div class="w-detail right">
                <i class="icon"><img src="/icons/icons8-wedding-56.png" alt="broom and bride" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.FreeTime.Heading') }}</h4>
              </div>

              <div class="w-detail left">
                <i class="icon icon-cake"></i>
                <h4 class="title">{{ $t('Timeline.Cake.Heading') }}</h4>
              </div>

              <div class="w-detail right">
                <i class="icon"><img src="/icons/icons8-ballroom-dance-56.png" alt="dance" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.FirstDance.Heading') }}</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-camellia-56.png" alt="bouquet" height="56" width="56"></i>
                <h4 class="title">{{ $t('Timeline.BouquetToss.Heading') }}</h4>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>


    <!-- Vigvam Location -->
    <section class="section location-area center-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">

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
        <div class="row">

          <div class="col-sm-12">

            <div class="image-gallery">
              <div class="row">

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-1-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-1-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-2-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-2-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-3-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-3-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-4-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-4-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-5-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-5-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-1-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-1-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>


    <!-- RSVP -->
    <section class="section rsvp-area center-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">

            <div class="heading">
              <h2 class="title">{{ $t('RSVP.Heading') }}</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <p class="desc margin-bottom">{{ $t('RSVP.Content') }}</p>

            <div>TODO form</div>

          </div>
        </div>
      </div>
    </section>


    <section class="section galery-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title">Our Gallery</h2>
              <span class="heading-bottom"><i class="icon icon-star"></i></span>
            </div>

            <div class="image-gallery">
              <div class="row">

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-1-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-1-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-2-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-2-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-3-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-3-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-4-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-4-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-5-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-5-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-1-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-1-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div>

              </div>

              <a class="btn-2 margin-bottom gallery-btn" href="#">VIEW ALL GALLERY</a>

            </div>

          </div><!-- col-sm-10 -->
        </div><!-- row -->
      </div><!-- container -->
    </section><!-- section -->

  </div>
</template>

<script src="./index.impl.ts" lang="ts"></script>

<style>
  .map-area{ height: 400px; }

  .section.location-area {
    box-shadow: 1px 10px 40px rgba(0,0,0,.4);
    padding-top: 70px;
  }

  .no-lr-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .map-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
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

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

            </div><!-- wedding-details -->

          </div><!-- col-sm-10 -->
        </div><!-- row -->
      </div><!-- container -->
    </section><!-- section -->

    <section class="section ceremony-area center-text">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title">Wedding & Ceremonies</h2>
              <span class="heading-bottom"><i class="color-white icon icon-star"></i></span>
            </div>

            <div class="ceremony margin-bottom">
              <p class="desc">We assist our clients in creating memorable, magical
                celebrations that exceed expectations. Our personal approach ensures the weddings we
                plan are meaningful and truly reflect our clients as individuals, as couples, and states
                something about their shared values and sense of style.</p>

              <a class="border-btn" href="#">LEARN MORE</a>
            </div>

          </div><!-- col-sm-10 -->
        </div><!-- row -->
      </div><!-- container -->
    </section><!-- section -->


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
                </div><!-- col-sm-4 -->

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-2-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-2-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div><!-- col-sm-4 -->

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-3-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-3-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div><!-- col-sm-4 -->

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-4-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-4-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div><!-- col-sm-4 -->

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-5-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-5-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div><!-- col-sm-4 -->

                <div class="col-md-4 col-sm-6">
                  <a href="images/gallery-1-600x400.jpg" data-fluidbox><img class="margin-bottom"
                                                                            src="images/gallery-1-600x400.jpg"
                                                                            alt="Gallery Image"></a>
                </div><!-- col-sm-4 -->

              </div><!-- row -->

              <a class="btn-2 margin-bottom gallery-btn" href="#">VIEW ALL GALLERY</a>

            </div><!-- image-gallery -->

          </div><!-- col-sm-10 -->
        </div><!-- row -->
      </div><!-- container -->
    </section><!-- section -->

    <section class="contact-area">
      <div class="contact-wrapper section float-left">
        <div class="container">
          <div class="row">
            <div class="col-sm-2"></div>

            <div class="col-sm-10">
              <div class="heading">
                <h3 class="title">Contact Us</h3>
                <i class="icon icon-star"></i>
              </div>

              <div class="margin-bottom">
                <p>On the 25 September 2017</p>
                <p>Join us as we celebrate life and love.</p>
                <h4><a href="tel:784-412-0646" class="phone">784-412-0646</a></h4>
                <p>14 Baria street 133/2, New York City, US</p>

              </div><!-- margin-bottom -->
            </div><!-- col-sm-10 -->

          </div><!-- row -->
        </div><!-- container -->
      </div><!-- float-left -->

      <div class="map-area">
        <div id="map" style="height:100%;"></div>
      </div><!-- map-area -->
      <script async defer
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-oEyU88bRR6xcbV1gI_Cahc8ugKC_JPE&callback=initMap"></script>

    </section><!-- section -->
  </div>
</template>

<script src="./index.impl.ts" lang="ts"></script>

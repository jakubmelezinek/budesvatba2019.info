<template>
  <section class="section counter-area center-text">
    <div class="container">
      <div class="row">

        <div class="col-sm-12">
          <div class="heading">
            <h2 class="title">{{ $t('Countdown.Heading') }}</h2>
            <span class="heading-bottom"><i class="color-white icon icon-star"></i></span>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="remaining-time">
            <div id="clock"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script src="./CountdownSection.impl.ts" lang="ts"></script>

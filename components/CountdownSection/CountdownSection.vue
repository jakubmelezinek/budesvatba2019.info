<template>
  <section class="section counter-area center-text white-text">
    <div class="container">
      <div class="row">

        <div class="col-sm-12">
          <div class="heading">
            <h2 class="title">{{ $t('Countdown.Heading') }}</h2>
            <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>
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

<style>
 .time-sec .title {
   font-family: "EB Garamond", serif;
 }
</style>
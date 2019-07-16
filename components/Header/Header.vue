<template>
  <header>
    <div class="container">

      <div class="menu-nav-icon" data-nav-menu="#main-menu">
        <i
          @click="menuOpened = !menuOpened"
          class="icon icon-bars"></i>
      </div>

      <ul
        id="main-menu"
        class="main-menu visible-on-click"
        :class="{'main-menu--opened' : menuOpened}"
      >
        <li><a href="#timeline">{{ $t('Timeline.Menu') }}</a></li>
        <li><a href="#location">{{ $t('Location.Menu') }}</a></li>
        <li><a href="#rsvp"><u>{{ $t('RSVP.Menu') }}</u></a></li>
        <li><a href="#info">{{ $t('Info.Menu') }}</a></li>
        <li><a href="#gifts">{{ $t('Gifts.Menu') }}</a></li>
        <li><a href="#gallery">{{ $t('Gallery.Menu') }}</a></li>
        <li v-if="!menuOpened">|</li>
        <li><nuxt-link :to='otherLang'>{{ $t(otherLang) }}</nuxt-link></li>
      </ul>

    </div>
  </header>
</template>

<script src="./Header.impl.ts" lang="ts"></script>

<style>
  header .container {
    width: 992px;
  }

  @media (min-width: 767px) {
    .main-menu {
      padding-bottom: 20px;
    }
  }

  .main-menu--opened {
    display: block !important;
  }

</style>

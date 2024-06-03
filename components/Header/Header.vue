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
        <li>
          <div class="li-background"></div>
          <a href="#timeline">{{ $t('Timeline.Menu') }}</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#location">{{ $t('Location.Menu') }}</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#rsvp"><u>{{ $t('RSVP.Menu') }}</u></a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#info">{{ $t('Info.Menu') }}</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#gifts">{{ $t('Gifts.Menu') }}</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a class="li-link" href="#gallery">{{ $t('Gallery.Menu') }}</a>
        </li>
      </ul>

    </div>
  </header>
</template>

<script src="./Header.impl.ts" lang="ts"></script>

<style>
  header .container {
    max-width: 992px;
  }

  @media (min-width: 767px) {
    .main-menu {
      padding-bottom: 20px;
      a {
        color: white;
      }
    }
  }

  .main-menu--opened {
    display: block !important;
  }

</style>

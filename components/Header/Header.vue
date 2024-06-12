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
          <a href="#timeline">HARMONOGRAM</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#location">MIESTO</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#accommodation">UBYTOVANIE</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#gifts">OSTATNÉ INFO</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a class="li-link" href="#gallery">{{ $t('Gallery.Menu') }}</a>
        </li>
        <li>
          <div class="li-background"></div>
          <a href="#rsvp"><u>RSVP</u></a>
        </li>
      </ul>

    </div>
  </header>
</template>

<script src="./Header.impl.ts" lang="ts"></script>

<style>
  header .container {
    //max-width: 992px;
  }

  @media (min-width: 767px) {
    .main-menu a {
        color: white;
    }
  }

  .main-menu--opened {
    display: block !important;
  }

  @media (max-width: 767px) {
    header .container {
      width: 100%;
      margin: 0;
    }
  }

</style>

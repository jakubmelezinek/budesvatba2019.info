<template>
  <div :class="'lang-' + locale">

    <!-- Landing section -->
    <div id="landing" class="main-slider">
      <div class="display-table center-text">
        <div class="display-table-cell">
          <div class="slider-content">
            <img src="/images-v1/background/names-white.png" alt="Martina a Jakub" class="names">
            <h3 class="date">28. 9. 2024</h3>
          </div>
          <div>
            <a id="droplet" href="#invitation" ><i class="droplet"><img src="/icons/droplet-white.png" alt="droplet" width="614"></i>
          </a></div>
        </div>
      </div>
    </div>


    <!-- Invitation section -->
    <section id="invitation" class="section story-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title bg-line"><span>Naši najdrahší</span></h2>
            </div>

            <p class="desc margin-bottom">
              Po skoro siedmich rokoch vývoja, testovania a fixovania nedokonalostí sme sa rozhodli sľúbiť si, že sa zaviažeme na našom zatiaľ najväčšom projekte pracovať ešte dlho predlho.
              Ak práve čítate tieto riadky, znamená to, že v našich srdiečkach máte čestné miesto a my budeme veľmi radi, ak pri tomto našom sľube budete s nami.
              Prijmite preto naše najsrdečnejšie pozvanie na našu svadbu.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- Countdown section -->
    <CountdownSection id="countdown" />

    <!-- Stodola Location -->
    <section id="location" class="section location-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title bg-line"><span>Kde si povieme svoje áno</span></h2>
            </div>

            <p>Kde inde by mohla byť československá svadba ako pri hraniciach. Stretneme sa na Južnej Morave, v Stodole Pod Lesem.
              Obrad aj párty až do rána bieleho budú na jednom mieste, žiadne presúvanie vás po príchode už nečaká.</p>

          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 mb-4">

            <h3>Parkovanie</h3>
            <p class="desc margin-bottom">
              Parkovanie na mieste je k dispozícií.
            </p>

            <h3>Stodola Pod Lesem</h3>
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

      <!-- Map -->
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

      <div class="container mt-5 galery-stodola">
        <Gallery
          :images="stodolaImages"
        />
      </div>
    </section>

    <!-- Timeline section -->
    <section id="timeline" class="section w-details-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title bg-line"><span>Harmonogram</span></h2>
            </div>

            <div class="wedding-details margin-bottom">

              <div class="w-detail right">
                <i class="fa-solid fa-bus-simple fa-2xl"></i>
                <h4 class="title">AUTOBUS 13:00</h4>
                <p>Od hotela vás ku Stodole odvezie pripravený autobus.</p>
              </div>

              <div class="w-detail left">
                <i class="icon icon-wine-glass"></i>
                <h4 class="title">PRIVÍTANIE 13:30</h4>
                <p>Welcome drink, občerstvenie.</p>
              </div>

              <div class="w-detail right">
                <i class="icon icon-ciurclke"></i>
                <h4 class="title">OBRAD 14:00</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-dining-room-100.png" alt="dance" height="50" width="50"></i>
                <h4 class="title">HOSTINA</h4>
              </div>

              <div class="w-detail right">
                <i class="icon"><img src="/icons/icons8-gesellschaftstanz-100.png" alt="dance" height="56" width="56"></i>
                <h4 class="title">PRVÝ TANEC</h4>
              </div>

              <div class="w-detail left">
                <i class="icon icon-cake"></i>
                <h4 class="title">KRÁJANIE TORTY</h4>
              </div>

              <div class="w-detail right">
                <i class="icon icon-camera"></i>
                <h4 class="title">FOTOKÚTIK</h4>
              </div>

              <div class="w-detail left">
                <i class="icon"><img src="/icons/icons8-konfetti-100.png" alt="bouquet" height="56" width="56"></i>
                <h4 class="title">ZÁBAVA</h4>
                <p>Pedro, Pedro, Pedro... Pedro, pe</p>
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

    <!-- Accommodation section -->
    <section id="accommodation" class="section accomodation-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title bg-line"><span>Ubytovanie</span></h2>
            </div>

            <p class="desc margin-bottom">
              Dúfame, že sa s nami budete zabávať až do rána bieleho a nebudete sa od nás ponáhľať domov. Ubytovanie nie zahrnuté v rámci pozvánky, rezerváciu ale vybavíme za vás. Máme dohodnuté ubytovanie v Modřicích - hotel Lion, hotel U Kostela, Apartments 461. Cena za osobu na noc s raňajkami bude do 1000 Kč (40 EUR).
              Môže sa stať, že vaša izba nebude pred odchodom na obrad ešte pripravená. Urobíme ale všetko pre vaše maximálne pohodlie a minimálne budú nachystané izby, kde sa môžete osviežiť, pripraviť a nechať si veci. Prípadne môžete ísť s nami do toho all in a prísť už v piatok ako my :)</p>

            <h3>Presun na hostinu</h3>
            <p class="desc margin-bottom">
              Ak sa rozhodnete ubytovať, auto nechávate pri hoteli a nič viac neriešite. Na miesto činu vás zoberie pripravený autobus. Po skončení zábavy bude o dopravu na hotel tiež postarané.
            </p>

            <h3>Parkovanie</h3>
            <p class="desc margin-bottom">
              Parkovanie pri hoteloch je k dispozícií.
            </p>

          </div>

        </div>
      </div>
    </section>


    <!-- Gifts section -->
    <section id="gifts" class="section gifts-area center-text white-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">Svadobné dary</h2>
              <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>
            </div>
          </div>

          <p class="desc margin-bottom">Za tých pár rokov spolu už máme snáď všetko, čo potrebujeme aj nepotrebujeme. Vecnými darmi sa teda netrápte. Ak nás chcete potešiť, príspevku na naše ďalšie cestovateľské zážitky sa veľmi potešíme.
            Kytičkami sa tak isto netrápte a kvety v kvetináčoch si určite zaslúžia lepší osud.</p>

        </div>
      </div>
    </section>


    <!-- Kids section -->
    <section id="kids" class="section kids-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title bg-line"><span>Detičky</span></h2>
            </div>

            <p class="desc margin-bottom">
              Rozhodli sme sa poňať náš veľký deň ako oslavu lásky v kruhu dospelých. Pevne veríme, že náš návrh zobrať si voľno od rodičovských povinností prijmete pozitívne a užijete si čas jeden pre druhého.
            </p>

          </div>

        </div>
      </div>
    </section>

    <!-- Dresscode section -->
    <section id="dresscode" class="section dresscode-area center-text white-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">Čo si obliecť</h2>
              <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>
            </div>
          </div>

          <p class="desc margin-bottom">
            Nebudeme vás zaťažovať špeciálnymi požiadavkami, aj tak si určite nemáte čo obliecť :D Všetko, v čom sa
            budete cítiť pohodlne a bude to odpovedať výnimočnosti situácie, je v poriadku. Dámám odporúčame botičky pohodlné i na trávnatý povrch, kde sa bude konať obrad.
            Ak sa chcete zladiť do farieb našej výzdoby, prikladáme <a target="_blank" href="/images-v1/color-palette-v2.png"><span class="link_in_text"><u>farebnú paletu</u></span> <i class="fa-solid fa-up-right-from-square fa-2xs"></i></a>.
            Bielu farbu a farby jej podobné prenechajte ale, prosím, neveste.
          </p>
        </div>
      </div>
    </section>


    <!-- Wedding section -->
    <section id="wedding" class="section wedding-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title bg-line"><span>Československá svadba</span></h2>
            </div>

<!--            <i class="icon"><img src="/icons/sk-small.png" alt="sk flag" height="56" width="56"></i>-->

            <h3>
              <span class="line">
              <i class="icon flag"><img src="/icons/sk-small.png" alt="sk flag"></i>
              &nbsp;Co si pod tím</span>
              <span class="line">máte představit?&nbsp;
              <i class="icon flag"><img src="/icons/cz-small.png" alt="cz flag"></i>
              </span>
            </h3>

            <h4>Začnem veľkou prosbičkou.</h4>
            <p class="desc margin-bottom">
              Slovenské svadby sú slávnosťou po celý deň, nie len počas obradu. V tom, v čom prídeme oblečení na obrad, ostávame po celý deň. Mojím prianím je, aby to takto bolo aj na našej svadbe. Ak sa budete chcieť prezliecť do niečoho pohodlnejšieho, prosím, nech je to stále primerané spoločenskej udalosti. Športové oblečenie či rifle nechajte doma.
            </p>


            <p class="desc margin-bottom">
              Naša svadba so sebou prinesie zopár slovenských zvyklostí a špecifík. Čaká na vás čepčenie nevesty a redový tanec. Už ste niekedy tancovali na <a target="_blank" href="https://www.youtube.com/watch?v=qFPman6nih4"><span class="link_in_text"><u>čardáše</u></span> <i class="fa-solid fa-up-right-from-square fa-2xs"></i></a> ? Na našej svadbe sa ich zopár určite objaví. Len som si na to pomyslela a už sa mi rozprúdila krv v žilách!
            </p>

            <p class="desc margin-bottom">
              Pri čepčení nevesty sa od vás neočakáva nič. Počas tejto tradície sa zo slobodnej dievky stáva manželka a vydaté ženy ju prijímajú medzi seba. Možno nebudete rozumieť úplne každému slovu v pesničkách, keďže sa tam môže objaviť nárečie, no pevne verím, že atmosféra tohto okamihu vás očarí a túto krásnu tradíciu si užijete.
            </p>

            <p class="desc margin-bottom">
              Redový tanec nasleduje po čepčení a zapájajú sa do neho všetci svadobčania. Jedná sa o príležitosť svadobčanov zatancovať si s novopečenou manželkou predtým, ako sa odovzdá mužovi.
              Svadobčania vytvoria okolo nevesty kruh a aby vás do neho pustili zatancovať si s ňou, hodíte do klobúka nejakú korunku.
              Nebojte sa, nejde nám o to dostať z vás peniaze. Každý prihodí korunku podľa svojho uváženia. Na Slovensku napríklad hádžeme od najnižšej bankovky (5 EUR) po momentálny level štedrosti ovplyvnený aktuálnou hladinou alkoholu.
              Za odmenu si zatancujete s nevestou a ešte dostanete malú výslužku. S nevestou bežne tancuje pár, rodinka, nemusíte (a prosím netancujte) po jednom. Ak to znie komplikovane, sledujte, ako to robí slovenské osadenstvo.
            </p>

          </div>

        </div>
      </div>
    </section>


    <!-- RSVP section -->
    <section ref="rsvpSection" id="rsvp" class="section rsvp-area center-text white-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <div class="heading">
              <h2 class="title">Môžeme sa na vás tešiť?</h2>
              <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>
            </div>

            <p class="desc margin-bottom">
              Prosíme vás o co nejdřívější vyplnění tohoto krátkého dotazníku.
            </p>
            <iframe ref="rsvpForm" @load="rsvpLoaded" src="https://docs.google.com/forms/d/e/1FAIpQLScfmxohAtx6kgUX7SfBifBuIuN-ZTvNHvjHlIvIM3PNTfx_Zg/viewform?embedded=true" width="100%" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>

        </div>
      </div>
    </section>



    <!-- Gallery section -->
    <section id="gallery" class="section gallery-area center-text">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">

            <div class="heading">
              <h2 class="title bg-line"><span>Ako nám to spolu ladí</span></h2>
            </div>

<!--            <div class="heading">-->
<!--              <h2 class="title">{{ $t('Gallery.Honeymoon.Heading') }}</h2>-->
<!--              <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>-->
<!--            </div>-->

<!--            <Gallery-->
<!--                :images="honneymoonImages"-->
<!--            />-->

<!--            <div class="heading">-->
<!--              <h4 class="title">{{ $t('Gallery.Wedding.Heading') }}</h4>-->
<!--              <span class="heart_line_heading"><img src="/images-v1/background/heart_line.png" alt="line with heart" height="32px"></span>-->
<!--              <p v-html="$t('Gallery.Wedding.Download')"></p>-->
<!--            </div>-->

<!--            <Gallery-->
<!--                :images="weddingImages"-->
<!--            />-->

            <div class="heading">
              <h4 class="title">Naše cesta životem</h4>
            </div>

            <div class="galery-stodola" v-if="isGaleryVisible">
              <Gallery
                :images="galleryImages"
              />
            </div>

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
              <h2 class="title">Chýba vám nejaká informácia?</h2>
            </div>

            <p class="desc">Kontaktujte ženícha</p>

            <p class="margin-bottom">
              <a target="_blank" href="https://www.facebook.com/jakub.melda.melezinek"><i class="fab fa-facebook-f"></i></a>
              &nbsp;
              <a :href="'tel:' + tel"><i class="fas fa-phone"></i></a>
            </p>

          </div>

        </div>

      </div>
      <div class="container center-text">
        <p class="copyright"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy; {{ new Date().getFullYear() }} All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
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
    margin-bottom: 120px;
  }

  @media (min-width: 318px) {
    .wedding-details:after {
      margin-bottom: 110px !important;
    }
  }

  @media (min-width: 480px) {
    .wedding-details:after {
      margin-bottom: 110px !important;
    }
  }

  @media (min-width: 768px) {
    .wedding-details:after {
      margin-bottom: 150px !important;
    }
  }

  @media (min-width: 992px) {
    .wedding-details:after {
      margin-bottom: 120px !important;
    }
  }

  .section.contact-area-2 {
    box-shadow: 0px -10px 19px 0px rgba(0,0,0,.15);

    padding-bottom: 0px;

    .margin-bottom {
      margin-bottom:  80px;
    }
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
    background-size: 280px;
    z-index: 0;
  }

  .bg-line span {
    position: relative;
    background-image: linear-gradient(to right, rgba(255,256,256,0.2), rgba(255,256,256,0.8), rgba(255,256,256,0.2));
    width: 100%;
    padding: 0 20px 0 20px;
    z-index: 5;
  }

  .names {
    max-width: 800px;
  }

  @media (max-width: 992px) {
    .names {
      width: 90%;
      max-width: 800px;
    }
  }

  @media (max-width: 677px) {
    .names {
      width: 99%;
      max-width: 800px;
    }

    .main-slider {
      background-position: calc(50% + 50px) 50%;
    }
  }

  .slider-content {
    margin-top: 200px;
  }

  h3, h4, h5 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .location-area, .w-details-area {
    padding-bottom: 0;
  }

  .heart_line_heading {
    margin-top: 10px;
  }

  @media (max-width: 992px) {
    .flag img {
      width: 75%;
    }
  }

  @media (max-width: 992px) {
    .flag img {
      width: 75%;
    }
  }

  @media (max-width: 667px) {
    .flag img {
      width: 66%;
    }
  }

  @media (max-width: 480px) {
    .flag img {
      width: 50%;
    }
  }

  span.line {
    display: inline-block;
  }

  .w-detail img {
    width: auto;
  }

</style>

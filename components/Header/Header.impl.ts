import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { Action, State } from "~/node_modules/vuex-class";
import { set_lang } from "~/store/names";

declare const $;

@Component
export default class Header extends Vue {
  @Action(set_lang) setLang;
  @State locale;

  private menuOpened = false;

  get otherLang() {
    return this.locale == 'en' ? 'cs': 'en';
  }

  mounted() {
    // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
    $("a").on('click', function(event) {
      console.log("a on click");
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  }
}

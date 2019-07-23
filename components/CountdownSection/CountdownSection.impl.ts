import Vue from 'vue';
import Component from 'nuxt-class-component';

declare const $;

@Component({})
export default class CountdownSection extends Vue {
  $t: any;
  $tc: any;

  mounted() {
    this.$clock.countdown('2019/10/19 14:00', (event) => {
      if (this.$tc) {
        this.$clock.html(event.strftime(''
          + `<span>`
          + `<div class="time-sec"><span class="title">%D</span> ${ this.$tc('Countdown.Days', event.offset.totalDays) } </div>`
          + `<div class="time-sec"><span class="title">%H</span> ${ this.$tc('Countdown.Hours', event.offset.hours) } </div>`
          + `</span>`
          + `<span>`
          + `<div class="time-sec"><span class="title">%M</span> ${ this.$tc('Countdown.Minutes', event.offset.minutes) } </div>`
          + `<div class="time-sec"><span class="title">%S</span> ${ this.$tc('Countdown.Seconds', event.offset.seconds) } </div>`
          + `</span>`));
      }
    });
  }

  get $clock() {
    return $('#clock');
  }

  beforeDestroy() {
    this.$clock.countdown('remove');
  }
}

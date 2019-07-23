import Vue from 'vue';
import Component from 'nuxt-class-component';
import AttendeeFormComp from "~/components/AttendeeForm/AttendeeForm.vue";
import IAttendee from "~/interfaces/IAttendee";
import { Watch } from "~/node_modules/nuxt-property-decorator";

declare const $;

interface StringTMap<T> {
  [key: string]: T;
}

interface IAttendeeMap extends StringTMap<IAttendee> {
}

@Component({
  components: {
    AttendeeForm: AttendeeFormComp,
  }
})
export default class RsvpSection extends Vue {
  private plusOne: boolean = false;
  private guest: IAttendee = {
    attendeeId: RsvpSection.nextAttendeeId(),
    fullName: "",
    contact: "",
    accommodation: false,
  };
  private companions: IAttendeeMap = {};
  private status = "NONE";

  get emptyCompanions() {
    // return Object.entries(this.companions).length === 0;
    let isEmpty = true;
    for(const key in this.companions) {
      isEmpty = false;
      break;
    }
    return isEmpty;
  }

  @Watch('plusOne')
  private onPlusOne(value: boolean) {
    if (value) {
      // add
      let attendeeId = RsvpSection.nextAttendeeId();
      Vue.set(this.companions, attendeeId, {
        attendeeId: attendeeId,
        fullName: "",
        contact: "",
        accommodation: false,
      });
      // reset checkbox
      this.$nextTick(() => {
        this.plusOne = false;
      });
    }
  }

  private onMinusOne(attendeeId) {
    Vue.delete(this.companions, attendeeId);
  }

  private static counter = 1;
  private static seed = Date.now() + "-" + RsvpSection.randomSeed();

  private static randomSeed(): string {
    return Math.floor((Math.random() * 999999999) + 1).toString();
  }

  private static nextAttendeeId() {
    return RsvpSection.seed + "-" + RsvpSection.counter++;
  }

  private async onSubmit() {
    try {
      await this.$db.collection('attendees').add(this.guest);
      for(const key in this.companions) {
        const companion = this.companions[key];
        await this.$db.collection('attendees').add(companion);
      }
      this.status = "SUCCESS";
      $('html, body').animate({
        scrollTop: $('#rsvp-form').offset().top
      }, 800);
    } catch (e) {
      this.status = "ERROR";
    }
  }

}

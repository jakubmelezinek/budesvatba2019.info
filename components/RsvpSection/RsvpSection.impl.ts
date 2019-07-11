import { Component, Vue, Watch } from "~/node_modules/vue-property-decorator";
import AttendeeFormComp from "~/components/AttendeeForm/AttendeeForm.vue";
import IAttendee from "~/interfaces/IAttendee";

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

  get emptyCompanions() {
    return Object.entries(this.companions).length === 0;
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
  private static seed = RsvpSection.randomSeed();
  private static randomSeed(): string {
    return Math.floor((Math.random() * 999999999) + 1).toString();
  }

  private static nextAttendeeId() {
    return RsvpSection.seed + "-" + RsvpSection.counter++;
  }

}

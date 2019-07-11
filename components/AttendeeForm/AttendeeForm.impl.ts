import { Component, Prop, Vue } from "~/node_modules/vue-property-decorator";
import IAttendee from "~/interfaces/IAttendee";

@Component
export default class AttendeeForm extends Vue {
  @Prop({ default: false }) private companion: boolean;
  @Prop() private value: IAttendee; // prop for v-model

  private emitMinusOne() {
    this.$emit('minusOne', this.value.attendeeId);
  }

}

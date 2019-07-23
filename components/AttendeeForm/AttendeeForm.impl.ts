import Vue from 'vue';
import Component from 'nuxt-class-component';
import IAttendee from "~/interfaces/IAttendee";
import { Prop } from "~/node_modules/nuxt-property-decorator";

@Component({})
export default class AttendeeForm extends Vue {
  @Prop({ default: false }) private companion: boolean;
  @Prop() private value: IAttendee; // prop for v-model

  private emitMinusOne() {
    this.$emit('minusOne', this.value.attendeeId);
  }

}

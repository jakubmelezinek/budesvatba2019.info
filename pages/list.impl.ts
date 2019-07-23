import IAttendee from "~/interfaces/IAttendee";
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({
  layout: "empty",
  components: {}
})
export default class List extends Vue {
  private attendees: IAttendee[] = [] as IAttendee[];
  private showId = false;

  // TODO why asyncData results in `<body>2019</body>`
  async mounted() {
    const snapshot = await this.$db.collection('attendees').orderBy("attendeeId").get();
    const attendees = snapshot.docs.map(doc => doc.data() as IAttendee);

    this.attendees = attendees;
  }

  idToDate(attendeeId: string) {
    return (new Date(Number.parseInt(attendeeId.substr(0, attendeeId.indexOf('-'))))).toLocaleString();
  }

}

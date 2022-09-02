<template>
  <div class="flex flex-col h-content items-center" style="min-height: 100vh">
    <NavBar :timestamp="timestamp" />
    <ErrorReportGroup :error-reports="errorReports" :controls="controls" />
    <Controls
      class="sticky bottom-0 mt-auto"
      :controls="controls"
      @control-change="handleControlChange"
    />
  </div>
</template>
<script>
import Controls from './components/Controls.vue';
import ErrorReport from './components/ErrorReport.vue';
import ErrorReportGroup from './components/ErrorReportGroup.vue';
import NavBar from './components/NavBar.vue';
import { getDummyData } from './dummy';
import { fetchErrorReports } from './helpers';

export default {
  data() {
    return {
      errorReports: [],
      timestamp: new Date(0),
      controls: {
        orderAsc: false,
        orderBy: 'occurances',
        groupSubstring: '',
        minOccurances: 1,
        minDate: new Date(),
        groupBy: 'message',
      },
    };
  },
  methods: {
    handleControlChange(name, value) {
      this.controls[name] = value;
    },
    setMinDate() {
      for (const { last } of this.errorReports) {
        if (last < this.controls.minDate) {
          this.controls.minDate = last;
        }
      }
    },
  },
  async mounted() {
    let data = getDummyData();
    try {
      data = await fetchErrorReports();
    } catch (err) {
      console.log(err);
    }

    this.errorReports = data.errorReports;
    this.timestamp = data.timestamp;
    this.setMinDate();
    window.app = this;
  },
  components: { ErrorReport, Controls, ErrorReportGroup, NavBar },
};
</script>

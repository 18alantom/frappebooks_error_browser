<template>
  <div class="flex flex-col h-content items-center" style="min-height: 100vh">
    <NavBar :timestamp="timestamp" />
    <ErrorReportGroup :error-reports="errorReports" :controls="controls" />
    <Controls
      class="sticky bottom-0 mt-auto"
      :controls="controls"
      @control-change="
        (name, value) => {
          controls[name] = value;
        }
      "
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
        groupBy: 'none',
      },
    };
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
  },
  components: { ErrorReport, Controls, ErrorReportGroup, NavBar },
};
</script>

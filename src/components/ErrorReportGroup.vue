<template>
  <div>
    <div
      v-for="group in Object.keys(groups)"
      class="flex flex-col gap-4 p-4 items-center"
    >
      <ERGHeader
        :header="getHeader(groups[group])"
        class="w-full cursor-pointer w-max-card"
      />

      <ErrorReport
        v-for="(errorReport, i) in groups[group]"
        :errorReport="errorReport"
        :index="i + 1"
        class="w-full w-max-card"
      />
    </div>
  </div>
</template>
<script>
import {
getGroupHeader,
groupErrorReports,
sortErrorReports
} from '../helpers';
import ERGHeader from './ERGHeader.vue';
import ErrorReport from './ErrorReport.vue';

export default {
  props: {
    errorReports: { type: Array, default: () => [] },
    controls: { type: Object, default: () => {} },
  },
  mounted() {
    window.erg = this;
  },
  methods: {
    getHeader(errorReports) {
      return getGroupHeader(this.controls, errorReports);
    },
  },
  computed: {
    groups() {
      const groups = groupErrorReports(this.controls, this.errorReports);
      for (const group in groups) {
        sortErrorReports(this.controls, groups[group]);
      }

      return groups;
    },
  },
  components: { ErrorReport, ERGHeader },
};
</script>

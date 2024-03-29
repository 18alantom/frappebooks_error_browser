<template>
  <div class="flex flex-col gap-4 items-center p-4">
    <template v-for="(li, i) in list.slice(0, end)">
      <ERGHeader
        v-if="li.type === 'header'"
        :data-index="i"
        v-set-observer="setObserver"
        :header="li.item"
        class="w-full w-max-card"
      />
      <ErrorReportVue
        v-else
        :data-index="i"
        v-set-observer="setObserver"
        :errorReport="li.item"
        :index="li.index"
        class="w-full w-max-card"
      />
    </template>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import {
filterErrorReports,
getGroupHeader,
groupErrorReports,
sortErrorReports
} from '../helpers';
import ERGHeader from './ERGHeader.vue';
import ErrorReportVue from './ErrorReport.vue';
const minCount = 20;

export default defineComponent({
  props: {
    errorReports: Object,
    controls: Object,
  },
  data() {
    return { observer: null, end: minCount };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.observerCallback);
  },
  methods: {
    setObserver(el, isMounted) {
      if (!(el instanceof Element) || !this.observer) {
        return;
      }

      if (isMounted) {
        this.observer.observe(el);
      } else {
        this.observer.unobserve(el);
      }
    },
    observerCallback(entries) {
      for (const entry of entries) {
        this.handleIntersection(entry);
      }
    },
    handleIntersection({
      target,
      isIntersecting,
      rootBounds,
      boundingClientRect,
    }) {
      const index = parseInt(target.dataset.index ?? '-1');
      if (isIntersecting && index + 1 === this.end) {
        this.end += 1;
      }

      const { bottom: rootBottom } = rootBounds;
      const { top: targetTop } = boundingClientRect;

      if (!isIntersecting && targetTop > rootBottom) {
        this.end = Math.max(Math.min(index + 1, this.end), minCount);
      }
    },
  },
  computed: {
    groups() {
      const errorReports = filterErrorReports(this.controls, this.errorReports);
      const groups = groupErrorReports(this.controls, errorReports);
      for (const group in groups) {
        sortErrorReports(this.controls, groups[group]);
      }

      return groups;
    },
    list() {
      const list = [];

      let i = 1;
      for (const group in this.groups) {
        const errorReports = this.groups[group];
        const item = getGroupHeader(this.controls, errorReports);
        list.push({ index: i++, item, type: 'header' });

        for (const i in errorReports) {
          list.push({
            index: parseInt(i) + 1,
            item: errorReports[i],
            type: 'report',
          });
        }
      }

      return list;
    },
  },
  components: { ErrorReportVue, ERGHeader },
});
</script>

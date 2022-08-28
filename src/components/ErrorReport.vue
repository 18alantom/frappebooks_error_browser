<template>
  <div class="flex bg-white rounded-md border">
    <div class="border-r w-12 shrink-0 px-4 text-right text-sm">
      <p class="h-14 flex justify-end items-center">
        {{ index }}
      </p>
    </div>

    <div class="overflow-auto gap-0 flex flex-col w-full">
      <div
        class="
          flex
          justify-between
          h-14
          items-center
          p-4
          cursor-pointer
          hover:bg-gray-50
        "
        @click="collapsed = !collapsed"
      >
        <h1 class="font-bold">
          {{ errorReport.error_name }}
        </h1>
        <div class="flex gap-4">
          <p class="text-xs text-gray-600">{{ errorReport.name }}</p>
          <feather-icon
            class="w-4 h-4 text-gray-600"
            :name="collapsed ? 'chevron-down' : 'chevron-up'"
          />
        </div>
      </div>

      <hr />
      <div class="flex">
        <div class="text-sm p-4 border-r w-40 shrink-0">
          <p class="text-gray-600 text-xs">Occurances</p>
          <p class="mt-1">
            {{ errorReport.occurances }}
          </p>
        </div>

        <div class="text-sm p-4 border-r w-40 shrink-0">
          <p class="text-gray-600 text-xs">Last Appeared</p>
          <p class="mt-1">
            {{ errorReport.last.toISOString().split('T')[0] }}
          </p>
        </div>

        <div class="text-sm p-4">
          <p class="text-gray-600 text-xs">Message</p>
          <p class="mt-1">{{ errorReport.message }}</p>
        </div>
      </div>

      <!-- Stack  -->
      <hr v-if="!collapsed" />
      <div v-if="!collapsed" class="p-4" style="width: calc(100vw - 5.25rem)">
        <p class="text-gray-600 text-xs">Stack</p>
        <pre class="text-sm overflow-auto mt-1">{{ errorReport.stack }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherIcon from './FeatherIcon.vue';
export default {
  props: {
    errorReport: Object,
    index: Number,
  },
  data() {
    return { collapsed: true };
  },
  computed: {
    creationDate() {
      const date = new Date(this.errorReport.creation);
      return date.toDateString();
    },
  },
  components: { FeatherIcon },
};
</script>

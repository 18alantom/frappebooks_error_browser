<template>
  <div class="flex bg-white rounded-md border">
    <div class="border-r w-12 shrink-0 px-4 text-right text-sm">
      <p class="h-14 flex justify-end items-center">
        {{ index }}
      </p>
    </div>

    <div
      class="overflow-auto gap-0 flex flex-col cursor-pointer w-full"
      @click="collapsed = !collapsed"
    >
      <div class="flex justify-between h-14 items-center p-4">
        <h1 class="font-bold">
          {{ errorReport.error_name }}
        </h1>
        <p class="text-xs text-gray-600">{{ errorReport.name }}</p>
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
      <div v-if="!collapsed" class="p-4">
        <p class="text-gray-600 text-xs">Stack</p>
        <pre class="text-sm overflow-auto mt-1">{{ errorReport.stack }}</pre>
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>

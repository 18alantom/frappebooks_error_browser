<template>
  <div
    class="
      flex
      w-full
      bg-gray-100
      border
      rounded-md
      justify-between
      items-center
    "
  >
    <h1 class="font-bold p-4">{{ header.title }}</h1>
    <div class="flex">
      <div class="text-sm p-4 border-r w-40 border-l shrink-0">
        <p class="text-gray-600 text-xs">Total Occurances</p>
        <p class="mt-1">
          {{ header.total }}
        </p>
      </div>

      <div class="text-sm p-4 border-r w-40 shrink-0">
        <p class="text-gray-600 text-xs">Last Appeared</p>
        <p class="mt-1">
          {{ header.lastAppeared.toISOString().split('T')[0] }}
        </p>
      </div>

      <div class="text-sm p-4 w-40 shrink-0">
        <p class="text-gray-600 text-xs">Count</p>
        <p class="mt-1">
          {{ header.count }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { header: Object },
};
</script>

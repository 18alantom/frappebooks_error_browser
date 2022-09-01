<template>
  <div
    class="
      flex flex-col
      w-full
      bg-gray-50
      border
      rounded-md
      justify-between
      items-start
      md:items-center md:flex-row
    "
  >
    <h1
      class="
        font-bold
        p-4
        overflow-auto
        whitepace-nowrap
        w-full
        border-b
        md:border-0
      "
    >
      {{ header.title }}
    </h1>
    <div class="flex md:justify-end">
      <div class="text-sm p-4 border-r w-32 md:w-40 md:border-l shrink-0">
        <p class="text-gray-600 text-xs">Occurances</p>
        <p class="mt-1">
          {{ header.total }}
        </p>
      </div>

      <div class="text-sm p-4 border-r w-32 md:w-40 shrink-0">
        <p class="text-gray-600 text-xs">Last Appeared</p>
        <p class="mt-1">
          {{ header.lastAppeared.toISOString().split('T')[0] }}
        </p>
      </div>

      <div class="text-sm p-4 md:w-40 shrink-0">
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

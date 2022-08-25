<template>
  <div
    class="
      bg-white
      w-full
      sticky
      top-0
      flex
      justify-center
      border-b
      py-4
      lg:px-4
      md:px-4
    "
  >
    <div
      class="w-max-card w-full sticky top-0 flex justify-between items-center"
    >
      <div class="bg-gry-100">
        <img src="../assets/frappe-books-logo.svg" style="width: 80px" />
        <h1 class="text-sm text-gray-600 -mb-1" style="font-weight: 500">
          Error Browser
        </h1>
        <p class="text-xs text-gray-600 mt-0.5">
          {{ timestamp.toISOString().replace('T', ' ').split('.')[0] }}
        </p>
      </div>

      <div class="flex text-sm gap-8 text-gray-800" style="font-weight: 500">
        <a href="https://frappebooks.com/">Home</a>
        <a href="https://frappebooks.com/download">Download</a>
        <a href="https://t.me/frappebooks">Community</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { timestamp: { type: Date, default: new Date(0) } },
};
</script>

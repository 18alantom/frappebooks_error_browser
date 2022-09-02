<template>
  <div
    class="w-full flex flex-col justify-center items-center border-t bg-white"
  >
    <div class="w-full rounded-t-md bg-white w-max-card mx-4">
      <!-- Header -->
      <div
        class="flex justify-between items-center pt-4 px-4 cursor-pointer"
        :class="collapsed ? 'pb-4' : ''"
        @click="collapsed = !collapsed"
      >
        <h2 class="font-semibold">Controls</h2>
        <button
          class="text-sm text-gray-600 w-4 h-4"
          @click="collapsed = !collapsed"
        >
          <FeatherIcon :name="collapsed ? 'chevron-down' : 'chevron-up'" />
        </button>
      </div>

      <hr class="mt-4" v-if="!collapsed" />

      <!-- Body -->
      <div class="grid md:grid-cols-4 grid-cols-2" v-if="!collapsed">
        <!-- Order -->
        <div class="text-sm shrink-0 border-r p-4">
          <p class="text-gray-600 text-xs">Order By</p>
          <div class="flex items-center">
            <select
              name="order-by"
              :value="controls.orderBy"
              @change="
                (e) => $emit('control-change', 'orderBy', e.target.value)
              "
              class="
                bg-gray-50
                p-2
                mt-2
                w-full
                focus:bg-gray-100
                rounded
                border
                outline-none
                text-sm
                cursor-pointer
              "
            >
              <option value="occurances">Occurances</option>
              <option value="last">Last Appeared</option>
            </select>
            <button
              class="w-4 h-4 ml-4"
              @click="$emit('control-change', 'orderAsc', !controls.orderAsc)"
            >
              <FeatherIcon
                :name="controls.orderAsc ? 'arrow-up' : 'arrow-down'"
              />
            </button>
          </div>
        </div>

        <!-- Group -->
        <div class="text-sm shrink-0 border-r p-4">
          <p class="text-gray-600 text-xs">Group By</p>
          <select
            name="group-by"
            :value="controls.groupBy"
            @change="(e) => $emit('control-change', 'groupBy', e.target.value)"
            class="
              bg-gray-50
              p-2
              mt-2
              w-full
              focus:bg-gray-100
              rounded
              border
              outline-none
              text-sm
              cursor-pointer
            "
          >
            <option value="message">Message</option>
            <option value="error_name">Error Name</option>
            <option value="stack">Stack</option>
            <option value="version">Version</option>
          </select>
        </div>

        <!-- Filter Occurances -->
        <div
          class="
            text-sm
            w-full
            p-4
            md:col-span-1
            md:border-t-0
            border-t
            border-r
          "
        >
          <p class="text-gray-600 text-xs">Min Occurances</p>
          <input
            :value="controls.minOccurances"
            type="number"
            min="1"
            @input="
              (e) => $emit('control-change', 'minOccurances', e.target.value)
            "
            class="
              bg-gray-50
              p-2
              mt-2
              w-full
              focus:bg-gray-100
              rounded
              border
              outline-none
              text-sm
              disabled:bg-gray-200
            "
            :placeholder="`enter a substring to filter by`"
          />
        </div>

        <!-- Filter Date -->
        <div
          class="
            text-sm
            w-full
            p-4
            border-t
            md:border-0
          "
        >
          <p class="text-gray-600 text-xs">Min Last Appeared</p>
          <input
            :value="controls.minDate.toISOString().split('T')[0]"
            type="date"
            @input="
              (e) =>
                $emit('control-change', 'minDate', new Date(e.target.value))
            "
            class="
              bg-gray-50
              p-2
              mt-2
              w-full
              focus:bg-gray-100
              rounded
              border
              outline-none
              text-sm
              disabled:bg-gray-200
            "
            :placeholder="`enter a substring to filter by`"
          />
        </div>

        <!-- Filter Substring -->
        <div
          class="
            text-sm
            w-full
            p-4
            md:col-span-4
            col-span-2
            border-t
          "
        >
          <p class="text-gray-600 text-xs">Filter by Substring</p>
          <input
            :value="controls.groupSubstring"
            @input="
              (e) => $emit('control-change', 'groupSubstring', e.target.value)
            "
            class="
              bg-gray-50
              p-2
              mt-2
              w-full
              focus:bg-gray-100
              rounded
              border
              outline-none
              text-sm
              disabled:bg-gray-200
            "
            :placeholder="`enter a substring to filter by`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherIcon from './FeatherIcon.vue';
export default {
  emits: ['control-change'],
  props: {
    controls: {},
  },
  data() {
    return {
      collapsed: true,
    };
  },
  mounted() {
    window.c = this;
  },
  components: { FeatherIcon },
};
</script>

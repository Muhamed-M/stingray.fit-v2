<script setup>
import { ref, computed } from 'vue';

// props
const props = defineProps({
  headers: Array,
  data: Array,
  dataLength: Number,
  counter: Boolean,
  fullWidth: Boolean,
  hideFooter: Boolean,
  options: {
    default() {
      return {
        page: 1,
        itemsPerPage: 5,
      };
    },
  },
});
// emits
const emit = defineEmits(['update:options']);

// Create a local copy of options
const localOptions = ref({ ...props.options });

const tableClass = computed(() => {
  return {
    'w-full': props.fullWidth,
  };
});

function classObj(value) {
  return {
    'text-center': value === 'center',
  };
}

function nextPage() {
  if (
    localOptions.value.page >= props.dataLength ||
    localOptions.value.page >= props.data.length
  )
    return;
  localOptions.value.page++;
  emit('update:options', localOptions.value);
}

function prevPage() {
  if (localOptions.value.page <= 1) return;
  localOptions.value.page--;
  emit('update:options', localOptions.value);
}
</script>

<template>
  <div class="overflow-x-auto">
    <table
      class="table-auto text-sm text-left text-gray-500 dark:text-gray-400"
      :class="tableClass"
    >
      <!-- head -->
      <thead class="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th v-if="counter"></th>
          <th
            v-for="(header, i) in headers"
            :key="i"
            scope="col"
            class="py-3 px-6"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- rows -->
        <tr
          v-for="(item, i) in data"
          :key="i"
          class="bg-gray-50 border-b text-gray-600"
        >
          <th v-if="counter" class="py-4 px-6">{{ i + 1 }}</th>
          <td
            v-for="(header, i) in headers"
            :key="i"
            class="py-4 px-6"
            :class="classObj(header.align)"
            :style="`width:${header.width}px`"
          >
            <slot :item="item" :name="header.value">{{
              item[header.value]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="data.length === 0">
      <h2 class="text-center py-4 px-6 bg-gray-50 border-b text-gray-600">
        No Data Available!
      </h2>
    </div>
    <!-- footer -->
    <div
      v-if="!hideFooter"
      class="relative bg-gray-100 flex justify-center items-center py-2"
    >
      <div class="mx-3">
        <button
          @click="prevPage"
          :class="
            localOptions.page === 1
              ? 'cursor-not-allowed focus:outline-none opacity-25'
              : ''
          "
          class="inline-grid place-items-center text-2xl text-black bg-white rounded-l-lg border border-black"
        >
          <span class="mdi mdi-chevron-left"></span>
        </button>
        <button
          @click="nextPage"
          :class="
            localOptions.itemsPerPage <= dataLength ||
            localOptions.page * localOptions.itemsPerPage >= data.length
              ? 'cursor-not-allowed focus:outline-none opacity-25'
              : ''
          "
          class="inline-grid place-items-center text-2xl text-black bg-white rounded-r-lg border border-black"
        >
          <span class="mdi mdi-chevron-right"></span>
        </button>
      </div>
      <!-- <div v-if="options?.itemsPerPage" class="absolute right-5">
        <span class="text-sm">ITEMS PER PAGE:</span>
        <span
          v-for="(item, i) in options?.itemsPerPage"
          :key="i"
          class="rounded-lg bg-white p-2 cursor-pointer mx-2"
          >{{ item }}</span
        >
      </div> -->
    </div>
  </div>
</template>

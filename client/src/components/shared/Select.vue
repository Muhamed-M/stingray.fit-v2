<script setup>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';

defineProps({ items: Array, selected: Object, text: String, mdiIcon: String });
</script>

<template>
  <Listbox as="div">
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <span class="mdi" :class="mdiIcon"></span>
          <span class="ml-3 block truncate">{{ selected[text] }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <span class="mdi mdi-unfold-more-horizontal"></span>
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption as="template" v-for="item in items" :key="item.id" :value="item" v-slot="{ active, selected }">
            <li
              :class="[
                active ? 'bg-cyan-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <span class="mdi" :class="mdiIcon"></span>
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                  item[text]
                }}</span>
              </div>

              <span
                v-if="selected"
                :class="[active ? 'text-white' : 'text-cyan-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
              >
                <span class="mdi mdi-check-bold"></span>
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import { format } from 'date-fns';
import Card from '@/components/shared/Card.vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

// state
const loading = ref(false);
const enrollments = ref([]);
const enrollmentsCount = ref(null);
const serverOptions = ref({
  page: 1,
  rowsPerPage: 10,
});
const headers = [
  { text: 'Email', value: 'email' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Phone Number', value: 'phoneNumber' },
  { text: 'About', value: 'about', width: 300 },
  { text: 'Status', value: 'status' },
  { text: 'Created At', value: 'createdAt' },
  { text: 'Actions', value: 'actions' },
];

async function fetchEnrollments(options) {
  loading.value = true;

  try {
    const { data } = await axios.get('/api/enrollments', {
      params: { options },
    });
    enrollments.value = data.enrollments;
    enrollmentsCount.value = data.enrollmentsCount;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

// pagination
watch(
  serverOptions,
  (val) => {
    fetchEnrollments(val);
  },
  { immediate: true }
);
</script>

<template>
  <div class="p-6">
    <Card>
      <template #card-title>All Enrollments</template>
      <template #card-body>
        <DataTable
          :headers="headers"
          :items="enrollments"
          v-model:server-options="serverOptions"
          :server-items-length="enrollmentsCount"
          :loading="loading"
        >
          <template #item-createdAt="{ createdAt }">
            <span>
              {{ format(new Date(createdAt), 'dd MMM y') }}
            </span>
          </template>

          <template #item-actions="item">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="m-1 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span class="mdi mdi-dots-vertical"></span>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem>
                      <span class="text-gray-700 block px-4 py-2 text-sm cursor-pointer">Accept</span>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </template>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

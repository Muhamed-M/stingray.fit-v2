<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import { DateTime } from 'luxon';
import { toast } from 'vue3-toastify';
import Card from '@/components/shared/Card.vue';
import Select from '@/components/shared/Select.vue';
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
// return css class to highlight the new/unread enrollments
const bodyRowClassNameFunction = (item, rowNumber) => {
  if (item.new) return 'highlight-row';
};
// filter items
const statuses = [
  { text: 'All', value: '' },
  { text: 'Active', value: 'active' },
  { text: 'Declined', value: 'declined' },
  { text: 'Closed', value: 'closed' },
  { text: 'Pending', value: 'pending' },
];
const statusFilter = ref(statuses[0]);

async function fetchEnrollments(options) {
  loading.value = true;

  try {
    const { data } = await axios.get('/api/enrollments', {
      params: {
        options,
        filters: {
          status: statusFilter.value.value,
        },
      },
    });
    enrollments.value = data.enrollments;
    enrollmentsCount.value = data.enrollmentsCount;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

async function updateEnrollment(id, status, message) {
  loading.value = true;

  try {
    // request
    await axios.put(`/api/enrollments/${id}`, { status });
    // update state
    const index = enrollments.value.findIndex((e) => e._id === id);
    if (index > -1) {
      enrollments.value[index].status = status;
      enrollments.value[index].new = false;
    }
    // message
    toast.success(`Enrollment ${message} successfully!`, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  } finally {
    loading.value = false;
  }
}

async function deleteEnrollment(id) {
  loading.value = true;

  try {
    // request
    await axios.delete(`/api/enrollments/${id}`);
    // remove from state
    enrollments.value = enrollments.value.filter((e) => e._id !== id);
    // message
    toast.success('Enrollment deleted successfully!', { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
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

// filtrs
watch(statusFilter, () => {
  fetchEnrollments(serverOptions.value);
});
</script>

<template>
  <div class="p-6">
    <Card>
      <template #card-title>
        <div class="flex justify-between items-center">
          <h3 class="text-gray-900 text-base leading-6 font-semibold">All Enrollments</h3>

          <Select
            v-model="statusFilter"
            :selected="statusFilter"
            :items="statuses"
            text="text"
            mdiIcon="mdi-tune"
            class="w-44"
          />
        </div>
      </template>
      <template #card-body>
        <DataTable
          :headers="headers"
          :items="enrollments"
          v-model:server-options="serverOptions"
          :server-items-length="enrollmentsCount"
          :loading="loading"
          :body-row-class-name="bodyRowClassNameFunction"
        >
          <template #item-createdAt="{ createdAt }">
            <span>
              {{ DateTime.fromISO(createdAt).toFormat('dd LLL yyyy') }}
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
                    <MenuItem v-if="item.status === 'pending'">
                      <span
                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer"
                        @click="updateEnrollment(item._id, 'active', 'accepted')"
                      >
                        <span class="mdi mdi-check-decagram"></span>
                        Accept
                      </span>
                    </MenuItem>
                    <MenuItem v-if="item.status === 'pending'">
                      <span
                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer"
                        @click="updateEnrollment(item._id, 'declined', 'declined')"
                      >
                        <span class="mdi mdi-close-circle-outline"></span>
                        Decline
                      </span>
                    </MenuItem>
                    <MenuItem v-if="item.status === 'active'">
                      <span
                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer"
                        @click="updateEnrollment(item._id, 'closed', 'closed')"
                      >
                        <span class="mdi mdi-calendar-remove"></span>
                        Close
                      </span>
                    </MenuItem>
                    <MenuItem>
                      <span
                        class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm cursor-pointer"
                        @click="deleteEnrollment(item._id)"
                      >
                        <span class="mdi mdi-delete"></span>
                        Delete
                      </span>
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

<style>
.highlight-row {
  --easy-table-body-row-background-color: #efeded;
}
</style>

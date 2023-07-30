<script setup>
import { ref } from 'vue';
import axios from 'axios';

// state
const loading = ref(false);
const enrollments = ref([]);

const headers = [
  { text: 'Email', value: 'email' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Phone Number', value: 'phoneNumber' },
  { text: 'About', value: 'about', width: 300 },
  { text: 'Status', value: 'status' },
  { text: 'Created At', value: 'createdAt' },
];

async function fetchEnrollments() {
  loading.value = true;

  try {
    const { data } = await axios.get('/api/enrollments');
    enrollments.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
fetchEnrollments();
</script>

<template>
  <div class="p-6">
    <DataTable :headers="headers" :items="enrollments" :loading="loading" :rows-per-page="10"></DataTable>
  </div>
</template>

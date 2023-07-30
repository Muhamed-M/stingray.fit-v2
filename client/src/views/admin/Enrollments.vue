<script setup>
import { ref } from 'vue';

const headers = [
  { text: 'Email', value: 'email' },
  { text: 'Full Name', value: 'fullName' },
  { text: 'Phone Number', value: 'phoneNumber' },
  { text: 'About', value: 'about', width: 300 },
  { text: 'Status', value: 'status' },
  { text: 'Created At', value: 'createdAt' },
];
</script>

<template>
  <div class="p-6">
    <DataTable :headers="headers" :items="[]" :rows-per-page="10"></DataTable>
  </div>
</template>

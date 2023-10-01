<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from '@/components/shared/Card.vue';
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';

const loading = ref(false);
const total = ref(0);

async function getData() {
  loading.value = true;
  try {
    const { data } = await axios.get('/api/newsletter/count');
    console.log(data);
    total.value = data.count;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <Card>
    <template #card-title> Newsletter </template>
    <template #card-body>
      <LoadingSpinner v-if="loading" class="flex justify-center align-center py-6" />
      <div v-else>
        <h2 class="text-2xl">Total subscriptions: {{ total }} <span class="mdi mdi-email-newsletter"></span></h2>
      </div>
    </template>
  </Card>
</template>

<script setup>
import EnrollmentsChart from './components/dashboard/EnrollmentsChart.vue';
import NewsletterCount from './components/dashboard/NewsletterCount.vue';
</script>

<template>
  <div class="p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 xl:gap-x-8">
      <EnrollmentsChart />

      <NewsletterCount />
    </div>
  </div>
</template>

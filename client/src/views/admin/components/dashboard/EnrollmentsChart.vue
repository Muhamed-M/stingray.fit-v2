<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import Card from '@/components/shared/Card.vue';
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';

const chartOptions = computed(() => {
  return {
    chart: {
      type: 'bar',
      height: 170,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false,
      },
      offsetY: 3,
    },
    colors: ['#00c853', '#f44336'],
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    xaxis: {
      categories: ['Last Month', 'This Month'],
    },
    legend: {
      show: false,
    },
  };
});
const loading = ref(false);
const total = ref(0);
const series = ref([
  {
    name: 'Enrollments',
    data: [],
  },
]);

async function getData() {
  loading.value = true;
  try {
    const { data } = await axios.get('/api/enrollments/dashboard');
    total.value = data.totalEnrollments;
    series.value[0].data = [data.enrollmentsLastMonth, data.enrollmentsThisMonth];
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
getData();
</script>

<template>
  <Card>
    <template #card-title> Enrollments </template>
    <template #card-body>
      <LoadingSpinner v-if="loading" class="flex justify-center align-center py-6" />
      <div v-else class="flex items-center justify-between">
        <div class="min-w-fit">
          <div class="mb-2">
            <h2 class="text-2xl">Total: {{ total }}</h2>
          </div>
          <div class="d-flex justify-space-around align-center mb-1">
            <span class="mdi mdi-calendar-month mr-2"></span>
            <span class="text-subtitle-1">Last Month: {{ series[0].data[0] }}</span>
            <!-- <ArrowUpIcon stroke-width="1.5" width="18" class="text-error" />
            <span class="text-subtitle-1 text-error">8%</span> -->
          </div>
          <div class="d-flex justify-space-around align-center">
            <span class="mdi mdi-calendar-month mr-2"></span>
            <span class="text-subtitle-1">This Month: {{ series[0].data[1] }}</span>
            <!-- <ArrowUpIcon stroke-width="1.5" width="18" class="text-error" />
            <span class="text-subtitle-1 text-error">5%</span> -->
          </div>
        </div>

        <div class="ml-4">
          <apexchart type="bar" height="170" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
    </template>
  </Card>
</template>

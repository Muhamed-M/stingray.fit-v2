<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { toast } from 'vue3-toastify';
import axios from 'axios';
const store = useStore();
// dispatch get method
store.getWorkoutPlansData();

// refs
const { workoutPlans } = storeToRefs(store);
const onlinePrice = ref(null);
const personalPrice = ref(null);

// methods
async function updatePrice(id) {
  try {
    const { data } = await axios.patch(
      `/api/admin/workout-plans/update-price/${id}`,
      {
        onlinePrice: onlinePrice.value,
        personalPrice: personalPrice.value,
      }
    );
    onlinePrice.value = null;
    personalPrice.value = null;
    await store.getWorkoutPlansData();
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}
</script>

<template>
  <section class="mb-8">
    <h1 class="mb-5 text-4xl">Section: Planovi Treninga</h1>
    <div class="flex flex-wrap gap-5">
      <div class="p-8 space-y-8 text-center bg-white rounded-lg">
        <h2 class="font-medium uppercase mb-2">
          {{ workoutPlans[0]?.title }}
        </h2>
        <div class="text-5xl font-bold uppercase text-black mb-2">
          <span>Current price: </span>
          <span>{{ workoutPlans[0]?.price }}€</span>
        </div>
        <form
          @submit.prevent="updatePrice(workoutPlans[0]._id)"
          class="flex justify-center align-center"
        >
          <div class="relative mr-2">
            <input
              v-model="onlinePrice"
              type="text"
              required
              placeholder="Enter new price..."
              class="block w-100 rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-base"
            />
            <span class="input-icon">€</span>
          </div>
          <input
            class="group cursor-pointer rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            type="submit"
            value="Change"
          />
        </form>
      </div>

      <div class="p-8 space-y-8 text-center bg-cyan-600 rounded-lg">
        <h2 class="font-medium uppercase text-white mb-2">
          {{ workoutPlans[1]?.title }}
        </h2>
        <div class="text-5xl font-bold text-white uppercase mb-2">
          <span>Current price: </span>
          <span>{{ workoutPlans[1]?.price }}€</span>
        </div>
        <form
          @submit.prevent="updatePrice(workoutPlans[1]._id)"
          class="flex justify-center align-center"
        >
          <div class="relative mr-2">
            <input
              v-model="personalPrice"
              type="text"
              required
              placeholder="Enter new price..."
              class="block w-100 rounded-t-md border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-base"
            />
            <span class="input-icon">€</span>
          </div>
          <input
            class="group cursor-pointer rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            type="submit"
            value="Change"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.input-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.7;
}
</style>

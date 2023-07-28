<script setup>
import { ref, nextTick } from 'vue';
import DataTable from '@/components/shared/DataTable.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { toast } from 'vue3-toastify';
import axios from 'axios';
const store = useStore();
// dispatch get method
store.getTestimonials();

// refs
const { testimonials } = storeToRefs(store);
const testimonialsHeaders = ref([
  {
    text: 'Full Name',
    value: 'fullname',
    width: 150,
  },
  {
    text: 'Profession',
    value: 'profession',
  },
  {
    text: 'Text (bs)',
    value: 'bs',
  },
  {
    text: 'Text (en)',
    value: 'en',
  },
  {
    text: 'Actions',
    value: 'action',
    align: 'center',
  },
]);
const newTestimonial = ref({
  fullname: '',
  profession: '',
  text: {
    en: '',
    bs: '',
  },
});
const testimonialsContainer = ref();
const testimonialId = ref(null);

// methods
async function createTestimonial() {
  try {
    // request
    const { data } = await axios.post(
      '/api/admin/testimonials',
      newTestimonial.value
    );
    // reset state
    newTestimonial.value.fullname = '';
    newTestimonial.value.profession = '';
    newTestimonial.value.text.bs = '';
    newTestimonial.value.text.en = '';
    // update state
    testimonials.value.push(data.testimonial);
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}

async function getTestimonial(id) {
  try {
    // request
    const { data } = await axios.get(
      `/api/admin/testimonials/${id}`,
      newTestimonial.value
    );
    // set data
    testimonialId.value = id;
    newTestimonial.value.fullname = data.fullname;
    newTestimonial.value.profession = data.profession;
    newTestimonial.value.text.bs = data.text.bs;
    newTestimonial.value.text.en = data.text.en;
    // scroll to editor
    await nextTick();
    if (testimonialsContainer.value)
      testimonialsContainer.value.scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}

async function updateTestimonial() {
  try {
    // request
    const { data } = await axios.put(
      `/api/admin/testimonials/${testimonialId.value}`,
      newTestimonial.value
    );
    // reset state
    testimonialId.value = null;
    newTestimonial.value.fullname = '';
    newTestimonial.value.profession = '';
    newTestimonial.value.text.bs = '';
    newTestimonial.value.text.en = '';
    // update state
    const index = testimonials.value.findIndex(
      (t) => t._id == data.updatedTestimonial._id
    );
    if (index !== -1) {
      console.log(data.updatedTestimonial);
      testimonials.value[index] = data.updatedTestimonial;
    }
    // success toast message
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}

async function deleteTestimonial(id) {
  try {
    const { data } = await axios.delete(`/api/admin/testimonials/${id}`);
    // remove from state
    const index = testimonials.value.findIndex((t) => t.id === id);
    testimonials.value.splice(index, 1);
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}
</script>

<template>
  <section ref="testimonialsContainer" class="mb-8">
    <h1 class="mb-5 text-4xl">Section: Testimonials</h1>
    <div class="rounded-lg bg-white p-6">
      <div class="lg:w-1/2 md:w-2/3 mx-auto mb-3">
        <h1
          class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900"
        >
          Create New Testimonial
        </h1>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Full Name</label
              >
              <input
                v-model="newTestimonial.fullname"
                type="text"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Profession</label
              >
              <input
                v-model="newTestimonial.profession"
                type="text"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="txtBs" class="leading-7 text-sm text-gray-600">
                Text (bs)
              </label>
              <textarea
                v-model="newTestimonial.text.bs"
                name="txtBs"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>

              <label for="txtEn" class="leading-7 text-sm text-gray-600">
                Text (en)
              </label>
              <textarea
                v-model="newTestimonial.text.en"
                name="txtEn"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              @click="testimonialId ? updateTestimonial() : createTestimonial()"
              class="flex mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg"
            >
              {{ testimonialId ? 'Update' : 'Create' }}
            </button>
          </div>
        </div>
      </div>

      <data-table
        :headers="testimonialsHeaders"
        :data="testimonials"
        counter
        full-width
      >
        <template #[`bs`]="{ item }">
          <p>{{ item.text.bs }}</p>
        </template>

        <template #[`en`]="{ item }">
          <p>{{ item.text.en }}</p>
        </template>

        <template #[`action`]="{ item }">
          <div class="flex">
            <button
              @click="getTestimonial(item._id)"
              class="rounded-md bg-green-600 text-white py-1 px-2 mr-2"
            >
              <span class="mdi mdi-pencil text-2xl"></span>
            </button>

            <button
              @click="deleteTestimonial(item._id)"
              class="rounded-md bg-red-600 text-white py-1 px-2"
            >
              <span class="mdi mdi-delete text-2xl"></span>
            </button>
          </div>
        </template>
      </data-table>
    </div>
  </section>
</template>

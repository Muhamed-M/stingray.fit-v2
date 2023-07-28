<script setup>
import { ref, reactive, nextTick } from 'vue';
import DataTable from '@/components/shared/DataTable.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
const store = useStore();
// dispatch get method
store.getTestimonials();

// refs
const { testimonials } = storeToRefs(store);
const testimonialsHeaders = ref([
  {
    text: 'Avatar',
    value: 'avatar',
  },
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
const newTestimonial = reactive({
  fullname: '',
  profession: '',
  text: {
    en: '',
    bs: '',
  },
});
const imageUpload = ref();
const testimonialsContainer = ref();
const testimonialId = ref(null);

// methods
async function createTestimonial() {
  let formData = new FormData();
  formData.append('image', imageUpload.value.files[0]);
  formData.append('fullname', newTestimonial.fullname);
  formData.append('profession', newTestimonial.profession);
  formData.append('textBs', JSON.stringify(newTestimonial.text.bs));
  formData.append('textEn', JSON.stringify(newTestimonial.text.en));

  try {
    const { data } = await axios.post('/api/admin/testimonials', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    newTestimonial.fullname = '';
    newTestimonial.profession = '';
    newTestimonial.text.bs = '';
    newTestimonial.text.en = '';
    imageUpload.value.files = null;
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
      newTestimonial
    );
    // set data
    testimonialId.value = id;
    newTestimonial.fullname = data.fullname;
    newTestimonial.profession = data.profession;
    newTestimonial.text.bs = JSON.parse(data.text.bs);
    newTestimonial.text.en = JSON.parse(data.text.en);
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
      newTestimonial
    );
    // reset state
    testimonialId.value = null;
    newTestimonial.fullname = '';
    newTestimonial.profession = '';
    newTestimonial.text.bs = '';
    newTestimonial.text.en = '';
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

async function deleteTestimonial(id, avatar) {
  try {
    const { data } = await axios.delete(`/api/admin/testimonials/${id}`, {
      data: {
        avatar,
      },
    });
    // remove from state
    const index = testimonials.value.findIndex((t) => t.id === id);
    testimonials.value.splice(index, 1);
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}

function parseToHTML(delta) {
  let converter = new QuillDeltaToHtmlConverter(JSON.parse(delta).ops, {});
  let html = converter.convert();
  return html;
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

          <!-- File input -->
          <div class="p-2 w-full">
            <label for="formFile" class="leading-7 text-sm text-gray-600"
              >Upload avatar</label
            >
            <input
              ref="imageUpload"
              class="form-control cursor-pointer block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
            />
          </div>

          <div class="p-2 w-full">
            <div class="relative">
              <label for="txtBs" class="leading-7 text-sm text-gray-600">
                Text (bs)
              </label>
              <div class="h-36 mb-12">
                <QuillEditor
                  v-model:content="newTestimonial.text.bs"
                  name="txtBs"
                  theme="snow"
                />
              </div>

              <label for="txtEn" class="leading-7 text-sm text-gray-600">
                Text (en)
              </label>
              <div class="h-36 mb-12">
                <QuillEditor
                  v-model:content="newTestimonial.text.en"
                  name="txtEn"
                  theme="snow"
                />
              </div>
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
        <template #[`avatar`]="{ item }">
          <img
            v-if="item.avatar"
            :src="'/images/' + item.avatar"
            alt="Person image"
            class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
        </template>

        <template #[`bs`]="{ item }">
          <div v-html="parseToHTML(item.text.bs)"></div>
        </template>

        <template #[`en`]="{ item }">
          <div v-html="parseToHTML(item.text.en)"></div>
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
              @click="deleteTestimonial(item._id, item.avatar)"
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

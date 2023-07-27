<script setup>
import { ref } from 'vue';
import DataTable from '@/components/shared/DataTable.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { toast } from 'vue3-toastify';
import axios from 'axios';
const store = useStore();
// dispatch get method
store.getTransformations();

// refs
const { transformations } = storeToRefs(store);
const imageUpload = ref();
const transformationsHeaders = ref([
  {
    text: 'Image',
    value: 'image',
  },
  {
    text: 'Path',
    value: 'imagePath',
  },
  {
    text: 'Actions',
    value: 'action',
    align: 'center',
  },
]);

// methods
async function uploadTransformation() {
  let data = new FormData();
  data.append('image', imageUpload.value.files[0]);

  let config = {
    header: {
      'Content-Type': 'image/png',
    },
  };

  try {
    const res = await axios.post('/api/admin/transformations', data, config);
    await store.getTransformations();
    toast.success(res.data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}

async function deleteTransformation(id, imagePath, thumbnailPath) {
  try {
    const { data } = await axios.delete(`/api/admin/transformations/${id}`, {
      data: {
        imagePath,
        thumbnailPath,
      },
    });
    await store.getTransformations();
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}
</script>

<template>
  <section class="mb-8">
    <h1 class="mb-5 text-4xl">Section: Transformacije</h1>
    <div class="rounded-lg bg-white p-6 flex">
      <data-table
        :headers="transformationsHeaders"
        :data="transformations"
        counter
      >
        <template #[`image`]="{ item }">
          <img class="w-24" :src="'/images/' + item.thumbnailPath" />
        </template>

        <template #[`action`]="{ item }">
          <button
            @click="
              deleteTransformation(item._id, item.imagePath, item.thumbnailPath)
            "
            class="rounded-md bg-red-600 text-white py-1 px-2"
          >
            <span class="mdi mdi-delete text-2xl"></span>
          </button>
        </template>
      </data-table>

      <!-- File input -->
      <div class="ml-20">
        <label for="formFile" class="form-label inline-block mb-2 text-gray-700"
          >Upload image</label
        >
        <input
          ref="imageUpload"
          class="form-control cursor-pointer block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
        />
        <button
          @click="uploadTransformation()"
          class="mt-3 text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg"
        >
          Upload
        </button>
      </div>
    </div>
  </section>
</template>

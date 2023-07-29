<script setup>
import { reactive } from 'vue';
import * as Yup from 'yup';
import { toast } from 'vue3-toastify';
import axios from 'axios';

// emits
const emit = defineEmits(['cancel']);
function cancel() {
  emit('cancel');
}

// state
const enrollment = reactive({
  email: '',
  fullName: '',
  phoneNumber: '',
  about: '',
});

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please fill a valid email address')
    .required('Email is required'),
  fullName: Yup.string()
    .max(100, 'Full name must be 100 characters or less')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{4,15}$/, 'Please fill a valid phone number')
    .required('Phone number is required'),
  about: Yup.string()
    .max(1000, 'About must be 1000 characters or less')
    .required('About is required'),
});

// methods
async function submitEnrollment() {
  try {
    // Validate the form data against the schema
    await schema.validate({
      email: enrollment.email,
      fullName: enrollment.fullName,
      phoneNumber: enrollment.phoneNumber,
      about: enrollment.about,
    });
    // request
    const { data } = await axios.post('/api/enrollments', enrollment);
    // reset state
    enrollment.value = {
      email: '',
      fullName: '',
      phoneNumber: '',
      about: '',
    };
    // close dialog
    emit('cancel');
    // success toast
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    console.log(error);
  }
}
</script>

<template>
  <form @submit.prevent="submitEnrollment">
    <div class="border-b border-gray-900/10 pb-12">
      <p class="text-sm leading-6 text-gray-600 mb-4">
        Nakon što upišete vaše podatke, napravit ćemo vam termin za informativni
        poziv na kojem ćete dobiti sve informacije vezane za saradnju, način
        uplate i sljedeće korake.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-2">
        <div class="sm:col-span-3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email adresa</label
          >
          <div class="mt-2">
            <input
              v-model="enrollment.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="phone"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Broj Telefona</label
          >
          <div class="mt-2">
            <input
              v-model="enrollment.phoneNumber"
              id="phone"
              name="phone"
              type="text"
              autocomplete="number"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="col-span-full mb-2">
        <label
          for="full-name"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Ime i prezime</label
        >
        <div class="mt-2">
          <input
            v-model="enrollment.fullName"
            type="text"
            name="full-name"
            id="full-name"
            autocomplete="given-name"
            class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="col-span-full">
        <label
          for="about"
          class="block text-sm font-medium leading-6 text-gray-900"
          >About</label
        >
        <div class="mt-2">
          <textarea
            v-model="enrollment.about"
            id="about"
            name="about"
            rows="3"
            class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-600">
          Par rečenica o sebi i razlogu prijave za saradnju
        </p>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
        @click="cancel()"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

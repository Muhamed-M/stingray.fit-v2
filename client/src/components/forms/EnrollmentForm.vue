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
  sex: '',
  age: null,
  agree: false,
});

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Molimo vas da ispunite validan email!')
    .required('Email je obavezno polje!'),
  about: Yup.string().max(1000, 'About must be 1000 characters or less'),
});

// methods
async function submitEnrollment() {
  try {
    // Validate the form data against the schema
    await schema.validate(enrollment);
    // request
    const { data } = await axios.post('/api/enrollments', enrollment);
    // close dialog
    emit('cancel');
    // success toast
    toast.success(data.message, { position: toast.POSITION.BOTTOM_CENTER });
  } catch (error) {
    toast.error(error.message ? error.message : error.response.data.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    console.log(error);
  }
}
</script>

<template>
  <form @submit.prevent="submitEnrollment">
    <div class="border-b border-gray-900/10 pb-8">
      <p class="text-sm leading-6 text-gray-600 mb-4">
        Nakon što upišete vaše podatke, napravit ćemo vam termin za informativni poziv na kojem ćete dobiti sve
        informacije vezane za saradnju, način uplate i sljedeće korake.
      </p>

      <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 mb-2">
        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email adresa</label>
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
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Broj Telefona</label>
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
        <label for="full-name" class="block text-sm font-medium leading-6 text-gray-900">Ime i prezime</label>
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

      <div class="col-span-full mb-2">
        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">
          Par rečenica o sebi i razlogu prijave za saradnju
        </label>
        <div class="mt-2">
          <textarea
            v-model="enrollment.about"
            id="about"
            name="about"
            rows="3"
            class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 mb-2">
        <div class="sm:col-span-3">
          <label for="sex" class="block text-sm font-medium leading-6 text-gray-900">Spol</label>
          <div class="mt-2">
            <select
              v-model="enrollment.sex"
              id="sex"
              name="sex"
              autocomplete="sex"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
            >
              <option>Muško</option>
              <option>Žensko</option>
            </select>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Dob</label>
          <div class="mt-2">
            <input
              v-model="enrollment.age"
              id="age"
              name="age"
              type="number"
              autocomplete="age"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="relative flex gap-x-3">
        <div class="flex h-6 items-center">
          <input
            v-model="enrollment.agree"
            id="agreement"
            name="agreement"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
          />
        </div>
        <div class="text-sm leading-6 text-left">
          <label for="agreement" class="font-medium text-gray-900">
            Razumijem i slažem se s prikupljanjem i korištenjem mojih osobnih podataka kako je ispod opisano.
          </label>
          <p class="text-gray-500">
            Davanjem svojih osobnih podataka dopuštate nam da izradimo prilagođeni plan treninga koji odgovara vašim
            jedinstvenim potrebama: Puno ime: za personalizaciju vašeg fitness iskustva. E-pošta i broj telefona: Za
            komunikaciju i koordinaciju s vama. Dob i spol: za prilagođavanje vašeg plana vježbanja i prehrane.
            Pročitajte naš Privacy Policy kako biste razumjeli kako štitimo i postupamo s vašim podacima.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900" @click="cancel()">Cancel</button>
      <button
        type="submit"
        class="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        :class="!!enrollment.agree || 'bg-cyan-300 cursor-not-allowed'"
        :disabled="!enrollment.agree"
      >
        Save
      </button>
    </div>
  </form>
</template>

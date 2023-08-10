<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import ButtonComponent from './shared/ButtonComponent.vue';
import DialogComponent from './shared/DialogComponent.vue';
import EnrollmentForm from './forms/EnrollmentForm.vue';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();

// refs
const dialog = ref(false);
</script>

<template>
  <section class="text-gray-600 body-font hero">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-full"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200"
        >
          {{ t('hero_title', {}, { locale: lang.value }) }}
        </h1>
        <p class="mb-8 leading-relaxed text-white">
          {{ t('hero_subtitle', {}, { locale: lang.value }) }}
        </p>
        <div class="flex justify-center">
          <ButtonComponent
            class="text-gray-700 bg-gray-100 hover:bg-gray-200"
            @click="dialog = true"
          >
            {{ t('button_text_1', {}, { locale: lang.value }) }}
          </ButtonComponent>
        </div>
      </div>
    </div>

    <a href="#cards" class="down-btn">
      <span class="mdi mdi=chevron-double-down"> </span>
    </a>
  </section>

  <DialogComponent :show="dialog" @close="dialog = false">
    <template v-slot:title>
      <h1 class="text-lg">Prijava za online mentorstvo</h1>
    </template>

    <template v-slot:body>
      <EnrollmentForm @cancel="dialog = false" />
    </template>
  </DialogComponent>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/images/header-hero.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.hero::after {
  content: '';
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.down-btn {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #fff;
}
</style>

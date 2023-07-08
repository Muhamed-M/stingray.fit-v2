<script setup>
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import ButtonComponent from './shared/ButtonComponent.vue';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();
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
          Oslobodite se boli i naučite se kretati bez ograničenja uz naš online
          coaching program.
        </h1>
        <p class="mb-8 leading-relaxed text-white">
          Naš program rješava potencijalo opasne asimetrije, ukočenosti skeleta
          i bolove, a zatim radi na izgradnji snage, vještine i graciozne
          kretnje.
        </p>
        <div class="flex justify-center">
          <ButtonComponent class="text-gray-700 bg-gray-100 hover:bg-gray-200">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
              target="_blank"
            >
              {{ t('button_text_1', {}, { locale: lang.value }) }}
            </a>
          </ButtonComponent>
        </div>
      </div>
    </div>

    <a href="#cards" class="down-btn">
      <span class="mdi mdi=chevron-double-down"> </span>
    </a>
  </section>
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

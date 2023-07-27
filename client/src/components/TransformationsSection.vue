<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { useI18n } from 'vue-i18n';
const store = useStore();
const { transformations, lang } = storeToRefs(store);
const { t, locale } = useI18n();

store.getTransformations();
</script>

<template>
  <section class="text-gray-600 body-font" id="transformations">
    <div class="container px-5 py-6 mx-auto">
      <h1
        class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center"
      >
        {{ t('transformations_title', {}, { locale: lang.value }) }}
      </h1>

      <div class="flex flex-wrap">
        <div
          class="lg:w-1/4 sm:w-1/2 p-4"
          v-for="(image, i) in transformations"
          :key="i"
        >
          <img
            alt="gallery"
            class="w-full h-full"
            :src="'/images/' + image.imagePath"
          />
        </div>
      </div>
    </div>
  </section>
</template>

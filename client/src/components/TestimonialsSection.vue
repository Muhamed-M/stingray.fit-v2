<script setup>
import TestimonialComponent from '@/components/TestimonialComponent.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { useI18n } from 'vue-i18n';
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';
const { t, locale } = useI18n();
const store = useStore();
const { loading, testimonials, lang } = storeToRefs(store);

store.getTestimonials();
</script>

<template>
  <section class="text-gray-600 body-font" id="testimonials">
    <div class="container px-5 py-6 mx-auto">
      <h1
        class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center"
      >
        {{ t('testimonials_title', {}, { locale: lang.value }) }}
      </h1>

      <LoadingSpinner
        v-if="loading"
        class="flex justify-center align-center py-6"
      />

      <div v-else class="flex flex-wrap">
        <testimonial-component
          v-for="(testimonial, i) in testimonials"
          :key="i"
          :fullname="testimonial.fullname"
          :profession="testimonial.profession"
          :avatar="testimonial.avatar"
          :comment="testimonial.text[lang.value]"
        />
      </div>
    </div>
  </section>
</template>

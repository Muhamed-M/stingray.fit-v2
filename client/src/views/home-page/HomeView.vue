<script setup>
import { defineAsyncComponent } from 'vue';

import HeroSection from '@/components/HeroSection.vue';
const CardsSection = defineAsyncComponent(() => import('@/components/CardsSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const WhatsIncluded = defineAsyncComponent(() => import('@/components/WhatsIncluded.vue'));
const VideosSection = defineAsyncComponent(() => import('@/components/VideosSection.vue'));
// const ShopSection = defineAsyncComponent(() =>
//   import('@/components/ShopSection.vue')
// );
const TransformationsSection = defineAsyncComponent(() => import('@/components/TransformationsSection.vue'));
const TestimonialsSection = defineAsyncComponent(() => import('@/components/TestimonialsSection.vue'));
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'));
</script>

<template>
  <div>
    <HeroSection />
    <CardsSection />
    <AboutSection />
    <WhatsIncluded />
    <VideosSection />
    <!-- <ShopSection /> -->
    <TestimonialsSection />
    <TransformationsSection />
    <FooterSection />
  </div>
</template>

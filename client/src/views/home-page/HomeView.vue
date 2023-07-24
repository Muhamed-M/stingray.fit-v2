<script setup>
import { defineAsyncComponent } from 'vue';

import NavComponent from '@/components/NavComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
const CardsSection = defineAsyncComponent(() =>
  import('@/components/CardsSection.vue')
);
const AboutSection = defineAsyncComponent(() =>
  import('@/components/AboutSection.vue')
);
const WhatsIncluded = defineAsyncComponent(() =>
  import('@/components/WhatsIncluded.vue')
);
const VideosSection = defineAsyncComponent(() =>
  import('@/components/VideosSection.vue')
);
const ShopSection = defineAsyncComponent(() =>
  import('@/components/ShopSection.vue')
);
const TransformationsSection = defineAsyncComponent(() =>
  import('@/components/TransformationsSection.vue')
);
const TestimonialsSection = defineAsyncComponent(() =>
  import('@/components/TestimonialsSection.vue')
);
const FooterSection = defineAsyncComponent(() =>
  import('@/components/FooterSection.vue')
);
// import CardsSection from '@/components/CardsSection.vue';
// import AboutSection from '@/components/AboutSection.vue';
// import WhatsIncluded from '@/components/WhatsIncluded.vue';
// import VideosSection from '@/components/VideosSection.vue';
// import ShopSection from '@/components/ShopSection.vue';
// import TransformationsSection from '@/components/TransformationsSection.vue';
// import TestimonialsSection from '@/components/TestimonialsSection.vue';
// import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <div>
    <NavComponent />
    <HeroSection />
    <CardsSection />
    <AboutSection />
    <WhatsIncluded />
    <VideosSection />
    <ShopSection />
    <TestimonialsSection />
    <TransformationsSection />
    <FooterSection />
  </div>
</template>

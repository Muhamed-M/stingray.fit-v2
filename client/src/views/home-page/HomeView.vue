<template>
    <div>
        <NavComponent />
        <HeroSection />
        <CardsSection />
        <AboutSection />
        <VideosSection />
        <PlansSection />
        <TestimonialsSection />
        <TransformationsSection />
        <FooterSection />
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import CardsSection from '@/components/CardsSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import VideosSection from '@/components/VideosSection.vue';
import PlansSection from '@/components/PlansSection.vue';
import TransformationsSection from '@/components/TransformationsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    name: 'HomeView',
    components: {
        NavComponent,
        HeroSection,
        CardsSection,
        AboutSection,
        VideosSection,
        PlansSection,
        TestimonialsSection,
        TransformationsSection,
        FooterSection
    }
};
</script>

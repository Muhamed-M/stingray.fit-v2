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
import NavComponent from '@/components/NavComponent';
import HeroSection from '@/components/HeroSection';
import CardsSection from '@/components/CardsSection';
import AboutSection from '@/components/AboutSection';
import VideosSection from '@/components/VideosSection';
import PlansSection from '@/components/PlansSection';
import TransformationsSection from '@/components/TransformationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';

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
        FooterSection,
    },
};
</script>

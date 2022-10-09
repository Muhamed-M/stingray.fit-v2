<template>
    <div>
        <NavComponent />
        <HeroComponent />
        <CardsComponent />
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent';
import HeroComponent from '@/components/HeroComponent';
import CardsComponent from '@/components/CardsComponent';

export default {
    name: 'HomeView',
    components: {
        NavComponent,
        HeroComponent,
        CardsComponent,
    },
};
</script>

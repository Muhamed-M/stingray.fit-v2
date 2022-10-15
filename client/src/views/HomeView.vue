<template>
    <div>
        <NavComponent />
        <HeroComponent />
        <CardsComponent />
        <AboutComponent />
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent';
import HeroComponent from '@/components/HeroComponent';
import CardsComponent from '@/components/CardsComponent';
import AboutComponent from '@/components/AboutComponent';

export default {
    name: 'HomeView',
    components: {
        NavComponent,
        HeroComponent,
        CardsComponent,
        AboutComponent,
    },
};
</script>

<style>
.naslov {
    position: relative;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: rgb(48, 56, 56);
    text-transform: uppercase;
}

.naslov::before {
    content: '';
    width: 80px;
    height: 6px;
    background-color: rgb(0, 152, 172);
    border-radius: 5px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
}

.m-b-md {
    margin-bottom: 15px;
}
</style>

<template>
    <div>
        <section class="hero">
            <h1 class="sign">BUILDING ATHLETES NOT EGOS!</h1>
            <StingrayButton
                text="Prijavi se"
                bg-color="#fff"
                text-color="#2c3333"
                hover-bg-color="#eaeaea"
            />
            <a href="#cards" class="down-btn"><v-icon name="bi-caret-down-fill" scale="5" /></a>
        </section>
    </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiCaretDownFill } from 'oh-vue-icons/icons';
addIcons(BiCaretDownFill);
import StingrayButton from '@/components/ButtonComponent';

export default {
    name: 'HeroSection',

    components: {
        'v-icon': OhVueIcon,
        StingrayButton,
    },
};
</script>

<style scoped>
.hero {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(@/assets/images/header-hero.jpg) no-repeat fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    color: #fff;
    padding: 0 2rem;
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

.sign {
    font-family: 'Oswald', sans-serif;
    font-size: 4rem;
    text-align: center;
    letter-spacing: 4px;
}

.down-btn {
    position: absolute;
    bottom: 4vh;
    cursor: pointer;
    color: #fff;
}
</style>

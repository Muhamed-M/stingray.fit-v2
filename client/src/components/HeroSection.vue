<script setup>
import StingrayButton from '@/components/ButtonComponent.vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();
</script>

<template>
    <div>
        <section class="hero">
            <h1 class="sign">BUILDING ATHLETES NOT EGOS!</h1>
            <stingray-button class="px-0 bg-white hover:bg-slate-200 text-gray-700"
                ><a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
                    target="_blank"
                    class="px-5 py-4"
                >
                    {{ t('button_text_1', {}, { locale: lang.value }) }}
                </a>
            </stingray-button>
            <a href="#cards" class="down-btn"
                ><span class="material-symbols-outlined text-7xl font-semibold">
                    keyboard_double_arrow_down
                </span></a
            >
        </section>
    </div>
</template>

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
    bottom: 5vh;
    cursor: pointer;
    color: #fff;
}
</style>

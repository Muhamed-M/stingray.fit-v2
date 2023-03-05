<script setup>
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();
</script>

<template>
    <section class="improve bg-cyan-600" id="cards">
        <div class="box">
            <img src="@/assets/images/dumbbell.svg" />
            <h3>{{ t('card_1_title', {}, { locale: lang.value }) }}</h3>
            <p>
                {{ t('card_1_text', {}, { locale: lang.value }) }}
            </p>
        </div>
        <div class="box">
            <img src="@/assets/images/woman.svg" />
            <h3>{{ t('card_2_title', {}, { locale: lang.value }) }}</h3>
            <p>
                {{ t('card_2_text', {}, { locale: lang.value }) }}
            </p>
        </div>
        <div class="box">
            <img src="@/assets/images/muscle.svg" />
            <h3>{{ t('card_3_title', {}, { locale: lang.value }) }}</h3>
            <p>{{ t('card_3_text', {}, { locale: lang.value }) }}</p>
        </div>
    </section>
</template>

<style scoped>
.improve {
    font-size: 1rem;
    overflow: hidden;
    color: white;
}

.box {
    width: 290px;
    height: 380px;
    padding: 1.25em 0.9em;
    text-align: center;
    position: relative;
    transition: 0.5s;
    cursor: default;
    line-height: 20px;
    margin: 2rem 0;
    margin-inline: auto;
    background: rgba(255, 255, 255, 0.21);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.box:hover {
    cursor: pointer;
    transform: translateY(-20px);
}

.box img {
    width: 25%;
    margin-inline: auto;
    margin-bottom: 1.75rem;
}

.box h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 30px;
}

@media screen and (min-width: 768px) {
    .improve {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .box {
        margin: 2rem;
    }
}
</style>

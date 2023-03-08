<script setup>
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();

/* data: () => ({
        slideValue: 100,
    }),

    mounted() {
        this.transitionCheck();
    },

    methods: {
        next() {
            if (this.slideValue > (this.$refs.slideshow.childNodes.length - 2) * 100) return;
            this.slideValue += 100;
            this.$refs.slideshow.style.transition = 'transform 400ms ease-in-out';
        },

        prev() {
            if (this.slideValue < 100) return;
            this.slideValue -= 100;
            this.$refs.slideshow.style.transition = 'transform 400ms ease-in-out';
        },

        transitionCheck() {
            this.$refs.slideshow.addEventListener('transitionend', () => {
                if (this.$refs.slideshow.childNodes[this.slideValue / 100].id === 'first-clone') {
                    this.$refs.slideshow.style.transition = 'none';
                    this.slideValue = 100;
                }
                if (this.$refs.slideshow.childNodes[this.slideValue / 100].id === 'last-clone') {
                    this.$refs.slideshow.style.transition = 'none';
                    this.slideValue = (this.$refs.slideshow.childNodes.length - 2) * 100;
                }
            });
        },
    }, */
</script>

<template>
    <section class="video-section bg-gray-800 text-slate-200">
        <div
            class="container mx-auto flex justify-between px-5 py-24 lg:flex-row flex-col items-center"
        >
            <div class="lg:pr-24 mb-8 md:pr-16 lg:w-1/2 w-5/6">
                <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/2atyL0ZsQIo"
                    title="Calisthenics/movement motivation: be a warrior"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>

            <div
                class="lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center"
            >
                <h1 class="title-font sm:text-4xl text-3xl mb-6 font-medium text-slate-300">
                    {{ t('videos_title', {}, { locale: lang.value }) }}
                </h1>
                <p class="mb-8 leading-relaxed text-lg">
                    {{ t('videos_p_1', {}, { locale: lang.value }) }}
                </p>
                <p class="mb-8 leading-relaxed text-lg">
                    {{ t('videos_p_2', {}, { locale: lang.value }) }}
                </p>
            </div>
        </div>
        <!-- SLIDER BUTTON -->
        <!-- <v-icon
            @click="prev()"
            class="slider-btn"
            name="bi-arrow-left-circle-fill"
            scale="3"
            fill="#fff"
        />

        <div class="slideshow-container">
            <div
                ref="slideshow"
                class="slideshow"
                :style="{ transform: `translateX(${-slideValue}%)` }"
            >
                <iframe
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/2atyL0ZsQIo"
                    title="Calisthenics/movement motivation: be a warrior"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div> -->
        <!-- SLIDER BUTTON -->
        <!-- <v-icon
            @click="next()"
            class="slider-btn"
            name="bi-arrow-right-circle-fill"
            scale="3"
            fill="#fff"
        /> -->
    </section>
</template>

<style scoped>
.video-section {
    position: relative;
    min-width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-section::before,
.video-section::after {
    content: '';
    background-color: #fff;
    position: absolute;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 3;
}

.video-section::before {
    top: -1px;
    clip-path: polygon(100% 0, 0 0, 0 100%);
}

.video-section::after {
    bottom: -1px;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.slideshow-container {
    position: relative;
    width: 720px;
    height: 480px;
    overflow: hidden;
    z-index: 5;
}

.slideshow {
    width: 100%;
    display: flex;
}

.slideshow iframe {
    min-width: 100%;
}

.slider-btn {
    cursor: pointer;
}
</style>

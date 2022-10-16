<template>
    <section class="video-section">
        <!-- SLIDER BUTTON -->
        <v-icon
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
                    id="last-clone"
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/2atyL0ZsQIo"
                    title="Calisthenics/movement motivation: be a warrior"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/fjOYpo_7jq4"
                    title="Chest cabel press for sternal fibers"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/DVsiaZSldCs"
                    title="Forrest training motivation (nature, calisthenics)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/2atyL0ZsQIo"
                    title="Calisthenics/movement motivation: be a warrior"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    id="first-clone"
                    width="720"
                    height="480px"
                    src="https://www.youtube.com/embed/fjOYpo_7jq4"
                    title="Chest cabel press for sternal fibers"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <!-- SLIDER BUTTON -->
        <v-icon
            @click="next()"
            class="slider-btn"
            name="bi-arrow-right-circle-fill"
            scale="3"
            fill="#fff"
        />
    </section>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiArrowRightCircleFill, BiArrowLeftCircleFill } from 'oh-vue-icons/icons';
addIcons(BiArrowRightCircleFill, BiArrowLeftCircleFill);

export default {
    name: 'VideosSection',

    components: {
        'v-icon': OhVueIcon,
    },

    data: () => ({
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
    },
};
</script>

<style scoped>
.video-section {
    position: relative;
    min-width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c3333;
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
    bottom: 0;
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

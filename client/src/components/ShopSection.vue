<script setup>
import { ref } from 'vue';
import StingrayButton from '@/components/ButtonComponent.vue';
import DialogComponent from './DialogComponent.vue';
import DataTable from './DataTable.vue';
import Logo from './Logo.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { useI18n } from 'vue-i18n';
const store = useStore();
const { workoutPlans, lang } = storeToRefs(store);
const { t, locale } = useI18n();

store.getWorkoutPlansData();

//refs
const open1 = ref(false);
const open2 = ref(false);
const trening1Headers = ref([
    {
        text: 'Vježba',
        value: 'exercise'
    },
    {
        text: 'Setovi',
        value: 'sets'
    },
    {
        text: 'Ponavljanja',
        value: 'reps'
    },
    {
        text: 'Pauza',
        value: 'pause'
    },
    {
        text: 'Napomene',
        value: 'note'
    }
]);
const trening1Data = ref([
    {
        exercise: 'Landmine Hip Thrust',
        exLink: 'https://youtu.be/wvD8jVZ2B3Q',
        sets: '3-4',
        reps: '8-12',
        pause: '',
        note: 'Ako radiš doma, umjesto tega možeš koristiti bučicu ili zvono.'
    },
    {
        exercise: '............',
        sets: '3-4',
        reps: '10-15',
        pause: '',
        note: ''
    },
    {
        exercise: '............',
        sets: '3-4',
        reps: '5 udaha (30-45s)',
        pause: '',
        note: 'Kako budeš napredovala tako će izdah postajati duži, zato će vrijeme varirati.'
    },
    {
        exercise: '............',
        sets: '',
        reps: '',
        pause: '',
        note: ''
    },
    {
        exercise: 'Side plank (progresija 1 i 2)',
        sets: '',
        reps: '',
        pause: '',
        note: ''
    }
]);

const disanjeHeaders = ref([
    {
        text: 'Disanje u sedmici 1-2',
        value: 'exercise'
    },
    {
        text: 'Setovi',
        value: 'sets'
    },
    {
        text: 'Broj udaha',
        value: 'reps'
    },
    {
        text: 'Napomene',
        value: 'note'
    }
]);
const disanjeData = ref([
    {
        exercise: 'Supine cross connect',
        exLink: 'https://youtu.be/iGoDXKXoK_A',
        sets: '2-3',
        reps: '5',
        note: ''
    },
    {
        exercise: '............',
        sets: '2-3',
        reps: '5',
        pause: '',
        note: ''
    },
    {
        exercise: '............',
        sets: '2-3',
        reps: '5',
        pause: '',
        note: ''
    }
]);
</script>

<template>
    <section class="price" id="shop">
        <h1 class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center">
            Shop
        </h1>
        <div class="container-price">
            <div class="box-price">
                <h1 class="text-6xl font-semibold">{{ workoutPlans[0]?.price }}€</h1>
                <h6>{{ t('product_1_title', {}, { locale: lang.value }) }}</h6>
                <ul>
                    <li>&#10003; {{ t('product_line_1', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_2', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_3', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_4', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_5', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_6', {}, { locale: lang.value }) }}</li>
                    <li>&#10003; {{ t('product_line_7', {}, { locale: lang.value }) }}</li>
                </ul>
                <StingrayButton
                    :text="t('button_text_2', {}, { locale: lang.value })"
                    class="bg-cyan-600 hover:bg-cyan-700 text-white"
                    @click="open1 = true"
                />

                <DialogComponent :show="open1" @close="open1 = false">
                    <template v-slot:title>
                        <h1 class="text-lg">
                            {{ t('product_1_h_1', {}, { locale: lang.value }) }}
                        </h1>
                    </template>

                    <template v-slot:body>
                        <p class="mb-4">
                            {{ t('product_1_p_1', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_1_p_2', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_1_p_3', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_1_p_4', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_1_p_5', {}, { locale: lang.value }) }}
                            <a
                                href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTIwMTc1MzU2NTc4ODQ3?story_media_id=2537337773271444940_2214195949&utm_medium=share_sheet"
                                target="_blank"
                                class="underline"
                            >
                                profilu</a
                            >.
                        </p>

                        <stingray-button
                            class="px-0 block mx-auto bg-cyan-600 hover:bg-cyan-700 text-white"
                        >
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
                                target="_blank"
                                class="px-5 py-4"
                            >
                                {{ t('button_text_1', {}, { locale: lang.value }) }}
                            </a>
                        </stingray-button>
                    </template>
                </DialogComponent>
            </div>
            <!-- WOMAN IN MOTION -->
            <div class="box-price woman-motion flex flex-col justify-between">
                <Logo class="w-11" />
                <div>
                    <div class="font-sans sm:text-6xl text-5xl text-right font-black">
                        WOMAN <br />
                        IN <br />
                        MOTION <br />
                        <span class="text-cyan-500 text-4xl">BASICS</span>
                    </div>
                    <StingrayButton
                        :text="t('button_text_2', {}, { locale: lang.value })"
                        class="bg-white hover:bg-slate-200 text-gray-700 self-center mt-8"
                        @click="open2 = true"
                    />
                </div>

                <DialogComponent :show="open2" @close="open2 = false">
                    <template v-slot:title>
                        <h1 class="text-lg">
                            {{ t('product_2_h_1', {}, { locale: lang.value }) }}
                        </h1>
                    </template>

                    <template v-slot:body>
                        <p class="mb-4">
                            {{ t('product_2_p_1', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_2_p_2', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_2_p_3', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4">
                            {{ t('product_2_p_4', {}, { locale: lang.value }) }}
                        </p>
                        <p class="mb-4 font-semibold">
                            {{ t('product_2_p_5', {}, { locale: lang.value }) }}
                        </p>
                        <stingray-button
                            class="px-0 block mx-auto bg-cyan-600 hover:bg-cyan-700 text-white"
                        >
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
                                target="_blank"
                                class="px-5 py-4"
                            >
                                {{ t('button_text_3', {}, { locale: lang.value }) }}
                            </a>
                        </stingray-button>

                        <p class="mb-4 font-semibold">
                            {{ t('product_2_p_6', {}, { locale: lang.value }) }}
                        </p>

                        <div class="my-8 md:w-3/4 md:mx-auto w-100">
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/J9gzwp9q3uY"
                                title="Video introduction (BASICS)"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div class="my-8 md:w-3/4 md:mx-auto w-100">
                            <iframe
                                width="100%"
                                height="500"
                                src="https://www.youtube.com/embed/khnr5WgVQD0"
                                title="Ispravna tehnika disanja"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <h2 class="text-cyan-500 text-2xl mb-3">
                            {{ t('product_2_h_2', {}, { locale: lang.value }) }}
                        </h2>
                        <p class="mb-3 text-left">
                            {{ t('product_2_p_7', {}, { locale: lang.value }) }}
                        </p>
                        <ul class="list-disc text-left">
                            <li class="ml-6">
                                {{ t('product_2_l_1', {}, { locale: lang.value }) }}
                            </li>
                            <li class="ml-6">
                                {{ t('product_2_l_2', {}, { locale: lang.value }) }}
                            </li>
                            <li class="ml-6">
                                {{ t('product_2_l_3', {}, { locale: lang.value }) }}
                            </li>
                            <li class="ml-6">
                                {{ t('product_2_l_4', {}, { locale: lang.value }) }}
                            </li>
                        </ul>

                        <h2 class="text-cyan-500 text-2xl mb-3 mt-8">
                            {{ t('product_2_h_3', {}, { locale: lang.value }) }}
                        </h2>
                        <ol class="list-decimal text-left">
                            <li class="ml-6">
                                {{ t('product_2_l_5', {}, { locale: lang.value }) }}
                            </li>
                            <li class="ml-6">
                                {{ t('product_2_l_6', {}, { locale: lang.value }) }}
                            </li>
                        </ol>
                        <p class="mt-3">
                            {{ t('product_2_p_8', {}, { locale: lang.value }) }}
                        </p>

                        <h2 class="text-cyan-500 text-2xl mb-3 mt-8">Trening 1 preview</h2>
                        <p class="mb-3">
                            Disanje + Ako radiš prvu vježbu sa tegom (kao što je Landmine hip
                            thrust) onda ide zagrijavanje bez tega 1x12, pa onda sa tegom zadani
                            broj serija. <br />
                            Prvi trening radi bez tega. <br />
                            <a
                                href="https://youtu.be/Bw76VhQrDqk"
                                target="_blank"
                                class="underline"
                            >
                                Hinge learning drill
                            </a>
                            (ovim drilom ćeš izvježbati ispravnu tehniku za Kickstand hinge vježbu)
                        </p>
                        <data-table :headers="trening1Headers" :data="trening1Data">
                            <template #[`exercise`]="{ item }">
                                <a
                                    v-if="item.exLink"
                                    :href="item.exLink"
                                    target="_blank"
                                    class="underline"
                                >
                                    {{ item.exercise }}
                                </a>
                                <span v-else>{{ item.exercise }}</span>
                            </template>
                        </data-table>

                        <data-table :headers="disanjeHeaders" :data="disanjeData" class="mt-4">
                            <template #[`exercise`]="{ item }">
                                <a
                                    v-if="item.exLink"
                                    :href="item.exLink"
                                    target="_blank"
                                    class="underline"
                                >
                                    {{ item.exercise }}
                                </a>
                                <span v-else>{{ item.exercise }}</span>
                            </template>
                        </data-table>
                    </template>
                </DialogComponent>
            </div>
            <!-- <div class="box-price bg-cyan-600">
                <h1 class="text-6xl font-semibold">{{ workoutPlans[1]?.price }}€</h1>
                <h6>personalni trening</h6>
                <ul>
                    <li>&#10003; Testiranje</li>
                    <li>&#10003; Plan treninga</li>
                    <li>&#10003; Plan ishrane</li>
                    <li>&#10003; 12 treninga uz nadzor trenera</li>
                    <li>&#10003; Prijavi se na +387 61 872 308</li>
                </ul>
                <div class="box-icons">
                    <a href="https://api.whatsapp.com/send?phone=38761872308" target="_blank">
                        <i class="fa-brands fa-whatsapp text-white text-5xl"></i>
                    </a>
                </div>
                <StingrayButton
                    text="Više informacija"
                    class="bg-white hover:bg-slate-200 text-gray-700"
                />
            </div> -->
        </div>
    </section>
</template>

<style scoped>
.container-price {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0 2rem 0;
}

.box-price {
    font-size: 2rem;
    position: relative;
    max-width: 430px;
    width: 90%;
    min-height: 600px;
    margin: 2.2rem;
    box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    border-radius: 8px;
    color: #303838;
    text-align: center;
    padding: 3rem 1.8rem;
}

.woman-motion {
    background-image: url('../assets/images/woman-in-motion.jpeg');
    background-size: cover;
    background-position: center center;
}

.box-price h6 {
    position: relative;
}

.box-price h6::before {
    content: '';
    height: 3px;
    width: 50px;
    background-color: #303838;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.box-price:nth-child(2) {
    top: 30px;
    color: #fff;
}

.box-price:nth-child(2) h6::before {
    background-color: #fff;
}

.box-price ul {
    list-style-type: none;
    font-size: 1.1rem;
    margin: 2rem 0 2rem 0;
    text-align: left;
    line-height: 2;
}

.box-icons {
    margin-bottom: 2rem;
}
</style>

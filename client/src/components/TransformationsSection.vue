<template>
    <section class="text-gray-600 body-font" id="transformacije">
        <div class="container px-5 py-6 mx-auto">
            <h1 class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center">
                Transformacije
            </h1>

            <div class="flex flex-wrap">
                <div class="lg:w-1/4 sm:w-1/2 p-4" v-for="(image, i) in transformations" :key="i">
                    <img alt="gallery" class="w-full h-full" :src="image.imagePath" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'TransformationsSection',

    computed: {
        ...mapState(['transformations'])
    },

    async created() {
        await this.getTransformations();
    },

    methods: {
        ...mapActions(['getTransformations'])
    }
};
</script>

<style scoped></style>

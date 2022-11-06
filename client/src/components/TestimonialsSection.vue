<template>
    <section class="text-gray-600 body-font" id="testimonials">
        <div class="container px-5 py-6 mx-auto">
            <h1 class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center">
                Šta kažu klijenti
            </h1>
            <div class="flex flex-wrap">
                <testimonial-component
                    v-for="(testimonial, i) in testimonials"
                    :key="i"
                    :fullname="testimonial.fullname"
                    :profession="testimonial.profession"
                    :comment="testimonial.comment"
                />
            </div>
        </div>
    </section>
</template>

<script>
import TestimonialComponent from '@/components/TestimonialComponent';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'TestimonialsSection',

    components: {
        TestimonialComponent
    },

    computed: {
        ...mapState(['testimonials'])
    },

    async created() {
        await this.getTestimonials();
    },

    methods: {
        ...mapActions(['getTestimonials'])
    }
};
</script>

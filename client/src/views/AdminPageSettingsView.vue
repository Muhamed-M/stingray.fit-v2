<template>
    <div class="p-8">
        <section class="mb-8">
            <h1 class="mb-5 text-4xl">Section: Planovi Treninga</h1>
            <div class="flex flex-wrap gap-5">
                <div class="p-8 space-y-8 text-center bg-white rounded-lg">
                    <h2 class="font-medium uppercase mb-2">{{ workoutPlans[0]?.title }}</h2>
                    <div class="text-5xl font-bold uppercase text-black mb-2">
                        <span>Current price: </span>
                        <span>{{ workoutPlans[0]?.price }}€</span>
                    </div>
                    <form
                        @submit.prevent="updatePrice(workoutPlans[0]._id)"
                        class="flex justify-center align-center"
                    >
                        <div class="relative mr-2">
                            <input
                                v-model="onlinePrice"
                                type="text"
                                required
                                placeholder="Enter new price..."
                                class="block w-100 rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-base"
                            />
                            <span class="input-icon">€</span>
                        </div>
                        <input
                            class="group cursor-pointer rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            type="submit"
                            value="Change"
                        />
                    </form>
                </div>

                <div class="p-8 space-y-8 text-center bg-cyan-600 rounded-lg">
                    <h2 class="font-medium uppercase text-white mb-2">
                        {{ workoutPlans[1]?.title }}
                    </h2>
                    <div class="text-5xl font-bold text-white uppercase mb-2">
                        <span>Current price: </span>
                        <span>{{ workoutPlans[1]?.price }}€</span>
                    </div>
                    <form
                        @submit.prevent="updatePrice(workoutPlans[1]._id)"
                        class="flex justify-center align-center"
                    >
                        <div class="relative mr-2">
                            <input
                                v-model="personalPrice"
                                type="text"
                                required
                                placeholder="Enter new price..."
                                class="block w-100 rounded-t-md border border-gray-300 px-3 py-2 text-black placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-base"
                            />
                            <span class="input-icon">€</span>
                        </div>
                        <input
                            class="group cursor-pointer rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            type="submit"
                            value="Change"
                        />
                    </form>
                </div>
            </div>
        </section>

        <section class="mb-8">
            <h1 class="mb-5 text-4xl">Section: Testimonials</h1>
            <div class="rounded-lg bg-white p-6">
                <div class="lg:w-1/2 md:w-2/3 mx-auto mb-3">
                    <h1
                        class="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900"
                    >
                        Create New Testimonial
                    </h1>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600"
                                    >Full Name</label
                                >
                                <input
                                    v-model="newTestimonial.fullname"
                                    type="text"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600"
                                    >Profession</label
                                >
                                <input
                                    v-model="newTestimonial.profession"
                                    type="text"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600"
                                    >Comment</label
                                >
                                <textarea
                                    v-model="newTestimonial.comment"
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button
                                @click="createTestimonial()"
                                class="flex mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>

                <data-table :headers="testimonialsHeaders" :data="testimonials" counter full-width>
                    <template #[`action`]="{ item }">
                        <button
                            @click="deleteTestimonial(item._id)"
                            class="rounded-md bg-red-600 text-white py-2 px-4"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </template>
                </data-table>
            </div>
        </section>

        <!-- Transformations section -->
        <section class="mb-8">
            <h1 class="mb-5 text-4xl">Section: Transformacije</h1>
            <div class="rounded-lg bg-white p-6 flex">
                <data-table :headers="transformationsHeaders" :data="transformations" counter>
                    <template #[`image`]="{ item }">
                        <img :src="item.thumbnailPath" />
                    </template>

                    <template #[`action`]="{ item }">
                        <button
                            @click="
                                deleteTransformation(item._id, item.imagePath, item.thumbnailPath)
                            "
                            class="rounded-md bg-red-600 text-white py-2 px-4"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </template>
                </data-table>

                <!-- File input -->
                <div class="ml-20">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700"
                        >Upload image</label
                    >
                    <input
                        class="form-control cursor-pointer block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="file"
                        ref="imageUpload"
                    />
                    <button
                        @click="uploadTransformation()"
                        class="mt-3 text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </section>

        <ModalComponent
            v-if="successModal"
            @close-modal="() => (successModal = false)"
            :message="message"
        />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent';
import DataTable from '@/components/DataTable';

export default {
    components: {
        ModalComponent,
        DataTable
    },

    data: () => ({
        message: '',
        successModal: false,
        onlinePrice: null,
        personalPrice: null,
        newTestimonial: {
            fullname: '',
            profession: '',
            comment: ''
        },
        testimonialsHeaders: [
            {
                text: 'Full Name',
                value: 'fullname'
            },
            {
                text: 'Profession',
                value: 'profession'
            },
            {
                text: 'Comment',
                value: 'comment'
            },
            {
                text: 'Actions',
                value: 'action',
                align: 'center'
            }
        ],
        transformationsHeaders: [
            {
                text: 'Image',
                value: 'image'
            },
            {
                text: 'Path',
                value: 'imagePath'
            },
            {
                text: 'Actions',
                value: 'action',
                align: 'center'
            }
        ]
    }),

    computed: {
        ...mapState(['workoutPlans', 'testimonials', 'transformations'])
    },

    async created() {
        await this.getWorkoutPlansData();
        await this.getTestimonials();
        await this.getTransformations();
    },

    methods: {
        ...mapActions(['getWorkoutPlansData', 'getTestimonials', 'getTransformations']),
        async updatePrice(id) {
            try {
                const res = await axios.patch(`/api/admin/workout-plans/update-price/${id}`, {
                    onlinePrice: this.onlinePrice,
                    personalPrice: this.personalPrice
                });
                this.onlinePrice = null;
                this.personalPrice = null;
                await this.getWorkoutPlansData();
                this.message = res.data.message;
                this.successModal = true;
            } catch (error) {
                console.log(error);
            }
        },

        async createTestimonial() {
            try {
                const res = await axios.post('/api/admin/testimonials', this.newTestimonial);
                this.newTestimonial.fullname = '';
                this.newTestimonial.profession = '';
                this.newTestimonial.comment = '';
                await this.getTestimonials();
                this.message = res.data.message;
                this.successModal = true;
            } catch (error) {
                console.log(error);
            }
        },

        async deleteTestimonial(id) {
            try {
                const res = await axios.delete(`/api/admin/testimonials/${id}`);
                this.message = res.data.message;
                this.successModal = true;
                await this.getTestimonials();
            } catch (error) {
                console.log(error);
            }
        },

        async uploadTransformation() {
            let data = new FormData();
            data.append('image', this.$refs.imageUpload.files[0]);

            let config = {
                header: {
                    'Content-Type': 'image/png'
                }
            };

            const res = await axios.post('/api/admin/transformations', data, config);
            this.message = res.data.message;
            this.successModal = true;
            await this.getTransformations();
        },

        async deleteTransformation(id, imagePath, thumbnailPath) {
            try {
                const res = await axios.delete(`/api/admin/transformations/${id}`, {
                    data: {
                        imagePath,
                        thumbnailPath
                    }
                });
                this.message = res.data.message;
                this.successModal = true;
                await this.getTransformations();
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped>
.input-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
}
</style>

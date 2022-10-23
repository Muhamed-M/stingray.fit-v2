<template>
    <div class="p-8">
        <section class="mb-8">
            <h1 class="mb-5 text-4xl">Section: Planovi Treninga</h1>
            <div class="flex flex-wrap gap-5">
                <div class="p-8 space-y-8 text-center bg-white rounded-lg">
                    <h2 class="font-medium uppercase mb-2">Online Mentorstvo</h2>
                    <div class="text-5xl font-bold uppercase text-black mb-2">
                        <span>Current price: </span>
                        <span>{{ workoutPlans.onlinePrice }}€</span>
                    </div>
                    <form @submit.prevent="updatePrice()" class="flex justify-center align-center">
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
                    <h2 class="font-medium uppercase text-white mb-2">Personalni Trening</h2>
                    <div class="text-5xl font-bold text-white uppercase mb-2">
                        <span>Current price: </span>
                        <span>{{ workoutPlans.personalPrice }}€</span>
                    </div>
                    <form class="flex justify-center align-center">
                        <div class="relative mr-2">
                            <input
                                v-model="personalPrice"
                                type="text"
                                required
                                placeholder="Enter new price..."
                                class="block w-100 rounded-t-md border border-gray-300 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 text-base"
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

            <ModalComponent
                v-if="successModal"
                @close-modal="() => (successModal = false)"
                :message="message"
            />
        </section>

        <section class="mb-8">
            <h1 class="mb-5 text-4xl">Section: Testimonials</h1>

            <div class="overflow-x-auto">
                <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <!-- head -->
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <tr>
                            <th></th>
                            <th scope="col" class="py-3 px-6">Name</th>
                            <th scope="col" class="py-3 px-6">Job</th>
                            <th scope="col" class="py-3 px-6">Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- rows -->
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="py-4 px-6">1</th>
                            <td class="py-4 px-6">Cy Ganderton</td>
                            <td class="py-4 px-6">Quality Control Specialist</td>
                            <td class="py-4 px-6">Blue</td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="py-4 px-6">2</th>
                            <td class="py-4 px-6">Cy Ganderton</td>
                            <td class="py-4 px-6">Quality Control Specialist</td>
                            <td class="py-4 px-6">Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import ModalComponent from '@/components/ModalComponent';

export default {
    components: {
        ModalComponent,
    },

    data: () => ({
        onlinePrice: null,
        personalPrice: null,
        message: '',
        successModal: false,
    }),

    computed: {
        ...mapState(['workoutPlans']),
    },

    async created() {
        await this.getWorkoutPlansData();
    },

    methods: {
        ...mapActions(['getWorkoutPlansData']),
        async updatePrice() {
            try {
                const res = await axios.patch(
                    `/api/admin/workout-plans/update-price/${this.workoutPlans._id}`,
                    { onlinePrice: this.onlinePrice }
                );
                this.onlinePrice = null;
                await this.getWorkoutPlansData();
                this.message = res.data.message;
                this.isModalOpen = true;
            } catch (error) {
                console.log(error);
            }
        },
    },
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

import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    lang: null,
    loading: false,
    workoutPlans: [],
    testimonials: [],
    transformations: [],
  }),
  getters: {},
  actions: {
    // Get workout plans related data
    async getWorkoutPlansData() {
      try {
        const response = await axios.get('/api/admin/workout-plans');
        this.workoutPlans = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    // Get testimonials
    async getTestimonials() {
      this.loading = true;
      try {
        const response = await axios.get('/api/admin/testimonials');
        this.testimonials = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    // Get transformations images paths
    async getTransformations() {
      this.loading = true;
      try {
        const response = await axios.get('/api/admin/transformations');
        this.transformations = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
});

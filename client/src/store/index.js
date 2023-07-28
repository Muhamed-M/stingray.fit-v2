import { defineStore } from 'pinia';
import axios from 'axios';
import { router } from '@/router';

// get admin if existing
const admin = JSON.parse(localStorage.getItem('admin'));

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    lang: null,
    loading: false,
    errorMessage: null,
    admin: admin ? admin : null,
    workoutPlans: [],
    testimonials: [],
    transformations: [],
  }),
  getters: {},
  actions: {
    // Log in
    async authenticate(data) {
      try {
        // destructure
        const { email, password, rememberMe } = data;

        const response = await axios.post('/api/admin/auth', {
          email,
          password,
        });

        // set admin to local storage
        if (response.data && rememberMe) {
          localStorage.setItem('admin', JSON.stringify(response.data));
        }

        this.admin = response.data;
        this.errorMessage = null;
        router.push('/admin');
      } catch (error) {
        this.errorMessage = error.response.data.message;
      }
    },
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

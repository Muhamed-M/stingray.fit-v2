import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

// get admin if existing
const admin = JSON.parse(localStorage.getItem('admin'));

export default createStore({
    state: {
        isLoading: false,
        errorMessage: null,
        admin: admin ? admin : null,
        workoutPlans: [],
        testimonials: [],
        transformations: []
    },
    getters: {},
    mutations: {
        setErrorMessage: (state, payload) => (state.errorMessage = payload),
        setAdmin: (state, payload) => (state.admin = payload),
        setWorkoutPlans: (state, payload) => (state.workoutPlans = payload),
        setTestimonials: (state, payload) => (state.testimonials = payload),
        setTransformations: (state, payload) => (state.transformations = payload)
    },
    actions: {
        // Log in
        async authenticate({ commit }, data) {
            try {
                // destructure
                const { email, password, rememberMe } = data;

                const response = await axios.post('/api/admin/auth', {
                    email,
                    password
                });

                // set admin to local storage
                if (response.data && rememberMe) {
                    localStorage.setItem('admin', JSON.stringify(response.data));
                }

                commit('setAdmin', response.data);
                commit('setErrorMessage', null);
                router.push('/admin');
            } catch (error) {
                commit('setErrorMessage', error.response.data.message);
            }
        },
        // Get workout plans related data
        async getWorkoutPlansData() {
            try {
                const res = await axios.get('/api/admin/workout-plans');
                this.commit('setWorkoutPlans', res.data);
            } catch (error) {
                console.log(error);
            }
        },
        // Get testimonials
        async getTestimonials() {
            try {
                const res = await axios.get('/api/admin/testimonials');
                this.commit('setTestimonials', res.data);
            } catch (error) {
                console.log(error);
            }
        },
        // Get transformations images paths
        async getTransformations() {
            try {
                const res = await axios.get('/api/admin/transformations');
                this.commit('setTransformations', res.data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
});

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
        workoutPlans: {},
    },
    getters: {},
    mutations: {
        setErrorMessage: (state, payload) => (state.errorMessage = payload),
        setAdmin: (state, payload) => (state.admin = payload),
        setWorkoutPlans: (state, payload) => (state.workoutPlans = payload),
    },
    actions: {
        // Log in
        async authenticate({ commit }, data) {
            try {
                const response = await axios.post('/api/admin/auth', {
                    email: data.email,
                    password: data.password,
                });

                // set admin to local storage
                if (response.data) {
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
                this.commit('setWorkoutPlans', res.data[0]);
            } catch (error) {
                console.log(error);
            }
        },
    },
    modules: {},
});

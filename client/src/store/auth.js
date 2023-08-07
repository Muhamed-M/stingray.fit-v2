import { defineStore } from 'pinia';
import { router } from '@/router';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const now = Date.now();

// get user if existing
let savedUser = JSON.parse(localStorage.getItem('user')) || null;
// If session expired remove user
if (savedUser?.expiresOn && savedUser?.expiresOn < now) {
  localStorage.removeItem('user');
}
// add bearer token if in local storage
if (savedUser) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${savedUser.token}`;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: savedUser,
    loading: false,
    returnUrl: null,
  }),
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
        // set user to state
        this.user = response.data;
        // set auth headers token
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.user.token}`;
        // set admin to local storage
        if (response.data && rememberMe) {
          localStorage.setItem('user', JSON.stringify({ ...response.data, expiresOn: now + 1000 * 60 * 60 * 24 * 7 }));
        }
        // redirect to previous url or default to home page
        router.push(this.returnUrl || '/admin');
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
});

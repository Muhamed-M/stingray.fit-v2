<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { errorMessage } = storeToRefs(store);

// refs
const email = ref('');
const password = ref('');
const rememberMe = ref(true);

async function authHandler() {
    await store.authenticate({
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
    });
}
</script>

<template>
    <div class="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8 glassmorphism">
            <div>
                <img
                    class="mx-auto h-12 w-auto"
                    src="@/assets/images/logo.png"
                    alt="Your Company"
                />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Authenticate
                </h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="authHandler()">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input
                            id="email-address"
                            v-model="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            v-model="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            v-model="rememberMe"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                        />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                            >Remember me</label
                        >
                    </div>

                    <!-- <div class="text-sm">
                        <a href="#" class="font-medium text-cyan-600 hover:text-cyan-500"
                            >Forgot your password?</a
                        >
                    </div> -->
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <!-- Heroicon name: mini/lock-closed -->
                            <svg
                                class="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>

                <p class="text-red-500">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<style scoped>
.glassmorphism {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.error-message {
    color: #f00;
    margin-top: 1rem;
}
</style>

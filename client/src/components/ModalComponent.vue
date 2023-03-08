<script setup>
defineProps({ message: String });
</script>

<template>
    <div
        class="fixed inset-0 z-10 overflow-y-hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <span class="hidden sm:inline-block sm:align-start sm:h-screen" aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-800 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
                <div class="mt-2 text-center">
                    <h3
                        class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                        id="modal-title"
                    >
                        Success!
                    </h3>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{ message }}</p>
                </div>

                <div class="mt-5 sm:flex sm:items-center sm:justify-center">
                    <div class="sm:flex sm:items-center">
                        <button
                            @click="$emit('closeModal')"
                            class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

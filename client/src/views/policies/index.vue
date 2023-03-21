<script setup>
import Logo from '@/components/Logo.vue';
</script>

<template>
    <div class="bg-cyan-600">
        <a class="flex title-font font-medium items-center justify-center text-gray-900 pt-5">
            <Logo />
            <span class="ml-3 text-xl text-gray-200">Stingray Performance LLC</span>
        </a>
        <router-view />
    </div>
</template>

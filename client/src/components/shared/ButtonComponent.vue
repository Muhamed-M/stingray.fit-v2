<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg"
  >
    <span>
      {{ text }}
    </span>
    <slot></slot>
  </button>
</template>

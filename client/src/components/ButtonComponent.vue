<template>
    <button class="border-0 rounded text-lg px-5 py-4 cursor-pointer focus:outline-none">
        <span>
            {{ this.text }}
        </span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'StingrayButton',

    props: {
        text: String
    }
};
</script>

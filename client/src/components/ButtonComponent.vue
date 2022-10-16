<template>
    <button class="btn" :style="styleObject">
        {{ this.text }}
    </button>
</template>

<script>
export default {
    name: 'StingrayButton',

    props: {
        text: String,
        bgColor: String,
        textColor: String,
        hoverBgColor: String,
    },

    computed: {
        styleObject: function () {
            return {
                '--bg-color': this.bgColor,
                '--text-color': this.textColor,
                '--bg-color-hover': this.hoverBgColor,
            };
        },
    },
};
</script>

<style scoped>
.btn {
    border: none;
    outline: none;
    font-size: 1.1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    border-radius: 6px;
    padding: 0.9rem 1.25rem;
    cursor: pointer;
    background-color: var(--bg-color);
    color: var(--text-color);
}

.btn:hover {
    background-color: var(--bg-color-hover);
}
</style>

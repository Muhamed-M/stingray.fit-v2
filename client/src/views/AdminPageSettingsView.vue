<template>
    <section class="pa-2">
        <h1 class="mb-2">Section: Planovi treninga</h1>
        <div class="d-flex">
            <div class="box-price mr-2">
                <h2>Online Mentorstvo</h2>
                <div>
                    <span>Current price: </span>
                    <span>{{ 300 }}€ placeholder!</span>
                </div>
                <form class="d-flex justify-space-between align-center">
                    <div class="form-group">
                        <input
                            v-model="onlinePrice"
                            class="input-field"
                            type="text"
                            placeholder="Enter new price"
                            required
                        />
                        <span class="input-icon">€</span>
                        <span class="focus-el"></span>
                    </div>
                    <input class="btn-change" type="button" value="Change" />
                </form>
            </div>
            <div class="box-price">
                <h2>Personalni Trening</h2>
                <div>
                    <span>Current price: </span>
                    <span>{{ 160 }}€ placeholder!</span>
                </div>
                <form class="d-flex justify-space-between align-center">
                    <div class="form-group">
                        <input
                            v-model="onlinePrice"
                            class="input-field"
                            type="text"
                            placeholder="Enter new price"
                            required
                        />
                        <span class="input-icon">€</span>
                        <span class="focus-el"></span>
                    </div>
                    <input class="btn-change" type="button" value="Change" />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        onlinePrice: null,
        personalPrice: null,
    }),
};
</script>

<style scoped>
.box-price {
    background-color: #fff;
    font-size: 1.2rem;
    box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    border-radius: 8px;
    color: #303838;
    padding: 1.75em 1.25em;
}

.box-price:nth-child(2) {
    background-color: #0098ac;
    color: white;
}

.input-field {
    width: 100%;
    outline: none;
}

.form-group {
    width: 70%;
    position: relative;
    margin: 1rem 0;
}

.btn-change {
    border: none;
    outline: none;
    background-color: #303838;
    color: #fff;
    padding: 1.5em 1.25em;
}
</style>

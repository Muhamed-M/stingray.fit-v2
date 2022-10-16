<template>
    <section class="price" id="planovi">
        <h1 class="naslov">ODABERI SARADNJU</h1>
        <div class="container-price">
            <div class="box-price">
                <h1>{{ workoutPlans.onlinePrice }}€</h1>
                <h6>online mentorstvo</h6>
                <ul>
                    <li>&#10003; 3 mjeseca</li>
                    <li>&#10003; Plan ishrane</li>
                    <li>&#10003; Plan treninga</li>
                    <li>&#10003; Video konsultacije 1h</li>
                    <li>&#10003; Komunikacija putem whatsapp/viber</li>
                    <li>&#10003; Video objašnjenja vježbi</li>
                    <li>&#10003; Dodatna video objašnjena</li>
                </ul>
                <StingrayButton
                    text="Više informacija"
                    bg-color="#2c3333"
                    text-color="#fff"
                    hover-bg-color="#5c5b5b"
                />
            </div>
            <div class="box-price">
                <h1>{{ workoutPlans.personalPrice }}€</h1>
                <h6>personalni trening</h6>
                <ul>
                    <li>&#10003; Testiranje</li>
                    <li>&#10003; Plan treninga</li>
                    <li>&#10003; Plan ishrane</li>
                    <li>&#10003; 12 treninga uz nadzor trenera</li>
                    <li>&#10003; Prijavi se na +387 61 872 308</li>
                </ul>
                <div class="box-icons">
                    <a href="https://api.whatsapp.com/send?phone=38761872308" target="_blank">
                        <v-icon name="bi-whatsapp" fill="#fff" scale="3" />
                    </a>
                </div>
                <StingrayButton
                    text="Više informacija"
                    bg-color="#fff"
                    text-color="#0098ac"
                    hover-bg-color="#eaeaea"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiWhatsapp } from 'oh-vue-icons/icons';
addIcons(BiWhatsapp);
import StingrayButton from '@/components/ButtonComponent';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'PlansSection',

    components: {
        'v-icon': OhVueIcon,
        StingrayButton,
    },

    computed: {
        ...mapState(['workoutPlans']),
    },

    async created() {
        await this.getWorkoutPlansData();
    },

    methods: {
        ...mapActions(['getWorkoutPlansData']),
    },
};
</script>

<style scoped>
.container-price {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0 2rem 0;
}

.box-price {
    background-color: #fff;
    font-size: 2rem;
    position: relative;
    width: 470px;
    min-height: 600px;
    margin: 2.2rem;
    box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: 8px 8px 25px -4px rgba(0, 0, 0, 0.61);
    border-radius: 8px;
    color: #303838;
    text-align: center;
    padding: 3rem 1.8rem;
}

.box-price h6 {
    position: relative;
}

.box-price h6::before {
    content: '';
    height: 3px;
    width: 50px;
    background-color: #303838;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}

.box-price:nth-child(2) {
    background-color: #0098ac;
    top: 30px;
    color: #fff;
}

.box-price:nth-child(2) h6::before {
    background-color: #fff;
}

.box-price ul {
    list-style-type: none;
    font-size: 1.1rem;
    margin: 2rem 0 2rem 0;
    text-align: left;
    line-height: 2;
}

.box-icons {
    margin-bottom: 2rem;
}
</style>

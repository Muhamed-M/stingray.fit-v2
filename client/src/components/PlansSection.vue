<script setup>
import StingrayButton from '@/components/ButtonComponent';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { workoutPlans } = storeToRefs(store);

store.getWorkoutPlansData();
</script>

<template>
    <section class="price" id="planovi">
        <h1 class="heading text-3xl font-medium title-font text-gray-900 mb-10 text-center">
            Odaberi Saradnju
        </h1>
        <div class="container-price">
            <div class="box-price">
                <h1 class="text-6xl font-semibold">{{ workoutPlans[0]?.price }}€</h1>
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
                    class="bg-cyan-600 hover:bg-cyan-700 text-white"
                />
            </div>
            <div class="box-price bg-cyan-600">
                <h1 class="text-6xl font-semibold">{{ workoutPlans[1]?.price }}€</h1>
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
                        <i class="fa-brands fa-whatsapp text-white text-5xl"></i>
                    </a>
                </div>
                <StingrayButton
                    text="Više informacija"
                    class="bg-white hover:bg-slate-200 text-gray-700"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.container-price {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0 2rem 0;
}

.box-price {
    font-size: 2rem;
    position: relative;
    max-width: 470px;
    width: 90%;
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

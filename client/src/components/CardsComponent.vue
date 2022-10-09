<template>
    <section class="improve">
        <div class="box">
            <img src="@/assets/images/dumbbell.svg" />
            <h3>UNAPRIJEDI ZDRAVLJE</h3>
            <p>
                Mentor će ti pomoći da lakše otkriješ kakva ishrana i trening odgovaraju tvome
                tijelu, da izgradiš zdrave navika i podigneš zdravlje i kondiciju na viši nivo.
            </p>
        </div>
        <div class="box">
            <img src="@/assets/images/woman.svg" />
            <h3>Popravi posturu</h3>
            <p>
                Zbog previše sjedenja i nedostatka aktivnosti naše tijelo gubi funkcije i to
                kompenzuje krivljenjem posture što dugoročno dovodi do problema i bolova. Stingray
                specijalizacija se odnosi upravo na vraćanje posture i opsega pokreta kroz trening
                snage.
            </p>
        </div>
        <div class="box">
            <img src="@/assets/images/muscle.svg" />
            <h3>Izgledaj kako oduvijek želiš</h3>
            <p>Gubljenjem masnih naslaga i dobivanjem mišične mase na ciljanim područijima.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CardsComponent',
};
</script>

<style scoped>
.improve {
    font-size: 1rem;
    background-color: rgb(0, 152, 172);
    padding-top: 3rem;
    overflow: hidden;
    color: white;
}

.box {
    width: 290px;
    height: 380px;
    padding: 1.25em 0.9em;
    text-align: center;
    position: relative;
    transition: 0.5s;
    cursor: default;
    line-height: 20px;
    margin: 2rem 0;
    margin-inline: auto;
    background: rgba(255, 255, 255, 0.21);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(5.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.box:hover {
    cursor: pointer;
    transform: translateY(-20px);
}

.box img {
    width: 25%;
    margin-bottom: 1.75rem;
}

.box h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 30px;
}

@media screen and (min-width: 768px) {
    .improve {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .box {
        margin: 2rem;
    }
}
</style>

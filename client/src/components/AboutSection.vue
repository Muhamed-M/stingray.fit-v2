<template>
    <section class="text-gray-600 body-font" id="about">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            >
                <h1 class="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
                    Ko je Stingray
                </h1>
                <p class="mb-8 leading-relaxed text-lg">
                    Trener, sportista, nutricionista, bivši pripadnik specijalne jedinice sa 10+
                    godina iskustva u treningu snage i mnogim sportovima poput atletike, gimnastike
                    i borilačkih vještina. Nakon stečene diplome mašinskog inžinjera i 5 godina rada
                    u specijalnoj jedinici policije počinje svoj put kao mentor/trener. Najveći
                    uspjeh u ovom poslu je iskustvo u radu sa stotinama ljudi i mnogo transformacija
                    tijela, uma i životnog stila.
                </p>
                <p class="mb-8 leading-relaxed text-lg">
                    Ideja Stingray pristupa polazi od rada na vještinama iza kojih se krije pravo
                    samopouzdanje, a izgled dolazi kao nusprodukt. Kvalitet rada i usluge se
                    unaprijeđuje svakodnevno.
                </p>
                <p class="mb-8 leading-relaxed text-lg">
                    Promjena navika, edukacija o treningu, ishrani i zdravom, balansiranom načinu
                    života.
                </p>
            </div>
            <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
                <img
                    class="object-cover object-center rounded"
                    alt="Image"
                    src="@/assets/images/about-img.jpg"
                />
            </div>
        </div>
    </section>

    <!-- <section class="about" id="about">
        <div class="container-about">
            <div class="text-content">
                <h1 class="naslov">Ko je Stingray</h1>
                <p class="m-b-md">
                    Trener, sportista, nutricionista, bivši pripadnik specijalne jedinice sa 10+
                    godina iskustva u treningu snage i mnogim sportovima poput atletike, gimnastike
                    i borilačkih vještina. Nakon stečene diplome mašinskog inžinjera i 5 godina rada
                    u specijalnoj jedinici policije počinje svoj put kao mentor/trener. Najveći
                    uspjeh u ovom poslu je iskustvo u radu sa stotinama ljudi i mnogo transformacija
                    tijela, uma i životnog stila.
                </p>
                <p class="m-b-md">
                    Ideja Stingray pristupa polazi od rada na vještinama iza kojih se krije pravo
                    samopouzdanje, a izgled dolazi kao nusprodukt. Kvalitet rada i usluge se
                    unaprijeđuje svakodnevno.
                </p>
                <p class="m-b-md">
                    Promjena navika, edukacija o treningu, ishrani i zdravom, balansiranom načinu
                    života.
                </p>
                <p class="m-b-md">
                    Naš program je namijenjen ljudima koji žele da unaprijede svoju kretnju, snagu,
                    mobilnost ali i izgled. Također ljudima koji sa došli na plato u svome treningu
                    i trebaju pomoć oko postizanja naprednijih ciljeva.
                </p>
                <p class="m-b-md">
                    U naš program treninga su uvrštene powerlifting vježbe snage, kretnje (animal
                    flow) i mobilnosti. Sa ljudima radimo na nešto drugačiji način, da bi postigli
                    optimalno zdravlje, izgled ali i vještine iza kojih se krije pravo
                    samopouzdanje. Generalni cilj nije samo izgledati dobro, nego taj izgled
                    zaraditi vještinom.
                </p>
            </div>
            <img src="@/assets/images/about-img.jpg" />
        </div>
    </section> -->
</template>

<script>
export default {
    name: 'AboutSection',
};
</script>

<style scoped>
.about {
    padding: 4rem 3rem;
}

.container-about {
    text-align: center;
    font-size: 1rem;
    color: #303838;
}

.container-about img {
    max-width: 400px;
    width: 90%;
    margin-top: 2rem;
}

@media screen and (min-width: 1200px) {
    .container-about {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .text-content {
        max-width: 700px;
    }

    .container-about img {
        margin: 0 0 0 2rem;
    }
}
</style>

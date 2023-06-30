<script setup>
import StingrayButton from '@/components/ButtonComponent.vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
const store = useStore();
const { lang } = storeToRefs(store);

const { t, locale } = useI18n();
</script>

<template>
  <section class="text-gray-600 body-font" id="about">
    <div
      class="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow lg:w-1/2 lg:pr-24 mb-8 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900"
        >
          Za koga je program?
          <!-- {{ t('about_title', {}, { locale: lang.value }) }} -->
        </h1>
        <!-- list -->
        <ul class="list-disc mb-4">
          <li>
            Program je namijenjen svima koji žele razumjeti svoje tijelo i
            riješiti kompenzacije koje uzrokuju ukočenost i bolove.
          </li>
          <li>
            Cilj programa je izgraditi trening rutinu koja istovremeno razvija
            snagu, vještinu i kvalitetu kretanja, bez žrtvovanja zdravlja.
          </li>
          <li>
            Program je prilagođen za sve razine vježbača, bez obzira na
            iskustvo.
          </li>
          <li>
            Pružamo podršku i smjernice kako biste postigli ravnotežu između
            postizanja rezultata i očuvanja zdravlja.
          </li>
          <li>
            Pridružite nam se i krenite na putovanje ka dubljem razumijevanju,
            izgradnji i optimizaciji svog tijela i kretanja.
          </li>
        </ul>

        <p class="mb-6 leading-relaxed text-lg">
          Naš program je idealan za sve koji su zainteresirani za:
        </p>

        <ul class="list-disc mb-4">
          <li>Zdravlje kukova, kičme i zglobova.</li>
          <li>
            Izgradnju trening rutine koja se fokusira na snagu i vještine,
            uključujući napredne elemente poput stojanja na rukama ili čučnja na
            jednoj nozi.
          </li>
          <li>Dugovječnost i zdravlje kao prioritet.</li>
        </ul>

        <p class="mb-6 leading-relaxed text-lg">
          Naš program može biti prilagođen isključivo fokusu na zdravlje, ali
          ukoliko se želi nastaviti s programom, možemo preći na druge aspekte i
          ciljeve. Naš cilj je osigurati da se vaša tjelesna dobrobit i zdravlje
          prioritetno tretiraju, pružajući vam mogućnost da proširite program na
          temelju vaših želja i potreba.
        </p>
        <!-- <p class="mb-8 leading-relaxed text-lg">
          {{ t('about_p_1', {}, { locale: lang.value }) }}
        </p>
        <p class="mb-8 leading-relaxed text-lg">
          {{ t('about_p_2', {}, { locale: lang.value }) }}
        </p> -->

        <StingrayButton
          class="px-0 mb-8 bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
            target="_blank"
            class="px-9 py-4"
          >
            {{ t('button_text_1', {}, { locale: lang.value }) }}
          </a>
        </StingrayButton>

        <!-- Social links -->
        <div class="flex justify-center items-center gap-3">
          <a href="https://www.instagram.com/stingray.fit/" target="_blank"
            ><i class="fa-brands fa-instagram text-gray-700 text-4xl"></i
          ></a>
          <a
            href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q"
            target="_blank"
            ><i class="fa-brands fa-youtube text-gray-700 text-4xl"></i
          ></a>
        </div>
      </div>
      <div class="lg:max-w-md lg:w-1/2 w-5/6">
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

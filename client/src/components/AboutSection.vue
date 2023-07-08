<script setup>
import ButtonComponent from '@/components/shared/ButtonComponent.vue';
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
      class="container mx-auto flex px-5 py-8 lg:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow lg:w-1/2 lg:pr-24 mb-8 md:pr-16 flex flex-col md:items-start items-center text-left"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900"
        >
          Za koga je program?
          <!-- {{ t('about_title', {}, { locale: lang.value }) }} -->
        </h1>
        <p class="mb-4 text-base">
          Naš online coaching program je namijenjen svima koji žele dublje
          razumijevanje svog tijela, rješavanje kompenzacija koje uzrokuju
          ukočenost i bolove, te izgradnju trening rutine koja istovremeno
          razvija snagu, vještinu i kvalitetu kretanja, bez zapostavljanja
          zdravlja. Bez obzira da li ste početnik ili iskusni vježbač, naš
          program je dizajniran da pruži podršku i smjernice za sve koji teže da
          ostvare ravnotežu između postizanja rezultata i očuvanja zdravlja.
          Pridružite nam se i započnite putovanje ka razumijevanju, izgradnji i
          optimizaciji svog tijela i kretanja.
        </p>
        <!-- list -->
        <ul class="ml-6 list-disc mb-4">
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

        <p class="mb-4 text-base">
          Naš program je idealan za sve koji su zainteresirani za:
        </p>

        <ul class="ml-6 list-disc mb-4">
          <li>Zdravlje kukova, kičme i zglobova.</li>
          <li>
            Izgradnju trening rutine koja se fokusira na snagu i vještine,
            uključujući napredne elemente poput stojanja na rukama ili čučnja na
            jednoj nozi.
          </li>
          <li>Dugovječnost i zdravlje kao prioritet.</li>
        </ul>

        <p class="mb-4 text-base">
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

        <ButtonComponent class="mb-4 bg-cyan-600 hover:bg-cyan-700 text-white">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSePk6zDvxol-g2zLmnx95L1v3xlPhvon3y5Rl-eycjv9kv8Bw/viewform"
            target="_blank"
          >
            {{ t('button_text_1', {}, { locale: lang.value }) }}
          </a>
        </ButtonComponent>

        <!-- Social links -->
        <div class="flex justify-center items-center gap-3">
          <a href="https://www.instagram.com/stingray.fit/" target="_blank">
            <span class="mdi mdi-instagram text-4xl"></span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q"
            target="_blank"
          >
            <span class="mdi mdi-youtube text-5xl"></span>
          </a>
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
</template>

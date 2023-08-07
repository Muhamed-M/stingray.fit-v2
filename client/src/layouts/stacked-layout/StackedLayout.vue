<script setup>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import Select from '@/components/shared/Select.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/store/index';
import { RouterView } from 'vue-router';
const store = useStore();
const { lang } = storeToRefs(store);

const navToggle = ref(false);
const isSticky = ref(false);
const links = ref([
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Shop',
    href: '#shop',
  },
  {
    text: 'Testimonials',
    href: '#testimonials',
  },
  {
    text: 'Transformations',
    href: '#transformations',
  },
]);
const locales = [
  {
    id: 1,
    lang: 'English',
    value: 'en',
  },
  {
    id: 2,
    lang: 'Bosnian',
    value: 'bs',
  },
];
lang.value = locales[1];

function stickyNav() {
  window.addEventListener('scroll', () => {
    if (scrollY > 200) isSticky.value = true;
    else isSticky.value = false;
  });
}
stickyNav();

function closeMenu() {
  if (window.innerWidth <= 768) {
    navToggle.value = false;
  }
}
</script>

<template>
  <nav :class="isSticky ? 'nav-container sticky bg-gray-800' : 'nav-container'">
    <div class="container px-5 py-3 mx-auto flex justify-between items-center">
      <Logo />
      <span @click="navToggle = true" class="mdi mdi-menu hamburger-btn"> </span>
      <div :class="navToggle ? 'nav active' : 'nav'">
        <span @click="navToggle = false" class="mdi mdi-close close-btn"></span>

        <!-- loop through links and display them -->
        <a @click="closeMenu()" v-for="(link, i) in links" :key="i" class="nav-link" :href="link.href">
          {{ link.text }}
        </a>
        <Select v-model="lang" :selected="lang" :items="locales" mdiIcon="mdi-translate" text="lang" class="w-44" />
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  color: #fff;
}

.nav-container.sticky {
  position: fixed;
  top: 0;
}

.nav {
  width: 0;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f2937;
  overflow: hidden;
  white-space: nowrap;
  transition: 300ms ease-in-out;
}

.nav.active {
  width: 60vw;
}

.hamburger-btn {
  font-size: 2.7rem;
  font-weight: 600;
}

.close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 2.7rem;
  font-weight: 600;
}

.nav-link {
  position: relative;
  color: #fff;
  margin-bottom: 1rem;
}

.nav-link::after {
  content: '';
  background-color: #fff;
  width: 0;
  height: 2px;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
}

.nav-link:hover::after {
  width: 80%;
  left: 50%;
}

@media screen and (max-width: 450px) {
  .nav.active {
    width: 85vw;
  }
}

@media screen and (min-width: 768px) {
  .nav {
    position: static;
    height: auto;
    width: auto;
    background-color: transparent;
    transition: none;
    flex-direction: row;
    overflow: visible;
  }

  .nav.active {
    width: auto;
  }

  .nav-link {
    margin-bottom: 0;
  }

  .nav-link:not(:last-child) {
    margin-right: 3rem;
  }

  .hamburger-btn {
    display: none;
  }

  .close-btn {
    display: none;
  }
}
</style>

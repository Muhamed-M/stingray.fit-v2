<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { router } from '@/router';
import { useAuthStore } from '@/store/auth';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

// refs
const drawer = ref(true);
const userNavigation = [
  // { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  { name: 'Sign out', icon: 'mdi-logout', function: logout },
];

function logout() {
  user.value = null;
  router.push('/auth/login');
  localStorage.removeItem('user');
}
</script>

<template>
  <div>
    <nav :class="!drawer ? 'sidenav bg-cyan-600 flex flex-col' : 'sidenav active bg-cyan-600 flex flex-col'">
      <router-link to="/"><img src="@/assets/images/logo.png" alt="logo" class="logo" /></router-link>
      <router-link to="/admin" class="sidenav-link px-1 py-2" exact-active-class="bg-cyan-500 rounded-lg">
        <span class="mdi mdi-view-dashboard text-4xl"></span>
        <span v-if="drawer" class="sidenav-text">Dashboard</span>
      </router-link>
      <router-link to="/admin/enrollments" class="sidenav-link px-1 py-2" exact-active-class="bg-cyan-500 rounded-lg">
        <span class="mdi mdi-file-sign text-4xl"></span>
        <span v-if="drawer" class="sidenav-text">Enrollments</span>
      </router-link>
      <router-link to="/admin/settings" class="sidenav-link px-1 py-2" exact-active-class="bg-cyan-500 rounded-lg">
        <span class="mdi mdi-cog text-4xl"></span>
        <span v-if="drawer" class="sidenav-text">Settings</span>
      </router-link>
    </nav>
    <main :class="!drawer ? 'main' : 'main active'">
      <header class="header flex justify-between align-center">
        <button class="btn" @click="drawer = !drawer">
          <span class="mdi mdi-menu btn-drawer text-gray-800"></span>
        </button>

        <!-- Profile dropdown -->
        <Menu as="div" class="relative ml-3">
          <div>
            <MenuButton
              class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Open user menu</span>
              <img v-if="user?.image" class="h-8 w-8 rounded-full" :src="user.image" alt="" />
              <span v-else class="mdi mdi-account text-white text-3xl px-2 py-1"></span>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <span
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']"
                  @click="item.function"
                >
                  <span class="mdi" :class="item.icon"></span>
                  {{ item.name }}
                </span>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </header>
      <div class="bg-slate-200">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.main {
  margin-left: 80px;
  transition: margin 300ms;
}

.main.active {
  margin-left: 255px;
}

.sidenav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  padding: 1.2rem 1rem 0 1rem;
  transition: width 300ms;
  overflow-x: hidden;
}

.sidenav.active {
  width: 255px;
}

.sidenav > *:not(:last-child) {
  margin-bottom: 1rem;
}

.sidenav-link {
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.sidenav-text {
  margin-left: 0.75rem;
}

.logo {
  max-width: 45px;
}

.header {
  background-color: #fff;
  padding: 0.6rem 2rem;
}

.btn {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

.btn-drawer {
  transition: 200ms;
  font-size: 2rem;
}

.btn-drawer:hover {
  transform: translateX(5px);
}
</style>

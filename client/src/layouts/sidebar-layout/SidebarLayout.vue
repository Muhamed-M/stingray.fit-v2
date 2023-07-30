<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { router } from '@/router';
import { useAuthStore } from '@/store/auth';
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

// refs
const drawer = ref(true);

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
        <div class="avatar flex justify-center align-center">
          <!-- <img src="@/assets/images/logo.png" alt="avatar" /> -->
          <span class="mdi mdi-account text-4xl mt-2"></span>
          <div class="dropdown">
            <h5>{{ user?.name }}</h5>
            <button
              @click="logout()"
              class="flex items-center text-white bg-gray-700 border-0 py-1 px-2 focus:outline-none hover:bg-gray-600 rounded mt-2"
            >
              <span class="mdi mdi-logout text-xl"></span>
              Sign Out
            </button>
          </div>
        </div>
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

.avatar {
  cursor: pointer;
  position: relative;
  width: 65px;
  height: 65px;
  border: 2px solid #000;
  border-radius: 50%;
}

.avatar:hover .dropdown {
  display: block;
}

.dropdown {
  display: none;
  position: absolute;
  left: -140%;
  bottom: -150%;
  background-color: #fff;
  border: 1px solid #000;
  padding: 1rem;
}
</style>

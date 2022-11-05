<template>
    <div>
        <nav
            :class="
                !drawer
                    ? 'sidenav bg-gray-800 flex flex-col'
                    : 'sidenav active bg-gray-800 flex flex-col'
            "
        >
            <router-link to="/"
                ><img src="@/assets/images/logo.png" alt="logo" class="logo"
            /></router-link>
            <router-link to="/admin" class="sidenav-link" exact-active-class="bg-gray-700">
                <span class="material-symbols-outlined"> dashboard </span>
                <span v-if="drawer" class="sidenav-text">Page Settings</span>
            </router-link>
            <router-link to="/admin/blogs" class="sidenav-link" exact-active-class="bg-gray-700">
                <span class="material-symbols-outlined"> article </span>
                <span v-if="drawer" class="sidenav-text">Blogs</span>
            </router-link>
            <div class="sidenav-link">
                <span class="material-symbols-outlined"> settings </span>
                <span v-if="drawer" class="sidenav-text">Settings</span>
            </div>
        </nav>
        <main :class="!drawer ? 'main' : 'main active'">
            <header class="header flex justify-between align-center">
                <button class="btn" @click="drawer = !drawer">
                    <i
                        class="btn-drawer text-gray-800"
                        :class="!drawer ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'"
                    ></i>
                </button>
                <div class="avatar flex justify-center align-center">
                    <!-- <img src="@/assets/images/logo.png" alt="avatar" /> -->
                    <span class="material-symbols-outlined" style="font-size: 3.7rem">
                        person_filled
                    </span>
                    <div class="dropdown">
                        <h5>{{ admin.name }}</h5>
                        <button
                            @click="logout()"
                            class="flex items-center text-white bg-gray-700 border-0 py-1 px-2 focus:outline-none hover:bg-gray-600 rounded mt-2"
                        >
                            <span class="material-symbols-outlined" style="font-size: 1.8rem">
                                logout
                            </span>
                            Sign Out
                        </button>
                    </div>
                </div>
            </header>
            <router-view />
        </main>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AdminNav',

    data: () => ({
        drawer: false
    }),

    computed: {
        ...mapState(['admin'])
    },

    methods: {
        logout() {
            this.$store.commit('setAdmin', null);
            this.$router.push('/admin/auth');
            localStorage.removeItem('admin');
        }
    }
};
</script>

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

.material-symbols-outlined {
    font-size: 48px;
    font-variation-settings: 'OPSZ' 48;
}
</style>

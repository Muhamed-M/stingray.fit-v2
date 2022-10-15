<template>
    <div>
        <nav
            :class="!drawer ? 'sidenav d-flex f-dir-column' : 'sidenav active d-flex f-dir-column'"
        >
            <img src="@/assets/images/logo.png" alt="logo" class="logo" />
            <div>
                <v-icon name="md-dashboard-round" fill="#fff" scale="2.2" />
                <span v-if="drawer" class="sidenav-text">Page Settings</span>
            </div>
            <div>
                <v-icon name="ri-pages-fill" fill="#fff" scale="2.2" />
                <span v-if="drawer" class="sidenav-text">Blogs</span>
            </div>
            <div>
                <v-icon name="co-settings" inverse="true" scale="2.2" />
                <span v-if="drawer" class="sidenav-text">Settings</span>
            </div>
        </nav>
        <main :class="!drawer ? 'main' : 'main active'">
            <header class="header d-flex justify-space-between align-center">
                <button class="btn" @click="drawer = !drawer">
                    <v-icon
                        class="btn-drawer"
                        :name="!drawer ? 'bi-chevron-right' : 'bi-chevron-left'"
                        scale="2.5"
                        fill="#000"
                    />
                </button>
                <div class="avatar d-flex justify-center align-center">
                    <!-- <img src="@/assets/images/logo.png" alt="avatar" /> -->
                    <v-icon name="bi-person-fill" scale="2.8" />
                </div>
            </header>
        </main>
    </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
    BiChevronRight,
    BiChevronLeft,
    MdDashboardRound,
    RiPagesFill,
    CoSettings,
    CoAccountLogout,
    BiPersonFill,
} from 'oh-vue-icons/icons';
addIcons(
    BiChevronRight,
    BiChevronLeft,
    MdDashboardRound,
    RiPagesFill,
    CoSettings,
    CoAccountLogout,
    BiPersonFill
);

export default {
    name: 'AdminNav',

    components: {
        'v-icon': OhVueIcon,
    },

    data: () => ({
        drawer: false,
    }),
};
</script>

<style scoped>
.main {
    margin-left: 80px;
    transition: margin 300ms;
}

.main.active {
    margin-left: 250px;
}

.sidenav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
    background-color: #2c3333;
    padding: 1.2rem 0 0 1rem;
    transition: width 300ms;
    overflow-x: hidden;
}

.sidenav.active {
    width: 250px;
}

.sidenav > *:not(:last-child) {
    margin-bottom: 1rem;
}

.sidenav div {
    color: #fff;
    white-space: nowrap;
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
}

.btn-drawer:hover {
    transform: translateX(5px);
}

.avatar {
    width: 65px;
    height: 65px;
    border: 2px solid #000;
    border-radius: 50%;
}
</style>

<template>
    <nav :class="isSticky ? 'nav-container sticky bg-gray-800' : 'nav-container'">
        <div class="container px-5 py-4 mx-auto flex justify-between items-center">
            <span class="w-14"><img src="@/assets/images/logo.png" /></span>
            <v-icon
                @click="navToggle = true"
                class="hamburger-btn"
                name="co-hamburger-menu"
                scale="2.5"
            />
            <div :class="navToggle ? 'nav active' : 'nav'">
                <v-icon
                    @click="navToggle = false"
                    class="close-btn"
                    name="io-close-sharp"
                    scale="2.5"
                />
                <a class="nav-link" href="#about">o meni</a>
                <a class="nav-link" href="#planovi">planovi Treninga</a>
                <a class="nav-link" href="#transformacije">transformacije</a>
                <a class="nav-link" href="#testimonials">testimonials</a>
            </div>
        </div>
    </nav>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { CoHamburgerMenu, IoCloseSharp } from 'oh-vue-icons/icons';
addIcons(CoHamburgerMenu, IoCloseSharp);

export default {
    name: 'NavComponent',

    components: {
        'v-icon': OhVueIcon,
    },

    data: () => ({
        navToggle: false,
        isSticky: false,
    }),

    mounted() {
        this.stickyNav();
    },

    methods: {
        stickyNav() {
            window.addEventListener('scroll', () => {
                if (scrollY > 200) this.isSticky = true;
                else this.isSticky = false;
            });
        },
    },
};
</script>

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
    width: 50vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2c3333;
}

.nav.active {
    display: flex;
}

.close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
}

.nav-link {
    position: relative;
    color: #fff;
    text-transform: capitalize;
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

@media screen and (min-width: 768px) {
    .nav {
        position: static;
        height: auto;
        width: auto;
        display: inline-block;
        background-color: transparent;
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

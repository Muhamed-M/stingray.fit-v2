<template>
    <nav :class="isSticky ? 'nav-container sticky bg-gray-800' : 'nav-container'">
        <div class="container px-5 py-4 mx-auto flex justify-between items-center">
            <span class="w-14"><img src="@/assets/images/logo.png" /></span>
            <span @click="navToggle = true" class="material-symbols-outlined hamburger-btn">
                menu
            </span>
            <div :class="navToggle ? 'nav active' : 'nav'">
                <span @click="navToggle = false" class="material-symbols-outlined close-btn">
                    close
                </span>

                <!-- loop through links and display them -->
                <a
                    @click="closeMenu()"
                    v-for="(link, i) in links"
                    :key="i"
                    class="nav-link"
                    :href="link.href"
                    >{{ link.text }}</a
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavComponent',

    data: () => ({
        navToggle: false,
        isSticky: false,
        links: [
            {
                text: 'O Meni',
                href: '#about'
            },
            {
                text: 'Planovi Treninga',
                href: '#planovi'
            },
            {
                text: 'Testimonials',
                href: '#testimonials'
            },
            {
                text: 'Transformacije',
                href: '#transformacije'
            }
        ]
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

        closeMenu() {
            if (window.innerWidth <= 768) {
                this.navToggle = false;
            }
        }
    }
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
        display: inline-block;
        background-color: transparent;
        transition: none;
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

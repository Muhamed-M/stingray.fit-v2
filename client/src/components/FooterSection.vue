<template>
    <footer class="body-font bg-cyan-600">
        <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
            <a
                class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
                <img class="w-14" src="@/assets/images/logo.png" alt="logo" />
                <span class="ml-3 text-xl">Stingray.fit</span>
            </a>
            <p
                class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
            >
                &copy; 2023 Firefly —
                <a href="https://www.instagram.com/m.muham3d/" class="ml-1" target="_blank"
                    >@m.muham3d</a
                >
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a
                    class="ml-3"
                    href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q"
                    target="_blank"
                    ><i class="fa-brands fa-youtube text-white text-3xl"></i
                ></a>
                <a class="ml-3" href="https://www.instagram.com/stingray.fit/" target="_blank"
                    ><i class="fa-brands fa-instagram text-white text-3xl"></i
                ></a>
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection'
};
</script>

<style scoped>
.footer {
    padding: 2rem 5rem;
    background-color: #0098ac;
}

.copyright {
    color: #fff;
}

.footerheading {
    position: relative;
    margin-bottom: 1rem;
    color: #fff;
}

.footerheading::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 45%;
    height: 2px;
    background-color: #fff;
}

.social {
    display: flex;
    flex-direction: column;
}

.contactinfo {
    color: #fff;
    display: flex;
    flex-direction: column;
}

.contactinfo span {
    letter-spacing: 0.8px;
}

.contactinfo span:hover {
    color: #000;
    cursor: pointer;
}
</style>

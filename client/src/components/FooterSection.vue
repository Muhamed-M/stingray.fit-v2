<template>
    <footer class="footer d-flex justify-space-between">
        <div class="contactinfo-container">
            <h1 class="footerheading">Kontakt Info</h1>
            <div class="contactinfo">
                <span><i class="fas fa-map-marker-alt"></i> Sarajevo</span>
                <span><i class="fas fa-phone"></i> +38761-872-308</span>
                <span><i class="fas fa-envelope"></i> ilhanmuhamedagic@gmail.com</span>
            </div>
        </div>
        <div class="social">
            <a href="https://www.instagram.com/stingray.fit/" target="_blank"
                ><v-icon name="bi-instagram" fill="#fff" scale="3"
            /></a>
            <a href="https://www.youtube.com/channel/UCigBlsVRyJfVHMI25AVmj4Q" target="_blank"
                ><v-icon name="bi-youtube" fill="#fff" scale="3"
            /></a>
        </div>
        <div class="copyright">
            <span>&copy; Copyright 2021, sva prava zadržana!</span>
            <address>Design & development: Muhamed Muhamedagić</address>
        </div>
    </footer>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiInstagram, BiYoutube } from 'oh-vue-icons/icons';
addIcons(BiInstagram, BiYoutube);

export default {
    name: 'FooterSection',

    components: {
        'v-icon': OhVueIcon,
    },
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

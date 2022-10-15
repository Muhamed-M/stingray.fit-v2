<template>
    <div class="container">
        <img class="bg-img" src="@/assets/images/logo.png" />
        <form class="form-container" @submit.prevent="authHandler()">
            <h1 class="form-heading">Authenticate</h1>
            <div class="form-group">
                <input
                    v-model="email"
                    class="input-field"
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <v-icon class="input-icon" name="md-email" fill="#2c3333" />
                <span class="focus-el"></span>
            </div>
            <div class="form-group">
                <input
                    v-model="password"
                    class="input-field"
                    type="password"
                    placeholder="Password"
                    required
                />
                <v-icon class="input-icon" name="ri-lock-password-fill" fill="#2c3333" />
                <span class="focus-el"></span>
            </div>
            <input class="form-submit" type="submit" value="SIGN IN" />
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { MdEmail, RiLockPasswordFill } from 'oh-vue-icons/icons';
addIcons(MdEmail, RiLockPasswordFill);
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        'v-icon': OhVueIcon,
    },

    data: () => ({
        email: '',
        password: '',
    }),

    computed: {
        ...mapState(['admin', 'errorMessage']),
    },

    methods: {
        ...mapActions(['authenticate']),

        async authHandler() {
            await this.authenticate({ email: this.email, password: this.password });
        },
    },
};
</script>

<style scoped>
.container {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-content: center;
}

.bg-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form-heading {
    text-align: center;
}

.form-container {
    min-width: 600px;
    width: 90%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.form-group {
    position: relative;
    margin: 1rem 0;
}

input {
    width: 100%;
    outline: none;
}

.input-field {
    padding: 1.5em 1.25em;
    border: 1px solid #5f6565;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.input-field:focus ~ span {
    width: 100%;
    left: 0;
}

.focus-el {
    width: 0;
    height: 2.8px;
    position: absolute;
    left: 50%;
    bottom: 0;
    background-color: #5f6565;
    transition: 300ms;
}

.form-submit {
    background-color: #0098ac;
    color: #fff;
    border: 2px solid #5f6565;
    padding: 1em 1.5em;
}

.input-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    opacity: 0.7;
}

.error-message {
    color: #f00;
    margin-top: 1rem;
}
</style>

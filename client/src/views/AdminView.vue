<template>
    <div class="admin">
        <AdminNav />
    </div>
</template>

<script>
import AdminNav from '@/components/AdminNavComponent.vue';

export default {
    components: {
        AdminNav,
    },

    methods: {
        logout() {
            this.$store.commit('setAdmin', null);
            this.$router.push('/admin/auth');
            localStorage.removeItem('admin');
        },
    },
};
</script>

<style scoped>
.admin {
    min-height: 100vh;
    background-color: #e4e4e4;
}
</style>

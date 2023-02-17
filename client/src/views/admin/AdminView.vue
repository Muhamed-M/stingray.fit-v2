<template>
    <div class="admin">
        <AdminNav />
    </div>
</template>

<script>
import AdminNav from '@/views/admin/components/AdminNavComponent.vue';

export default {
    components: {
        AdminNav
    }
};
</script>

<style scoped>
.admin {
    min-height: 100vh;
    background-color: #e4e4e4;
}
</style>

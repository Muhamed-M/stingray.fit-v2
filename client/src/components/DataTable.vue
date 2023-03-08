<template>
    <div class="overflow-x-auto">
        <table
            class="table-auto text-sm text-left text-gray-500 dark:text-gray-400"
            :class="tableClass"
        >
            <!-- head -->
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th v-if="counter"></th>
                    <th v-for="(header, i) in headers" :key="i" scope="col" class="py-3 px-6">
                        {{ header.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- rows -->
                <tr v-for="(item, i) in data" :key="i" class="bg-gray-50 border-b text-gray-600">
                    <th v-if="counter" class="py-4 px-6">{{ i + 1 }}</th>
                    <td
                        v-for="(header, i) in headers"
                        :key="i"
                        class="py-4 px-6"
                        :class="classObj(header.align)"
                        :style="`width:${header.width}px`"
                    >
                        <slot :item="item" :name="header.value">{{ item[header.value] }}</slot>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="data.length === 0">
            <h2 class="text-center py-4 px-6 bg-gray-50 border-b text-gray-600">
                No Data Available!
            </h2>
        </div>
        <!-- footer -->
        <!-- <div class="relative bg-gray-100 flex justify-center items-center py-2">
            <div class="mx-3">
                <button
                    class="inline-grid place-items-center text-2xl text-black bg-white rounded-l-lg border border-black"
                >
                    <span class="material-symbols-outlined chevron"> chevron_left </span>
                </button>
                <button
                    class="inline-grid place-items-center text-2xl text-black bg-white rounded-r-lg border border-black"
                >
                    <span class="material-symbols-outlined chevron"> chevron_right </span>
                </button>
            </div>
            <div v-if="itemsPerPage" class="absolute right-5">
                <span class="text-sm">ITEMS PER PAGE:</span>
                <span
                    v-for="(item, i) in itemsPerPage"
                    :key="i"
                    class="rounded-lg bg-white p-2 cursor-pointer mx-2"
                    >{{ item }}</span
                >
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'DataTable',

    props: {
        headers: Array,
        data: Array,
        counter: Boolean,
        fullWidth: Boolean
        // itemsPerPage: Array
    },

    computed: {
        tableClass() {
            return {
                'w-full': this.fullWidth
            };
        }
    },

    methods: {
        classObj(value) {
            return {
                'text-center': value === 'center'
            };
        }
    }
};
</script>

<style scoped>
.material-symbols-outlined.chevron {
    font-size: 2.2rem;
}
</style>

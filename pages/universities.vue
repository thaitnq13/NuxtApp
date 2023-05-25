<script lang="ts" setup>
import { UniversityModel } from '~/model/common';

const res: any = await useLazyFetch('http://universities.hipolabs.com/search?country=China');
const data: UniversityModel[] = res.data;
const pending = res.pending;
watch(data, newData => {
});
</script>

<template>
    <div v-if="pending">Loading ...</div>
    <div v-else>
        <table class="w-full">
            <tr>
                <th>Country</th>
                <th>Code</th>
                <th>Name</th>
                <th>Web page</th>
            </tr>
            <template v-for="(item, idx) in data" :key="item.id">
                <template v-for="(web, index) in item.web_pages" :key="index">
                    <tr>
                        <template v-if="index === 0">
                            <td :rowspan="item.web_pages.length">{{ item.country }}</td>
                            <td :rowspan="item.web_pages.length">{{ item.alpha_two_code }}</td>
                            <td :rowspan="item.web_pages.length">{{ item.name }}</td>
                        </template>
                        <td>{{ web }}</td>
                    </tr>
                </template>
            </template>
        </table>
    </div>
</template>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    text-align: center;
}
</style>

<template>
    <div>
        <v-select
            label="Choose the particular country"
            :items="countrySelect"
            :model-value="country"
            @update:model-value="handleFetchData"
        >
        </v-select>
    </div>
    <template v-if="dataRender">
        <div v-if="pending">Loading ...</div>
        <div v-else>
            <table class="w-full">
                <tr>
                    <th>Country</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Web page</th>
                </tr>
                <template v-for="(item, idx) in dataRender?.data" :key="item.id">
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
</template>

<script lang="ts" setup>
import { ResponseModel, UniversityModel } from '~/model/common';

let country: Ref<string> = ref('China');
let pending: boolean = true;
let dataRender: Ref<{ data: UniversityModel[] }> = ref({ data: [] });
const { data: resCountry } = await useLazyFetch(() => 'https://api.first.org/data/v1/countries');
const res = resCountry.value as ResponseModel;

let countrySelect: string[] = [];

if (res.data && res) {
    const countries = res.data;
    Object.keys(countries).forEach(country => {
        if (countries[country] && countries[country].country) {
            countrySelect.push(countries[country].country);
        }
    });
}

if (country.value) {
    const res: any = await useFetch(() => `http://universities.hipolabs.com/search?country=${country.value}`);
    const dataCountry: UniversityModel[] = res.data.value;
    pending = res.pending;
    dataRender.value = { data: dataCountry };
}
const handleFetchData = async (e: any) => {
    country.value = e;
    if (e) {
        const res: any = await useFetch(() => `http://universities.hipolabs.com/search?country=${e}`);
        const dataCountry: UniversityModel[] = res.data.value;
        pending = res.pending;
        dataRender.value = { data: dataCountry };
    }
};
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    text-align: center;
}
</style>

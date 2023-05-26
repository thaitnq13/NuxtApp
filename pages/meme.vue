<script lang="ts" setup>
let memeName: Ref<String> = ref('Condescending-Wonka');
const params = { top: 'Top Text', bottom: 'Bottom Text', meme: memeName.value };
const { data, pending, refresh, error } = await useFetch(() => 'https://ronreiter-meme-generator.p.rapidapi.com/meme', {
    server: false,
    query: params,
    headers: {
        'X-RapidAPI-Key': '2885cb7203msh9cf1169d0200910p1364d5jsnc19a85a33dc4',
        'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com',
    },
});

let base64 = '';
let blob: Ref<Blob | null> = ref(null);
if (data.value) {
    blob.value = data.value as unknown as Blob;
    var reader = new FileReader();
    if (blob.value) {
        reader.readAsDataURL(blob.value);
        reader.onloadend = function () {
            base64 = String(reader.result);
        };
    }
}

function refreshPage() {
    refresh();
}
</script>

<template>
    <div>
        <v-text-field v-model="memeName" :counter="10" label="meme Name" required></v-text-field>
        <div v-if="pending">Loading ...</div>
        <div v-else>
            <button
                class="font-bold p-4 rounded-full text-xl bg-green-500 text-white flex justify-center"
                @click="refreshPage"
            >
                Refresh
            </button>
            <img :src="base64" />
        </div>
    </div>
</template>

<style scoped></style>

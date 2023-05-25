<script setup>
const { data, pending, refresh, error } = await useFetch('https://official-joke-api.appspot.com/random_joke');

function refreshPage() {
    refresh();
}
</script>

<template>
    <div v-if="pending">Loading ...</div>
    <div v-else>
        <button class="font-bold p-4 rounded-full text-xl bg-green-500 text-white flex justify-center" @click="refreshPage">Refresh</button>
        <div>Type: {{ data.type }}</div>
        <div>Joke: {{ data.setup }}</div>
        <div>Punchline: {{ data.punchline }}</div>
    </div>
</template>

<style scoped></style>


<script setup>
const { data, pending, refresh, error } = await useFetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Pet_door&formatversion=2&rvprop=content&rvslots=*',
);

function refreshPage() {
    refresh();
}
</script>

<template>
    <div v-if="pending">Loading ...</div>
    <div v-else>get content</div>
</template>

<style scoped></style>

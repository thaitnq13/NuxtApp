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
    <div v-else>
        <v-card class="content-card">
            <v-card-title></v-card-title>
            <v-card-text>
                <v-text-field></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn> </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style scoped></style>

<template>
    <div class="searchbar-container">
        <v-text-field label="Tìm công việc" prepend-icon="mdi-phone"> </v-text-field>
        <v-select
            label="Tỉnh/Thành phố"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-select>
        <v-select
            label="Quận/Huyện"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-select>
        <v-btn class="text-white bg-[#F98620]" size="x-large" :rounded="'rounded-lg'">Tìm kiếm</v-btn>
    </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.searchbar-container:deep {
    background: #1e4ba1;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.04), 0px 2px 4px -2px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    padding: 2.1rem;
    display: flex;
    align-items: center;
    gap: 1.7rem;
    .v-input {
        background-color: white;
        width: 100%;
        border-radius: 5px;
    }
    .v-btn {
        background-color: #f98620;
    }
}
</style>

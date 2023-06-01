<template>
    <nav class="flex place-content-evenly w-full text-text-header items-center">
        <img class="my-[12px]" :src="'/img/logo.png'" width="64" height="64" />
        <ul class="flex gap-x-[1.25rem] text-base items-center">
            <li class="p-2.5 text-text-header-active"><NuxtLink to="/">Trang chủ</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/joke">Hot job</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/meme">Danh sách việc làm</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/universities">Ứng tuyển</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/universities">Quy trình</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/about">Tin tức</NuxtLink></li>
            <li class="p-2.5"><NuxtLink to="/about">Liên hệ</NuxtLink></li>
        </ul>
        <v-btn class="h-full text-bold flex text-white text-base" color="#67C2C3">Liên hệ</v-btn>
    </nav>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss" scoped></style>

<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :navigation="true"
        :effect="'creative'"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
        }"
        :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-100%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }"
    >
        <SwiperSlide v-for="slide in IMAGE_MOCK" :key="slide">
            <img class="w-full h-[410px]" :src="slide" alt="height" />
        </SwiperSlide>
    </Swiper>
</template>
<script setup lang="ts">
const IMAGE_MOCK = ['/img/background-footer.png', '/img/image-1.png', '/img/image-2.png', '/img/image-3.png'];
</script>

<style lang="scss" scoped></style>

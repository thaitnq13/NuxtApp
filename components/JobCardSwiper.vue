<template>
    <Swiper
        :centered-slides-bounds="true"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="3"
        :space-between="100"
        :loop="false"
        :navigation="true"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
        }"
    >
        <SwiperSlide v-for="(slide, index) in props.job_card" :key="index">
            <JobCard
                :title="slide.title"
                :image="slide.image"
                :salary="slide.salary"
                :phone="slide.phone"
                :date="slide.date"
                :province="slide.province"
            />
        </SwiperSlide>
    </Swiper>
</template>
<script setup lang="ts">
import { JobCardModel } from '~/model/common';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const props = defineProps({
    job_card: {
        type: Array<JobCardModel>,
        default: [],
    },
});
</script>

<style lang="scss" scoped>
.swiper {
    padding: 0 100px;
}
</style>

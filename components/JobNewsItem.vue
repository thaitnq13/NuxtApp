<template>
    <div class="job-news-container frame-item">
        <div class="grid grid-cols-12 gap-x-1">
            <div class="flex justify-center"><img class="w-[80px] h-[80px]" :src="props.image" alt="" /></div>

            <div class="col-span-3">
                <div class="font-bold text-xl text-[#1E293B]">{{ props.title }}</div>
                <div class="flex gap-x-3 mt-3.5">
                    <div class="flex gap-2.5">
                        <v-icon>mdi-clock-outline</v-icon>
                        <div>{{ props.date }}</div>
                    </div>
                    <div class="border-right"></div>
                    <div class="flex gap-2.5">
                        <v-icon>mdi-chat-processing-outline</v-icon>
                        <div>{{ props.phone }}</div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 flex justify-center gap-x-2.5">
                <v-icon>mdi-cash</v-icon>
                <div>{{ props.salary }}</div>
            </div>
            <div class="col-span-4 flex gap-x-2.5">
                <v-icon>mdi-map-marker</v-icon>
                <div class="text-[#1E293B]">{{ props.province.join(', ') }}</div>
            </div>
            <div class="col-span-2 flex flex-col items-center">
                <div class="w-[90%]">
                    <v-btn
                        class="text-white bg-[#67C2C3] mb-5 text-sm"
                        size="x-large"
                        :rounded="'rounded-lg'"
                        append-icon="mdi-arrow-right"
                        >Ứng tuyển</v-btn
                    >
                    <div class="flex gap-x-2.5">
                        <v-icon>mdi-share-variant-outline</v-icon>
                        <div class="text-[#3B82F6]"><span>Chia sẻ việc làm</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    salary: {
        type: String,
        default: '',
    },
    date: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    province: {
        type: Array<String>,
        default: [],
    },
});
</script>

<style lang="scss" scoped>
.job-news-container {
    padding: 24px 15px 28px 12px;
    .border-right {
        border-right: 1px solid #cbd5e1;
    }
    .v-btn {
        background-color: #67c2c3;
    }
}
</style>

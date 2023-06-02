<template>
    <div class="card-container">
        <img class="rounded-md w-full h-[236px]" :src="props.image" alt="" />
        <div class="mx-4">
            <Badge className="my-5" name="HOT" />
            <span class="font-bold text-xl text-[#1E293B]">{{ props.title }}</span>
            <div class="flex gap-x-2.5 mt-5">
                <v-icon>mdi-cash</v-icon>
                <div>{{ props.salary }}</div>
            </div>
            <div class="flex flex-wrap gap-x-7 mt-5 mb-8">
                <div class="flex gap-2.5">
                    <v-icon>mdi-clock-outline</v-icon>
                    <div>{{ props.date }}</div>
                </div>
                <div class="flex gap-2.5">
                    <v-icon>mdi-chat-processing-outline</v-icon>
                    <div>{{ props.phone }}</div>
                </div>
            </div>
            <div class="flex flex-wrap gap-2">
                <div class="badge-item text-sm" v-for="item in props.province">
                    {{ item }}
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
.card-container {
    background: #fff;
    border: 1px solid #67c2c3;
    border-radius: 6px;
    padding: 8px 8px 14px 8px;
    height: 95%;
    .badge-item {
        background: #fff;
        border: 1px solid #67c2c3;
        border-radius: 6px;
    }
}
</style>

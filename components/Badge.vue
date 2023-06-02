<template>
    <div :class="'rounded-md bg-[#F98620] w-11 text-center ' + props.className">
        <span class="text-white text-xs font-bold">{{ props.name }}</span>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    className: {
        type: String,
        default: '',
    },
});
</script>

<style lang="scss" scoped></style>

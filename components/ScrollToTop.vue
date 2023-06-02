<template>
    <div ref="scrollTopButton" class="sticky flex justify-end bottom-0 pb-9 pr-[30px] transition z-10">
        <v-btn :rounded="'circle'" @click="scrollToTop">
            <v-icon>mdi-arrow-up-thin</v-icon>
        </v-btn>
    </div>
</template>

<script setup lang="ts">
const scrollTopButton: Ref<HTMLElement | null> = ref(null);
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const scrollBtn = scrollTopButton.value;
    if (scrollBtn) {
        if (window.scrollY > 0) {
            scrollBtn?.classList.remove('invisible');
        } else {
            scrollBtn?.classList.add('invisible');
        }
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
</script>

<style lang="scss" scoped>
.v-btn.v-btn--density-default {
    height: 48px;
    width: 48px;
}
</style>

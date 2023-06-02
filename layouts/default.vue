<template>
    <div class="relative">
        <header class="sticky top-0 z-20 w-full h-[88px] bg-bg-header font-header">
            <Header></Header>
        </header>
        <main class="flex-grow w-full h-full max-w-7xl">
            <slot></slot>
            <ScrollToTop />
            <footer class="flex items-center justify-center w-full background-footer text-black font-base">
                <Footer></Footer>
            </footer>
        </main>
    </div>
</template>

<script setup lang="ts">
const route = useRouter();
</script>

<style lang="scss" scoped>
.background-footer {
    background-image: url('/img/background-footer.png');
}
</style>

<template>
    <div class="flex flex-col w-full h-screen">
        <main class="flex-grow w-full h-full max-w-7xl">
            <header class="w-full h-[88px] bg-bg-header font-header">
                <Header></Header>
            </header>
            <slot></slot>
            <footer class="flex items-center justify-center w-full text-black bg-bg-header font-base">
                <Footer></Footer>
            </footer>
        </main>
    </div>
</template>

<script setup lang="ts">
const route = useRouter();
</script>

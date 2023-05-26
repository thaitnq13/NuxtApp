<template>
    <div class="flex flex-col w-full h-screen overflow-hidden bg-green-50">
        <header class="w-full h-16 bg-green-500">
            <nav class="flex items-center w-full h-full text-black">
                <ul class="flex gap-x-1 text-xl font-bold text-white">
                    <li class="p-2.5 border-r-2"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="p-2.5 border-r-2"><NuxtLink to="/joke">Joke</NuxtLink></li>
                    <li class="p-2.5 border-r-2"><NuxtLink to="/meme">Meme</NuxtLink></li>
                    <li class="p-2.5 border-r-2"><NuxtLink to="/universities">Universities</NuxtLink></li>
                    <li class="p-2.5 border-r-2"><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
            <slot></slot>
        </main>
        <footer class="flex items-center justify-center w-full h-16 text-black">
            <p class="text-gray-700">My Nuxt App &copy; {{ new Date().getFullYear() }}</p>
        </footer>
    </div>
</template>

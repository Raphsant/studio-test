<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-16 mt-16 md:mt-0">
        <h1 class="font-mono text-4xl font-bold text-center mb-4" :style="{ color: colors.darkGray }">
            THE HASH TABLE
        </h1>
        <p class="text-center mb-6" :style="{ color: colors.mediumGray }">
            Insights, trends, and data-driven stories from the cannabis industry
        </p>
        <div class="w-32 h-1 bg-black mx-auto mb-16"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div class="border-2 border-black overflow-hidden relative">
            <div class="p-0 grid grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-3 h-full">
                    <div class="relative h-64 md:h-full">
                        <img src="/images/placeholder-person.jpg" alt="Featured blog post"
                            class="w-full h-full object-cover border-b-2 md:border-b-0 md:border-r-2 border-black" />
                    </div>
                </div>

                <div class="md:col-span-2 p-6" :style="{ backgroundColor: colors.blue }">
                    <div class="inline-block mb-3 px-2 py-1 border-2 border-black text-xs font-mono"
                        :style="{ backgroundColor: 'white', color: colors.darkGray }">
                        FEATURED
                    </div>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4 font-mono text-white">
                        Data-Driven Cultivation: How AI is Revolutionizing Cannabis Growth Cycles
                    </h2>
                    <p class="text-white mb-6">
                        Machine learning algorithms are helping cultivators optimize growing conditions, predict
                        harvest times, and maximize cannabinoid profiles with unprecedented accuracy.
                    </p>
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                            <img src="/images/placeholder-person.jpg" alt="Author" class="w-full h-full object-cover" />
                        </div>
                        <div class="ml-3">
                            <p class="font-mono font-bold text-white">Alex Rivera</p>
                            <p class="text-xs text-white">Apr 12, 2025 · 8 min read</p>
                        </div>
                    </div>
                    <NuxtLink to="/blog/data-driven-cultivation"
                        class="inline-block border-2 border-black px-4 py-2 font-bold transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                        :style="{ backgroundColor: 'white', color: colors.darkGray }">
                        READ ARTICLE
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            colors: {
                yellow: '#E8C547',
                darkGray: '#30323D',
                white: '#FAFAFA',
                mediumGray: '#4D5061',
                blue: '#5C80BC',
                green: '#16DB65'
            },
        }
    },
})
</script>
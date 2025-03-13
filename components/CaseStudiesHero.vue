<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-16 mt-16 md:mt-0">
        <h1 class="font-mono text-4xl font-bold text-center mb-4" :style="{ color: colors.darkGray }">
            CASE STUDIES
        </h1>
        <div class="w-32 h-1 bg-black mx-auto mb-16"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div class="absolute -top-8 right-16 hidden md:block">
            <div class="w-16 h-16 border-2 border-black rounded-full bg-white overflow-hidden relative">
                <div class="w-full h-full transform -rotate-12 flex items-center justify-center">
                    <div class="w-8 h-8 bg-black rounded-full transform translate-y-6"></div>
                    <div class="w-5 h-5 bg-black rounded-full absolute top-3 right-3"></div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-16 right-8 hidden md:block">
            <div class="w-16 h-16 border-2 border-black bg-white overflow-hidden relative">
                <div class="w-full h-full">
                    <div class="w-12 h-6 border-2 border-black rounded-full absolute top-2 left-2"></div>
                    <div class="w-12 h-6 border-2 border-black rounded-full absolute bottom-2 right-2"></div>
                </div>
            </div>
        </div>

        <div class="border-2 border-black overflow-hidden relative">
            <div class="bg-yellow-300 p-4 md:p-8 relative" :style="{ backgroundColor: colors.yellow }">
                <div class="absolute top-0 left-0 bg-black px-4 py-2 z-10">
                    <h3 class="font-mono text-sm font-bold text-white">CANNABIS DATA EXPERTS</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div>
                        <blockquote class="text-lg md:text-xl font-medium mb-8" :style="{ color: colors.darkGray }">
                            "Our data pipelines used to take eight hours. Now they're taking eight minutes, and I
                            see a world where they take eight seconds. This is why we made the big bet on ByteHog
                            and cannabis data analytics. It's only possible with ByteHog."
                        </blockquote>

                        <div class="flex items-center">
                            <div
                                class="w-16 h-16 border-2 border-black bg-white rounded-md overflow-hidden flex-shrink-0">
                                <img src="/images/placeholder-person.jpg" alt="CEO"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-4">
                                <p class="font-mono font-bold" :style="{ color: colors.darkGray }">Sarah Johnson</p>
                                <p class="text-sm" :style="{ color: colors.mediumGray }">Co-founder and CTO</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="border-2 border-black bg-white p-4 transform rotate-2">
                            <div class="border-2 border-black p-8" :style="{ backgroundColor: colors.blue }">
                                <div class="flex justify-center">
                                    <Database class="h-24 w-24 text-white mb-6" />
                                </div>
                                <div class="border-t-2 border-dashed border-white pt-4">
                                    <div class="flex justify-between">
                                        <div class="w-4 h-4 rounded-full bg-white"></div>
                                        <div class="w-4 h-4 rounded-full bg-white"></div>
                                        <div class="w-4 h-4 rounded-full bg-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-8 space-x-2">
                    <button v-for="i in 3" :key="i" class="w-3 h-3 rounded-full border border-black"
                        :class="{ 'bg-black': i === 1 }"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Database } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Database,
    },
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
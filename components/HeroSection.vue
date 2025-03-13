<template>
    <div class="relative overflow-hidden border-b-2 md:mt-0 mt-12 border-black"
        :style="{ backgroundColor: colors.darkGray }">
        <div class="absolute bottom-12 left-20">
            <div class="w-6 h-6 border-2 border-black rotate-45" :style="{ backgroundColor: colors.green }"></div>
        </div>
        <div class="absolute top-1/2 right-16">
            <Cloud class="w-16 h-16 text-white" />
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="font-mono text-4xl md:text-5xl leading-tight font-bold mb-6 mt-6 md:mt-0"
                        :style="{ color: colors.white }">
                        Build Your<br />
                        Cannabis<br />
                        Data Foundation
                    </h1>
                    <h2 class="font-mono text-xl md:text-2xl leading-tight font-semibold mb-6"
                        :style="{ color: colors.white }">From Raw Data to
                        Powerful Insights</h2>
                    <p class=" text-lg mb-8 max-w-xl" :style="{ color: colors.white }">
                        Specifically designed for cannabis businesses. Turn your scattered data into a unified,
                        actionable resource.
                    </p>
                    <div class="space-x-4">
                        <NuxtLink to="" class="border-2 border-black px-6 py-3 font-bold inline-flex items-center"
                            :style="{ backgroundColor: colors.green, color: 'white' }">
                            Get Started
                            <ArrowRight class="ml-2 h-5 w-5" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <div class="relative border-2 border-black bg-white p-4 transform rotate-2">
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
                    <div class="absolute -bottom-4 -left-4">
                        <div class="w-8 h-8 border-2 border-black transform -rotate-12"
                            :style="{ backgroundColor: colors.green }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Menu, X, Database, Cloud, ArrowRight } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Menu,
        X,
        Database,
        Cloud,
        ArrowRight,
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
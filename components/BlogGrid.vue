<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div class="mb-8 border-b-2 border-black pb-2">
            <h2 class="font-mono text-2xl font-bold" :style="{ color: colors.darkGray }">LATEST ARTICLES</h2>
        </div>

        <div class="flex flex-wrap mb-8 space-x-2">
            <button class="border-2 border-black px-4 py-2 mb-2 font-mono text-sm font-bold"
                :style="{ backgroundColor: activeCategory === 'all' ? colors.yellow : 'white', color: colors.darkGray }"
                @click="setActiveCategory('all')">
                ALL
            </button>
            <button class="border-2 border-black px-4 py-2 mb-2 font-mono text-sm font-bold"
                :style="{ backgroundColor: activeCategory === 'data' ? colors.yellow : 'white', color: colors.darkGray }"
                @click="setActiveCategory('data')">
                DATA ANALYTICS
            </button>
            <button class="border-2 border-black px-4 py-2 mb-2 font-mono text-sm font-bold"
                :style="{ backgroundColor: activeCategory === 'industry' ? colors.yellow : 'white', color: colors.darkGray }"
                @click="setActiveCategory('industry')">
                INDUSTRY TRENDS
            </button>
            <button class="border-2 border-black px-4 py-2 mb-2 font-mono text-sm font-bold"
                :style="{ backgroundColor: activeCategory === 'tech' ? colors.yellow : 'white', color: colors.darkGray }"
                @click="setActiveCategory('tech')">
                TECHNOLOGY
            </button>
            <button class="border-2 border-black px-4 py-2 mb-2 font-mono text-sm font-bold"
                :style="{ backgroundColor: activeCategory === 'compliance' ? colors.yellow : 'white', color: colors.darkGray }"
                @click="setActiveCategory('compliance')">
                COMPLIANCE
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="relative h-48">
                    <img src="/images/placeholder-person.jpg" alt="Blog post"
                        class="w-full h-full object-cover border-b-2 border-black" />
                    <div class="absolute top-0 left-0 bg-black px-2 py-1">
                        <p class="text-xs font-mono text-white">DATA ANALYTICS</p>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                        Beyond the Dashboard: The Evolution of Cannabis Business Intelligence
                    </h3>
                    <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                        How cannabis companies are moving beyond basic reporting to sophisticated predictive
                        analytics and AI-driven insights that transform operations.
                    </p>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                                <img src="/images/placeholder-person.jpg" alt="Author"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs font-bold" :style="{ color: colors.darkGray }">Jamie Chen</p>
                                <p class="text-xs" :style="{ color: colors.mediumGray }">Apr 8, 2025 · 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/blog/beyond-the-dashboard"
                        class="font-bold inline-flex items-center border-b-2 border-black text-sm"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="relative h-48">
                    <img src="/images/placeholder-person.jpg" alt="Blog post"
                        class="w-full h-full object-cover border-b-2 border-black" />
                    <div class="absolute top-0 left-0 bg-black px-2 py-1">
                        <p class="text-xs font-mono text-white">INDUSTRY TRENDS</p>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                        The Great Data Race: How Multi-State Operators Are Leveraging Analytics
                    </h3>
                    <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                        Multi-state operators are using sophisticated data integration techniques to gain
                        competitive advantages and streamline operations across regulatory boundaries.
                    </p>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                                <img src="/images/placeholder-person.jpg" alt="Author"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs font-bold" :style="{ color: colors.darkGray }">Marcus Johnson</p>
                                <p class="text-xs" :style="{ color: colors.mediumGray }">Apr 6, 2025 · 7 min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/blog/the-great-data-race"
                        class="font-bold inline-flex items-center border-b-2 border-black text-sm"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="relative h-48">
                    <img src="/images/placeholder-person.jpg" alt="Blog post"
                        class="w-full h-full object-cover border-b-2 border-black" />
                    <div class="absolute top-0 left-0 bg-black px-2 py-1">
                        <p class="text-xs font-mono text-white">TECHNOLOGY</p>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                        Database Technologies That Are Changing the Cannabis Data Landscape
                    </h3>
                    <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                        From time-series databases to graph networks, emerging data technologies are enabling
                        cannabis businesses to solve complex problems and uncover new insights.
                    </p>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                                <img src="/images/placeholder-person.jpg" alt="Author"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs font-bold" :style="{ color: colors.darkGray }">Priya Sharma</p>
                                <p class="text-xs" :style="{ color: colors.mediumGray }">Apr 3, 2025 · 10 min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/blog/database-technologies"
                        class="font-bold inline-flex items-center border-b-2 border-black text-sm"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="relative h-48">
                    <img src="/images/placeholder-person.jpg" alt="Blog post"
                        class="w-full h-full object-cover border-b-2 border-black" />
                    <div class="absolute top-0 left-0 bg-black px-2 py-1">
                        <p class="text-xs font-mono text-white">COMPLIANCE</p>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                        Automated Compliance: How Data Pipelines Are Reducing Regulatory Risk
                    </h3>
                    <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                        Smart cannabis businesses are implementing automated compliance systems that dramatically
                        reduce reporting errors and save thousands of labor hours.
                    </p>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                                <img src="/images/placeholder-person.jpg" alt="Author"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-2">
                                <p class="text-xs font-bold" :style="{ color: colors.darkGray }">David Garcia</p>
                                <p class="text-xs" :style="{ color: colors.mediumGray }">Mar 29, 2025 · 5 min read
                                </p>
                            </div>
                        </div>
                    </div>
                    <NuxtLink to="/blog/automated-compliance"
                        class="font-bold inline-flex items-center border-b-2 border-black text-sm"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-12">
            <button class="border-2 border-black px-6 py-3 font-bold"
                :style="{ backgroundColor: colors.green, color: 'white' }">
                LOAD MORE ARTICLES
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ArrowRight, } from 'lucide-vue-next'

const activeCategory = ref('all')
const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})

const setActiveCategory = (category) => {
    activeCategory.value = category
}
</script>
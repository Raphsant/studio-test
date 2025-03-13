<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="h-12 flex items-center justify-center border-b-2 border-black font-mono font-bold"
                    :style="{ backgroundColor: colors.blue, color: 'white' }">
                    Green Leaf Dispensary
                </div>
                <div class="p-6">
                    <div class="flex mb-4">
                        <div class="w-16 h-16 border-2 border-black rounded-full overflow-hidden flex-shrink-0 mr-4">
                            <img src="/images/jane.png" alt="Green Leaf" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                                INVENTORY OPTIMIZATION WITH REAL-TIME ANALYTICS
                            </h3>
                        </div>
                    </div>

                    <p class="mb-4" :style="{ color: colors.mediumGray }">
                        "Our data pipelines used to take eight hours. Now they're taking eight minutes. This is why
                        we made the big bet on ByteHog and cannabis data analytics. It's only possible with
                        ByteHog."
                    </p>

                    <NuxtLink to="/case-studies/green-leaf"
                        class="font-bold inline-flex items-center border-b-2 border-black"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="h-12 flex items-center justify-center border-b-2 border-black font-mono font-bold"
                    :style="{ backgroundColor: colors.blue, color: 'white' }">
                    CannaGrow Cultivators
                </div>
                <div class="p-6">
                    <div class="flex mb-4">
                        <div class="w-16 h-16 border-2 border-black rounded-full overflow-hidden flex-shrink-0 mr-4">
                            <img src="/images/snowflake.png" alt="CannaGrow" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                                STREAMLINING COMPLIANCE REPORTING
                            </h3>
                        </div>
                    </div>

                    <p class="mb-4" :style="{ color: colors.mediumGray }">
                        "With ByteHog, it only took an hour to get an app up and running, which was pretty cool. It
                        uses 18 million rows of data, but once it's loaded, we have all this interactivity right on
                        the website."
                    </p>

                    <NuxtLink to="/case-studies/canna-grow"
                        class="font-bold inline-flex items-center border-b-2 border-black"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="h-12 flex items-center justify-center border-b-2 border-black font-mono font-bold"
                    :style="{ backgroundColor: colors.green, color: 'white' }">
                    CannaTech Solutions
                </div>
                <div class="p-6">
                    <div class="flex mb-4">
                        <div class="w-16 h-16 border-2 border-black rounded-full overflow-hidden flex-shrink-0 mr-4">
                            <img src="/images/airflow.png" alt="CannaTech" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                                PREDICTIVE ANALYTICS FOR RETAIL
                            </h3>
                        </div>
                    </div>

                    <p class="mb-4" :style="{ color: colors.mediumGray }">
                        "ByteHog's innovative approach to managing data and providing easy-to-use tooling has
                        allowed us to expand our application use cases and offer more value to our customers."
                    </p>

                    <NuxtLink to="/case-studies/cannatech"
                        class="font-bold inline-flex items-center border-b-2 border-black"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>

            <div class="border-2 border-black bg-white overflow-hidden">
                <div class="h-12 flex items-center justify-center border-b-2 border-black font-mono font-bold"
                    :style="{ backgroundColor: colors.yellow, color: colors.darkGray }">
                    HempData Analytics
                </div>
                <div class="p-6">
                    <div class="flex mb-4">
                        <div class="w-16 h-16 border-2 border-black rounded-full overflow-hidden flex-shrink-0 mr-4">
                            <img src="/images/tableau.png" alt="HempData" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                                MARKET INTELLIGENCE DASHBOARD
                            </h3>
                        </div>
                    </div>

                    <p class="mb-4" :style="{ color: colors.mediumGray }">
                        "We reduced our monthly reporting time from 3 days to 4 hours with ByteHog's automated data
                        pipeline solution. The ROI was immediate and substantial."
                    </p>

                    <NuxtLink to="/case-studies/hempdata"
                        class="font-bold inline-flex items-center border-b-2 border-black"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

export default defineComponent({
    components: {
        ArrowRight
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
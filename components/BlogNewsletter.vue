<template>
    <div class="border-t-2 border-b-2 border-black" :style="{ backgroundColor: colors.yellow }">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="border-2 border-black bg-white p-6 relative transform rotate-1">
                <div class="absolute -top-4 -left-4">
                    <div class="w-8 h-8 border-2 border-black transform rotate-12"
                        :style="{ backgroundColor: colors.blue }"></div>
                </div>
                <div class="text-center">
                    <h2 class="font-mono text-2xl font-bold mb-4" :style="{ color: colors.darkGray }">
                        GET DATA INSIGHTS DELIVERED
                    </h2>
                    <p class="mb-8" :style="{ color: colors.mediumGray }">
                        Subscribe to our newsletter and receive the latest cannabis data insights, industry trends,
                        and tech tips directly to your inbox.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Enter your email address"
                            class="flex-grow px-4 py-3 border-2 border-black focus:outline-none" />
                        <button class="border-2 border-black px-6 py-3 font-bold"
                            :style="{ backgroundColor: colors.blue, color: 'white' }">
                            SUBSCRIBE
                        </button>
                    </div>
                    <p class="text-xs mt-4" :style="{ color: colors.mediumGray }">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
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
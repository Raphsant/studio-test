<template>
    <div class="relative border-t-2 border-black" :style="{ backgroundColor: colors.darkGray }">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div class="absolute top-12 right-16">
                <div class="w-6 h-6 border-2 border-black transform rotate-12"
                    :style="{ backgroundColor: colors.green }"></div>
            </div>

            <div class="text-center max-w-3xl mx-auto">
                <h2 class="font-mono text-3xl font-bold mb-4" :style="{ color: colors.white }">
                    READY TO SEE SIMILAR RESULTS?
                </h2>
                <p class="text-lg mb-8" :style="{ color: colors.white }">
                    Schedule a consultation with our cannabis data experts and start unlocking insights today.
                </p>
                <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <NuxtLink to="/contact"
                        class="border-2 border-black px-6 py-3 font-bold inline-flex items-center justify-center"
                        :style="{ backgroundColor: colors.green, color: 'white' }">
                        <Mail class="mr-2 h-5 w-5" /> Contact Us
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Mail } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Mail
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
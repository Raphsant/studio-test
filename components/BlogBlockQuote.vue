<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <blockquote class="text-xl font-medium mb-6" :style="{ color: colors.darkGray }">
            "ByteHog's newsletter is the only cannabis industry email I actually look forward to receiving. Packed
            with actionable insights and zero fluff."
        </blockquote>
        <div class="flex items-center justify-center">
            <div class="w-12 h-12 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                <img src="/images/placeholder-person.jpg" alt="Testimonial author" class="w-full h-full object-cover" />
            </div>
            <div class="ml-4 text-left">
                <p class="font-mono font-bold" :style="{ color: colors.darkGray }">Lisa Williams</p>
                <p :style="{ color: colors.mediumGray }">CTO at GreenTech Analytics</p>
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
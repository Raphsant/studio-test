<template>
    <div class="border-2 border-black p-4" :style="{ backgroundColor: colors.yellow }">
        <h4 class="font-mono font-bold mb-2" :style="{ color: colors.darkGray }">
            GET MORE INSIGHTS
        </h4>
        <p class="text-sm mb-4" :style="{ color: colors.darkGray }">
            Join our newsletter for weekly data insights and industry trends.
        </p>
        <input type="email" placeholder="Your email" class="w-full px-3 py-2 mb-2 border-2 border-black text-sm" />
        <button class="w-full border-2 border-black px-4 py-2 text-sm font-bold"
            :style="{ backgroundColor: colors.blue, color: 'white' }">
            SUBSCRIBE
        </button>
    </div>
</template>

<script setup>
const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})
</script>
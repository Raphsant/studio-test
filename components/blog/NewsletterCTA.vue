<template>
    <div class="border-t-2 border-black" :style="{ backgroundColor: colors.blue }">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="text-center">
                <h2 class="font-mono text-3xl font-bold mb-4 text-white">
                    STAY AHEAD OF THE CURVE
                </h2>
                <p class="text-lg mb-8 text-white max-w-3xl mx-auto">
                    Never miss a data insight. Subscribe to our newsletter to receive the latest cannabis industry
                    trends and analysis.
                </p>
                <div class="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
                    <input type="email" placeholder="Your email address"
                        class="flex-grow px-4 py-3 border-2 border-black focus:outline-none" />
                    <button class="border-2 border-black px-6 py-3 font-bold"
                        :style="{ backgroundColor: colors.green, color: 'white' }">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
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
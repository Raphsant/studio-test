<template>
    <div class="border-2 border-black p-8 my-12" :style="{ backgroundColor: colors.blue }">
        <h3 class="font-mono text-xl font-bold mb-4 text-white">Key Takeaways</h3>
        <ul class="space-y-2 text-white list-none">
            <li v-for="(point, index) in keyPoints" :key="index" class="flex items-start">
                <div class="mt-1 mr-3">
                    <div class="w-4 h-4 border-2 border-black bg-white"></div>
                </div>
                <span>{{ point }}</span>
            </li>
        </ul>
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

defineProps({
    keyPoints: {
        type: Array,
        default: () => []
    }
})
</script>
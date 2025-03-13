<template>
    <div class="border-2 border-black bg-white p-4 mb-8">
        <h4 class="font-mono font-bold mb-4" :style="{ color: colors.darkGray }">
            CONTENTS
        </h4>
        <ul class="space-y-2 text-sm">
            <li v-for="(section, index) in tableOfContents" :key="index">
                <a href="#" class="hover:underline" :style="{ color: colors.mediumGray }">
                    {{ section }}
                </a>
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
    tableOfContents: {
        type: Array,
        default: () => []
    }
})
</script>
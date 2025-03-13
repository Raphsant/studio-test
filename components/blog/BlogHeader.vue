<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 mt-16 md:mt-0">
        <div class="mb-8">
            <NuxtLink to="/blog" class="inline-flex items-center font-mono text-sm border-b-2 border-black"
                :style="{ color: colors.darkGray }">
                <ArrowLeft class="mr-1 h-4 w-4" /> BACK TO BLOG
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'

const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})
</script>
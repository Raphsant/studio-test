<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="mb-6">
            <span class="inline-block border-2 border-black py-1 px-3 mb-4 font-mono text-xs"
                :style="{ backgroundColor: colors.yellow, color: colors.darkGray }">
                {{ category }}
            </span>
            <h1 class="font-mono text-4xl font-bold mb-6" :style="{ color: colors.darkGray }">
                {{ title }}
            </h1>
            <p class="text-xl mb-8" :style="{ color: colors.mediumGray }">
                {{ excerpt }}
            </p>
        </div>

        <div class="flex items-center mb-8 border-t-2 border-b-2 border-black py-4">
            <div class="w-12 h-12 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                <img :src="authorImage" :alt="author" class="w-full h-full object-cover" />
            </div>
            <div class="ml-4">
                <p class="font-mono font-bold" :style="{ color: colors.darkGray }">{{ author }}</p>
                <p class="text-sm" :style="{ color: colors.mediumGray }">
                    {{ date }} · {{ readTime }} min read
                </p>
            </div>
            <div class="ml-auto flex space-x-4">
                <button class="flex items-center" :style="{ color: colors.mediumGray }">
                    <Share2 class="h-5 w-5 mr-1" />
                    <span class="text-sm">Share</span>
                </button>
            </div>
        </div>

        <div class="mb-12 border-2 border-black relative overflow-hidden">
            <img :src="featuredImage" :alt="title" class="w-full h-auto" />
        </div>
    </div>
</template>

<script setup>
import { Share2 } from 'lucide-vue-next'
const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})

defineProps({
    category: {
        type: String,
        default: 'CATEGORY'
    },
    title: {
        type: String,
        default: 'Article Title'
    },
    excerpt: {
        type: String,
        default: 'Article excerpt goes here'
    },
    author: {
        type: String,
        default: 'Author Name'
    },
    authorImage: {
        type: String,
        default: '/images/placeholder-person.jpg'
    },
    date: {
        type: String,
        default: 'Jan 1, 2025'
    },
    readTime: {
        type: Number,
        default: 5
    },
    featuredImage: {
        type: String,
        default: '/images/placeholder-person.jpg'
    }
})
</script>
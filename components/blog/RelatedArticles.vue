<!-- components/blog/RelatedArticles.vue -->
<template>
    <div class="mt-16">
        <h3 class="font-mono text-xl font-bold mb-6 border-b-2 border-black pb-2" :style="{ color: colors.darkGray }">
            RELATED ARTICLES
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(related, index) in relatedArticles" :key="index"
                class="border-2 border-black bg-white overflow-hidden">
                <div class="h-32 relative">
                    <img :src="related.image" :alt="related.title"
                        class="w-full h-full object-cover border-b-2 border-black" />
                </div>
                <div class="p-4">
                    <h4 class="font-mono text-base font-bold mb-2" :style="{ color: colors.darkGray }">
                        {{ related.title }}
                    </h4>
                    <NuxtLink :to="'/blog/' + related.slug" class="font-bold inline-flex items-center text-sm"
                        :style="{ color: colors.blue }">
                        READ MORE
                        <ArrowRight class="ml-1 h-4 w-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})

defineProps({
    relatedArticles: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <div
        class="border-2 border-black bg-white overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1">
        <div class="h-56 border-b-2 border-black overflow-hidden relative"
            :style="{ backgroundColor: backgroundColor }">
            <div v-for="(element, index) in decorativeElements" :key="index" class="absolute border-2 border-black"
                :class="element.rotate" :style="{
                    top: element.top,
                    left: element.left,
                    width: element.size,
                    height: element.size,
                    backgroundColor: element.color || 'white'
                }">
            </div>

            <div class="relative h-full flex items-center justify-center p-6">
                <component v-if="icon" :is="icon" class="w-16 h-16 text-white" />
                <div v-else class="w-full h-full relative">
                    <div class="font-mono text-2xl font-bold text-black p-6">
                        {{ headerTitle }}
                    </div>

                    <div v-if="illustrationType === 'etl'" class="absolute inset-0 flex items-center justify-end p-4">
                        <div class="relative">
                            <div
                                class="w-16 h-10 border-2 border-black bg-white transform -rotate-6 absolute right-12 top-0">
                            </div>
                            <div
                                class="w-16 h-10 border-2 border-black bg-white transform rotate-6 absolute right-8 top-6">
                            </div>
                            <div class="w-16 h-10 border-2 border-black bg-white absolute right-4 top-12"></div>
                        </div>
                    </div>

                    <div v-if="illustrationType === 'analysis'" class="absolute bottom-4 right-6">
                        <div
                            class="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-white">
                            <div class="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center"
                                :style="{ backgroundColor: colors.yellow }">
                                <div class="w-3 h-8 bg-black transform rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="tags && tags.length" class="absolute bottom-3 left-3 flex flex-wrap gap-2">
                <span v-for="tag in tags" :key="tag" class="px-2 py-1 border-2 border-black text-xs font-mono font-bold"
                    :style="{ backgroundColor: colors.green, color: 'white' }">
                    {{ tag }}
                </span>
            </div>
        </div>

        <div class="p-6">
            <div class="text-sm text-gray-500 mb-2">{{ date }} - {{ author }}</div>

            <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">
                {{ title }}
            </h3>

            <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                {{ description }}
            </p>

            <NuxtLink :to="link" class="font-bold inline-flex items-center text-sm" :style="{ color: colors.blue }">
                Read Full Article
                <ArrowRight class="ml-1 h-4 w-4" />
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowRight, FileText, BarChart2, Database } from 'lucide-vue-next'

export default defineComponent({
    components: {
        ArrowRight,
        FileText,
        BarChart2,
        Database
    },
    props: {
        title: {
            type: String,
            required: true
        },
        headerTitle: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: '#5C80BC'
        },
        icon: {
            type: [String, null],
            default: null
        },
        illustrationType: {
            type: String,
            default: ''
        },
        tags: {
            type: Array,
            default: () => []
        },
        link: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            colors: {
                yellow: '#E8C547',
                darkGray: '#30323D',
                mediumGray: '#4D5061',
                blue: '#5C80BC',
                green: '#16DB65'
            },
            decorativeElements: [
                {
                    top: '10%',
                    left: '80%',
                    size: '15px',
                    rotate: 'rotate-12',
                    color: 'white'
                },
                {
                    top: '70%',
                    left: '10%',
                    size: '10px',
                    rotate: 'rotate-45',
                    color: 'white'
                }
            ]
        }
    }
})
</script>
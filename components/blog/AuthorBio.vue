<template>
    <div class="mt-12 border-2 border-black p-6 bg-white">
        <div class="flex items-start">
            <div class="w-16 h-16 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                <img :src="authorImage" :alt="author" class="w-full h-full object-cover" />
            </div>
            <div class="ml-4">
                <p class="font-mono font-bold mb-1" :style="{ color: colors.darkGray }">
                    Written by {{ author }}
                </p>
                <p class="text-sm mb-3" :style="{ color: colors.mediumGray }">
                    {{ authorTitle }}
                </p>
                <p class="text-sm" :style="{ color: colors.mediumGray }">
                    {{ authorBio }}
                </p>
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

defineProps({
    author: {
        type: String,
        default: 'Author Name'
    },
    authorTitle: {
        type: String,
        default: 'Author Title'
    },
    authorImage: {
        type: String,
        default: '/images/placeholder-person.jpg'
    },
    authorBio: {
        type: String,
        default: ''
    }
})
</script>
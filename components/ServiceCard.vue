<template>
    <div class="border-2 border-black bg-white p-6 hover:transform hover:-translate-y-1 transition-transform">
        <div class="mb-4" :style="{ color: iconColor }">
            <component :is="iconComponent" class="w-10 h-10" />
        </div>
        <h3 class="font-mono text-xl font-bold mb-2" :style="{ color: colors.darkGray }">{{ title }}</h3>
        <p class="mb-4" :style="{ color: colors.mediumGray }">
            {{ description }}
        </p>
        <NuxtLink :to="link" class="font-bold inline-flex items-center" :style="{ color: linkColor }">
            Learn More
            <ArrowRight class="ml-1 h-4 w-4" />
        </NuxtLink>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Cloud, BarChart2, TrendingUp, ArrowRight, Server, Users, Database } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Cloud,
        BarChart2,
        TrendingUp,
        ArrowRight,
        Server,
        Users,
        Database
    },
    props: {
        icon: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            default: '#5C80BC'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        linkColor: {
            type: String,
            default: '#5C80BC'
        },
        link: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            colors: {
                darkGray: '#30323D',
                mediumGray: '#4D5061'
            }
        }
    },
    computed: {
        iconComponent() {
            const iconMap = {
                'Cloud': Cloud,
                'BarChart2': BarChart2,
                'TrendingUp': TrendingUp,
                'Server': Server,
                'Users': Users,
                'Database': Database
            };
            return iconMap[this.icon] || Cloud;
        }
    }
})
</script>
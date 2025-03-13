<template>
    <div class="border-t-2 border-black bg-gray-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="flex justify-between items-center mb-12">
                <h2 class="font-mono text-3xl font-bold" :style="{ color: colors.darkGray }">
                    OUR BLOG
                </h2>
                <NuxtLink to="" class="font-bold inline-flex items-center border-b-2 border-black pb-1"
                    :style="{ color: colors.blue }">
                    View All
                    <ArrowRight class="ml-1 h-4 w-4" />
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BlogCard headerTitle="Lorem Ipsum Dolor Sit Amet" title="Lorem Ipsum Dolor Sit Amet" date="2025/02/20"
                    author="John Smith"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis qui similique impedit sit distinctio repellat excepturi, doloremque obcaecati."
                    :backgroundColor="colors.yellow" illustrationType="etl" :tags="['Lorem', 'Ipsum']" link="" />

                <BlogCard title="Lorem ipsum dolor sit amet consectetur adipisicing elit" date="2025/02/14"
                    author="Maria Johnson"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium ipsam libero saepe ea"
                    :backgroundColor="colors.blue" icon="Database" :tags="['Dolor', 'Amet']" link="" />
                <BlogCard title="Lorem Ipsum Dolor" date="2025/02/12" author="David Chen"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium ipsam libero saepe ea"
                    :backgroundColor="colors.blue" illustrationType="analysis" :tags="['Consectetur', 'Elit']"
                    link="" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Database, BarChart2, Server } from 'lucide-vue-next'
import BlogCard from '~/components/BlogCard.vue'

export default defineComponent({
    components: {
        Database,
        BarChart2,
        Server,
        BlogCard,
    },
    data() {
        return {
            colors: {
                yellow: '#E8C547',
                darkGray: '#30323D',
                white: '#FAFAFA',
                mediumGray: '#4D5061',
                blue: '#5C80BC',
                green: '#16DB65'
            },
        }
    },
})
</script>
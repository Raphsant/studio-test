<template>
    <div id="services" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-16">
            <div class="inline-block border-2 border-black px-4 py-1 mb-6 transform rotate-1"
                :style="{ backgroundColor: colors.blue, color: 'white' }">
                <span class="font-mono text-sm">OUR SERVICES</span>
            </div>
            <h2 class="font-mono text-3xl font-bold mb-4" :style="{ color: colors.darkGray }">
                Comprehensive Data Solutions for Cannabis Businesses
            </h2>
        </div>

        <div class="grid grid-cols-1 gap-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard v-for="(service, index) in services.slice(0, 3)" :key="index" :icon="service.icon"
                    :icon-color="service.iconColor" :title="service.title" :description="service.description"
                    :link-color="service.linkColor" />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Database, BarChart2, Server } from 'lucide-vue-next'
import ServiceCard from '~/components/ServiceCard.vue'

export default defineComponent({
    components: {
        Database,
        BarChart2,
        Server,
        ServiceCard,
    },
    data() {
        return {
            email: '',
            colors: {
                yellow: '#E8C547',
                darkGray: '#30323D',
                white: '#FAFAFA',
                mediumGray: '#4D5061',
                blue: '#5C80BC',
                green: '#16DB65'
            },
            services: [
                {
                    icon: 'Server',
                    iconColor: this.colors?.blue || '#5C80BC',
                    title: 'Data Pipeline Development',
                    description: 'We design and implement automated data pipelines that securely collect, clean, and integrate data from multiple sources --including POS systems, compliance platforms, inventory management tools, and CRMs. Our customer ELT processes ensure your data flows seamlessly across your organization.',
                    linkColor: this.colors?.blue || '#5C80BC'
                },
                {
                    icon: 'BarChart2',
                    iconColor: this.colors?.green || '#16DB65',
                    title: 'Data Modeling & Architecture',
                    description: 'We create industry-specific data models optimized for cannabis businesses. From inventory tracking to financial analysis and customer segmentation, our models transform complex data relationships into structured, usable formats.',
                    linkColor: this.colors?.green || '#16DB65'
                },
                {
                    icon: 'Database',
                    iconColor: this.colors?.yellow || '#E8C547',
                    title: 'Custom Dashboard Development',
                    description: 'We build intuitive, interactive dashboards that visualize your key business metrics in real-time. Our dashboards are designed for decision-makers at all levels, from operational staff to C-suite executives, with role-based access controls and customizable views.',
                    linkColor: this.colors?.yellow || '#E8C547'
                },
            ],
        }
    },
})
</script>
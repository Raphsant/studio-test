<template>
    <AppHeader />
    <HeroSection />
    <ServicesSection />
    <TechSection />
    <WaitlistSection />
    <BlogSection />
    <NewsletterSignUpSection />
    <AppFooter />
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRouter } from '#app'
import ServiceCard from '~/components/ServiceCard.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import BlogCard from '~/components/BlogCard.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import TechSection from '~/components/TechSection.vue'
import HeroSection from '~/components/HeroSection.vue'
import WaitlistSection from '~/components/WaitlistSection.vue'

export default defineComponent({
    components: {
        ServiceCard,
        ServicesSection,
        BlogCard,
        AppHeader,
        AppFooter,
        HeroSection,
    },
    setup() {
        const isMenuOpen = ref(false)
        const router = useRouter()

        router.afterEach(() => {
            isMenuOpen.value = false
        })

        if (process.client) {
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isMenuOpen.value) {
                    isMenuOpen.value = false
                }
            })
        }

        return {
            isMenuOpen
        }
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
            waitlistForm: {
                email: '',
                company: '',
                challenge: ''
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
    methods: {
        submitWaitlist() {
            alert('Thanks for joining our waitlist! We\'ll be in touch soon.')
            this.waitlistForm = {
                email: '',
                company: '',
                challenge: ''
            }
        },
        handleSubmit() {
            console.log('Form submitted with email:', this.email)
            this.email = ''
        },
        openCalendar() {

        }
    }
})
</script>
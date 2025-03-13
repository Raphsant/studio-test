<template>
    <div class="min-h-screen bg-gray-50">
        <div class="border-b-2 border-black relative"
            :style="{ backgroundColor: caseStudy?.accentColor || colors.yellow }">
            <div class="absolute top-16 right-16 hidden md:block">
                <div class="w-12 h-12 border-2 border-black bg-white transform rotate-12"></div>
            </div>
            <div class="absolute bottom-16 left-20 hidden md:block">
                <div class="w-8 h-8 border-2 border-black transform -rotate-45 bg-white"></div>
            </div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                <div class="mb-8">
                    <NuxtLink to="/case-studies"
                        class="inline-flex items-center font-mono text-sm border-b-2 border-black"
                        :style="{ color: colors.darkGray }">
                        <ArrowLeft class="mr-1 h-4 w-4" /> BACK TO CASE STUDIES
                    </NuxtLink>
                </div>

                <div v-if="caseStudy" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div class="inline-block border-2 border-black py-1 px-3 mb-4 font-mono text-sm" :style="{
                            backgroundColor: colors.green,
                            color: 'white'
                        }">
                            {{ caseStudy.category }}
                        </div>

                        <h1 class="font-mono text-3xl md:text-4xl font-bold mb-6" :style="{ color: colors.darkGray }">
                            {{ caseStudy.title }}
                        </h1>

                        <div class="flex items-center mb-8">
                            <div class="w-12 h-12 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
                                <img :src="caseStudy.companyLogo" :alt="caseStudy.company"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-4">
                                <p class="font-mono font-bold" :style="{ color: colors.darkGray }">{{ caseStudy.company
                                    }}</p>
                                <p class="text-sm" :style="{ color: colors.mediumGray }">{{ caseStudy.industry }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="border-2 border-black bg-white p-4 transform -rotate-2">
                            <img :src="caseStudy.featureImage" :alt="caseStudy.title"
                                class="w-full border-2 border-black" />
                        </div>
                        <div class="absolute -bottom-4 -right-4">
                            <div class="w-8 h-8 border-2 border-black transform rotate-12"
                                :style="{ backgroundColor: colors.green }"></div>
                        </div>
                    </div>
                </div>

                <div v-else class="text-center py-8">
                    <h2 class="font-mono text-2xl font-bold mb-4" :style="{ color: colors.darkGray }">
                        Case Study Not Found
                    </h2>
                    <p class="mb-4" :style="{ color: colors.mediumGray }">
                        The case study you're looking for doesn't exist or has been moved.
                    </p>
                </div>
            </div>
        </div>

        <div v-if="caseStudy">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <h2 class="font-mono text-2xl font-bold mb-6" :style="{ color: colors.darkGray }">OVERVIEW</h2>

                        <div class="prose max-w-none" :style="{ color: colors.mediumGray }">
                            <p class="mb-4">{{ caseStudy.overview }}</p>

                            <div class="border-l-4 pl-4 my-8" :style="{ borderColor: colors.yellow }">
                                <blockquote class="text-xl font-medium italic" :style="{ color: colors.darkGray }">
                                    "{{ caseStudy.quote }}"
                                </blockquote>
                                <p class="mt-2 font-bold">— {{ caseStudy.quoteAuthor }}, {{ caseStudy.quoteTitle }}</p>
                            </div>

                            <p v-for="(paragraph, index) in caseStudy.content" :key="index" class="mb-4">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="border-2 border-black bg-white p-6 sticky top-8">
                            <h3 class="font-mono text-xl font-bold mb-4" :style="{ color: colors.darkGray }">KEY METRICS
                            </h3>

                            <ul class="space-y-4">
                                <li v-for="(metric, index) in caseStudy.metrics" :key="index" class="flex items-start">
                                    <div class="mt-1 mr-3">
                                        <div class="w-4 h-4 border-2 border-black"
                                            :style="{ backgroundColor: colors.yellow }"></div>
                                    </div>
                                    <div>
                                        <p class="font-bold" :style="{ color: colors.darkGray }">{{ metric.label }}</p>
                                        <p :style="{ color: colors.mediumGray }">{{ metric.value }}</p>
                                    </div>
                                </li>
                            </ul>

                            <div class="border-t-2 border-gray-200 mt-6 pt-6">
                                <h4 class="font-mono font-bold mb-2" :style="{ color: colors.darkGray }">SOLUTIONS USED
                                </h4>
                                <div class="flex flex-wrap gap-2 mt-3">
                                    <span v-for="(solution, index) in caseStudy.solutions" :key="index"
                                        class="inline-block border-2 border-black py-1 px-3 text-xs font-mono" :style="{
                                            backgroundColor: index % 2 === 0 ? colors.blue : colors.green,
                                            color: 'white'
                                        }">
                                        {{ solution }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t-2 border-b-2 border-black py-16" :style="{ backgroundColor: colors.blue }">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="font-mono text-2xl font-bold mb-8 text-white text-center">RESULTS</h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(result, index) in caseStudy.results" :key="index"
                            class="border-2 border-black bg-white p-6 transform"
                            :class="index === 0 ? 'rotate-1' : index === 1 ? '-rotate-1' : 'rotate-2'">
                            <div class="text-4xl font-bold mb-2" :style="{ color: colors.green }">{{ result.value }}
                            </div>
                            <p class="font-mono font-bold" :style="{ color: colors.darkGray }">{{ result.label }}</p>
                            <p :style="{ color: colors.mediumGray }">{{ result.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 class="font-mono text-2xl font-bold mb-8" :style="{ color: colors.darkGray }">RELATED CASE STUDIES
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(relatedCase, index) in caseStudy.related" :key="index"
                        class="border-2 border-black bg-white overflow-hidden">
                        <div class="h-12 flex items-center justify-center border-b-2 border-black font-mono font-bold"
                            :style="{
                                backgroundColor: index % 2 === 0 ? colors.blue : colors.green,
                                color: 'white'
                            }">
                            {{ relatedCase.company }}
                        </div>
                        <div class="p-4">
                            <h3 class="font-mono text-lg font-bold mb-2" :style="{ color: colors.darkGray }">
                                {{ relatedCase.title }}
                            </h3>

                            <p class="mb-4 text-sm" :style="{ color: colors.mediumGray }">
                                {{ relatedCase.excerpt }}
                            </p>

                            <NuxtLink :to="'/case-studies/' + relatedCase.id"
                                class="font-bold inline-flex items-center text-sm" :style="{ color: colors.blue }">
                                READ CASE STUDY
                                <ArrowRight class="ml-1 h-4 w-4" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative border-t-2 border-black" :style="{ backgroundColor: colors.yellow }">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                <div class="absolute top-12 right-16">
                    <div class="w-6 h-6 border-2 border-black transform rotate-12"
                        :style="{ backgroundColor: colors.green }"></div>
                </div>

                <div class="text-center max-w-3xl mx-auto">
                    <h2 class="font-mono text-3xl font-bold mb-4" :style="{ color: colors.darkGray }">
                        ACHIEVE SIMILAR RESULTS
                    </h2>
                    <p class="text-lg mb-8" :style="{ color: colors.mediumGray }">
                        Our cannabis data experts can help your business unlock the power of your data.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <NuxtLink to="/contact"
                            class="border-2 border-black px-6 py-3 font-bold inline-flex items-center justify-center"
                            :style="{ backgroundColor: colors.green, color: 'white' }">
                            <Mail class="mr-2 h-5 w-5" /> Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <AppFooter />
    </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { useRoute } from "vue-router";
import { ArrowLeft, ArrowRight, Mail, Calendar } from 'lucide-vue-next'
import AppFooter from '~/components/layout/AppFooter.vue'

const route = useRoute()
const id = route.params.id

const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})

const caseStudies = reactive({
    'green-leaf': {
        id: 'green-leaf',
        title: 'INVENTORY OPTIMIZATION WITH REAL-TIME ANALYTICS',
        company: 'Green Leaf Dispensary',
        industry: 'Retail Cannabis',
        category: 'DISPENSARY',
        accentColor: '#E8C547',
        companyLogo: '/images/company-logo1.jpg',
        featureImage: '/images/case-study-hero.jpg',
        quote: 'Our data pipelines used to take eight hours. Now they are taking eight minutes, and I see a world where they take eight seconds.',
        quoteAuthor: 'Sarah Johnson',
        quoteTitle: 'CTO at Green Leaf',
        overview: 'Green Leaf Dispensary needed to optimize their inventory management to reduce waste and improve customer satisfaction. Their legacy systems were slow, disconnected, and unable to provide real-time insights needed for efficient operations.',
        content: [
            'Green Leaf Dispensary, a multi-location cannabis retailer, faced significant challenges with inventory management. Their existing point-of-sale system generated data, but it was disconnected from their inventory management and compliance reporting systems. This led to stock discrepancies, inefficient purchasing, and compliance risks.',
            'ByteHog implemented a comprehensive data solution that connected their POS, inventory, and compliance systems into a unified data warehouse. Real-time ETL pipelines were established to process transaction data within minutes, providing immediate visibility into inventory levels, sales trends, and compliance status.',
            'The custom dashboard we developed provided Green Leaf management team with actionable insights, including predictive analytics for inventory optimization, automated compliance reporting, and real-time sales performance monitoring. This allowed them to make data-driven decisions about purchasing, staffing, and product placement.',
            'Implementation was completed within six weeks, with minimal disruption to existing operations. Staff training was provided to ensure all team members could effectively utilize the new system, and ongoing support ensured the solution continued to meet Green Leaf ongoing needs.'
        ],
        metrics: [
            {
                label: 'Implementation Time',
                value: '6 weeks from contract to production'
            },
            {
                label: 'Data Sources',
                value: 'POS, Inventory Management, Compliance, HR, Marketing'
            },
            {
                label: 'Solution Architecture',
                value: 'Cloud-based data warehouse with real-time ETL pipelines'
            },
            {
                label: 'Key Technologies',
                value: 'ByteHog Data Pipeline, Real-time Analytics Dashboard'
            }
        ],
        solutions: [
            'DATA PIPELINES',
            'ANALYTICS DASHBOARDS',
            'COMPLIANCE AUTOMATION',
            'INVENTORY OPTIMIZATION'
        ],
        results: [
            {
                value: '35%',
                label: 'INCREASE IN SALES',
                description: 'By optimizing inventory based on predictive analytics and real-time sales data'
            },
            {
                value: '42%',
                label: 'REDUCTION IN STOCKOUTS',
                description: 'Improved inventory forecasting eliminated most stockout situations'
            },
            {
                value: '4 hrs',
                label: 'COMPLIANCE REPORTING',
                description: 'Reduced monthly compliance reporting time from 3 days to 4 hours'
            }
        ],
        related: [
            {
                id: 'canna-grow',
                company: 'CannaGrow Cultivators',
                title: 'STREAMLINING COMPLIANCE REPORTING',
                excerpt: 'How a multi-state cannabis cultivator automated their compliance reporting process.'
            },
            {
                id: 'cannatech',
                company: 'CannaTech Solutions',
                title: 'PREDICTIVE ANALYTICS FOR RETAIL',
                excerpt: 'Using predictive modeling to optimize cannabis retail operations across multiple locations.'
            },
            {
                id: 'hempdata',
                company: 'HempData Analytics',
                title: 'MARKET INTELLIGENCE DASHBOARD',
                excerpt: 'Creating a centralized market intelligence platform for better decision making.'
            }
        ]
    },
    'canna-grow': {
        id: 'canna-grow',
        title: 'STREAMLINING COMPLIANCE REPORTING',
        company: 'CannaGrow Cultivators',
        industry: 'Cannabis Cultivation',
        category: 'CULTIVATION',
        accentColor: '#5C80BC',
        companyLogo: '/images/snowflake.png',
        featureImage: '/images/case-study-hero-2.jpg',
        quote: 'With ByteHog, it only took an hour to get an app up and running, which was pretty cool. It uses 18 million rows of data, but once it is loaded, we have all this interactivity right on the website.',
        quoteAuthor: 'Michael Rodriguez',
        quoteTitle: 'VP of Operations at CannaGrow',
        overview: 'CannaGrow Cultivators, a multi-state cannabis cultivator, struggled with manual compliance reporting processes that consumed valuable resources and created risk of errors. They needed an automated solution to streamline reporting across jurisdictions.',
        content: [
            'CannaGrow Cultivators operates cultivation facilities across three states, each with different compliance reporting requirements. Their manual processes for tracking plants, harvest data, and distribution were time-consuming and error-prone, putting them at risk for compliance violations and inefficient resource allocation.',
            'ByteHog implemented a centralized data platform that automatically collected data from seed-to-sale tracking systems, environmental sensors, and inventory management platforms. The solution standardized data formats and created a single source of truth for all reporting needs.',
            'Our customized compliance automation tools generated state-specific reports with the correct formatting and data requirements, significantly reducing the manual effort required by the compliance team. Real-time dashboards provided management with visibility into compliance status across all facilities.',
            'The implementation included custom integrations with state tracking systems and allowed for scheduled report generation and submission, further reducing the administrative burden on the compliance team.'
        ],
        metrics: [
            {
                label: 'Implementation Time',
                value: '8 weeks including state system integrations'
            },
            {
                label: 'Data Sources',
                value: 'Seed-to-sale platforms, Environmental sensors, ERP, HR systems'
            },
            {
                label: 'Solution Architecture',
                value: 'Cloud-based data platform with automated reporting engines'
            },
            {
                label: 'Key Technologies',
                value: 'ByteHog ETL, Compliance Automation Suite, Reporting Dashboard'
            }
        ],
        solutions: [
            'COMPLIANCE AUTOMATION',
            'MULTI-STATE REPORTING',
            'DATA INTEGRATION',
            'REGULATORY DASHBOARDS'
        ],
        results: [
            {
                value: '85%',
                label: 'REDUCTION IN REPORTING TIME',
                description: 'Automated reporting reduced time spent from 25 hours to 3.5 hours weekly'
            },
            {
                value: '100%',
                label: 'COMPLIANCE ACCURACY',
                description: 'Zero compliance violations since implementation'
            },
            {
                value: '$120K',
                label: 'ANNUAL SAVINGS',
                description: 'Cost savings from reduced labor hours and eliminated compliance penalties'
            }
        ],
        related: [
            {
                id: 'green-leaf',
                company: 'Green Leaf Dispensary',
                title: 'INVENTORY OPTIMIZATION WITH REAL-TIME ANALYTICS',
                excerpt: 'How a cannabis retailer optimized inventory and improved operations with data analytics.'
            },
            {
                id: 'cannatech',
                company: 'CannaTech Solutions',
                title: 'PREDICTIVE ANALYTICS FOR RETAIL',
                excerpt: 'Using predictive modeling to optimize cannabis retail operations across multiple locations.'
            },
            {
                id: 'hempdata',
                company: 'HempData Analytics',
                title: 'MARKET INTELLIGENCE DASHBOARD',
                excerpt: 'Creating a centralized market intelligence platform for better decision making.'
            }
        ]
    },
    'cannatech': {
        id: 'cannatech',
        title: 'PREDICTIVE ANALYTICS FOR RETAIL',
        company: 'CannaTech Solutions',
        industry: 'Cannabis Technology',
        category: 'RETAIL ANALYTICS',
        accentColor: '#16DB65',
        companyLogo: '/images/airflow.png',
        featureImage: '/images/case-study-hero-3.jpg',
        quote: 'ByteHog has an innovative approach to managing data and providing easy- to - use tooling has allowed us to expand our application use cases and offer more value to our customers.',
        quoteAuthor: 'Jessica Liu',
        quoteTitle: 'Chief Data Officer at CannaTech',
        overview: 'CannaTech Solutions provides technology services to cannabis retailers. They needed advanced predictive analytics to help their clients optimize sales, inventory, and customer targeting strategies.',
        content: [
            'CannaTech Solutions delivers software solutions to cannabis retailers across North America. They wanted to enhance their platform with predictive analytics capabilities that could help their clients forecast demand, optimize pricing strategies, and identify customer trends without requiring data science expertise.',
            'ByteHog created a machine learning solution that integrates with the CannaTech existing platform.The solution processes historical sales data, customer demographics, market trends, and even weather patterns to generate accurate predictions for product demand, customer behavior, and inventory optimization.',
            'The implementation included user-friendly dashboards with actionable recommendations based on the predictive models. Retailers could use these insights to make informed decisions about purchasing, promotions, and staffing without needing to understand the complex algorithms running behind the scenes.',
            'The solution was designed to continuously improve its predictions as more data becomes available, creating a learning system that becomes more valuable over time. It also includes anomaly detection capabilities to alert retailers about unexpected changes in customer behavior or market trends.'
        ],
        metrics: [
            {
                label: 'Development Time',
                value: '12 weeks for ML model development and integration'
            },
            {
                label: 'Data Processed',
                value: '270+ million transactions across 146 retail locations'
            },
            {
                label: 'Model Accuracy',
                value: '94% accuracy for 7-day demand forecasting'
            },
            {
                label: 'Client Adoption',
                value: '87% of eligible clients activated the predictive features'
            }
        ],
        solutions: [
            'PREDICTIVE ANALYTICS',
            'MACHINE LEARNING',
            'DEMAND FORECASTING',
            'CUSTOMER INSIGHTS'
        ],
        results: [
            {
                value: '22%',
                label: 'AVERAGE INCREASE IN CLIENT REVENUE',
                description: 'Across all retailers using the predictive tools'
            },
            {
                value: '31%',
                label: 'IMPROVED INVENTORY TURNS',
                description: 'Better forecasting led to improved inventory efficiency'
            },
            {
                value: '250%',
                label: 'RETURN ON INVESTMENT',
                description: 'Average ROI for retailers within first six months'
            }
        ],
        related: [
            {
                id: 'green-leaf',
                company: 'Green Leaf Dispensary',
                title: 'INVENTORY OPTIMIZATION WITH REAL-TIME ANALYTICS',
                excerpt: 'How a cannabis retailer optimized inventory and improved operations with data analytics.'
            },
            {
                id: 'canna-grow',
                company: 'CannaGrow Cultivators',
                title: 'STREAMLINING COMPLIANCE REPORTING',
                excerpt: 'How a multi-state cannabis cultivator automated their compliance reporting process.'
            },
            {
                id: 'hempdata',
                company: 'HempData Analytics',
                title: 'MARKET INTELLIGENCE DASHBOARD',
                excerpt: 'Creating a centralized market intelligence platform for better decision making.'
            }
        ]
    },
    'hempdata': {
        id: 'hempdata',
        title: 'MARKET INTELLIGENCE DASHBOARD',
        company: 'HempData Analytics',
        industry: 'Cannabis Market Research',
        category: 'MARKET INTELLIGENCE',
        accentColor: '#E8C547',
        companyLogo: '/images/tableau.png',
        featureImage: '/images/case-study-hero-4.jpg',
        quote: 'We reduced our monthly reporting time from 3 days to 4 hours with automated data pipeline solution from Bytehog.The ROI was immediate and substantial.',
        quoteAuthor: 'David Chen',
        quoteTitle: 'Founder of HempData Analytics',
        overview: 'HempData Analytics provides market intelligence to cannabis businesses. They needed a way to aggregate data from disparate sources and present actionable insights through an interactive dashboard.',
        content: [
            'HempData Analytics serves cannabis businesses with market intelligence, helping them understand trends, competitor movements, and consumer preferences. They were collecting data from numerous sources, including public datasets, surveys, and proprietary research, but struggled to integrate this information into a cohesive view for their clients.',
            'ByteHog built a comprehensive data aggregation platform that automatically collects, cleans, and standardizes data from multiple sources, including regulatory databases, social media sentiment, and point-of-sale systems. The platform applies advanced analytics to identify trends and patterns that might not be apparent in the raw data.',
            'The centerpiece of the solution is an interactive dashboard that presents insights in an intuitive, visual format. Users can explore market trends, drill down into specific segments, and generate custom reports tailored to their business needs. The dashboard includes competitive intelligence features, allowing clients to benchmark their performance against industry averages and competitors.',
            'The platform also includes a predictive component that forecasts market trends based on historical data and current conditions. This helps HempData clients anticipate changes in consumer preferences, regulatory environments, and competitive landscapes.'
        ],
        metrics: [
            {
                label: 'Development Timeframe',
                value: '14 weeks for complete platform development'
            },
            {
                label: 'Data Sources Integrated',
                value: '27 disparate data sources including regulatory, sales, and social data'
            },
            {
                label: 'Update Frequency',
                value: 'Daily data refreshes with real-time capabilities for critical metrics'
            },
            {
                label: 'Platform Users',
                value: '240+ cannabis businesses across the supply chain'
            }
        ],
        solutions: [
            'DATA AGGREGATION',
            'MARKET INTELLIGENCE',
            'INTERACTIVE DASHBOARDS',
            'COMPETITOR ANALYSIS'
        ],
        results: [
            {
                value: '90%',
                label: 'REDUCTION IN REPORTING TIME',
                description: 'Automated processes dramatically reduced manual effort'
            },
            {
                value: '175%',
                label: 'INCREASE IN CLIENT BASE',
                description: 'Enhanced platform capabilities attracted new clients'
            },
            {
                value: '68%',
                label: 'CLIENT SATISFACTION INCREASE',
                description: 'Measured by NPS scores before and after implementation'
            }
        ],
        related: [
            {
                id: 'green-leaf',
                company: 'Green Leaf Dispensary',
                title: 'INVENTORY OPTIMIZATION WITH REAL-TIME ANALYTICS',
                excerpt: 'How a cannabis retailer optimized inventory and improved operations with data analytics.'
            },
            {
                id: 'canna-grow',
                company: 'CannaGrow Cultivators',
                title: 'STREAMLINING COMPLIANCE REPORTING',
                excerpt: 'How a multi-state cannabis cultivator automated their compliance reporting process.'
            },
            {
                id: 'cannatech',
                company: 'CannaTech Solutions',
                title: 'PREDICTIVE ANALYTICS FOR RETAIL',
                excerpt: 'Using predictive modeling to optimize cannabis retail operations across multiple locations.'
            }
        ]
    }
});

const caseStudy = computed(() => {
    return caseStudies[id] || null;
});
</script>
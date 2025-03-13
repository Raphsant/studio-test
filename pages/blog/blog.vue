<template>
    <div class="min-h-screen bg-gray-50 font-mono">
        <nav class="border-b-2 border-black bg-white hidden md:block">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="flex items-center">
                            <NuxtLink to="/">
                                <img class="h-10 mr-2" src="/images/ByteHogLogo.png" alt="ByteHog Logo" />
                            </NuxtLink>
                        </span>
                    </div>
                    <div class="flex items-center space-x-6">
                        <NuxtLink to="/services" class="font-medium" :style="{ color: colors.mediumGray }">
                            Services
                        </NuxtLink>
                        <NuxtLink to="/case-studies" class="font-medium" :style="{ color: colors.mediumGray }">
                            Case Studies
                        </NuxtLink>
                        <NuxtLink to="/blog" class="font-medium" :style="{ color: colors.mediumGray }">
                            Blog
                        </NuxtLink>
                        <NuxtLink to="/contact" class="border-2 border-black py-2 px-4 font-bold"
                            :style="{ backgroundColor: colors.blue, color: 'white' }">
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="border-b-2 border-black bg-white md:hidden fixed w-full top-0 z-50">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <span class="flex items-center">
                            <NuxtLink to="/">
                                <img class="h-8 mr-2" src="/images/ByteHogLogo.png" alt="ByteHog Logo" />
                            </NuxtLink>
                        </span>
                    </div>
                    <div class="flex items-center">
                        <button @click="isMenuOpen = !isMenuOpen"
                            class="inline-flex items-center justify-center border-2 border-black p-2 rounded-md"
                            :class="{ 'bg-gray-200': isMenuOpen }" :style="{ color: colors.darkGray }">
                            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
                            <X v-else class="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div class="fixed left-0 right-0 top-16 z-40 md:hidden transform transition-transform duration-300 ease-in-out"
            :class="isMenuOpen ? 'translate-y-0' : '-translate-y-full'">
            <div class="bg-white border-b-2 border-black shadow-lg" :style="{ backgroundColor: colors.yellow }">
                <div class="px-6 py-8">
                    <div class="flex flex-col space-y-4">
                        <NuxtLink to="/services"
                            class="font-mono text-xl border-b-2 border-black py-3 transition-colors duration-200"
                            :style="{ color: colors.darkGray }" @click="isMenuOpen = false">
                            SERVICES
                        </NuxtLink>
                        <NuxtLink to="/case-studies"
                            class="font-mono text-xl border-b-2 border-black py-3 transition-colors duration-200"
                            :style="{ color: colors.darkGray }" @click="isMenuOpen = false">
                            CASE STUDIES
                        </NuxtLink>
                        <NuxtLink to="/blog"
                            class="font-mono text-xl border-b-2 border-black py-3 transition-colors duration-200"
                            :style="{ color: colors.darkGray }" @click="isMenuOpen = false">
                            BLOG
                        </NuxtLink>

                        <div class="pt-4">
                            <NuxtLink to="/contact"
                                class="inline-block text-center border-2 border-black py-3 px-6 font-bold"
                                :style="{ backgroundColor: colors.green, color: 'white' }" @click="isMenuOpen = false">
                                CONTACT US
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <BlogHeader />
        <BlogArticleHeader />
        <BlogArticleContent />
        <NewsletterCTA />
        <AppFooter />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from '#app'
import { Menu, X } from 'lucide-vue-next'
import AppFooter from '~/components/layout/AppFooter.vue'
import BlogHeader from '~/components/blog/BlogHeader.vue'
import BlogArticleHeader from '~/components/blog/BlogArticleHeader.vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import NewsletterCTA from '~/components/blog/NewsletterCTA.vue'

const isMenuOpen = ref(false)
const route = useRoute()
const slug = route.params.slug

const colors = reactive({
    yellow: '#E8C547',
    darkGray: '#30323D',
    mediumGray: '#4D5061',
    blue: '#5C80BC',
    green: '#16DB65'
})
</script>
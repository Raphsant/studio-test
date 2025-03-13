<template>
    <footer class="border-t-2 border-black bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <span class="flex items-center">
                            <img class="mr-2" src="/public/images/ByteHogLogo.png" />
                        </span>
                    </div>
                    <p class="text-sm" :style="{ color: colors.mediumGray }">
                        Turn your scattered data into a unified, actionable resource.
                    </p>
                </div>
                <div>
                    <h4 class="font-mono font-bold mb-4" :style="{ color: colors.darkGray }">Sapiente</h4>
                    <ul class="space-y-2" :style="{ color: colors.mediumGray }">
                        <li>
                            <NuxtLink to="">Lorem Ipsum</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="">Dolor Amet</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="">Lorem Earum</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="">Sapiente Earum</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-mono font-bold mb-4" :style="{ color: colors.darkGray }">Lorem</h4>
                    <ul class="space-y-2" :style="{ color: colors.mediumGray }">
                        <li>
                            <NuxtLink to="">Ipsum Dolor</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="">Voluptates</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="">Elit</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-mono font-bold mb-4" :style="{ color: colors.darkGray }">Elit</h4>
                    <ul class="space-y-2" :style="{ color: colors.mediumGray }">
                        <li>
                            <NuxtLink to="" class="flex items-center">
                                <Mail class="h-4 w-4 mr-2" /> Sit Amet
                            </NuxtLink>
                        </li>
                        <li><a href="#" @click.prevent="openCalendar" class="flex items-center">
                                <Calendar class="h-4 w-4 mr-2" /> Lorem elit Dolor
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-200 mt-8 pt-6 text-sm" :style="{ color: colors.mediumGray }">
                <div class="flex flex-col md:flex-row justify-between">
                    <p>© {{ new Date().getFullYear() }} ByteHog. All rights reserved.</p>
                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <NuxtLink to="">Privacy Policy</NuxtLink>
                        <NuxtLink to="">Terms of Service</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'
import { Database, Mail, Calendar, Users } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Database,
        Mail,
        Calendar,
        Users
    },
    data() {
        return {
            colors: {
                green: '#16DB65',
                darkGray: '#30323D',
                mediumGray: '#4D5061'
            }
        }
    },
    methods: {
        openCalendar() {

        }
    }
})
</script>
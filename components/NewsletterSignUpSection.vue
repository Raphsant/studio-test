<template>
    <div id="contact" class="relative border-t-2 border-black" :style="{ backgroundColor: colors.darkGray }">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div class="absolute top-8 right-16">
                <div class="w-6 h-6 border-2 border-black transform rotate-12"
                    :style="{ backgroundColor: colors.green }"></div>
            </div>

            <div class="relative">
                <div class="text-center max-w-3xl mx-auto px-4">
                    <h2 class="font-mono text-3xl font-bold mb-8" :style="{ color: colors.white }">
                        Join Our Newsletter!
                    </h2>

                    <form @submit.prevent="handleSubmit"
                        class="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                        <div class="flex-grow">
                            <input type="email" v-model="email" placeholder="Enter your email"
                                class="w-full px-6 py-3 border-2 border-black bg-white font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                required />
                        </div>
                        <button type="submit"
                            class="border-2 border-black px-6 py-3 font-bold inline-flex items-center justify-center transition-transform hover:-translate-y-0.5"
                            :style="{ backgroundColor: colors.green, color: 'white' }">
                            <Mail class="mr-2 h-5 w-5" />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Mail } from 'lucide-vue-next'

export default defineComponent({
    components: {
        Mail,
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
        }
    },
    methods: {
        handleSubmit() {
            console.log('Form submitted with email:', this.email)
            this.email = ''
        },
    }
})
</script>
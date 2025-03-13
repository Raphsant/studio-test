<template>
    <div id="waitlist" class="relative border-t-4 border-b-2 border-black" :style="{ backgroundColor: colors.blue }">
        <div class="absolute top-12 left-16">
            <div class="w-8 h-8 border-2 border-black rotate-12 bg-white"></div>
        </div>
        <div class="absolute bottom-12 right-20">
            <div class="w-5 h-5 border-2 border-black rotate-45" :style="{ backgroundColor: colors.yellow }"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="bg-white border-2 border-black p-8 md:p-12 max-w-3xl mx-auto">
                <div class="text-center mb-8">
                    <h2 class="font-mono text-3xl font-bold mb-4" :style="{ color: colors.darkGray }">
                        Lets Work Together
                    </h2>
                    <p class="text-lg" :style="{ color: colors.mediumGray }">
                        Take the first step to unlocking your cannabis data
                    </p>
                </div>

                <form class="space-y-4" @submit.prevent="submitWaitlist">
                    <div>
                        <label class="block mb-2 font-medium" :style="{ color: colors.darkGray }">Email</label>
                        <input v-model="waitlistForm.email" type="email" class="w-full border-2 border-black p-3"
                            placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label class="block mb-2 font-medium" :style="{ color: colors.darkGray }">Company
                            Name</label>
                        <input v-model="waitlistForm.company" type="text" class="w-full border-2 border-black p-3"
                            placeholder="Your Cannabis Business" required />
                    </div>
                    <div>
                        <label class="block mb-2 font-medium" :style="{ color: colors.darkGray }">What's your POS
                            system?</label>
                        <textarea v-model="waitlistForm.challenge" class="w-full border-2 border-black p-3" rows="3"
                            placeholder="Tell us about your current setup and challenges..." required></textarea>
                    </div>
                    <div>
                        <label class="block mb-2 font-medium" :style="{ color: colors.darkGray }">What's your
                            biggest data challenge?</label>
                        <textarea v-model="waitlistForm.challenge" class="w-full border-2 border-black p-3" rows="3"
                            placeholder="Tell us about your current setup and challenges..." required></textarea>
                    </div>
                    <button type="submit" class="w-full border-2 border-black p-3 font-bold mt-4"
                        :style="{ backgroundColor: colors.green, color: 'white' }">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
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
            waitlistForm: {
                email: '',
                company: '',
                challenge: ''
            },
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
    }
})
</script>
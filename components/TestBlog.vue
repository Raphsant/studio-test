<script setup lang="ts">
import NewsletterSignup from "~/components/blog/NewsletterSignup.vue";
import KeyTakeaways from "~/components/blog/KeyTakeaways.vue";
import AuthorBio from "~/components/blog/AuthorBio.vue";
import TableOfContents from "~/components/blog/TableOfContents.vue";
import RelatedArticles from "~/components/blog/RelatedArticles.vue";
import {Share2} from "lucide-vue-next";

const colors = reactive({
  yellow: '#E8C547',
  darkGray: '#30323D',
  mediumGray: '#4D5061',
  blue: '#5C80BC',
  green: '#16DB65'
})
defineProps({
  category: {
    type: String,
    default: 'CATEGORY'
  },
  title: {
    type: String,
    default: 'Article Title'
  },
  excerpt: {
    type: String,
    default: 'Article excerpt goes here'
  },
  author: {
    type: String,
    default: 'Author Name'
  },
  authorImage: {
    type: String,
    default: '/images/placeholder-person.jpg'
  },
  date: {
    type: String,
    default: 'Jan 1, 2025'
  },
  readTime: {
    type: Number,
    default: 5
  },
  featuredImage: {
    type: String,
    default: '/images/placeholder-person.jpg'
  }})

</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
    <div class="mb-6">
            <span class="inline-block border-2 border-black py-1 px-3 mb-4 font-mono text-xs"
                  :style="{ backgroundColor: colors.yellow, color: colors.darkGray }">
                {{ category }}
            </span>
      <h1 class="font-mono text-4xl font-bold mb-6" :style="{ color: colors.darkGray }">
        {{ title }}
      </h1>
      <p class="text-xl mb-8" :style="{ color: colors.mediumGray }">
        {{ excerpt }}
      </p>
    </div>

    <div class="flex items-center mb-8 border-t-2 border-b-2 border-black py-4">
      <div class="w-12 h-12 border-2 border-black rounded-full overflow-hidden flex-shrink-0">
        <img :src="authorImage" :alt="author" class="w-full h-full object-cover" />
      </div>
      <div class="ml-4">
        <p class="font-mono font-bold" :style="{ color: colors.darkGray }">{{ author }}</p>
        <p class="text-sm" :style="{ color: colors.mediumGray }">
          {{ date }} · {{ readTime }} min read
        </p>
      </div>
      <div class="ml-auto flex space-x-4">
        <button class="flex items-center" :style="{ color: colors.mediumGray }">
          <Share2 class="h-5 w-5 mr-1" />
          <span class="text-sm">Share</span>
        </button>
      </div>
    </div>

    <div class="mb-12 border-2 border-black relative overflow-hidden">
      <img :src="featuredImage" :alt="title" class="w-full h-auto" />
    </div>
  </div>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-8">
        <div class="prose prose-lg max-w-none" :style="{ color: colors.darkGray }">
          <p class="text-lg mb-8">
            <slot name="introduction"/>
          </p>
          <div>
            <slot name="content"/>
          </div>

          <!--          <KeyTakeaways :keyPoints="keyPoints"/>-->

          <h2 class="font-mono text-2xl font-bold mt-12 mb-4" :style="{ color: colors.darkGray }">
            Conclusion
          </h2>
          <p class="text-lg mb-8">
            <slot name="conclusion"/>
          </p>

        </div>
        <div class="mt-12 mb-8">
          <!--          <div class="flex flex-wrap gap-2">-->
          <!--                        <span v-for="(tag, index) in tags" :key="index"-->
          <!--                              class="inline-block border-2 border-black py-1 px-3 text-xs font-mono" :style="{-->
          <!--                                backgroundColor: index % 2 === 0 ? colors.blue : colors.green,-->
          <!--                                color: 'white'-->
          <!--                            }">-->
          <!--                            {{ tag }}-->
          <!--                        </span>-->
          <!--          </div>-->
        </div>
      </div>
    </div>

  </div>
</template>

<style>
h1{
  font-size: 10rem;
}

</style>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-8">
        <div class="prose prose-lg max-w-none" :style="{ color: colors.darkGray }">
          <p class="text-lg mb-8" v-for="(paragraph, index) in content" :key="index">
            {{ paragraph }}
          </p>

          <KeyTakeaways :keyPoints="keyPoints"/>

          <h2 class="font-mono text-2xl font-bold mt-12 mb-4" :style="{ color: colors.darkGray }">
            Conclusion
          </h2>
          <p class="text-lg mb-8">{{ conclusion }}</p>
        </div>

        <div class="mt-12 mb-8">
          <div class="flex flex-wrap gap-2">
                        <span v-for="(tag, index) in tags" :key="index"
                              class="inline-block border-2 border-black py-1 px-3 text-xs font-mono" :style="{
                                backgroundColor: index % 2 === 0 ? colors.blue : colors.green,
                                color: 'white'
                            }">
                            {{ tag }}
                        </span>
          </div>
        </div>

        <AuthorBio :author="author" :authorTitle="authorTitle" :authorImage="authorImage"
                   :authorBio="authorBio"/>

        <RelatedArticles :relatedArticles="relatedArticles"/>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <div class="sticky top-8">
          <TableOfContents :tableOfContents="tableOfContents"/>
          <NewsletterSignup/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import KeyTakeaways from './KeyTakeaways.vue'
import AuthorBio from './AuthorBio.vue'
import RelatedArticles from './RelatedArticles.vue'
import TableOfContents from './TableOfContents.vue'
import NewsletterSignup from './NewsletterSignup.vue'


const colors = reactive({
  yellow: '#E8C547',
  darkGray: '#30323D',
  mediumGray: '#4D5061',
  blue: '#5C80BC',
  green: '#16DB65'
})


defineProps({
  content: {
    type: Array,
    default: () => []
  },
  keyPoints: {
    type: Array,
    default: () => []
  },
  conclusion: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  author: {
    type: String,
    default: ''
  },
  authorTitle: {
    type: String,
    default: ''
  },
  authorImage: {
    type: String,
    default: '/images/placeholder-person.jpg'
  },
  authorBio: {
    type: String,
    default: ''
  },
  relatedArticles: {
    type: Array,
    default: () => []
  },
  tableOfContents: {
    type: Array,
    default: () => []
  }
})
</script>

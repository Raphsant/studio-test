<script setup lang="ts">
const { data: authors } = await useAsyncData('authors', () => {
  return queryCollection('authors')
      .order('name', 'DESC')
      .all()
})

console.log(authors)
</script>

<template>
  <ContentRenderer v-if="authors" :value="authors" />
</template>

<style scoped>

</style>

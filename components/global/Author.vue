<template>
  <div class="w-full px-2 xs:mb-6 md:mb-12 article-card">
    <nuxt-link :to="`/blog/author/${author.name}`">
      <img :src="author.img">
      <div>
        <h4>Author: {{ author.name }}</h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

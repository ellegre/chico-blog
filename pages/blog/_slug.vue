<template>
  <article class="section-wrapper pt-32">
    <img :src="article.img" :alt="article.alt" class="w-full rounded-t-lg shadow-xl md:h-64 lg:h-96 sm:object-cover object-center">
    <div class="p-8">
      <h1 class="uppercase text-gray-800 font-bold text-lg md:text-2xl mb-3"> {{ article.title }}</h1>
      <h2 class="text-gray-700 text-sm md:text-lg font-bold mb-2">{{ article.description }}</h2>
      <p class="text-xs font-thin mb-5"> {{ formatDate(article.createdAt) }} </p>
      <nuxt-content class="text-p pb-4" :document="article" />
      <author :author="article.author" />
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
export default {
   async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  head () {
    return {
      title: this.article.title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.article.description },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: []
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

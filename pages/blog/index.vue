<template>
  <section class="pt-32">
    <div class=" sm:max-w-2xl lg:max-w-4xl lg:max-w-6xl mx-auto px-10 md:px-16">
      <h1 class="page-h1">Recent articles</h1>
      <p class="text-p pb-5 md:pb-16">Latest thoughts and notes about living near Chico. Stay tuned!</p>
      <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-11 ">
        <li class="" v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug }}">
            <div class="card">
              <div class="aspect-w-2 aspect-h-1 sm:aspect-w-3 sm:aspect-h-2">
                <img :src="article.img" class="object-cover shadow-lg rounded-t-lg">
              </div>
              <div class="p-4">
                <h2 class="font-bold mt-2 text-lg mb-2 text-gray-800">{{ article.title }}</h2>
                <p class="hidden md:block text-p font-thin italic mb-4">by {{ article.author.name }}</p>
                <p class="hidden md:block text-p">{{ article.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

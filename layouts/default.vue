<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fixed: false
    }
  },
  head () {
    return {
      titleTemplate: '',
      title: 'Ca de bou blog',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `data:image/svg+xml,
            <svg
              width="36"
              height="36"
              viewBox="0 0 25 25"
              fill="teal"
              style="color: teal"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" /></svg>`
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A blog of ca de bou Chico' }
      ]
    }
  }
}
</script>

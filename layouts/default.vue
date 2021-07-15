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
  head: {
    titleTemplate: '',
    title: 'Ca de bou blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A blog of ca de bou Chico' }
    ]
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>

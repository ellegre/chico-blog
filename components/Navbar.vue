<template>
  <div class="fixed z-40 bg-brand sm:bg-gray-100 top-0 left-0 w-full py-4 border-doble border-b-4 border-brand">
    <div class=" max-w-6xl mx-auto inset-x-0 px-10">
      <div class="flex flex-1 items-center justify-between ">
        <span class="text-white sm:text-gray-700 inline-block text-3xl font-caveat"><span class="font-bold">Chico </span>The Dog</span>
        <nav class="hidden md:flex" id="menu">
          <nuxt-link class="nav-link" exact no-prefetch to="/">Home</nuxt-link>
          <nuxt-link class="nav-link" exact no-prefetch to="/blog">Blog</nuxt-link>
          <nuxt-link class="nav-link" active-class="active" to="/history">History</nuxt-link>
          <nuxt-link class="nav-link" active-class="active" to="/contact">Contact</nuxt-link>
        </nav>
        <button
          v-if="!showMenu"
          @click="toggleShowMenu"
          class="p-2 cursor-pointer md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          v-if="showMenu"
          @click="toggleShowMenu"
          class="p-2 cursor-pointer md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        class="pb-4"
        :class="{ 'hidden': !showMenu }"
      >
        <nuxt-link class="nav-link nav-link-mobile" exact no-prefetch to="/">Home</nuxt-link>
        <nuxt-link class="nav-link nav-link-mobile" exact no-prefetch to="/blog">Blog</nuxt-link>
        <nuxt-link class="nav-link nav-link-mobile" exact no-prefetch to="/history">History</nuxt-link>
        <nuxt-link class="nav-link nav-link-mobile" exact no-prefetch to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.showMenu = false
    }
  },
  methods: {
    toggleShowMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

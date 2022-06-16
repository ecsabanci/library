<template>
  <div class="container mx-auto px-5 md:px-16 py-10 md:mt-16">
    <h2 class="text-left mb-10 font-bold text-3xl">Book List</h2>
    <div class="" v-for="(book, i) in $store.getters.getBooks" :key="i">
      <Book :book="book" />
    </div>
  </div>
</template>

<script>
import Book from '../components/Book.vue';
export default {
  name: 'About',
  components: { Book },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

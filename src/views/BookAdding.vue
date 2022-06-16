<template>
  <div class="mt-10 container px-16">
    <form class="bg-gray-200 p-8 mx-auto flex flex-col md:w-1/3">
      <input v-model="bookDetails.title" placeholder="Title" class="mb-3 p-2 rounded-lg" type="text" id="bookTitle" />
      <input v-model="bookDetails.author" placeholder="Author" class="mb-3 p-2 rounded-lg" type="text" id="bookAuthor" />
      <input v-model="bookDetails.image" placeholder="Image" class="mb-3 p-2 rounded-lg" type="text" id="bookImage" />
      <button @click="addBook" class="bg-purple-400 p-2 text-white w-1/2 mx-auto rounded-lg"><span>Add Book</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookAdding',
  data() {
    return {
      bookDetails: {
        title: '',
        author: '',
        image: '',
        user: {}
      },
    };
  },
  mounted() {},
  methods: {
    addBook(e) {
      e.preventDefault();
      if (this.bookDetails.title && this.bookDetails.author && this.bookDetails.image) {
        this.$store.dispatch('setNewBooks', this.bookDetails);
        this.$swal('', `${this.bookDetails.title} ADDED`, 'success');
      } else {
        this.$swal('', 'Please fill all the fields', 'error');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

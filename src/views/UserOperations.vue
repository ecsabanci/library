<template>
  <div class="mt-10 container px-5 md:px-16">
    <form v-if="route == 'setUser'" class="bg-gray-200 p-8 mx-auto flex flex-col md:w-1/3">
      <p class="text-2xl font-bold text-left mb-8">Set to User</p>
      <select v-model="user.selectedBookTitle" class="mb-3 p-2 rounded-lg">
        <option selected disabled>Please select a book</option>
        <option :value="book.title" v-for="(book, i) in $store.getters.getBooks" :key="i">{{ book.title }}</option>
      </select>
      <input v-model="user.identityNumber" placeholder="Please insert user identity number" class="mb-3 p-2 rounded-lg" type="text" />
      <input v-model="user.name" placeholder="Please enter user name and surname" class="mb-3 p-2 rounded-lg" type="text" />
      <textarea class="mb-3 p-2 rounded-lg" v-model="user.address" placeholder="Please enter user address" rows="4"></textarea>
      <button @click="setBook" class="bg-purple-400 p-2 text-white w-1/2 mx-auto rounded-lg"><span>Set to User</span></button>
    </form>



    <form v-if="route == 'getUser'" class="bg-gray-200 p-8 mx-auto flex flex-col md:w-1/3">
      <p class="text-2xl font-bold text-left mb-8">Get From User</p>
      <select v-model="selectedBook" class="mb-3 p-2 rounded-lg">
        <option selected disabled>Please select a book</option>
        <option :value="book" v-for="(book, i) in settedBooks" :key="i">{{ book.title }}</option>
      </select>
      <div v-if="selectedBook.user" class="flex flex-col items-start my-5">
        <p>{{ selectedBook.user.identityNumber }}</p>
        <p>{{ selectedBook.user.name }}</p>
        <p>{{ selectedBook.user.address }}</p>
      </div>
      <button @click="getBook" class="bg-purple-400 p-2 text-white w-1/2 mx-auto rounded-lg"><span>Get From User</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookAdding',
  data() {
    return {
      selectedBook: {},
      route: '',
      user: {
        selectedBookTitle: '',
        identityNumber: '',
        name: '',
        address: '',
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.route = this.$route.params.id;
    this.settedBooks = this.$store.getters.getBooks.filter((book) => book.user.name);
  },
  methods: {
    setBook(e) {
      e.preventDefault();
      if (this.user.name && this.user.identityNumber && this.user.address && this.user.selectedBookTitle) {
        this.$store.dispatch('setUser', this.user);
        this.$swal('', `${this.user.selectedBookTitle} has been setted to ${this.user.name}`, 'success');
      } else {
        this.$swal('', "Please fill all fields!", 'error');
      }
    },
    getBook(e) {
      e.preventDefault();
      if (this.selectedBook.title) {
        this.$store.dispatch('getBook', this.selectedBook);
        this.$swal('', `${this.selectedBook.title} has been getted from user`, 'success');
      } else {
        this.$swal('', "Please select a book!", 'error');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

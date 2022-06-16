<template>
  <div class="mb-4 flex justify-between border-solid border-2 border-sky-500 p-3 md:p-5">
    <div class="flex">
      <img class="w-16 h-25 md:w-32 md:h-50" :src="book.image" alt="" />
      <div class="flex flex-col ml-4">
        <h3 class="text-left text-lg md:text-3xl font-bold">{{ book.title }}</h3>
        <h4 class="text-left text-sm md:text-2xl">{{ book.author }}</h4>
      </div>
    </div>
    <div v-if="book.user.name">
      <button class="bg-red-600 text-white p-2 text-xs md:text-xl">AT USER</button>
    </div>
    <div v-else class="flex flex-col gap-3">
      <button class="bg-green-600 text-white p-2 text-xs md:text-xl">IN STORE</button>
      <button @click="deleteBook(book)" class="text-red-400">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteBook(book) {
      //   alert(title)
      this.$swal.fire({
        title: `Are you sure you want to delete the ${book.title}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes. Delete',
        cancelButtonText: 'No, Return'
      }).then((value) => {
        if (value.isConfirmed) {
          this.$store.dispatch('deleteBook', book);
          this.$swal('', `${book.title} DELETED`, 'success');
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

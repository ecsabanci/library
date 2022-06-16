<template>
  <div>
    <p class="text-pink-400">Home page</p>

    
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            bookDetails: {
                title: "",
                author: "",
                image: "",
            },
        };
    },
    methods: {
        addBook(e) {
            e.preventDefault();
            this.$store.dispatch("setNewBooks", this.bookDetails);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

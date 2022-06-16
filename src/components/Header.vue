<template>
    <div class="flex justify-center gap-28 bg-indigo-500 p-3 text-white font-bold" id="header">
        <!-- <router-link to="/">Home</router-link>  -->
        <router-link class="text-2xl" to="/store">Store</router-link>
        <router-link class="text-2xl" to="/operations">Operations</router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

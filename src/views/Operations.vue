<template>
  <div class="container px-5 md:px-16 mt-16 mx-auto">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div class="card p-5 border-solid border-2 border-sky-500">
        <div class="card-header">
          <p class="text-2xl font-bold text-left mb-8">Book Store Operations</p>
        </div>
        <div class="card-body flex flex-col pb-10">
          <router-link class="bg-gray-400 p-3 text-white rounded-lg mx-auto mb-4" to="/bookadding">Add New Book</router-link>
          <router-link class="bg-gray-400 p-3 text-white rounded-lg mx-auto" to="/store">Book List</router-link>
        </div>
      </div>

      <div class="card p-5 border-solid border-2 border-sky-500">
        <div class="card-header">
          <p class="text-2xl font-bold text-left mb-8">User Operations</p>
        </div>
        <div class="card-body flex flex-col pb-10">
          <router-link class="bg-gray-400 p-3 text-white rounded-lg mx-auto mb-4" to="/userOperations/setUser">Set To User</router-link>
          <router-link class="bg-gray-400 p-3 text-white rounded-lg mx-auto" to="/userOperations/getUser">Get From User</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'UserOperations',
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">{{
        title
      }}</router-link>
    </nav>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "PxHeader",
  props: {
    title: String,
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <main>
    <div class=" card text-left my-2">
      <img class="card-img-top" :src="img" :alt="title" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
        <px-button :id="id" @custom-click="goToClick(id)" />
      </div>
    </div>
  </main>
</template>

<script>
import PxButton from "./PxButton";
export default {
  name: "PxCards",
  props: {
    img: String,
    title: String,
    description: String,
    id: {},
  },
  components: {
    PxButton,
  },
  methods: {
    goToClick(id) {
      console.log(id);
      this.$router.push({ name: "ImageView", params: { id } });
    },
  },
};
</script>
<style>
.card > img {
  height: 200px;
}
</style>

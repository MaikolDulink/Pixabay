<template>
  <main>
    <div class="card text-left">
      <img
        class="card-img-top"
        :src="img"
        :alt="title"
        style="width:250px; heigth:100px;"
      />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
        <px-button @custom-click="goToClick(id)" />
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
    id: Number,
  },
  components: {
    PxButton,
  },
  methods: {
    goToClick(id) {
      this.$router.push({ name: "ImageView", params: { id } });
    },
  },
};
</script>

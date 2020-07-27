<template>
  <main>
    <div class="card text-left">
      <img
        class="card-img-top"
        :src="img.previewURL"
        :alt="img.user"
        style="width:250px; heigth:100px;"
      />
      <div class="card-body">
        <h4 class="card-title">{{ img.user }}</h4>
        <p class="card-text">{{ img.id }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import pixar from "@/apis/pixar.js";
export default {
  name: "ImageView",
  data() {
    return {
      img: {},
    };
  },
  methods: {
    getImg() {
      const id = this.route.params.id;
      Promise.all([pixar.getPixar(id)]).then((img) => (this.img = img));
    },
  },
  created() {
    this.getImg();
  },
};
</script>

<style></style>

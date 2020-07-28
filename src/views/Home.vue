<template>
  <div class="home">
    <div class="container">
      <div class="row ">
        <div class="col-md-3" v-for="i in images" :key="i.id">
          <px-cards
            :title="i.type"
            :description="i.user"
            :img="i.previewURL"
            :id="i.id"
          ></px-cards>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PxCards from "@/components/PxCards";
import pixar from "@/apis/pixar.js";

export default {
  name: "Home",
  components: {
    PxCards,
  },
  data() {
    return {
      images: [],
    };
  },

  created() {
    pixar.getPixars().then((images) => (this.images = images));
  },
};
</script>
<style>
.my-flex-card > div > div.card {
  height: calc(100% - 15px);
  margin-bottom: 15px;
}
</style>

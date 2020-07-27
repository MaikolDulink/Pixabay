<template>
  <button
    class="btn btn-block btn-primary"
    @click="buttonClick"
    :to="{ name: 'ImageView', params: { id: id } }"
  >
    Show
  </button>
</template>

<script>
export default {
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>

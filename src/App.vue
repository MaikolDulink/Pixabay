<template>
  <div id="app">
    <px-header title="ImageToday" />
    <router-view></router-view>
  </div>
</template>
<script>
import PxHeader from "@/components/PxHeader";
export default {
  components: {
    PxHeader,
  },
};
</script>

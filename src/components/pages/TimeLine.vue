<template>
  <div class="swiper-content">
    <h1>Timeline</h1>
    <img src="../../images/common/timeline3.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleCard() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>

</style>

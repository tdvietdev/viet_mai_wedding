<template>
  <div class="swiper-content center-content">
    <img class="time-line-image" src="../../images/common/timeline3.png" alt="">
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
  .time-line-image {
    max-height:100%;
  }
</style>

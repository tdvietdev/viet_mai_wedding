<template>
  <div class="swiper-content info-pages">
    <div class="header text-center">Liên hệ</div>
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

<style lang="less">

</style>

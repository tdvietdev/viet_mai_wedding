<template>
  <div class="swiper-content confirm-invitation">
    <div class="bride">
      <div class="name">Cô dâu</div>
      <div class="phone">0376.314.966</div>
      <div class="Địa chỉ "></div>
    </div>
    <div class="goom">

    </div>
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
  .confirm-invitation {
    display: flex;
  }
</style>

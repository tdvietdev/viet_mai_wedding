<template>
  <div
      class="card"
      :class="{ 'card-active': isActive }"
      @click="toggleCard"
  >
    <div class="card-front">Front</div>
    <div class="card-back">Back</div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
.card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.6s;
}
.card-back {
  transform: rotateY(180deg);
}
.card-active .card-front {
  transform: rotateY(180deg);
}
.card-active .card-back {
  transform: rotateY(360deg);
}
</style>

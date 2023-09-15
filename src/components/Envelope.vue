<template>
  <div class="envelope-container">
    <div class="envelope" :class="{ 'envelope-open': isOpen }" @click="toggleEnvelope">
      <div class="flap"></div>
      <div class="letter" :class="{ 'letter-pulled': isOpen }">
        <p>Chúc mừng! Bạn đã nhận được một lá thư mới.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Envelope",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleEnvelope() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.envelope-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.envelope {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #d9a150;
  border: 1px solid #b88a4e;
  cursor: pointer;
  transition: transform 0.3s;
}

.envelope-open {
  transform: perspective(600px) rotateX(180deg);
}

.flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 50px;
  background-color: #d9a150;
  border-bottom: 1px solid #b88a4e;
}

.letter {
  position: absolute;
  top: 50px;
  left: 0;
  width: 180px;
  height: 90px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s;
}

.letter-pulled {
  transform: translateY(-40px);
}
</style>

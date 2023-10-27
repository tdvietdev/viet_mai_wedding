<template>
  <div class="menu-card center-content">
    <div class="header">
      Menu
    </div>

    <div class="list-item" v-for="item in menus">
      <div class="item flex-row" @click="handleSlideTo(item.index)">
        <div class="icon">
          {{item.icon}}
        </div>
        <div class="text">
          {{item.text}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {icon: 'a1', text: 'Lời mời', index: 1},
        {icon: 'a1', text: 'Mốc thời gian', index: 2},
        {icon: 'a1', text: 'Album ảnh', index: 3},
        {icon: 'a1', text: 'Thông tin dâu rể', index: 4},
        {icon: 'a1', text: 'Gửi lời chúc', index: 5},
      ],
    };
  },
  methods: {
    toggleCard() {
      this.isActive = !this.isActive;
    },
  },
  props: ['handleSlideTo'],
};
</script>

<style>
  .menu-card {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;

    background-color: #000;
    color: #fff;
    opacity: 0.2;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 20px;

    margin: auto;
    top: 0;
    bottom: 0;
    height: fit-content;

    .item {

    }
  }
</style>

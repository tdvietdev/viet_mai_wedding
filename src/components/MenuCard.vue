<template>
  <div class="menu-card center-content">
    <div class="header">
      Menu
    </div>

    <div class="list-item">
      <div class="item flex-row" v-for="item in menus" @click="handleSlideTo(item.index)">
        <div class="icon center-content">
          <font-awesome-icon :icon=item.icon />
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
        {icon: 'fa-solid fa-paperclip', text: 'Lời mời', index: 0},
        {icon: 'fa-solid fa-calendar', text: 'Mốc thời gian', index: 1},
        {icon: 'fa-solid fa-images', text: 'Album ảnh', index: 2},
        {icon: 'fa-solid fa-info', text: 'Thông tin dâu rể', index: 3},
        {icon: 'fa-solid fa-comment-dollar', text: 'Gửi lời chúc', index: 4},
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
      display: flex;

      .icon {
        width: 20px;
      }

      .text {
        flex: 1;
      }
    }
  }
</style>

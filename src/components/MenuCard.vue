<template>
  <div class="menu-card center-content" :class="{'rm-bg': !this.showMenu}">
    <div class="header">
      <div class="circle-icon icon" @click="toggleMenu()">
        <font-awesome-icon :icon="'fa-bars'" v-if="!this.showMenu"/>
        <font-awesome-icon :icon="'fa-xmark'" v-else/>
      </div>
    </div>

    <div class="list-item" v-if="this.showMenu">
      <div class="item flex-row" v-for="item in menus" @click="handleSlideTo(item.index)">
        <div class="circle-icon icon">
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
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      console.log("xx")
      console.log(this.showMenu)
      this.showMenu = !this.showMenu;
    },
  },
  props: ['handleSlideTo'],
};
</script>

<style>
  .rm-bg {
    background-color: unset !important;
  }

  .menu-card {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;

    background-color: #000;
    opacity: 0.5;
    color: #ffffff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 20px;

    margin: auto;
    top: 0;
    bottom: 0;
    height: fit-content;

    .header {
      padding: 10px 0;
      cursor: pointer;
    }

    .icon {
      background-color: #000;
    }

    .item {
      display: flex;
      padding: 5px 2px;
      border-top: rgba(223,204,232,0.38) 1px solid;
      cursor: pointer;

      .icon {
        margin-left: 5px;
        margin-right: 10px;
      }

      .text {
        flex: 1;
      }
    }
  }
</style>

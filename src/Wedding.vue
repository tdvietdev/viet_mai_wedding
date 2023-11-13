<template>
  <div class="wedding">
    <Editor :on-active-cover="activeCover"/>
    <Cover :isActiveCover="isActiveCover" :guest="this.guest" :on-active-content="activeContent"/>
    <CardContent :guest="this.guest" :wishes="this.wishes" :is-active-content="isActiveContent"/>
  </div>
</template>

<script>
  import Editor from "./components/Editor.vue"
  import CardContent from "./components/CardContent.vue"
  import Cover from "./components/Cover.vue"
  import WishService from "@/services/WishService";
  import GuestService from "@/services/GuestService";
  import Wishes from "@/components/pages/Wishes.vue";

  export default {
    props: [],
    components: {
      Wishes,
      Editor,
      CardContent,
      Cover,
    },
    data() {
      return {
        guest: {},
        isActiveCover: false,
        isActiveContent: false,
        wishes: []
      }
    },
    methods: {
      activeCover() {
        this.isActiveCover = true
      },
      activeContent() {
        setTimeout(() => {
          this.isActiveContent = true
        }, 500)
      },
      getGuestId() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('uid')
      },
      onLoadGuest(_guest) {
        this.guest = _guest.val() ? {id: _guest.key, name: _guest.val().name} : {}
        // this.guest = _guest.val() || {}
        if (this.guest.name) {
          document.querySelector('meta[property="og:title"]').setAttribute("content", `Thân gửi: ${this.guest.name}!`);
        }
      },
      onUpdateWishes(items) {
        let _wishes = [];

        items.forEach((item) => {
          let key = item.key;
          let data = item.val();

          _wishes.push(data)
        });

        this.wishes = _wishes;
      }
    },
    mounted() {
      WishService.getAll().on("value", this.onUpdateWishes);
      GuestService.get(this.getGuestId() || 'all').on("value", this.onLoadGuest);
    },
    name: 'Wedding'
  }

</script>

<style lang="less">
@import './assets/base.less';
@import 'animate.css';

html,
body{
}
.wedding{
  height: 100%;
  width: 100%;
  background-image: url("./images/common/background/main.jpg");
  background-repeat: repeat;
}
</style>

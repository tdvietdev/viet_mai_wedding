<template>
  <div class="card-content animate__animated animate__slow" :class="{hidden: !isActiveContent, animate__fadeInDown: isActiveContent}">
    <DateTime :guest-name="this.guest.name" />
    <div class="end_page center-content">
      <img class="end_page_img" src="./../images/common/bot.png">
    </div>
    <TimeLine />
    <Wishes :guest="this.guest" :wishes="this.wishes" />
  </div>
</template>

<script>
import DateTime from "./pages/DateTime.vue"
import TimeLine from "./pages/TimeLine.vue"
import Wishes from "./pages/Wishes.vue"
export default {
  props: ['guest', 'wishes', 'isActiveContent'],
  components: {
    DateTime,
    TimeLine,
    Wishes
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
.card-content {
  width: 100%;
  height: 100%;
  background-image: url("../images/common/background/main.jpg");

  position: absolute;
  top: 0;
  left: 0;
}

.end_page {
  background-color: #f8eded;
  height: 50px;

  .end_page_img {
    max-height: 100%;
  }
}

.hidden {
  display: none;
}
</style>

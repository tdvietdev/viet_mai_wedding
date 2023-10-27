<template>
  <div class="swiper-content date_time_content">
    <div class="invitation center-content flex-col">
      <div class="invitation-head">
        Xin trân trọng kính mời
      </div>
      <div class="invitation-name">
        Em Hoa
      </div>
      <div class="invitation-foot">
        Đến dự lễ thành hôn của hai chúng tôi
      </div>
    </div>
    <div class="our script-font center-content flex-col">
      <div class="bride">
        Trịnh Đình Việt
      </div>
      <div class="and">
        &
      </div>
      <div class="bride">
        Lê Thị Mai
      </div>
    </div>
    <div class="date-time-area center-content flex-col">
      Hôn lễ được tổ chức

      <div class="date-time-table flex-row">
        <div class="time center-content">
          10:00
        </div>

        <div class="date center-content">
          02/12/2023
        </div>
      </div>

      (Tức ngày 20/10 năm ABC)
    </div>

    div
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
  .date_time_content {
    background-color: bisque;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .invitation {
      width: 100%;
    }

    .our {

    }

    .date-time-table {
      position: relative;

      &:before {
        content : "";
        position: absolute;
        bottom  : 0;
        left  : 100px;
        height  : 1px;
        width   : 200px;
        border-bottom: 4px solid #181818;
      }

      &:after {
        content : "";
        position: absolute;
        top  : 0;
        left  : 100px;
        height  : 1px;
        width   : 200px;
        border-top: 4px solid #181818;
      }

      .date {
        width: 200px;
        border-left: #181818 2px solid;
      }

      .time {
        width: 200px;
        border-right: #181818 2px solid;
      }
    }
  }
</style>

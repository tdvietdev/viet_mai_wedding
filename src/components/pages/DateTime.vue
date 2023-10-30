<template>
  <div class="swiper-content date_time_content">
    <div class="invitation center-content flex-col">
      <div class="invitation-head">
        Xin trân trọng kính mời
      </div>
      <div class="invitation-name script-font">
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
        <div class="time center-content flex-col">
          <div class="time-text">Vào lúc</div>
          <div class="time-value">10:00</div>
        </div>

        <div class="date center-content flex-col">
          <div class="date-text">Ngày</div>
          <div class="date-value">02/12/2023</div>
        </div>
      </div>
      <div class="luna-date">
        (Nhằm ngày 20 tháng 10 năm Quý Mão)
      </div>
      <div class="family-area center-content flex-col">
        <div class="family-header">
          Gia đình
        </div>
        <div class="parents flex-row">
          <div class="flex-col center-content">
            <div>Nhà trai</div>
            <div>Ông. Trịnh Đình Trung</div>
            <div>Bà. Lê Thị Giang</div>
          </div>
          <div class="flex-col center-content">
            <div>Nhà gái</div>
            <div>Ông. Lê Công Thư</div>
            <div>Bà. Hà Thị Hương</div>
          </div>
        </div>
      </div>
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

<style>
  .date_time_content {
    background-color: bisque;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .invitation-head {
      font-size: 30px;
    }

    .invitation-name {
      font-size: 35px;
    }

    .invitation-foot {
      font-size: 30px;
    }

    .invitation {
      width: 100%;
    }

    .our {
      font-size: 50px;
    }

    .date-time-area {
      font-size: 30px;
    }

    .family-area {
      font-size: 25px;
      width: 100%;

      .family-header {
        font-size: 30px;
      }

      .parents {
        width: 100%;

        .flex-col {
          flex: 1;
        }
      }
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

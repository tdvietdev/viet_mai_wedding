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
      <div class="place-area flex-col center-content">
        <div class="place-value">
          Tại tư gia nhà trai
        </div>
        <div class="place-description">
          (<a href="https://maps.app.goo.gl/XpN5XAk1BJrimV1y6?g_st=ic">Thôn ngọc đới, xã Quảng Phúc, huyện Quảng Xương,<br>Tỉnh Thanh Hoá</a>)
        </div>
      </div>
      <div class="family-area center-content flex-col">
        <div class="family-header">
          Gia đình
        </div>
        <div class="parents flex-row">
          <div class="flex-col center-content">
            <div>Nhà trai</div>
            <div class="script-font">Ông. Trịnh Đình Trung</div>
            <div class="script-font">Bà. Lê Thị Giang</div>
          </div>
          <div class="flex-col center-content">
            <div>Nhà gái</div>
            <div class="script-font">Ông. Lê Công Thư</div>
            <div class="script-font">Bà. Hà Thị Hương</div>
          </div>
        </div>
      </div>
      <div class="welcome">
        Rất hân hạnh được đón tiếp!
      </div>
      <div class="welcome-1">
        Sự có mặt có quý khách là niềm vui cho gia đình chúng tôi
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
      font-size: 33px;
    }

    .invitation-name {
      font-size: 35px;
    }

    .invitation-foot {
      font-size: 28px;
    }

    .invitation {
      width: 100%;
    }

    .our {
      font-size: 50px;
      line-height: 1.2;
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

    .place-area {
      .place-value {
        font-size: 28px;
      }

      .place-description {
        font-size: 18px;
        text-align: center;
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
        line-height: 1;
        width: 200px;
        border-left: #181818 2px solid;
      }

      .time {
        line-height: 1;
        width: 200px;
        border-right: #181818 2px solid;

        .time-text {
          margin-top: 10px;
          margin-bottom: 5px;
        }

        .time-value {
          margin-top: 5px;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>

<template>
  <div class="swiper-content date_time_content">
    <div class="invitation center-content flex-col">
      <div class="invitation-head">
        Xin trân trọng kính mời
      </div>
      <div class="invitation-name script-font">
        {{ guestName }}
      </div>
      <div class="invitation-foot">
        Đến dự lễ thành hôn của hai chúng tôi
      </div>
    </div>
    <div class="our script-font center-content flex-col">
      <div class="goom">
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
      Hôn lễ được tổ chức vào lúc
      <div class="date-time-table flex-col">
        <div class="time center-content flex-col">
          10 giờ 00 phút
        </div>

        <div class="date center-content flex-row">
          <div class="date-text">THỨ BẢY</div>
          <div class="day center-content"><div class="day_value">02</div></div>
          <div class="month">12 - 2023</div>
        </div>
      </div>
    </div>
      <div class="luna-date text-center">
        Tức ngày 20 tháng 10 năm Quý Mão
      </div>
      <div class="place-area flex-col center-content">
        <div class="place-value">
          Tại tư gia nhà trai
        </div>
<!--        <div class="place-description">-->
<!--          <a href="https://maps.app.goo.gl/XpN5XAk1BJrimV1y6?g_st=ic">-->
<!--            <font-awesome-icon :icon="'fa-map-location-dot'"/>-->
<!--            Thôn Ngọc Đới, xã Quảng Phúc-->
<!--            <br> huyện Quảng Xương, Tỉnh Thanh Hoá</a>-->
<!--        </div>-->
      </div>
      <div class="family-area center-content flex-col">
        <div class="family-header">
          Gia đình
        </div>
        <div class="parents flex-row center-content">
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
      <div class="welcome text-center">
        Rất hân hạnh được đón tiếp!
      </div>
  </div>
</template>

<script>
export default {
  props: ['guestName'],
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

<style lang="less">
  @import '../../assets/media';

  .date_time_content {
    font-family: 'Josefin Sans', sans-serif;
    background-color: bisque;
    width: 100%;
    display: flex;
    flex-direction: column;

    .welcome, .welcome-1 {
      margin-top: 20px;
      font-size: 40px;

      .breakpoint-small({
        font-size: 18px;
      });
    }

    .luna-date {
      font-size: 30px;

      .breakpoint-small({
        font-size: 20px;
      });
    }

    .invitation-head {
      font-size: 50px;
      line-height: 1;

      .breakpoint-small({
        font-size: 28px;
      });
    }

    .invitation-name {
      text-align: center;
      font-size: 50px;

      .breakpoint-small({
        font-size: 28px;
      });
    }

    .invitation-foot {
      font-size: 35px;

      .breakpoint-small({
        font-size: 20px;
      });
    }

    .invitation {
      width: 100%;
    }

    .our {
      font-size: 60px;
      line-height: 1.2;
      margin: 20px auto;

      .breakpoint-small({
        margin: 20px 0;
      });

      .bride {
        flex: 1;

        .breakpoint-small({
          margin-top: 5px;
        });
      }

      .goom {
        flex: 1;

        .breakpoint-small({
          margin-bottom: 5px;
        });
      }

      .breakpoint-small({
        font-size: 40px;
        line-height: 1.2;
      });
    }

    .date-time-area {
      font-size: 36px;

      .breakpoint-small({
        font-size: 24px;
      });
    }

    .family-area {
      font-size: 25px;
      width: 100%;
      margin-top: 15px;

      .breakpoint-small({
        font-size: 20px;
        margin-top: 10px;
      });

      .family-header {
        font-size: 40px;
        line-height: 1;

        .breakpoint-small({
          line-height: 1;
          font-size: 24px;
        });
      }

      .parents {
        width: 100%;
        font-size: 36px;

        .flex-col {
          flex: 1;
          max-width: 400px;
        }

        .breakpoint-small({
          font-size: 20px;
          line-height: 1.5;
        });
      }
    }

    .place-area {
      .place-value {
        font-size: 40px;

        .breakpoint-small({
          font-size: 28px;
        });
      }

      .place-description {
        font-size: 38px;
        text-align: center;

        .breakpoint-small({
          font-size: 18px;
        });
      }
    }

    .date-time-table {
      position: relative;

      .date {
        line-height: 1;

        .day {
          font-size: 50px !important;
          margin: 0 20px;
          color: #ff1d00;
          border-top: unset !important;
          border-bottom: unset !important;

          .breakpoint-small({
            font-size: 36px !important;
          });
        }

        .date-text, .month, .day {
          display: flex;
          justify-content: center;
          align-items: center;
          text-wrap: nowrap;
          font-size: 30px;

          height: 50px;
          margin-top: 10px;
          margin-bottom: 5px;
          border-top: #181818 2px solid;
          border-bottom: #181818 2px solid;

          .breakpoint-small({
            margin-top: 5px;
            margin-bottom: 2px;
            font-size: 24px;
            height: 40px;
          });
        }

        .date-value {
          margin-top: 5px;
          margin-bottom: 10px;

          .breakpoint-small({
            margin-top: 2px;
            margin-bottom: 5px;
          });
        }
      }

      .time {
        line-height: 1;
        color: #ff1d00;
        font-size: 60px;

        .breakpoint-small({
          font-size: 28px;
        });

        .time-text {
          margin-top: 10px;
          margin-bottom: 5px;

          .breakpoint-small({
            margin-top: 5px;
            margin-bottom: 2px;
          });
        }

        .time-value {
          margin-top: 5px;
          margin-bottom: 10px;

          .breakpoint-small({
            margin-top: 2px;
            margin-bottom: 5px;
          });
        }
      }
    }
  }
</style>

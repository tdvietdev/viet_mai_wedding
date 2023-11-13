<template>
  <div class="swiper-content center-content flex-col timeline-content">
    <div class="header">
      Sự kiện
    </div>
    <div class="content flex-row">
      <div class="calendar center-content">
        <img class="time-line-image" src="../../images/common/timeline2.png" alt="">
      </div>
      <div class="timeline">
        <div class="item flex-row">
          <div class="date_time flex-row">
            <div class="day">
              05
            </div>
            <div class="m_d flex-col">
              <div class="month">
                / 11
              </div>
              <div class="day_o_w">
                CHỦ NHẬT
              </div>
            </div>
          </div>
          <div class="event center-content">
            <div class="event-title">
              Gặp mặt hai gia đình
            </div>
          </div>
        </div>
        <div class="item flex-row green">
          <div class="date_time flex">
            <div class="day">
              28
            </div>
            <div class="m_d flex-col">
              <div class="month">
                / 11
              </div>
              <div class="day_o_w">
                THỨ BA
              </div>
            </div>
          </div>
          <div class="event flex-col">
            <div class="event-title">
              Lễ nạp tài, dạm ngõ
            </div>
            <div class="sub-event">
              08 : 15 Tại tư gia nhà gái
            </div>
            <div class="sub-event-place">
              <a href="https://maps.app.goo.gl/XpN5XAk1BJrimV1y6?g_st=ic">
                <font-awesome-icon :icon="'fa-map-location-dot'"/>
                Nhà 05, N.32, đường số 2, thôn Phú Cường, xã Quảng Trường
                <br> huyện Quảng Xương, Tỉnh Thanh Hoá</a>
            </div>
          </div>
        </div>
        <div class="item flex-row red">
          <div class="date_time flex-row">
            <div class="day">
              02
            </div>
            <div class="m_d flex-col">
              <div class="month">
                / 12
              </div>
              <div class="day_o_w">
                THỨ BẢY
              </div>
            </div>
          </div>
          <div class="event flex-col">
            <div class="event-title">
              Lễ thành hôn
            </div>
            <div class="sub-event">
              10 : 00 Tại tư gia nhà trai
            </div>
            <div class="sub-event-place">
              <a href="https://maps.app.goo.gl/XpN5XAk1BJrimV1y6?g_st=ic">
                <font-awesome-icon :icon="'fa-map-location-dot'"/>
                Nhà 24, đường số 3, thôn Ngọc Đới, xã Quảng Phúc
                <br> huyện Quảng Xương, Tỉnh Thanh Hoá</a>
            </div>
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

<style lang="less">
  @import '../../assets/media';

  .content {
    .breakpoint-small({
      flex-direction: column
    });
  }

  .timeline-content {
    font-size: 50px;

    .breakpoint-small({
      font-size: 28px;
    });
  }

  .content {
    width: 80%;

    .breakpoint-small({
      flex-direction: column !important;
      width: 100%;
    });
  }

  .calendar {
    padding: 0 30px;
    flex: 1;

    .time-line-image {
      max-height: 700px;

      .breakpoint-small({
        max-width: 100%;
      });
    }
  }

  .timeline {
    margin: 0 5px;
    flex: 1;

    .red {
      color: red;
    }

    .green {
      color: green;
    }

    .item {
      margin-bottom: 10px;

      .event {
        flex: 1;
        justify-content: unset;

        .event-title {
          font-size: 40px;
          font-weight: bold;

          .breakpoint-small({
            font-size: 22px;
          });
        }

        .sub-event {
          font-size: 30px;

          .breakpoint-small({
            font-size: 20px;
          });
        }

        .sub-event-place {
          font-size: 30px;

          .breakpoint-small({
            font-size: 16px;
          });
        }
      }

      .date_time {
        text-wrap: nowrap;
        margin-right: 5px;
        width: 170px;

        .breakpoint-small({
          width: 100px;
        });

        .day {
          font-size: 40px;
          font-weight: bold;

          .breakpoint-small({
            font-size: 24px;
            margin-right: 5px;
          });
        }

        .m_d {
          font-size: 20px;

          .breakpoint-small({
            font-size: 12px;
          });
        }
      }
    }
  }


</style>

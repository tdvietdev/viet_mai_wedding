<template>
  <div class="flex-col card-cover animate__animated animate__slow" :class="{animate__fadeOutUp: isOpen}">
    <div class="header text-center animate__animated animate__delay-1s" :class="{animate__bounceInDown: isActiveCover}">Thân gửi</div>
    <div class="guest-name text-center">{{ this.guest.name }} </div>
    <div class="groom-bride flex-row center-content">
      <div class="groom-name text-right animate__animated animate__delay-1s" :class="{animate__bounceInLeft: isActiveCover}">Trịnh Đình Việt</div>
      <div class="wedding-image center-content">
        <img class="animate__animated animate__infinite animate__slow" :class="{animate__heartBeat: isActiveCover}"
             src="../images/common/corver_center.png">
      </div>
      <div class="bride-name animate__animated animate__delay-1s" :class="{animate__bounceInRight: isActiveCover}">Lê Thị Mai</div>
    </div>
    <div class="date-time flex-row center-content">
      <div class="day-of-week text-center">
        Thứ Bảy
      </div>

      <div class="date flex-col center-content">
        <span>Tháng 12</span>
        <span class="month">02</span>
        <span>2023</span>
      </div>

      <div class="time text-center">
        10 : 00
      </div>
    </div>

    <div class="open center-content">
      <div class="open-button animate__animated animate__infinite animate__slow" :class="{animate__tada: isActiveCover}" @click="isOpen = true; onActiveContent()">
        Mở thư
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isActiveCover', 'guest', 'onActiveContent'],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
@import '../assets/media';

.card-cover {
  width: 100%;
  height: 100%;
  background-image: url("../images/common/background/main.jpg");

  position: absolute;
  top: 0;
  left: 0;
  //overflow-x: hidden;
  //overflow-y: auto;


  .header {
    height: 10%;
    font-size: 70px;

    .breakpoint-small({
      font-size: 30px;
      height: unset;
    });
  }

  .guest-name {
    height: 10%;
    font-size: 50px;

    .breakpoint-small({
      height: unset;
      flex: 1;
      font-size: 20px;
      padding: 0 20px;
    });
  }

  .groom-bride {
    height: 50%;
    font-size: 50px;

    .breakpoint-small({
      flex-direction: column;
      font-size: 18px;
    });

    .groom-name, .bride-name {
      flex: 1;

      .breakpoint-small({
        font-size: 30px;

        display: flex;
        align-items: center;
        justify-content: center;
      });
    }

    .wedding-image {
      height: 100%;
      .breakpoint-small({
        height: 50%;
      });

      flex: 1;

      img {
        height: 100%;
      }
    }
  }

  .date-time {
    font-size: 30px;

    .breakpoint-small({
      flex-direction: row;
      font-size: 18px;
    });

    .day-of-week, .time {
      font-size: 40px;
      width: 200px;
      border-top: #181818  5px solid;
      border-bottom: #181818  5px solid;

      .breakpoint-small({
        display: none;
      });
    }

    .date {
      padding: 0 40px;
      .breakpoint-small({
        padding: 0 20px;
        font-size: 20px;
        border-left: #181818  2px solid;
        border-right: #181818  2px solid;
      });

      .month {
        font-size: 40px;
        font-weight: bold;

        .breakpoint-small({
          font-size: 25px;
        });
      }
    }
  }

  .open {
    height: 20%;
    .breakpoint-small({
      height: unset;
      flex: 1;
    });

    .open-button {
      font-size: 50px;
      cursor: pointer;

      .breakpoint-small({
        font-size: 25px;
      });
    }
  }
}
</style>

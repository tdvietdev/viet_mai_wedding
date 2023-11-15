<template>
  <div class="swiper-content album-pages flex-col center-content" :id="galleryID">
    <div class="header text-center animate__animated animate__infinite animate__slow animate__pulse">Album ảnh cưới</div>

    <div class="content">
      <swiper
        :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
        :loop="true"
        :autoplay="{delay: 2500}"
        :zoom="true"
        :navigation="true"
        :centeredSlides="true"
        :pagination="{
      clickable: true,
    }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/3.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/4.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/5.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/6.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/7.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/8.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/9.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/10.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/11.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/12.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-zoom-container">
            <img src="../../images/album/13.jpg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="thank-you text-center" v-scroll-animate>
      Xin cảm ơn bạn đã dành sự quan tâm đến chúng tôi <br>
      Quá trình chuẩn bị cho ngày trọng đại khó tránh những thiếu sót,<br> rất mong được sự cảm thông từ mọi người!
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination, Autoplay],
    };
  },
};
</script>
<style lang="less">
  @import '../../assets/media';
  .swiper-button-next, .swiper-button-prev {
    --swiper-navigation-sides-offset: 0 !important;
  }

  .album-pages {

    .content {
      padding: 20px;
      width: 600px;

      .breakpoint-small({
        width: 100%;
        padding: 10px;
      });
    }

    .header {
      font-size: 50px;
      text-decoration: underline;

      .breakpoint-small({
        font-size: 28px;
      });
    }

    .thank-you {
      border: #d9a150 2px solid;
      padding: 20px;
      font-size: 28px;
      width: 70%;
      margin-bottom: 20px;

      .breakpoint-small({
        width: 100%;
        padding: 10px;
        font-size: 16px;
      });
    }
  }

</style>
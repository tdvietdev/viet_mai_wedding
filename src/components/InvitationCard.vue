<template>
  <div class="wedding-invitation" :class="{ 'invitation-bounce':canOpen }">
    <div class="invitation-container" :class="{ 'invitation-down':isOpening }">
      <div class="invitation-cover">
        <div class="cover-content" :class="{'invitation-up':isOpening}">
<!--          <div class="content-inside">-->
            <swiper
                :direction="'vertical'"
                :effect="'cards'"
                :grabCursor="true"
                :modules="modules"
                :loop="true"
                :cards-effect="{
                  perSlideOffset: 5,
                  perSlideRotate: 2,
                  rotate: true,
                  slideShadows: false,
                }"
                class="mySwiper"
            >
              <swiper-slide>
                <div class="content-inside">
                  <img class="content-inside-photo" src="../images/a4.jpeg">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-inside">
                  <img class="content-inside-photo" src="../images/a4.jpg">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="content-inside">
                  <img class="content-inside-photo" src="../images/photo.jpg">
                  <p>zzzz！</p>
                  <p><b>Jun & undefined</b></p>
                  <p>时间：invalid date value</p>
                  <p>地点：<b>location can not be found</b></p>
                  <div class="content-inside-bless">
                    <input
                        placeholder="写下你的祝福"
                        @keyup.enter="sendBarrage"
                        @focus="isFocused = true"
                        @blur="isFocused = false, hasEntered = false"
                        v-model="wish"
                        ref="wishInput"
                    >
                    <p v-if="!wish && isFocused && hasEntered">请输入祝福哦</p>
                    <div>
                      <button @click="sendBarrage">发送祝福弹幕</button>
                      <button @click="closeInvitation">关闭</button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
<!--          </div>-->
        </div>
        <div class="cover-inside-left" :class="{'opening':isOpening}">
          <div class="guest-info">
            <div class="gold-text">Thân gửi : </div>
            <div class="gold-text guest-name">{{guest.name}}</div>
          </div>
        </div>
        <div class="cover-inside-right" :class="{'opening':isOpening}"></div>
        <img class="cover-inside-seal" src="../images/open2.png" @click="openInvitation" :class="{'invitation-flight':isOpening}">
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  props: ['canOpen', 'guest'],
  data() {
    return {
      isOpening: false,
      wish: '',
      isFocused: false,
      hasEntered: false
    }
  },
  methods: {
    openInvitation(){
      this.isOpening = true
    },
    closeInvitation () {
      this.isOpening = false
      setTimeout(() => {
        this.$emit('onClose')
      }, 660)
    },
    sendBarrage(){
      this.$nextTick(() => {
        this.hasEntered = true
        if (!this.wish) {
          return
        }
        this.isOpening = false
        this.$refs.wishInput.blur()
        setTimeout(() => {
          this.$emit('sendBarrage', this.wish)
        }, 660)
      })
    }
  }
}
</script>

<style lang="less">
  .wedding-invitation{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px 5px;
    padding-top: 10px;
    z-index: 4;
    transform: scale(0.05);
    -webkit-transform: scale(0.05);
    opacity: 0;
    transition: transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(.26,1.84,.39,.61), opacity 0.5s linear;
    background-size: 100%;
    overflow: hidden;
    &.invitation-bounce{
      opacity: 1;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
    .invitation-container{
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
      &.invitation-down{
        transform: translateY(20px);
        -webkit-transform: translateY(20px);
      }
      .invitation-cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #D65047;
        border-radius: 10px;
        perspective: 500px;
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);
        .cover-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 10px 20px;
          transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-up{
            transform: translateY(-20px);
            -webkit-transform: translateY(-20px);
          }
          .content-inside {
            height: 100%;
            padding: 10px;
            color: #a9895d;
            //background-color: #FFF1DE;
            //background-image: url("../images/h2.png");
            //background-origin: content-box;
            //background-size: contain;

            text-align: center;
            overflow: unset;
            .content-inside-photo{
              width: 100%;
              margin-bottom: 10px;
              padding: 5px;
              border: 1px solid #f7debb;
            }
            p{
              margin-top: 0;
              margin-bottom: 5px;
            }
            .content-inside-bless{
              input{
                width: 100%;
                height: 35px;
                margin-bottom: 10px;
                outline: none;
                border: none;
                border-bottom: 1px solid #f7debb;
                color: #a9895d;
                background: transparent;
                font-size: 16px;
                &::-webkit-input-placeholder { color: #E8D1B1;font-size: 12px; }
                &::-moz-placeholder { color: #E8D1B1;font-size: 12px; }
                &:-ms-input-placeholder { color: #E8D1B1;font-size: 12px; }
                &:-moz-placeholder { color: #E8D1B1;font-size: 12px; }
              }
              >div{
                display: flex;
                button{
                  width: 100%;
                  height: 35px;
                  color: #a9895d;
                  background: #f7debb;
                  border: none;
                  outline: none;
                  &:disabled{
                    opacity: 0.8;
                  }
                  &:first-child{
                    margin-right: 10px;
                    flex: 1;
                  }
                  &:last-child{
                    width: 30px;
                    border: 1px solid #f7debb;
                    background: transparent;
                  }
                }
              }
            }
          }
        }
        .cover-inside-left{
          position: absolute;
          left: 0;
          top: 0;
          width: 90%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          background-image: url("../images/cover.png");
          background-origin: content-box;
          background-size: contain;
          background-repeat: no-repeat;
          box-shadow: 5px 0 10px rgba(0,0,0,0.2);
          z-index: 6;
          transition: transform 0.5s;
          -webkit-transition: -webkit-transform 0.5s;
          transform-origin: 0 50%;
          -webkit-transform-origin: 0 50%;
          &.opening{
            transform: rotate3d(0,1,0,-140deg);
            -webkit-transform: rotate3d(0,1,0,-140deg);
          }

          .guest-info {
            position: absolute;
            font-family: 'Dancing Script';
            font-size: 35px;
            bottom: 15%;
            margin-left: 10%;

            .guest-name {
              margin-left: 30px;
            }
          }
        }

        .gold-text {
          font-family: 'Dancing Script', cursive;
          color: #eec454;
        }

        .gold-text::after {
          background: none;
          content: attr(data-heading);
          left: 0;
          top: 0;
          z-index: -1;
          position: absolute;
          text-shadow:
              -1px 0 1px #c6bb9f,
              0 1px 1px #c6bb9f,
              5px 5px 10px rgba(0, 0, 0, 0.4),
                -5px -5px 10px rgba(0, 0, 0, 0.4);
        }
        .cover-inside-right{
          position: absolute;
          right: 0;
          top: 0;
          width: 15%;
          height: 100%;
          border-radius: 10px;
          background-color: #D65047;
          box-shadow: -5px 0 10px rgba(0,0,0,0.2);
          z-index: 5;
          transition: transform 0.5s;
          -webkit-transition: -webkit-transform 0.5s;
          transform-origin: 100% 50%;
          -webkit-transform-origin: 100% 50%;
          &.opening{
            transform: rotate3d(0,1,0,140deg);
            -webkit-transform: rotate3d(0,1,0,140deg);
          }
        }
        .cover-inside-seal{
          position: absolute;
          left: 90%;
          bottom: 100px;
          width: 80px;
          height: 80px;
          margin-left: -40px;
          z-index: 7;
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%;
          transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          -webkit-transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
          &.invitation-flight{
            opacity: 0;
          }
        }
      }
    }
  }
</style>

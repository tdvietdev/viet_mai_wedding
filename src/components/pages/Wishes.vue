<template>
  <div class="swiper-content wishes-page flex-col center-content">
    <div class="header text-center">Gửi lời chúc</div>
    <div class="bank-area flex-row">
      <div class="center-content money flex-col">
        <div class="info center-content flex-col">
          <div class="for">Cho cô dâu</div>
          <div class="name">Le Thi Mai</div>
          <div class="bank">Vietcombank</div>
          <div class="id">1031594849 <font-awesome-icon :icon="this.copyIconBride" @click="copyToClipBoard('bride')"/></div>
        </div>
        <div class="qr">
          <img class="image" src="../../images/bank/vk.png" alt="">
        </div>
      </div>
      <div class="center-content money flex-col-rev">
        <div class="info center-content flex-col">
          <div class="for">Cho chú rể</div>
          <div class="for">Trinh Dinh Viet</div>
          <div class="bank">Vietcombank</div>
          <div class="id">0491000139237 <font-awesome-icon :icon="this.copyIconGoom" @click="copyToClipBoard('goom')"/></div>
        </div>
        <div class="qr">
          <img class="image" src="../../images/bank/ck.png" alt="">
        </div>
      </div>
    </div>
    <div class="text-area flex-col">
      <div class="list-wishes" id="scroll-1">
        <div class="wish-item" v-for="(wish, index) in wishes" :key="index">
          <span class="user-name">{{ wish.name }}:</span> {{ wish.wish }}
        </div>
      </div>
      <div class="input-area flex-row">
        <div class="inputs flex-col">
          <div class="input-controller flex-row">
            <div class="text">Nhập tên</div>
            <input placeholder="Nhập tên của bạn nhé!" class="input-elm name-input" type="text" v-model="name">
          </div>

          <div class="input-controller flex-row">
            <div class="text">Lời nhắn</div>
            <textarea placeholder="Hãy nhập lời chúc cho cô dâu và chú rể ở đây nha" class="input-elm message-input" v-model="message"></textarea>
          </div>
        </div>
        <div class="button-element center-content">
          <button class="submit-button" @click="sendMessage()" :disabled="!message || !name">
            Gửi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WishService from "../../services/WishService";

export default {
  props: ['guest', 'wishes'],
  data() {
    return {
      copyIconGoom: 'fa-copy',
      copyIconBride: 'fa-copy',
      message: '',
      name: this.guest.id === 'all' ? '' : this.guest.name,
    };
  },
  watch: {
    guest: {
      deep: true,
      handler(value) {
        this.name = value.id === 'all' ? '' : value.name
      }
    }
  },
  methods: {
    copyToClipBoard(type) {
      let bankId = ''
      const remain = 1000;

      if (type === 'goom') {
        bankId = '0491000139237'
        this.copyIconGoom = 'fa-check'

        setTimeout(() => {
          this.copyIconGoom = 'fa-copy'
        }, remain);
      } else {
        bankId = '1031594849'
        this.copyIconBride = 'fa-check'

        setTimeout(() => {
          this.copyIconBride = 'fa-copy'
        }, remain);
      }
      navigator.clipboard.writeText(bankId);
    },
    sendMessage() {
      WishService.create({name: this.name, wish: this.message})
      this.message = ''
      this.scrollToBottom()
    },
    scrollToBottom() {
      setTimeout(() => {
        const container = this.$el.querySelector("#scroll-1");
        container.scrollTop = container.scrollHeight;
      }, 200)
    },
  },
  mounted() {
    this.scrollToBottom()
  }
};
</script>

<style lang="less">
  @import '../../assets/media';

  .wishes-page {

    .header {
      font-size: 30px;

      .breakpoint-small({
        font-size: 18px;
      });
    }

    .bank-area {
      font-size: 22px;
      width: 80%;

      .breakpoint-small({
        font-size: 16px;
        width: unset;
      });

      .money {
        flex: 1;

        .info {

        }

        .qr {
          .image {
            max-height: 150px;

            .breakpoint-small({
              max-height: 100px;
            });
          }
        }
      }
    }

    .text-area {
      font-size: 20px;
      width: 70%;

      .breakpoint-small({
        font-size: 14px;
        width: unset;
      });


      flex: 1;
      overflow: auto;

      .list-wishes {
        flex: 1;
        overflow: scroll;
        max-height: 100%;
        border: #d9a150 2px solid;
        margin: 10px;

        .breakpoint-small({
          padding: 5px 10px;
          margin-top: 10px;
        });


        .wish-item {
          .user-name {
            color: #ef6b60;
            font-weight: bold;
          }
        }
      }

      .input-area {
        .submit-button {
          font-size: 22px;

          .breakpoint-small({
            font-size: 14px;
          });
        }

        .inputs {
          flex: 1;
        }

        .input-controller {
          margin-top: 10px;
          .text {
            width: 100px;

            .breakpoint-small({
              width: 80px;
            });
          }

          .input-elm {
            flex: 1;
            font-size: 18px;

            .breakpoint-small({
              font-size: 13px;
            });
          }

          .message-input {
            height: 80px;

            .breakpoint-small({
              height: 60px;
            });
          }
        }
      }

      .button-element {
        padding: 5px;
      }
    }
  }
</style>

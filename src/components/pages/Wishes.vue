<template>
  <div class="swiper-content wishes-page flex-col center-content">
    <div class="header text-center animate__animated animate__infinite animate__slow animate__pulse">Gửi lời chúc</div>
    <div class="confirmation-area">
      <div class="description text-center" v-scroll-animate>
        Đám cưới của chúng mình sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn.<br>
        Bạn sẽ đến chứ? Bạn vui lòng phản hồi sớm để chúng mình có thể chuẩn bị chu đáo nhất nhé. <br>
        Chúng mình rất cảm ơn ạ!
      </div>

      <div class="confirm-inputs input-area flex-col" v-scroll-animate>
        <div class="inputs flex-col">
          <div class="input-controller flex-row">
            <div class="text">Nhập tên</div>
            <input placeholder="Cho mình xin tên của bạn ở đây nhé!" class="input-elm name-input" type="text" v-model="name">
          </div>

          <div class="input-controller flex-col">
            <div class="text">Bạn sẽ đến với chúng mình chứ?</div>
            <div class="flex-row">
              <div class="radio-controller">
                <input type="radio" id="yes" value="yes" v-model="goConfirm" />
                <label for="yes">Tôi sẽ đến!</label>
              </div>
              <div class="radio-controller">
                <input type="radio" id="no" value="no" v-model="goConfirm" />
                <label for="no">Tôi bận mất rồi :(</label>
              </div>
            </div>
          </div>
        </div>
        <div class="button-element center-content">
          <button class="submit-button" @click="sendDataToApi()" :disabled="!name || confirmed">
            Gửi
          </button>
        </div>
      </div>
    </div>

    <div class="bank-area flex-row">
      <div class="center-content money flex-col" >
        <div class="info center-content flex-col" v-scroll-animate>
          <div class="for">Cho cô dâu</div>
          <div class="name">Le Thi Mai</div>
          <div class="bank">Vietcombank</div>
          <div class="id">1031594849 <font-awesome-icon :icon="this.copyIconBride" @click="copyToClipBoard('bride')"/></div>
        </div>
        <div class="qr" v-scroll-animate>
          <img class="image" src="../../images/bank/vk.png" alt="">
        </div>
      </div>
      <div class="center-content money flex-col" >
        <div class="info center-content flex-col" v-scroll-animate>
          <div class="for">Cho chú rể</div>
          <div class="for">Trinh Dinh Viet</div>
          <div class="bank">Vietcombank</div>
          <div class="id">0491000139237 <font-awesome-icon :icon="this.copyIconGoom" @click="copyToClipBoard('goom')"/></div>
        </div>
        <div class="qr" v-scroll-animate>
          <img class="image" src="../../images/bank/ck.png" alt="">
        </div>
      </div>
    </div>
    <div class="text-area flex-col">
      <div class="list-wishes" id="scroll-1" v-scroll-animate>
        <div class="wish-item" v-for="(wish, index) in wishes" :key="index">
          <span class="user-name">{{ wish.name }}:</span> {{ wish.wish }}
        </div>
      </div>
      <div class="input-area flex-row" v-scroll-animate>
        <div class="inputs flex-col">
          <div class="input-controller flex-row">
            <div class="text">Nhập tên</div>
            <input placeholder="Cho chúng mình xin tên của bạn ở đây nhé!" class="input-elm name-input" type="text" v-model="name">
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
import axios from 'axios';

export default {
  props: ['guest', 'wishes'],
  data() {
    return {
      copyIconGoom: 'fa-copy',
      copyIconBride: 'fa-copy',
      message: '',
      goConfirm: 'yes',
      name: this.guest.id === 'all' ? '' : this.guest.name,
      confirmed: false
    };
  },
  watch: {
    guest: {
      deep: true,
      handler(value) {
        this.name = value.id === 'all' ? '' : value.name
      }
    },
    wishes: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      if(newVal.length && !oldVal.length) {
        this.scrollToBottom()
      }
    }
  },
  methods: {
    async sendDataToApi() {
      try {
        const url = 'https://script.google.com/macros/s/AKfycbw_Yw50UKIDeAipEXpEhwlzhwngC8Sb9e42nEnq7kY8UoCwBX_ifV-9K09zlk98TBct/exec';
        this.confirmed = true

        const data = new FormData();
        data.append('name', this.name);
        data.append('is_ok', this.goConfirm);
        const response = await axios.post(url, data);
      } catch (error) {
        console.error(error);
      }
    },
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
      }, 10000)
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
      font-size: 50px;
      text-decoration: underline;

      .breakpoint-small({
        font-size: 28px;
      });
    }

    .confirmation-area {
      font-size: 22px;
      width: 70%;

      .description {
        padding: 0 20px;
      }

      .confirm-inputs {
        border: #d9a150 2px solid;
        padding: 10px;
        width: 70%;
        margin: 10px auto;

        .breakpoint-small({
          width: 100%;
        });
      }

      .breakpoint-small({
        font-size: 16px;
        width: 100%;
      });
    }

    .bank-area {
      font-size: 22px;
      width: 80%;

      .breakpoint-small({
        font-size: 16px;
        width: 100%;
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
      max-height: 800px;

      .breakpoint-small({
        font-size: 14px;
        width: unset;
        max-height: 500px;
      });


      flex: 1;
      overflow: auto;

      .list-wishes {
        flex: 1;
        overflow: scroll;
        max-height: 100%;
        border: #d9a150 2px solid;
        margin: 10px;
        padding: 5px 10px;
        min-height: 300px;

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

      .button-element {
        padding: 5px;
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

      .radio-controller {
        margin: 0 10px;

        label {
          margin-left: 5px;
        }
      }

      .input-controller {
        margin-top: 10px;
        .text {
          min-width: 100px;

          .breakpoint-small({
            min-width: 80px;
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
  }
</style>

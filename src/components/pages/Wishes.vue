<template>
  <div class="swiper-content wishes-page flex-col">
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
      <div class="list-wishes">
        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
        </div>

        <div class="wish-item">
          <div class="user-name">
            Em Hoa
          </div>
          <div class="message">
            Chúc hạnh phúc 2 anh chị
          </div>
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
          <button class="submit-button" @click="sendMessage()">
            Gửi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyIconGoom: 'fa-copy',
      copyIconBride: 'fa-copy',
      message: '',
      name: 'ok',
    };
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
  },
};
</script>

<style lang="less">
  @import '../../assets/media';

  .wishes-page {
    .header {
      .breakpoint-small({
        font-size: 18px;
      });
    }

    .bank-area {
      .breakpoint-small({
        font-size: 16px;
      });

      .money {
        flex: 1;

        .info {

        }

        .qr {
          .image {
            max-height: 100px;
          }
        }
      }
    }

    .text-area {
      flex: 1;
      overflow: auto;

      .list-wishes {
        overflow: scroll;
        max-height: 100%;
      }

      .input-area {
        flex: 1;

        .inputs {
          flex: 1;
        }

        .input-controller {
          margin-top: 10px;
          .text {

            .breakpoint-small({
              width: 80px;
            });
          }

          .input-elm {
            flex: 1;
          }

          .message-input {
            height: 60px;
          }
        }
      }

      .button-element {
        padding: 5px;
      }
    }
  }
</style>

<template>
    <ul id="radio_wrapper" class="list_container">
        <li v-for="item in  radioList" :item="item" :key="item.radioid" data-tjname="recom_radio" class="js_play_radio">
            <a class="list_main" href="javascript:;">
                <div class="list_media">
                    <img class="list_pic" :src="item.picUrl" alt="">
                    <span class="icon icon_play"></span>
                </div>
                <div class="list_info">
                    <h3 class="list_tit tit_two_row">{{item.Ftitle}}</h3>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";

let mySwiper;
export default {
  name: "RadioList",
  data() {
    return {};
  },
  mounted() {},
  updated() {},
  computed: {
    ...mapState({
      radioList: state => state.recom.radioList
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.list_container {
  overflow: hidden;
  margin-right: -8px;
  .js_play_radio {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding-right: 8px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .list_main,
  .list_media {
    position: relative;
    display: block;
    background: #fff;
    img {
      width: 100%;
    }
    .icon {
      height: 24px;
      bottom: 10px;
      right: 5px;
      width: 24px;
      background-position: 0 0;
      position: absolute;
      display: block;
      z-index: 10;
      background-image: url(../assets/list_sprite.png);
      background-repeat: no-repeat;
    }
    .icon_play {
      background-size: 24px 60px;
    }
  }
  .list_info {
    padding: 0 7px 5px;
    color: #000;
    .list_tit {
      height: 36px;
      line-height: 18px;
      white-space: normal;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: normal;
      font-size: 14px;
    }
  }
}
</style>

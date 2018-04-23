<template>
    <ul id="radio_wrapper" class="list_container">
        <li v-for="item in  radioList" :item="item" :key="item.radioid" data-tjname="recom_radio" class="js_play_radio" @click="toDetail(item.radioid)">
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
import axios from "axios";

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
  methods: {
    toDetail(id) {
      let url =
        "v8/fcg-bin/fcg_v8_radiosonglist.fcg?labelid=" +
        id +
        "&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1";
      axios
        .get(url)
        .then(res => {
          if (
            res.data &&
            0 == res.data.code &&
            res.data.data &&
            !(res.data.data.length < 1)
          ) {
            let a = [];
            res.data.data.forEach(item => {
              a.push(item.id);
            });
            a.sort(function() {
              return Math.random() - Math.random();
            });
            location.href =
              "//i.y.qq.com/v8/playsong.html?ADTAG=myqq&from=myqq&channel=10007100" +
              "&songid=" +
              a.join(",");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
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

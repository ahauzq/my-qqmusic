<template>
    <div class="top_detail_view">
        <div class="info_box" id="js_header">
            <div class="info_box__bd">
                <div class="top_bar">
                    <img class="top_bar__img" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000" alt="">
                    <div class="top_bar__bd">
                        <h6 class="top_bar__tit">QQ音乐</h6>
                        <p class="top_bar__desc">打开APP收藏、下载</p>
                    </div>
                    <a class="top_bar__btn js_open_music" data-type="1" href="javascript:;">打开</a>
                </div>
                <div class="album" id="js_album_info">
                    <div class="album__media js_open_music" data-type="3">
                        <img class="album__cover" :src="topinfo.pic_album" :alt="topinfo.ListName">
                    </div>
                    <div class="album__bd">
                        <h1 class="album__name js_info_show" :singername="topinfo.ListName">{{topinfo.ListName}}</h1>
                        <p class="album__desc" v-if="day_of_year !=''">第{{day_of_year}}天</p>
                        <p class="album__desc" v-if="day_of_year ==''">第{{date.substring(date.length-2,date.length)}}周</p>
                        <p class="album__desc">{{update_time}} 更新</p>
                    </div>
                </div>
                <div class="opt_box">
                    <a class="btn_play_all js_play_all" href="javascript:;">播放全部</a>
                    <div class="play_bar js_progress_show" style="display:none">
                        <a id="js_icon_play" href="javascript:;">
                            <div class="play_bar__aside">
                                <svg class="play_bar__icon icon_svg" style="display:">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_pause_thin" id="js_icon_status"></use>
                                </svg>
                                <svg class="progress">
                                    <circle class="progress__circle" id="js_progress_circle" cx="23" cy="23" r="18" stroke-dasharray="17.634942802960826 113"></circle>
                                </svg>
                            </div>
                        </a>
                        <div class="play_bar__bd">
                            <h2 class="song_name" id="js_current_song">Bad</h2>
                        </div>
                        <a class="download js_down_song" href="javascript:;" data-songid="213398874" data-songtype="0">
                            <svg class="download__icon icon_svg">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_download"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <img class="info_box__bg js_img_bg" :data-src="topinfo.pic_album" alt="" :src="topinfo.pic_album">
        </div>
        <div class="wrap" id="js_wrapper">
            <div class="main" id="js_scroller">
                <div class="count_box">
                    <div class="count_box__desc">排行榜
                        <span class="count_box__number">共{{total_song_num}}首</span>
                    </div>
                </div>
                <ul class="qui_list qui_list--rank">
                    <li class="qui_list__item  js_play_song" v-for="(item,index ) in songlist" :key="index" :songid="item.data.songid" :songmid="item.data.songmid" :songtype="item.data.songtype">
                        <div class="qui_list__order">
                            <span class="qui_list__decimal">{{index+1}}</span>
                        </div>
                        <div class="qui_list__bd">
                            <div class="qui_list__box">
                                <h3 class="qui_list__tit">
                                    <span class="qui_list__txt">{{item.data.songname}}</span>
                                </h3>
                                <p class="qui_list__desc">
                                    <span class="qui_list__txt">
                                        <template v-for="(v,k) in item.data.singer">{{v.name}}
                                            <template v-if="k<item.data.singer.length-1">/</template>
                                        </template>
                                        <template v-if="item.data.albumdesc!=''"> · {{item.data.albumdesc}}</template>
                                    </span>
                                </p>
                            </div>
                            <div class="qui_list__more">
                                <i class="qui_list__dot"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AlloyTouch from "alloytouch";
export default {
  name: "TopDetailView",
  components: {},
  data() {
    return {
      songlist: [],
      topinfo: {},
      total_song_num: "",
      update_time: "",
      day_of_year: "",
      date: ""
    };
  },
  props: ["id"],
  created() {
    this.getTopListData();
  },
  updated() {
    this.initAlloyTouch();
  },
  methods: {
    getTopListData() {
      let url =
        "v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=" +
        this.id;
      axios
        .get(url)
        .then(res => {
          console.log(res);
          this.songlist = res.data.songlist;
          this.topinfo = res.data.topinfo;
          this.total_song_num = res.data.total_song_num;
          this.update_time = res.data.update_time;
          this.day_of_year = res.data.day_of_year;
          this.date = res.data.date;
        })
        .catch(err => {
          console.log(err);
        });
    },
    initAlloyTouch() {
      let target = document.querySelector("#js_scroller"),
        header = document.querySelector("#js_header"),
        a = target.offsetHeight,
        wh = window.innerHeight;
      let alloyTouch = new AlloyTouch({
        touch: "#js_scroller", //反馈触摸的dom
        vertical: true, //不必需，默认是true代表监听竖直方向touch
        target: target, //运动的对象
        property: "translateY", //被运动的属性
        deceleration: 6e-4,
        maxSpeed: 2,
        outFactor: 0.1,
        min: wh - a + 0, //不必需,运动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, //不必需,表示触摸位移与被运动属性映射关系，默认值是1
        step: 45, //用于校正到step的整数倍
        bindSelf: false,
        initialValue: 0,
        change: function(value) {
          target.style.transform = "translateY(" + value + "px)";
          value < 0 ? value < -190 && (value = -190) : value > 0 && (value = 0),
            (header.style.transform = "translateY(" + value + "px)");
        }
      });
    }
    ///
  }
};
</script>


<style lang="scss" scoped>
.top_detail_view {
  font: 300 12px/1.5 sans-serif;
  color: grey;
  background-color: #fff;
}
.info_box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 274px;
  overflow: hidden;
  color: #fff;
  background: #fff;
  .info_box__bd {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 4;
    background: rgba(0, 0, 0, 0.5);
    .top_bar {
      display: flex;
      align-items: center;
      height: 48px;
      padding: 0 16px 0 14px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      .top_bar__img {
        display: block;
        flex: 0;
        width: 36px;
        margin-right: 3px;
      }
      .top_bar__bd {
        flex: 1 1 auto;
        .top_bar__tit {
          line-height: 1.3;
          font-size: 14px;
        }
        .top_bar__desc {
          font-size: 10px;
        }
      }
      .top_bar__btn {
        position: relative;
        display: block;
        flex: 0 0 auto;
        height: 24px;
        padding: 0 12px;
        line-height: 24px;
        font-size: 15px;
        color: #fff;
        &::before {
          content: "";
          position: absolute;
          top: -50%;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 200%;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-style: solid;
          border-color: currentColor;
          border-width: 1px;
          border-radius: 999px;
        }
      }
    }
    .album {
      display: flex;
      width: 100%;
      margin-top: 17px;
      padding: 0 16px;
      overflow: hidden;
    }
    .album__media {
      position: relative;
      width: 125px;
      height: 125px;
      margin-right: 10px;
      overflow: hidden;
      flex: 0 0 auto;
      .album__cover {
        width: 100%;
      }
    }
    .album {
      display: flex;
      .album__bd {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .album__name {
        font-size: 18px;
      }
      .album__desc {
        max-height: 36px;
        overflow: hidden;
        margin-top: 8px;
        font-size: 12px;
      }
    }
    .opt_box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 84px;
      padding: 0 16px;
      .btn_play_all {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 40px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border-radius: 20px;
        background: #31c27c;
        &:before {
          content: "";
          display: block;
          height: 0;
          width: 0;
          margin-right: -3px;
          border-color: transparent transparent transparent #fff;
          border-width: 7px 11px;
          border-style: solid;
          border-radius: 2px;
        }
      }
    }
  }
  .info_box__bg.js_img_bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1) translateZ(0);
    filter: blur(36px);
  }
}
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-bottom: 0;
  overflow: hidden;
  .main {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    padding-top: 274px;
    //padding-bottom: 50px;
    overflow: hidden;
    will-change: transform;
    transform: translateZ(0);
    background: #fff;
    .count_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 54px;
      margin: 0 16px -10px;
    }
    .count_box__desc {
      font-size: 14px;
    }
  }
  .qui_list {
    overflow: hidden;
    .qui_list__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        .qui_list__decimal {
          color: #ff400b;
        }
      }
      .qui_list__order {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        margin-right: -16px;
        .qui_list__decimal {
          font-size: 16px;
        }
      }
      .qui_list__bd {
        position: relative;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        padding: 10px 16px;
        overflow: hidden;
      }
      .qui_list__box {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: vertical;
      }
      .qui_list__tit {
        font-size: 16px;
        color: #000;
        margin-bottom: 0;
      }
      .qui_list__desc,
      .qui_list__tit {
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .qui_list__txt {
        display: block;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 300;
      }
      .qui_list__desc {
      }
      .qui_list__more {
        .qui_list__dot {
        }
      }
    }
  }
}
</style>

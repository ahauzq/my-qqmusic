<template>
    <div class="top_detail_view">
        <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <symbol id="icon_praise" viewBox="0 0 32 32">
                    <title>赞</title>
                    <path d="M5.553 29.5c-1.408 0-2.553-1.143-2.553-2.547v-12.735c0-1.407 1.145-2.547 2.553-2.547h3.935c0.065-0.033 0.139-0.072 0.222-0.118 0.371-0.207 0.744-0.466 1.089-0.775 0.564-0.506 0.995-1.095 1.25-1.771 0.155-0.411 0.965-2.535 1.143-3.014 0.318-0.855 0.494-1.379 0.565-1.689 0.108-0.468 0.369-0.924 0.904-1.341 0.506-0.394 1.047-0.51 1.521-0.445 3.547 0.070 5.273 4.258 4.158 7.857l-0.331 1.333 5.252 0c2.405-0.063 4.186 2.039 3.637 5.169l-1.862 8.755c-0.211 1.867-2.221 3.869-4.379 3.869h-17.107zM10.5 13.351v14.149h12.142c1.093 0 2.3-1.209 2.38-2.088 0.004-0.041 0.010-0.081 0.018-0.121l1.887-8.803c0.325-1.841-0.479-2.784-1.626-2.754h-6.656c-0.67 0-1.162-0.624-1.001-1.269l0.677-2.695c0.795-2.51-0.354-5.259-2.318-5.259-0.052 0-0.104-0.004-0.177 0.014-0.137 0.106-0.164 0.153-0.174 0.194-0.099 0.426-0.296 1.007-0.648 1.947-0.184 0.49-1.005 2.628-1.159 3.033-0.383 1.008-1.014 1.863-1.816 2.577-0.47 0.418-0.971 0.763-1.472 1.041-0.019 0.011-0.038 0.021-0.057 0.031zM8.5 27.5v-14h-2.997c-0.277 0-0.503 0.233-0.503 0.519v12.962c0 0.284 0.227 0.519 0.503 0.519h2.997z"></path>
                </symbol>
                <symbol id="icon_like" viewBox="0 0 32 32">
                    <title>收藏</title>
                    <path d="M16 28c0 0 2.11-1.591 2.259-1.704 2.168-1.707 3.155-2.51 4.483-3.692 2.147-1.911 3.825-3.7 4.974-5.417 0.822-1.229 1.357-2.402 1.565-3.528 0.941-5.091-1.221-8.588-5.151-9.44-2.959-0.641-6.218 0.432-8.131 2.659-1.975-2.525-5.247-3.477-8.295-2.5-3.688 1.182-5.83 4.758-5.040 9.323 0.245 1.418 1.093 2.956 2.449 4.636 1.061 1.314 2.415 2.69 4.029 4.142 1.441 1.296 2.502 2.165 4.774 3.968l2.085 1.554zM10.486 21.014c-1.541-1.384-2.825-2.687-3.811-3.906-1.164-1.44-1.863-2.706-2.040-3.729-0.624-3.599 0.95-6.222 3.685-7.098 2.629-0.842 5.444 0.239 6.747 2.866l0.66 1.331c0.123 0.248 0.327 0.246 0.452 0.003l0.678-1.323c1.177-2.295 4.186-3.559 6.84-2.985 2.842 0.615 4.363 3.073 3.61 7.141-0.154 0.83-0.581 1.766-1.265 2.788-1.038 1.55-2.611 3.224-4.642 5.030-1.289 1.145-2.254 1.929-4.377 3.599-0.119 0.090-0.852 0.651-1.024 0.769-0.025-0.020-0.783-0.597-0.931-0.68-2.173-1.723-3.202-2.567-4.582-3.806z"></path>
                </symbol>
                <symbol id="icon_liked" viewBox="0 0 32 32">
                    <title>已收藏</title>
                    <path d="M16 28c0 0 2.11-1.591 2.259-1.704 2.168-1.707 3.155-2.51 4.483-3.692 2.147-1.911 3.825-3.7 4.974-5.417 0.822-1.229 1.357-2.402 1.565-3.528 0.941-5.091-1.221-8.588-5.151-9.44-2.959-0.641-6.218 0.432-8.131 2.659-1.975-2.525-5.247-3.477-8.295-2.5-3.688 1.182-5.83 4.758-5.040 9.323 0.245 1.418 1.093 2.956 2.449 4.636 1.061 1.314 2.415 2.69 4.029 4.142 1.441 1.296 2.502 2.165 4.774 3.968l2.085 1.554z"></path>
                </symbol>
                <symbol id="icon_play_thin" viewBox="0 0 32 32">
                    <title>播放</title>
                    <path d="M16 29c7.177 0 13-5.818 13-13s-5.823-13-13-13c-7.177 0-13 5.818-13 13s5.823 13 13 13zM16 30c-7.732 0-14-6.268-14-14s6.268-14 14-14c7.732 0 14 6.268 14 14s-6.268 14-14 14zM12.5 20.186c0 0.189 0.054 0.374 0.155 0.534 0.295 0.467 0.913 0.606 1.379 0.311v0l6.627-4.186c0.126-0.079 0.232-0.186 0.311-0.311 0.295-0.467 0.155-1.085-0.311-1.379v0l-6.627-4.186c-0.16-0.101-0.345-0.155-0.534-0.155-0.552 0-1 0.448-1 1v8.371z"></path>
                </symbol>
                <symbol id="icon_pause_thin" viewBox="0 0 32 32">
                    <title>暂停</title>
                    <path d="M16 29c7.177 0 13-5.818 13-13s-5.823-13-13-13c-7.177 0-13 5.818-13 13s5.823 13 13 13zM16 30c-7.732 0-14-6.268-14-14s6.268-14 14-14c7.732 0 14 6.268 14 14s-6.268 14-14 14zM11 11.995v8.009c0 0.546 0.449 0.995 1.003 0.995h1.494c0.56 0 1.003-0.446 1.003-0.995v-8.009c0-0.546-0.449-0.995-1.003-0.995h-1.494c-0.56 0-1.003 0.446-1.003 0.995zM17.5 11.995v8.009c0 0.546 0.449 0.995 1.003 0.995h1.494c0.56 0 1.003-0.446 1.003-0.995v-8.009c0-0.546-0.449-0.995-1.003-0.995h-1.494c-0.56 0-1.003 0.446-1.003 0.995z"></path>
                </symbol>
                <symbol id="icon_download" viewBox="0 0 32 32">
                    <title>下载</title>
                    <path d="M15 18.978l-9.057-9.057-1.443 1.443 11.545 11.545 11.545-11.545-1.443-1.443-9.146 9.146v-15.567h-2v15.478zM26.5 24.5h2c0 2.241-1.726 4-3.893 4h-17.213c-2.165 0-3.893-1.761-3.893-4h2c0 1.14 0.886 2 1.893 2h17.213c1.010 0 1.893-0.858 1.893-2z"></path>
                </symbol>
            </defs>
        </svg>
        <div class="info_box" id="js_header">
            <div class="info_box__bd">
                <div class="top_bar">
                    <img class="top_bar__img" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000" alt="">
                    <div class="top_bar__bd">
                        <h6 class="top_bar__tit">QQ音乐</h6>
                        <p class="top_bar__desc">打开APP收藏、下载</p>
                    </div>
                    <a class="top_bar__btn js_open_music" style="" data-type="1" href="https://github.com/ahauzq/my-qqmusic">github</a>
                </div>
                <div class="album" id="js_album_info">
                    <div class="album__media js_open_music" data-type="3">
                        <img class="album__cover" :src="data.topinfo.pic_album" :alt="data.topinfo.ListName">
                    </div>
                    <div class="album__bd">
                        <h1 class="album__name js_info_show" :singername="data.topinfo.ListName">{{data.topinfo.ListName}}</h1>
                        <p class="album__desc" v-if="data.day_of_year !=''">第{{data.day_of_year}}天</p>
                        <p class="album__desc" v-if="data.day_of_year ==''">第{{data.date.substring(data.date.length-2,data.date.length)}}周</p>
                        <p class="album__desc">{{data.update_time}} 更新</p>
                    </div>
                </div>
                <div class="opt_box">
                    <a class="btn_play_all js_play_all" href="javascript:;" :class="{hidden:!playAllShow}" @click.once="playAll">播放全部</a>
                    <div class="play_bar js_progress_show" :class="{hidden:playAllShow}">
                        <a id="js_icon_play" href="javascript:;" @click="playSong">
                            <div class="play_bar__aside">
                                <svg class="play_bar__icon icon_svg" style="display:">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="playbaricon" id="js_icon_status"></use>
                                </svg>
                                <svg class="progress" style="display:none">
                                    <circle class="progress__circle" id="js_progress_circle" cx="23" cy="23" r="18" stroke-dasharray="17.634942802960826 113"></circle>
                                </svg>
                            </div>
                        </a>
                        <div class="play_bar__bd">
                            <h2 class="song_name" id="js_current_song">{{currentSong.songname}}</h2>
                        </div>
                        <a class="download js_down_song" href="javascript:;" data-songid="213398874" data-songtype="0">
                            <svg class="download__icon icon_svg">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_download"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <img class="info_box__bg js_img_bg" alt="" :src="data.topinfo.pic_album">
        </div>
        <div class="wrap" id="js_wrapper">
            <div class="main" id="js_scroller">
                <div class="count_box">
                    <div class="count_box__desc">排行榜
                        <span class="count_box__number">共{{data.total_song_num}}首</span>
                    </div>
                </div>
                <ul class="qui_list qui_list--rank">
                    <li class="qui_list__item  js_play_song" :class="{current:index == currentIndex}" v-for="(item,index ) in data.songlist" :key="index" :songid="item.data.songid" :songmid="item.data.songmid" :songtype="item.data.songtype" @click="playSingleSong(index)">
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
                            <!-- <div class="qui_list__more">
                                <i class="qui_list__dot"></i>
                            </div> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <audio ref="audio" data-web-player="1" style="height:0;width:0;display:none" preload src="http://dl.stream.qqmusic.qq.com/C400004Q0PQm2qkYEK.m4a?guid=7446189854&amp;vkey=5589331B5754131D3AFDC16BB4128E80836712C2ED84212D7F8249670CFEEB6381C527EC9FE2C96A0B28579F2F44FC5A4A38BC7EAA2B8C3B&amp;uin=0&amp;fromtag=38"></audio>
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
      data: {
        songlist: [],
        topinfo: {},
        total_song_num: "",
        update_time: "",
        day_of_year: "",
        date: ""
      },
      play: false,
      playAllShow: true,
      currentSong: {},
      currentIndex: NaN,
      mapUrlInfo: {},
      streamurl: "http://dl.stream.qqmusic.qq.com/"
    };
  },
  props: ["id"],
  created() {
    this.getTopListData();
  },
  updated() {
    this.initAlloyTouch();
  },
  computed: {
    playbaricon() {
      if (this.play) {
        return "#icon_pause_thin";
      } else {
        return "#icon_play_thin";
      }
    }
  },
  methods: {
    getTopListData() {
      let url =
        "v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=" +
        this.id;
      axios
        .get(url)
        .then(res => {
          this.data = Object.assign({}, res.data);
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
    },
    //播放或者暂停
    playSong() {
      this.play = !this.play;
      this.play ? this._play() : this._pause();
    },
    //播放全部
    playAll() {
      //隐藏播放全部图标
      this.playAllShow = false;
      //this._play();
      this.play = true;

      let songids = [],
        songtype = [],
        arr = this.data.songlist.slice(0, 20);
      arr.forEach((item, idnex) => {
        songids.push(item.data.songmid);
        songtype.push(item.data.songtype);
      });

      let promise = new Promise((resolve, reject) => {
        this._getSongUrl(songids, songtype, resolve);
      });
      promise.then(res => {
        //todo 需要维护一个播放列表（从而引入一个问题怎么设置 怎么清空）
        this.playSingleSong(0);
      });
      //this._setTask(songids, songtype);
    },
    //播放当前单曲
    playSingleSong(index) {
      this.play = !this.play;

      if (this.currentIndex == index) {
        this.play ? this._play() : this._pause();
        return;
      }
      //隐藏播放全部图标
      this.currentIndex = index;
      this.currentSong = this.data.songlist[index].data;
      this.playAllShow = false;
      //this._setSongUrl(this.currentSong.songmid);
      if (this.mapUrlInfo[this.currentSong.songmid]) {
        this.$refs.audio.src =
          this.streamurl + this.mapUrlInfo[this.currentSong.songmid];
        this._play();
        this.play = true;
      } else {
        let songids = [],
          songtype = [],
          arr = this.data.songlist.slice(
            index,
            index + 20 > this.data.songlist.length + 1
              ? this.data.songlist.length + 1
              : index + 20
          );
        arr.forEach((item, idnex) => {
          songids.push(item.data.songmid);
          songtype.push(item.data.songtype);
        });
        let promise = new Promise((resolve, reject) => {
          this._getSongUrl(songids, songtype, resolve);
        });
        promise.then(() => {
          this.$refs.audio.src =
            this.streamurl + this.mapUrlInfo[this.currentSong.songmid];
          this._play();
          this.play = true;
        });
      }
    },
    _setSongUrl(key) {},
    ///
    _play() {
      this.$refs.audio.play();
    },
    _pause() {
      this.$refs.audio.pause();
    },
    //下发任务
    _setTask(songid, songtype) {
      let paramData = {
        comm: {
          g_tk: 5381,
          uin: 0,
          format: "json",
          inCharset: "utf-8",
          outCharset: "utf-8",
          notice: 0,
          platform: "h5",
          needNewCode: 1
        },
        data_id: {
          module: "track_info.UniformRuleCtrlServer",
          method: "GetTrackInfo",
          param: { ids: songid, types: songtype }
        }
      };
      axios
        .post("cgi-bin/musicu.fcg", paramData)
        .then(res => {
          let songmids = [];
          let songtype = [];
          res.data.data_id.data.tracks.forEach((item, idnex) => {
            songmids.push(item.mid);
            songtype.push(item.type);
          });
          this._getSongUrl(songmids, songtype);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取播放列表
    _getSongUrl(songmids, songtype, resolve) {
      let n = new Date().getUTCMilliseconds(),
        guid = "" + (Math.round(2147483647 * Math.random()) * n) % 1e10;

      let paramData = {
        comm: {
          g_tk: 5381, //未登录情况下是5381
          uin: 0,
          format: "json",
          inCharset: "utf-8",
          outCharset: "utf-8",
          notice: 0,
          platform: "h5",
          needNewCode: 1
        },
        url_mid: {
          module: "vkey.GetVkeyServer",
          method: "CgiGetVkey",
          param: {
            guid: guid,
            songmid: songmids,
            songtype: songtype,
            uin: "0",
            loginflag: 0,
            platform: "23"
          }
        }
      };
      axios
        .post("cgi-bin/musicu.fcg", paramData)
        .then(res => {
          res.data.url_mid.data.midurlinfo.forEach((item, index) => {
            this.mapUrlInfo[item.songmid] = item.purl;
            if (resolve) {
              resolve();
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.hidden {
  display: none !important;
}
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
      .play_bar {
        display: flex;
        align-items: center;
        width: 100%;
        .play_bar__aside {
          position: relative;
        }
        .play_bar__icon {
          display: block;
          width: 46px;
          height: 46px;
          color: #31c27c;
        }
        .icon_svg {
          stroke-width: 0;
          stroke: currentColor;
          fill: currentColor;
        }
        .progress {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 46px;
          height: 46px;
          transform: rotate(-90deg);
          .progress__circle {
            fill: none;
            stroke: #31c27c;
            stroke-width: 2;
          }
        }
        .play_bar__bd {
          display: flex;
          flex: 1 1 auto;
          align-items: center;
        }
        .download {
          display: block;
          padding: 10px;
          margin-right: -10px;
        }
        .download__icon {
          display: block;
          width: 26px;
          height: 26px;
          color: #31c27c;
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
        flex: 0 0 auto;
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
        width: 100%;
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
      &.current {
        .qui_list__txt {
          color: #31c27c;
        }
      }
    }
  }
}
</style>

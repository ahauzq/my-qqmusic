<template>
    <div id="search_wrap" style="">
        <div class="mod_search_bar">
            <div id="inputWrap" class="search_bar_cont">
                <input type="text" placeholder="搜索歌曲、歌单、专辑" v-model.trim="searchInput" @click="selectInput" @keyup.enter="search($event.target.value)">
                <span class="icon icon_search">搜索</span>
                <span class="icon icon_delete" v-if="searchInput!=''" @click="clearInput">删除</span>
            </div>
            <div id="cancelBtn" class="cancel-btn" v-show="showCancelBtn" @click="removeCancelBtn">取消</div>
        </div>
        <div id="hot_keys" class="mod_search_result" v-show="!showHistory && !showSongList">
            <h3 class="result_tit">热门搜索</h3>
            <div class="result_tags">
                <span v-if="special.special_key" :href="special.special_url" class="tag_s tag_hot">{{special.special_key}}</span>
                <span v-for="item in hotkey" :key="item.n" href="" class="tag_s" @click="search(item.k)">{{item.k}}</span>
            </div>
        </div>
        <div id="focus_wrapper" v-show="showHistory && !showSongList">
            <ul class="mod_search_record">
                <li v-for="(item,index) in searchInputArr" :key="index" @click="search(item)">
                    <span class="icon iocn_clock"></span>
                    <span class="js_keyword record_con">{{item}}</span>
                    <span class="js_del_record icon icon_close" @click.stop.prevent="deleteHistory(index)"></span>
                </li>
            </ul>
            <p v-if="searchInputArr.length>0" class="record_handle">
                <a @click="deleteHistoryAll">清除搜索记录</a>
            </p>
        </div>
        <div v-if="showSongList" id="search_result" class="mod_search_content">
            <ul class="qui_list qui_list--rank">
                <li class="qui_list__item  js_play_song" v-for="(item,index ) in songList" :key="index" :songid="item.songid" :songmid="item.songmid" :songtype="item.songtype">
                    <div class="qui_list__order">
                        <i class="icon icon-default"></i>
                    </div>
                    <div class="qui_list__bd">
                        <div class="qui_list__box">
                            <h3 class="qui_list__tit">
                                <span class="qui_list__txt">{{item.songname}}</span>
                            </h3>
                            <p class="qui_list__desc">
                                <span class="qui_list__txt">
                                    <template v-for="(v,k) in item.singer">{{v.name}}
                                        <template v-if="k<item.singer.length-1">/</template>
                                    </template>
                                </span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="loading" v-show="loading">
                <img src="../../static/svg/ball-triangle.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  components: {},
  data() {
    return {
      searchInput: "",
      showCancelBtn: false,
      showHistory: false, //是否显示历史记录  !showHistory//显示hotkeys
      showSongList: false,
      loading: true,
      songList: [], //歌词列表
      searchInputArr: [], //历史记录
      special: {
        special_url: "",
        special_key: ""
      },
      hotkey: [],
      pageNo: 1
    };
  },
  created() {
    this.$store.dispatch("addLoading");
    this.getHotKeyData();
  },
  mounted() {
    this.$store.dispatch("removeLoading");
    window.addEventListener("scroll", this._.debounce(this.handleScroll, 1000));
  },
  methods: {
    handleScroll(e) {
      let scrollHeight, scrollTop, innerHeight;
      scrollTop = e.target.scrollingElement.scrollTop;
      scrollHeight = e.target.scrollingElement.scrollHeight;
      innerHeight = window.innerHeight;
      if (scrollHeight - innerHeight - scrollTop < 10) {
        this.pageNo += 1;
        this.loading = true;
        this.getSearchData(this.searchInput, this.pageNo);
      }
    },
    //清除input框输入
    clearInput() {
      this.searchInput = "";
    },
    //选中输入框  展示取消按钮
    selectInput() {
      this.showCancelBtn = true;
      //显示历史搜索条件
      this.showSearchHistory();
    },
    //隐藏取消按钮
    removeCancelBtn() {
      this.showCancelBtn = this.showHistory = this.showSongList = false;
    },
    getHotKeyData() {
      let url =
        "splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1";
      axios
        .get(url)
        .then(res => {
          if (res.data && res.data.data) {
            this.special.special_key = res.data.data.special_key;
            this.special.special_url = res.data.data.special_url;
            this.hotkey = Object.assign([], res.data.data.hotkey.splice(0, 9));
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSearchData(key, pageNo) {
      let url =
        "soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&remoteplace=txt.mqq.all&w=" +
        key +
        "&p=" +
        pageNo;
      axios
        .get(url)
        .then(res => {
          if (res.data.data.song.list.length > 0) {
            this.songList.push.apply(this.songList, res.data.data.song.list);
          } else {
            //显示已加载全部，控制当前滚动不在进入此方法
          }
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    //搜索
    search(key) {
      key = key.trim();
      if (!key) {
        return;
      }
      this.showSongList = true;
      this.songList = []; //清除当前缓存的列表
      this.getSearchData(key, 1);
      let arr = [];
      if (localStorage.searchInputArr) {
        arr = JSON.parse(localStorage.searchInputArr);
      }
      //判断当前输入的搜索单词是否存在 如果存在则删除原来  增加新的
      arr = arr.filter((item, index, array) => {
        return item != key;
      });
      arr.push(key);
      if (arr.length > 7) {
        arr = arr.slice(arr.length - 7, arr.length);
      }
      localStorage.searchInputArr = JSON.stringify(arr);
    },
    //展示历史搜索条件
    showSearchHistory() {
      if (localStorage.searchInputArr) {
        let arr = [];
        arr = JSON.parse(localStorage.searchInputArr);
        this.showHistory = true;
        this.searchInputArr = arr;
      }
    },
    //清空单条历史搜索记录
    deleteHistory(index) {
      if (localStorage.searchInputArr) {
        let arr = [];
        arr = JSON.parse(localStorage.searchInputArr);
        arr.splice(index, 1);
        localStorage.searchInputArr = JSON.stringify(arr);
        this.searchInputArr = arr;
      }
    },
    //清空所有历史搜索记录
    deleteHistoryAll() {
      localStorage.searchInputArr = "";
      this.searchInputArr = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#search_wrap {
  position: relative;
  z-index: 0;
  color: #555;
}
.mod_search_bar {
  display: flex;
  padding: 10px;
  background: #f4f4f4;
}
.search_bar_cont {
  flex: 1 1 auto;
  position: relative;
  padding: 8px 12px 8px 35px;
  background: #fff;
  input {
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.3);
    border: none;
  }
  .icon_search {
    position: absolute;
    top: 9px;
    left: 10px;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px;
  }
  .icon_delete {
    position: absolute;
    top: 9px;
    right: 12px;
    width: 18px;
    height: 18px;
    background: #b1b1b1;
    text-indent: -9999px;
    border-radius: 99px;
    &::before {
      width: 10px;
      height: 2px;
      margin-left: -5px;
      margin-top: -1px;
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 8px;
      background: #fff;
      transform: rotate(45deg);
    }
    &::after {
      width: 2px;
      height: 10px;
      margin-left: -1px;
      margin-top: -5px;
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 8px;
      background: #fff;
      transform: rotate(45deg);
    }
  }
}
.cancel-btn {
  flex: 0 0 auto;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
}
.mod_search_result {
  background: #fff;
  padding: 15px 15px 10px 15px;
  .result_tit {
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 8px;
  }
  .tag_s {
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
  }
  .tag_hot {
    color: #fc4524;
    border-color: #fc4524;
  }
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
#focus_wrapper {
  background: #fff;
  .mod_search_record {
    li {
      display: flex;
      align-items: center;
      border-top: 1px solid #ededed;
      padding: 0 15px;
      .iocn_clock {
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        background-image: url("../assets/clock_ic.png");
        background-size: 100%;
      }
      .js_keyword {
        flex: 1 1 auto;
        height: 44px;
        line-height: 44px;
        padding: 0 15px;
        font-size: 1.17rem;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .icon_close {
        position: relative;
        width: 20px;
        height: 20px;
        flex: 0 0 auto;
        &:before,
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          background: rgba(0, 0, 0, 0.6);
          transform: rotate(45deg);
        }
        &:before {
          width: 17px;
          height: 1px;
          top: 8px;
        }
        &:after {
          width: 1px;
          height: 17px;
          left: 8px;
        }
      }
    }
  }
  .record_handle {
    text-align: center;
    height: 44px;
    line-height: 44px;
    a {
      display: inline-block;
      line-height: 44px;
      color: #47c88a;
      font-size: 12px;
    }
  }
}
#search_result {
  background: #fff;
  .qui_list {
    overflow: hidden;
    .qui_list__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &:after {
        content: "";
        position: absolute;
        height: 1px;
        top: 0;
        left: 0;
        right: 0;
        background: #e5e5e5;
      }
      .qui_list__order {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        margin-right: -16px;
        flex: 0 0 auto;
        .icon-default {
          width: 22px;
          height: 20px;
          background-image: url("../assets/search_sprite.png");
          background-repeat: no-repeat;
          background-size: 22px 30px;
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

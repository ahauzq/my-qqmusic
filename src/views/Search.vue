<template>
    <div id="search_wrap" style="">
        <div class="mod_search_bar">
            <div id="inputWrap" class="search_bar_cont">
                <input type="text" placeholder="搜索歌曲、歌单、专辑" v-model.trim="searchInput" @click="selectInput" @keyup.enter="search">
                <span class="icon icon_search">搜索</span>
                <span class="icon icon_delete" v-if="searchInput!=''" @click="clearInput">删除</span>
            </div>
            <div id="cancelBtn" class="cancel-btn" v-show="showCancelBtn" @click="removeCancelBtn">取消</div>
        </div>
        <div id="focus_wrapper">
            <ul class="mod_search_record">
                <li>
                    <span class="icon iocn_clock"></span>
                    <span class="js_keyword record_con"></span>
                    <span class="js_del_record icon icon_close"></span>
                </li>
            </ul>
            <p>
                清除搜索记录
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      searchInput: "",
      showCancelBtn: false
    };
  },
  created() {
    this.$store.dispatch("addLoading");
  },
  mounted() {
    this.$store.dispatch("removeLoading");
  },
  methods: {
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
      this.showCancelBtn = false;
    },
    //搜索
    search() {
      if (!this.searchInput) {
        return;
      }
      let arr = [];
      if (localStorage.searchInputArr) {
        arr = JSON.parse(localStorage.searchInputArr);
      }
      //判断当前输入的搜索单词是否存在 如果存在则删除原来  增加新的
      arr = arr.filter((item, index, array) => {
        return item != this.searchInput;
      });
      arr.push(this.searchInput);
      if (arr.length > 7) {
        arr = arr.slice(arr.length - 7, arr.length);
      }

      localStorage.searchInputArr = JSON.stringify(arr);
    },
    //展示历史搜索条件
    showSearchHistory() {}
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
  padding: 6px 12px 6px 35px;
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
#focus_wrapper {
  .mod_search_record {
    li {
      .iocn_clock {
      }
      .js_keyword {
      }
      .icon_close {
      }
    }
  }
}
</style>

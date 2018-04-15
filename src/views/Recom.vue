<template>
    <div id="recom_wrap" style="">
        <mod-carousel></mod-carousel>
        <div class="mod_twocol_list mod_twocol_list_normal">
            <h2 class="list_title">电台</h2>
            <radio-list></radio-list>
        </div>
        <div class="mod_twocol_list mod_twocol_list_special">
            <h2 class="list_title">热门歌单</h2>
            <ul id="songlist_wrapper" class="list_container">
            </ul>
            <p class="list_more">
                <a class="tip" href="javascript:;">去客户端发现更多好音乐 &gt;</a>
            </p>
        </div>
        <mod-footer></mod-footer>
    </div>
</template>

<script>
import ModCarousel from "../components/ModCarousel";
import RadioList from "../components/RadioList";
import ModFooter from "../components/ModFooter";

export default {
  name: "Recom",
  components: {
    ModCarousel,
    RadioList,
    ModFooter
  },
  data() {
    return {};
  },
  methods: {
    getRecom() {
      this.$store.dispatch("getRecomData");
    }
  },
  created() {
    this.getRecom();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mod_twocol_list {
  margin-left: 10px;
  margin-right: 10px;
}
.list_title {
  font-size: 16px;
  color: #000;
  margin-bottom: 11px;
  font-weight: normal;
}
.list_more {
  height: 40px;
  line-height: 40px;
  text-align: center;
  .tip {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>

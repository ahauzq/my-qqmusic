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
            <list-more></list-more>
        </div>
        <mod-footer></mod-footer>
    </div>
</template>

<script>
import ModCarousel from "../components/ModCarousel";
import RadioList from "../components/RadioList";
import ModFooter from "../components/ModFooter";
import ListMore from "../components/ListMore";

export default {
  name: "Recom",
  components: {
    ModCarousel,
    RadioList,
    ModFooter,
    ListMore
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
</style>

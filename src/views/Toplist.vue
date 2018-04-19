<template>
    <div id="toplist_wrap" style="mod_topic current_page loaded">
        <top-list-model></top-list-model>
        <!-- <list-more></list-more> -->
    </div>
</template>

<script>
import TopListModel from "../components/TopListModel";
import ListMore from "../components/ListMore";
export default {
  name: "Toplist",
  components: {
    TopListModel,
    ListMore
  },
  data() {
    return {};
  },
  methods: {
    getTopList() {
      this.$store.dispatch("getTopListData");
    }
  },
  created() {
    this.$store.dispatch("addLoading");
    this.getTopList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#toplist_wrap {
  position: relative;
  z-index: 0;
  margin: 10px;
}
</style>

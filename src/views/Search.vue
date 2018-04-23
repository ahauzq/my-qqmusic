<template>
    <div id="search_wrap" style="">
        <div class="mod_search_bar">
            <div id="inputWrap" class="search_bar_cont"></div>
            <div id="cancelBtn" class="cancel-btn hidden">取消</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("addLoading");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search_wrap {
  position: relative;
  z-index: 0;
}
</style>

<template>
    <div id="search_wrap" style="">
        搜索
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

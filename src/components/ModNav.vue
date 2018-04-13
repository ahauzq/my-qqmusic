<template>
    <nav class="mod_nav">
        <router-link :to="{name: 'Recom'}">推荐</router-link>
        <router-link :to="{name: 'Toplist'}">排行榜</router-link>
        <router-link :to="{name: 'Search'}">搜索</router-link>
    </nav>
</template>

<script>
export default {
  name: "ModNav",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.mod_nav {
  display: flex;
  a {
    flex: 1 1 auto;
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    &.router-link-exact-active.router-link-active {
      color: #31c27c;
      &:after {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        content: "";
        background: #31c27c;
      }
    }
  }
}
</style>

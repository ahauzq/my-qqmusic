<template>
    <div class="pages_view">
        <!--这里放头部组件-->
        <mod-header></mod-header>
        <mod-nav></mod-nav>
        <div id="content_wrapper">
            <div class="loading" v-if="pageLoading">
                <img src="../../static/svg/ball-triangle.svg" alt="">
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ModHeader from "../components/ModHeader";
import ModNav from "../components/ModNav";
import { mapState } from "vuex";

export default {
  name: "PagesView",
  components: {
    ModHeader,
    ModNav
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ pageLoading: state => state.loading.loading })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pages_view {
  background: #f4f4f4;
}
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 1;
}
</style>

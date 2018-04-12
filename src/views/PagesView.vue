<template>
      <div class="pages_view">
          <!--这里放头部组件-->
          <mod-header></mod-header>
          <mod-nav></mod-nav>
          <div id="content_wrapper">
              <router-view></router-view>
          </div>
      </div>
</template>

<script>
import ModHeader from '../components/ModHeader'
import ModNav from '../components/ModNav'

export default {
  name: 'PagesView',
  components:{
    ModHeader,ModNav
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

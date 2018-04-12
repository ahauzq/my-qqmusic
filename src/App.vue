<template>
  <div id="app">
    <router-view class="view"></router-view>
    <router-view class="view" name="subject"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    
    html,body,ul, li, a, h2 {
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
</style>

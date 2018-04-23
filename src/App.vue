<template>
    <div id="app">
        <router-view class="view"></router-view>
        <router-view class="view" name="subject"></router-view>
    </div>
</template>

<script>
import "../src/assets/scss/common.scss";
export default {
  name: "App"
};
</script>

<style>

</style>

<template>
    <header class="mod_header">
        <i class="music_logo">QQ音乐</i>
        <a href="javascript:;" class="btn_download">下载APP</a>
    </header>
</template>

<script>
export default {
  name: "ModHeader",
  data() {
    return {};
  }
};
</script>

// lang="scss" 配置vue文件内的style包含的scss代码 webpack配置项目里面加上sass/css/style的loder即可使用
<style lang="scss" scoped>
.mod_header {
  position: relative;
  height: 44px;
  background: #31c27c;
  .music_logo {
    float: left;
    display: block;
    width: 90px;
    height: 25px;
    margin: 9px 0 0 10px;
    background-image: url(../assets/logo.png);
    background-size: cover;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }
  .btn_download {
    position: absolute;
    display: inline-block;
    right: 10px;
    top: 8px;
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
    border-radius: 99px;
    font-size: 14px;
    background: #149c5a;
    color: #fff;
  }
}
</style>

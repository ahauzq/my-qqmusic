<template>
    <footer class="mod_footer">
        <div class="version_tab">
            <a data-tjname="go_pc" href="http://y.qq.com/?ADTAG=myqq&amp;nomobile=1#type=index">查看电脑版网页</a>
        </div>
        <div class="footer_logo">vue-QQ音乐</div>
        <p class="copyright">Copyright © 1998 -
            <span id="js_cpright_year">2018</span> ahauzq</p>
        <p id="js_iosinfo" class="copyright" style="">github：https://github.com/ahauzq QQ：273053856</p>
    </footer>
</template>

<script>
export default {
  name: "ModFooter",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.mod_footer {
  padding: 15px 0;
  .version_tab {
    text-align: center;
    margin-bottom: 16px;
    a {
      position: relative;
      display: inline-block;
      padding: 0 15px;
      font-size: 14px;
      height: 14px;
      line-height: 14px;
      color: #000;
    }
  }
  .footer_logo {
    display: block;
    width: 82px;
    height: 24px;
    margin: 0 auto 10px;
    background-image: url(../assets/logo_footer.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -9999px;
  }
  .copyright {
    font-size: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>

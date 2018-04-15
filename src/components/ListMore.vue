<template>
    <p class="list_more">
        <a class="tip" href="javascript:;">去客户端发现更多好音乐 &gt;</a>
    </p>
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
.list_more {
  height: 40px;
  line-height: 40px;
  text-align: center;
  .tip {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>

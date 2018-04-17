<template>
    <ul>
        <li v-for="item in topList" :key="item.id" class="topic_item" :id="item.id" data-type="0" @click="toTopDetail">
            <div class="topic_main">
                <a href="javascript:;" class="topic_media">
                    <img :src="item.picUrl">
                    <span class="listen_count">
                        <i class="icon icon_listen"></i>{{item.listenCount>10000?((item.listenCount/10000).toFixed(1)+"万"):item.listenCount}}</span>
                </a>
                <div class="topic_info">
                    <div class="topic_cont">
                        <h3 class="topic_tit">{{item.topTitle}}</h3>
                        <p v-for="(itemTitle, index) in item.songList" :key="index">{{index+1}}
                            <span class="text_name">{{itemTitle.songname}}</span>- {{itemTitle.singername}}</p>
                    </div>
                    <i class="topic_arrow"></i>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TopListModel",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      topList: state => state.toplist.topList
    })
  },
  methods: {
    toTopDetail(event) {
      console.log(event);
      //this.$router.push({name: "TopDetail",query: { id: event.currentTarget.id }}); //结果http://localhost:9090/#/topdetail?id=4
      //或者有path的情况param参数不生效  //this.$router.push({ path: "topdetail", query: { id: event.currentTarget.id } });

      //路由传递props
      this.$router.push({
        name: "TopDetail",
        params: { id: event.currentTarget.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.topic_item {
  margin-bottom: 10px;
  overflow: hidden;
  .topic_main {
    background: #fff;
    display: flex;
  }
  .topic_media {
    position: relative;
    width: 100px;
    height: 100px;
    display: block;
    img {
      display: block;
      width: 100px;
      height: 100px;
    }
    .listen_count {
      position: absolute;
      left: 5px;
      bottom: 7px;
      line-height: 12px;
      color: #fff;
      opacity: 0.6;
      font-size: 9px;
      z-index: 10;
    }
    .icon_listen {
      display: block;
      float: left;
      width: 10px;
      height: 10px;
      background-position: 0 -50px;
      margin-right: 3px;
      //background-image: url(img/list_sprite.png?max_age=19830212&d=20151105145423);
      background-repeat: no-repeat;
      background-size: 24px 60px;
      z-index: 10;
    }
  }
  .topic_info {
    position: relative;
    flex: 1 1 auto;
    overflow: hidden;
    .topic_cont {
      margin: 0 13px 0 12px;
    }
    .topic_tit {
      font-size: 16px;
      color: #000;
      font-weight: normal;
      margin-bottom: 5px;
    }
    h3 {
      height: 24px;
    }
    p {
      height: 21px;
      margin: 0;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .text_name {
        color: #000;
        margin-left: 8px;
        margin-right: 5px;
      }
    }
    .topic_arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -4px;
      width: 6px;
      height: 6px;
      border-right: 1px solid #b2b2b2;
      border-bottom: 1px solid #b2b2b2;
      transform: rotate(-45deg);
    }
  }
}
</style>

<template>
    <div class="mod_carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="item in slider" :key="item.id" :item="item" class="swiper-slide">
                    <img :src="item.picUrl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

let mySwiper;
export default {
  name: "ModCarousel",
  data() {
    return {};
  },
  mounted() {
    this.lunbo();
  },
  updated() {
    this.lunbo();
  },
  computed: {
    ...mapState({
      slider: state => state.recom.slider
    })
  },
  methods: {
    lunbo() {
      mySwiper = new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 165px;
  //   &:nth-child(3n + 1) {
  //     background-color: yellow;
  //   }
  //   &:nth-child(3n + 2) {
  //     background-color: blue;
  //   }
  //   &:nth-child(3n + 3) {
  //     background-color: green;
  //   }
  img {
    width: 100%;
    height: 100%;
  }
}
.mod_carousel {
  position: relative;
}
</style>

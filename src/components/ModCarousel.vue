<template>
      <div class="mod_carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">slider1</div>
              <div class="swiper-slide">slider2</div>
              <div class="swiper-slide">slider3</div>
            </div>
            <div class="swiper-pagination"></div>           
          </div>          
      </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

let mySwiper  
export default {
  name: 'ModCarousel',
  data () {
    return {  
  
    } 
  },
  mounted () {  
    this.lunbo();  
  },
  methods: {
    lunbo(){
        mySwiper = new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          pagination: {
            el: '.swiper-pagination',
            clickable :true,            
          },
          loop: true,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }
        })
    }
  }
}
</script>


<style lang="scss" scoped>
   .swiper-slide{
      height: 200px;
     &:nth-child(3n+1){
        background-color: yellow;
     }
     &:nth-child(3n+2){
        background-color: blue;
     }
     &:nth-child(3n+3){
        background-color: green;
     }
   }
   .mod_carousel{
     position: relative;
   } 
</style>

<template>
    <div id="recom_wrap" style="">
        <mod-carousel></mod-carousel>
    </div>
</template>

<script>
import ModCarousel from "../components/ModCarousel";

export default {
  name: "Recom",
  components: {
    ModCarousel
  },
  data() {
    return {};
  },
  methods: {
    getRecom() {
      this.$store.dispatch("getRecomData");
    }
  },
  created() {
    this.getRecom();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

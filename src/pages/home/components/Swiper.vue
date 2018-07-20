<template>
  <div class="swiper">
    <slider>
      <div v-for="item in recommends" :key="item.id">
        <a :href="item.picUrl">
          <img :src="item.picUrl"/>
        </a>
      </div>
    </slider>
  </div>
</template>

<script>
import Slider from '../../common/slider.vue'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      recommends: [{
        picUrl: 'https://eimg.smzdm.com/201807/20/5b5141eb0d7bf5644.png',
        id: '001'
      }, {
        picUrl: 'https://eimg.smzdm.com/201807/20/5b514d29afe112724.jpg',
        id: '002'
      }, {
        picUrl: ' https://eimg.smzdm.com/201807/19/5b5035ce5ca8c5086.png',
        id: '003'
      }
      ]
    }
  },
  mounted () {
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">

</style>

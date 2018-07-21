<template>
  <div >
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.getCity}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapGetters(['getCity'])
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
  @import '~styles/varibles.styl'
  .header
    display:flex
    justify-content: center
    align-items: center
    background:$bgColor
    color:#ffffff
    .header-left
      width:.64rem
      padding-left:.1rem
      margin-left:.1rem
    .header-input
      flex: 1
      height: .64rem
      background-color:#fff
      margin:5px 5px 5px 0
      color:#ccc
      border-radius:5px
      line-height:.64rem
      padding-left:.1rem
    .header-right
      padding-right:.1rem
      color #fff
      .arrow-icon
        font-size:.2rem

</style>

<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  mounted () {
    // console.error(JSON.stringify(this.list, null, '\t'))
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 35%
    .item-info
      line-height: 1.54rem
      padding-left .2rem
      .item-title
        line-height: .84rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        margin-top -.2rem
        color: #ccc
        padding-bottom .2rem
        ellipsis()
</style>

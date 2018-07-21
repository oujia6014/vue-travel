<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    display flex
    .item-img
      width 1.5rem
      height 1.5rem
      padding .1rem
    .item-info
      padding .3rem .3rem .3rem .1rem
      .item-title
        font-size .3rem
      .item-desc
        font-size .2rem
        padding-top  .1rem
        color: #ccc
      .item-button
        color: #ff9300
        background-color white
        border 1px solid
        padding 1px 5px 1px 5px
        font-size .1rem
        margin-top  .1rem
</style>

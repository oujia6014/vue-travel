<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'scroll',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    // 自动轮播
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 间隔
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth () { // 控件初始化宽度
      this.children = this.$refs.sliderGroup.children // 获取子元素
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        this.addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.scroll = new Bscroll(this.$refs.slider, {
        scrollX: true,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        snapSpeed: 400,
        bounce: false,
        stopPropagation: true,
        click: true
      })
    },
    addClass (el, className) {
      if (this.hasClass(el, className)) {
        return
      }
      let newClass = el.className.split(' ')
      newClass.push(className)
      el.className = newClass.join(' ')
    },
    hasClass (el, className) {
      let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
      return reg.test(el.className)
    }
  }
}
</script>

<style lang="stylus" type="text/stylus">
  @import '~styles/varibles.styl'
  .slider
    min-height: 1px
    position: relative;
    .slider-group
      position :relative
      overflow :hidden
      white-space :nowrap
      .slider-item
        float :left
        overflow: hidden
        box-sizing: border-box
        text-align: center
        a
          display :block
          width :100%
          overflow :hidden
          text-decoration :node
        img
          display: block
          width: 100%
  .dots
    position :absolute
    right :0
    left :0
    bottom: 12px
    text-align: center
</style>

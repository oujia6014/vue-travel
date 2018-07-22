## Build Setup

``` bash
# 安装配置包
npm install

# 启动开发环境
npm run dev

# 打包
npm run build

```

## 练习笔记
1. 禁用缩放
```
 <mete content="...,  minimun-scale=1.0, maximum-scale=1.0, er-scalable=no">
 ```
2. 重置样式及边框1px问题
```
引入reset.css  border.css 
```

3.解决移动端点击延迟300ms问题
```
sudo  npm install fastclick --s
 
-> main.js 
fastClick.attach(document.body) 
``` 

4.webpack配置import相对路径别名

```
 build-> webpack.base.config.js-> resolv:{ alias:{ '别名'：resolve(‘路径’) }}
```
 
5. 轮播图控件
```
 sudo  npm install vue-awesome-swiper --save
 
 -> main.js
 Vue.use(VueAwesomeSwiper)
 ```
 
6. webpack配置api代理
```
config-> index -> dev -> proxyTable:{ '/api :{target:'http://localhost:8080' },pathRewrite:{ '^/api':'/static/mock} }
```

7. better-scroll页面滚动插件功能强大
```
使用 
-> template
<div ref = 'scroll'>
    <div></div>
</div>

-> js
mounte d(){ 
    this.scroll = new Bscroll ( this,$refs.scroll ) 
    this.scroll.srollToElement('元素名','动画时间 300') //跳转到指定动画
}
```

8. 组件传值 props
```
-> 父组件-> template
<子组件名 :propsName='abc'><子组件名>

-> js
import 子组件 from '...'
data () { abc:1 }
components:{子组件 }

-> 子组件-> template
<div>{{abc}}</div>

-> js
props:{
    abc:Number // 填传值过来的数据类型
}
props后可以当data()的属性来引用用
```

9. 组件传值 `$emit` `$on` 观察者模式 跨组件传值使用这个模式
```
-> 发布者
handel (value) {
    this.$emit('change', value)
}
-> 订阅者
<div @change="handleChange"></div>
-> js
methdos:{
    handleChange(value) {
        console.error('传入的值->' + value)
    }
}
```

10. vuex的原理
```
修改state数据需要下面的步骤
组件调用 ( dispatch ) actions异步调用 ( commit ) mutations 然后才能修改 ( mutate ) state

state必须通过mutations修改

vuex是一个单向数据的改变流程

state -> Vue组件 -> actions -> mutaions -> state. -> 修改组件上的值
```

11. vuex注册
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

state { count:1 }
getters { getCount: state => state.city }

mutations { [ADD_COUNT] ( state, num ) { 
    state.count = num
}
mutations { addCount ( context, num ) { 
    context.commit([ADD_COUNT],num)
}

export default new Vuex.Store({
  state: { },//当key=value的时候可以省略:号
  getters: { },
  actions: { },
  mutations: { }
})


->main.js
import stroe form '...'
new Vue({
    ...
    stroe
})
```

12. vuex在组件上的使用
```
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
computed: { //将satate 和getters放在computed计算属性中
 	...mapState ({['count']) ,
    ...maoGetter (['getCount']) 
},  
methods: {  
    ...mapMutations (['ADD_COUNT'])，
    ...mapActions (['addCount'])，
}, //将mutaions放在methods 函数挂载中

引入后可以当data()的属性来引用,使用前需要加this来指向
```
13. keep-alive 的作用
```
防止返回重新渲染组件
<keep-alive> 
    <router-view ></router-view> 
</keep-alive>

//如果需要重新加载
activated( ){ } 生命周期 页面重新显示的时候执行
exclude="Detail" 选择不缓存这个组件
```
14. vue-router 使用笔记
```
声明式 html: <router-link :to="/...">
编程式 js: this.$router.push ( "/..." ) 

动态路由 /:id
声明: { path: '/detail/:id',  name: 'Detail',  component: Detail }
使用: this.$route.params.id

跳转后将页面xy值设为0 
scrollBehavior ( to, from, savedPodstion ) { 
    return { x:0,y:0 } 
}

```


15. Vue组件中使用全局监听处理方法
```
 //页面显示就注册监听事件
activated () { window.addEventListener (' scroll' , handel) }}

//页面隐藏就取消事件监听
deactivated () { window,removeEventListener( 'scroll',handel ) 
```

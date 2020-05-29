<template>
  <v-app>
    <v-card>
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
        id="target"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <div>
          <img src="@/assets/img/wlogo.png" alt="西窗游戏" />
        </div>
        <!-- <v-app-bar-nav>
          <img src="@/assets/img/wlogo.png" alt="">
        </v-app-bar-nav> -->
        <v-toolbar-title>西窗游戏 | 专注 专业 专有 </v-toolbar-title>

        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/">首页</v-tab>
            <v-tab to="/services">服务</v-tab>
            <v-tab to="/profolios">技术</v-tab>
            <!-- <v-tab to="/team">团队</v-tab> -->
            <v-tab to="/cases">案例</v-tab>
            <v-tab to="/cooperation">合作</v-tab>
            <v-tab to="/contact">联系</v-tab>
            <v-tab to="/news">资讯</v-tab>
          </v-tabs>
          <div class="ui-telphone fn-left">
            <div class="tel-bg"></div>
            <i class="fn-left"></i>
            <span class="fn-left"></span>
          </div>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        height='100%'
      >
        <!-- <v-container style="height: 1000px;"> -->
        <v-sheet id="" color="#fff" height="215"> </v-sheet>
        <!-- 合作详情 -->

        <nuxt />
        <div>
          <common></common>
        </div>

        <!-- </v-container> -->
      </v-sheet>
    </v-card>
    <!-- 客服浮窗 -->
    <ul class="fdright_nav" style="display: block;">
      <li>
        <a
          href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
          class="fdright_nav_qq"
          rel="nofollow"
          target="_blank"
          >QQ在线</a
        >
      </li>

      <li>
        <a href="javascript:void(0)" class="fdright_nav_tel">4000865060</a>
      </li>

      <li class="fdright_nav_wx">
        <img src="@/assets/img/footer_wx1.png" alt="关注微信" />
      </li>
      <li id="to-top" class="fdright_nav_top" @click="backTop()"></li>
    </ul>
    <v-bottom-navigation color="primary" horizontal grow fixed>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/">
            <span>Home</span>
            <v-icon>mdi-cards-spade</v-icon>
          </v-btn>
        </template>
        <span>首页</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/services">
            <span>Services</span>
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
        </template>
        <span>服务</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/profolios">
            <span>Profolios</span>
            <!-- <v-icon>mdi-cards-diamond</v-icon> -->
            <v-icon>mdi-cards-club</v-icon>
          </v-btn>
        </template>
        <span>技术</span>
      </v-tooltip>

      <!-- <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/contact">
            <span>Team</span>
            <v-icon>mdi-cards-club</v-icon>
          </v-btn>
        </template>
        <span>团队</span>
      </v-tooltip> -->

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/cases">
            <span>Case</span>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </template>
        <span>案例</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/cooperation">
            <span>Cooperation</span>
            <v-icon>mdi-handshake</v-icon>
          </v-btn>
        </template>
        <span>
          合作
        </span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/contact">
            <span>Contact</span>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </template>
        <span>联系</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn target="_blank" v-on="on" to="/news">
            <span>News</span>
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
        </template>
        <span>资讯</span>
      </v-tooltip>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import common from '~/components/common.vue'
export default {
  components: {
    common
  },
  data() {
    return {
      activeBtn: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showbtn)
  },
  methods: {
    // 显示回到顶部按钮
    showbtn() {
      let topBtn = document.getElementById('to-top')
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      let browserHeight = window.outerHeight
      // console.log('scrollTop',scrollTop ,'browserHeight',browserHeight)
      if (scrollTop > 300) {
        topBtn.style.display = 'block'
      } else {
        topBtn.style.display = 'none'
      }
    },
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backTop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>
<style scoped>
/* #target{
  position: sticky;
  top: 0;
  z-index: 999;
} 吸顶效果 */
.ui-telphone {
  position: relative;
  width: 245px;
  height: 36px;
  border-radius: 18px;
  margin-left: 0px;
  margin-top: 11px;
  margin-bottom: 30px;
}
.tel-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  border-radius: 18px;
  background: #666;
  z-index: -1;
  padding-top: 10px;
}
.ui-telphone > i {
  display: block;
  background: url('../assets/img/tel.png') no-repeat;
  width: 28px;
  height: 28px;
  margin: 3px 10px 0 7px;
}
.ui-telphone > span {
  display: block;
  background: url('../assets/img/tel_number.png') no-repeat;
  width: 145px;
  height: 26px;
  margin-top: 5px;
}
.fn-left {
  float: left;
}
.fn-left {
  display: block;
}
img {
  max-width: 150px;
  /* height: 40px; */
  margin: 5px 10px;
}
/* 客服浮窗 */
.fdright_nav {
  position: fixed;
  right: 0px;
  top: 50%;
  margin-top: -138px;
  z-index: 9;
}
ul {
  display: block;
  list-style-type: disc;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.fdright_nav li {
  width: 45px;
  height: 45px;
  line-height: 45px;
  position: relative;
  margin-bottom: 1px;
  color: #fff;
  font-size: 14px;
  color: #fff;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.fdright_nav li .fdright_nav_qq {
  background-image: url(../assets/img/kefu_qq.png);
}
a {
  color: #666666;
  text-decoration: none;
}
.fdright_nav li a {
  display: block;
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 140px;
  background-color: #e20000;
  color: #fff;
  padding-left: 45px;
  background-position: left top;
  background-repeat: no-repeat;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}
.fdright_nav li a:hover {
  left: -200%;
  background-color: #444;
}
.fdright_nav li .fdright_nav_tel {
  background-image: url(../assets/img/kefu_tel.png);
}
.fdright_nav li.fdright_nav_wx {
  background: #e20000 url(../assets/img/kefu_wx.png) no-repeat;
}
.fdright_nav li img {
  display: none;
  position: absolute;
  right: 45px;
  top: -50px;
  width: 150px;
  height: 150px;
  border: none;
  vertical-align: middle;
}
.fdright_nav li:hover img {
  display: block;
}
.fdright_nav li.fdright_nav_top {
  background: #4e4e4e url(../assets/img/kefu_top.png) no-repeat;
  cursor: pointer;
}
</style>

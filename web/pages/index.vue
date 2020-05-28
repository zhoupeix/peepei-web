<template>
  <v-app dark>
    <!-- 轮播图 -->
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.download_url"
      ></v-carousel-item>
    </v-carousel>

    <v-sheet color="white" height="300" align="center" justify="center">
      <div id="about" class=" display-3 mt-4 ">服务</div>
      <p class="mb-9 mt-2" style="color:#757575">
        三大棋牌类游戏开发方案 ，为您解决运营难题
      </p>
      <div class="button ">
        <nuxt-link class="btn1" :to="{path:'/services'}"></nuxt-link> 
        <nuxt-link class="btn2" :to="{path:'/services'}"></nuxt-link> 
        <nuxt-link class="btn2" :to="{path:'/services'}"></nuxt-link> 
        <!-- <a class="btn2" href="services"></a>
        <a class="btn3" href="services"></a> -->
      </div>
    </v-sheet>

    <v-sheet color="#fff" height="650" align="center" justify="center">
      <v-container>
        <div class="ui-gamelist">
          <div id="about" class=" display-3 ">优势</div>
          <p class="mb-3 mt-2" style="color:#757575">六大优势领先行业</p>
          <div class="icon-gamelist-content">
            <ul id="game-list">
              <li class="ui-game-9" v-for="(item, i) in iconUrls" :key="i">
                <img :src="item.imgUrl" alt="" />
                <p style="width:150px !important">{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet id="profolios" color="#fff" height="550">
      <div>
        <div align="center">
          <div id="about" class="display-3 mt-4">产品</div>
          <p class="mt-2" style="color:#757575">
            上百款精品游戏任君挑选，打造专属于你的棋牌王国
          </p>
        </div>
        <div class="ui-gamelist">
          <div class="ui-gamelist-content">
            <h2 class="ma-2" style="display:inline-block">热门手机游戏列表</h2>
            <p class="ma-2" style="display:inline-block; float:right">
              <nuxt-link :to="{path:'/products'}" class="fn-right">更多游戏 &gt;</nuxt-link>
            </p>
            <ul id="game-list">
              <li class="ui-game-9" v-for="(item, i) in imgUrls" :key="i">
                <img :src="item.imgUrl" alt="斗地主" />
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </div>
        <v-sheet color="#444" height="10"> </v-sheet>
      </div>
    </v-sheet>

    <v-sheet id="team" height="100">
      <div class="display-1" align="center" justify="center">
        <v-toolbar color="#444"  height="100" dark>   
         
          <v-toolbar-items class="hidden-sm-and-down" style="margin:0 auto">
            <v-btn class="mx-12" text >
              <countTo
          :startVal="YearStartVal"
          :endVal="YearEndVal"
          :duration="6000"
          class="display-3"
          
        ></countTo>
        <p class="display-0.5">
          多
        </p>
        <div >年团队开发经验</div>
            </v-btn>

          <v-divider inset vertical></v-divider>
            <v-btn class="mx-12" text>
               <countTo
          :startVal="dayStartVal"
          :endVal="dayEndVal"
          :duration="6000"
          class="display-3"
          
        ></countTo>
        <p class="display-0.5">
          天
        </p>
        <div >快速上线</div>
            </v-btn>

            <v-divider inset vertical></v-divider>
            <v-btn class="mx-12" text>
                <countTo
          :startVal="StartVal"
          :endVal="EndVal"
          :duration="6000"
          class="display-3"
          
        ></countTo>
        <p class="display-0.5">
          款
        </p>
        <div >游戏供您选择</div>
            </v-btn>
            <v-divider inset vertical></v-divider>
            <v-btn class="mx-12"  text>
                <countTo
          :startVal="HourStartVal"
          :endVal="HourEndVal"
          :duration="6000"
          class="display-3"
          
        ></countTo>
        <p class="display-0.5">
          小时
        </p>
        <div >终身维护，BUG免费修复</div>
            </v-btn>
            
          </v-toolbar-items>
        </v-toolbar>
      </div>
    </v-sheet>

    <v-sheet id="news" color="#fff" max-height="1000" class="mb-8">
      <div align="center" justify="center">
        <div id="about" class="display-3 mt-4 ">行业资讯</div>
        <span class="display-0.5" text-color="basil"
          >手机棋牌电玩开发资讯一览</span
        >
      </div>
      <div>
        <!-- <v-row justify="space-around">
          <v-col md="4" v-for="i in [1, 2, 3]" :key="i">
            <v-card max-width="500" class="mx-auto" outlined>
              <v-toolbar color="blue" dark>
                <v-toolbar-title v-if="i === 1">行业资讯</v-toolbar-title>
                <v-toolbar-title v-else-if="i === 2">西窗动态</v-toolbar-title>
                <v-toolbar-title v-else>其他问题</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-toolbar-title>更多</v-toolbar-title>
                <v-app-bar-nav-icon to="/news"></v-app-bar-nav-icon>
              </v-toolbar>

              <v-list class="text-truncate">
                <v-list-item-group active-class="blue--text">
                  <template v-for="(item, index) in data">
                    <v-list-item
                      class="pl-1 pr-2"
                      :key="item.title"
                      :to="`/news/${item._id}`"
                    >
                      <template>
                        <v-icon v-if="i === 1">mdi-cards-diamond</v-icon>
                        <v-icon v-else-if="i === 2">mdi-cards-heart</v-icon>
                        <v-icon v-else>mdi-cards-spade</v-icon>

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.title"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            style="max-width: 700px; max-height:25px"
                            class="text--primary"
                            v-html="item.content"
                          ></v-list-item-subtitle>
                          <v-list-item-subtitle
                            v-text="item.subtitle"
                          ></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text>{{
                            getNowFormatDate(item.created)
                          }}</v-list-item-action-text>
                          <v-icon v-if="!active" color="grey lighten-1">
                            star_border
                          </v-icon>

                          <v-icon v-else color="yellow">
                            star
                          </v-icon>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider
                      v-if="index + 1 < data.length"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row> -->
        <div class="wp">
          <div
            class="tempWrap"
            style="overflow:hidden; position:relative; width:1150px"
          >
            <div
              class="indexbox6_nr"
              style="width: 3450px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;"
            >
              <dl style="float: left; width: 1150px;">
                <dt>
                  <router-link
                    :to="{
                      path: '/news/5eb27f1cdef3a9fbff907efe',
                      query: { pagination: 1, index: 3 }
                    }"
                    class="b"
                    >开发棋牌游戏难吗？</router-link
                  >
                  <p
                    to="{path:'/news/5eb27f1cdef3a9fbff907efe',query:{pagination:1,index:3}}"
                  >
                    这几年投资什么项目收益比较好呢，那肯定是和时下最火的互联网挂钩的，而对于小型投资者来说，棋牌游戏则是最明智的选择，回首前两年，棋牌游戏开...
                  </p>
                  <span>2020-04-11</span>
                  <router-link
                    :to="{
                      path: '/news/5eb27f1cdef3a9fbff907efe',
                      query: { pagination: 1, index: 3 }
                    }"
                    ><img
                      src="@/assets/img/banner.png"
                      width="340"
                      height="160"
                      alt="开发棋牌游戏难吗？"
                  /></router-link>
                </dt>
                <template v-for="(item, index) in data">
                  <dd :key="index">
                    <div class="time">
                      <span>{{ getNowFormatDate(item.created)[0] }}</span
                      >{{ getNowFormatDate(item.created)[1] }}
                    </div>
                    <router-link
                      :to="{
                        path: `/news/${item._id}`,
                        query: { pagination: 1, index: index }
                      }"
                      >{{ item.title }}</router-link
                    >
                    <P v-html="item.content"></P>
                    <v-divider></v-divider>
                  </dd>
                </template>

                <dt class="more">
                  <router-link to="/news">查看更多</router-link>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </v-sheet>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components:{
    countTo
  },
  data() {
    return {
      YearStartVal: 0,
      YearEndVal: 10,
      dayStartVal: 0,
      dayEndVal: 7,
      StartVal: 0,
      EndVal: 200,
      HourStartVal: 0,
      HourEndVal: 24,
      fixed: false,
      inset: false,
      selected: [2],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      data: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?'
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle:
            'Have any ideas about what we should get Heidi for her birthday?'
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle:
            'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
        }
      ],
      imgUrls: [
        { imgUrl: require('@/assets/img/game/doudizhu.png'), name: '斗地主' },
        { imgUrl: require('@/assets/img/game/majiang.png'), name: '温州麻将' },
        { imgUrl: require('@/assets/img/game/dou.png'), name: '斗牛' },
        {
          imgUrl: require('@/assets/img/game/hangzhoumajiang.png'),
          name: '杭州麻将'
        },
        {
          imgUrl: require('@/assets/img/game/majiang-chuan.png'),
          name: '四川麻将'
        },
        {
          imgUrl: require('@/assets/img/game/majiang-2.png'),
          name: '二人麻将'
        },
        { imgUrl: require('@/assets/img/game/bu.png'), name: '3D捕鱼' },
        { imgUrl: require('@/assets/img/game/majiang2.png'), name: '贵州麻将' },
        { imgUrl: require('@/assets/img/game/majiang4.png'), name: '红中麻将' },
        { imgUrl: require('@/assets/img/game/shuankou.png'), name: '温州双扣' },
        { imgUrl: require('@/assets/img/game/thirteen.png'), name: '十三水' },
        { imgUrl: require('@/assets/img/game/paodekuai.png'), name: '跑得快' },
        { imgUrl: require('@/assets/img/game/zajinhua.png'), name: '扎金花' },
        { imgUrl: require('@/assets/img/game/sifupai.png'), name: '四副牌' },
        { imgUrl: require('@/assets/img/game/tuolaji.png'), name: '拖拉机' },
        {
          imgUrl: require('@/assets/img/game/mopaizhuoqiu.png'),
          name: '摸牌桌球'
        }
      ],
      iconUrls: [
        {
          imgUrl: require('@/assets/img/icon/icon1.png'),
          name: '完美掌握三端用户 APP,WEB,H5网页全面支持'
        },
        {
          imgUrl: require('@/assets/img/icon/icon2.png'),
          name: '更高级别安全防护策略，为稳定运营保驾护航'
        },
        {
          imgUrl: require('@/assets/img/icon/icon3.png'),
          name: '全新个性化后台管理,数据高效驱动运营，让运营更简单'
        },
        {
          imgUrl: require('@/assets/img/icon/icon4.png'),
          name: '一对一个性化辅导，快速上线运营，7*24守护'
        },
        {
          imgUrl: require('@/assets/img/icon/icon5.png'),
          name: '多种登录模式，支持浏览器运行,完美规避微信域名封杀'
        },
        {
          imgUrl: require('@/assets/img/icon/icon6.png'),
          name: '全民推广，三级返利，用户裂变，助力运营'
        }
      ]
    }
  },
  methods: {
    // scroll(id) {
    //   document
    //     .getElementById(id)
    //     .scrollIntoView({ block: 'start', behavior: 'smooth' })
    //   console.log('about', id)
    // },
    //获取时间 y-m-d
    getNowFormatDate(data) {
      let nowTime = new Date(data)
      let month = nowTime.getMonth() + 1 //一定要+1,表示月份的参数介于 0 到 11 之间。也就是说，如果希望把月设置为 8 月，则参数应该是 7。
      let date = nowTime.getDate()
      let seperator1 = '-' //设置成自己想要的年月日格式：年-月-日
      let seperator2 = ':' //设置成自己想要的时分秒格式：时:分:秒
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (date <= 9) {
        date = '0' + date
      }
      let currentDate = nowTime.getFullYear()
      let monthAndDate = month + seperator1 + date

      // nowTime.getHours() +
      // seperator2 +
      // nowTime.getMinutes() +
      // seperator2 +
      // nowTime.getSeconds()
      return [currentDate, monthAndDate]
    },

    view(id) {
      // console.log(id)
    },
    show(event) {
      event.preventDefault()
    }
  },
  async asyncData({ $axios }) {
    let { data } = await $axios.get('https://picsum.photos/v2/list', {
      params: {
        page: Math.floor(Math.random() * 100 + 1),
        limit: 6
      }
    })
    let res = await $axios.get('res/articles', {
      params: {
        query: '',
        pageSize: 6,
        pageNum: 1
      }
    })
    // console.log(data)
    return {
      items: data,
      data: res.data.items
    }
  }
}
</script>
<style>
.basil {
  color: #cacaca !important;
}
.title {
  /* display: block; */
  /* font-size: 50px ; */
  color: #676767;
  /* text-align: center; */
  /* margin: 90px auto 12px auto; */
  /* line-height: 50px; */
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}
#about:before {
  content: '';
  background-color: #666;
  display: inline-block;
  width: 120px;
  height: 2px;
  vertical-align: middle;
  margin-right: 24px;
}
#about:after {
  content: '';
  background-color: #666;
  display: inline-block;
  width: 120px;
  height: 2px;
  vertical-align: middle;
  margin-left: 24px;
}
.button {
  display: flex;
}
.btn1 {
  display: inline-block;
  background: url('../assets/img/p1.png') no-repeat;
  width: 345px;
  height: 130px;
  margin-right: 75px;
  background-size: 345px 130px;
}
.btn2 {
  display: inline-block;
  background: url('../assets/img/p2.png') no-repeat;
  width: 345px;
  height: 130px;
  margin-right: 75px;
  background-size: 345px 130px;
}
.btn3 {
  display: inline-block;
  background: url('../assets/img/p3.png') no-repeat;
  width: 345px;
  height: 130px;
  margin-right: 75px;
  background-size: 345px 130px;
}

.ui-gamelist {
  width: 100%;
  height: 650px;
  background: #f6f6f6;
  padding-top: 20px;
}

.ui-gamelist-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  background: #f6f6f6;
}
.icon-gamelist-content {
  width: 800px;
  height: 100%;
  margin: 0 auto;
  background: #f6f6f6;
}
.ui-gamelist-content > p > span {
  color: #666;
  font-size: 16px;
}
.ui-gamelist-content > p > a {
  color: #c00;
  font-size: 16px;
}
.fn-right {
  float: right;
  text-decoration-line: none;
}

/* .ui-gamelist-content .ui-game-9, .ui-gamelist-content>ul>li:first-child {
    margin-left: 0;
} */
.ui-gamelist-content > ul > li {
  width: 100px;
  float: left;
  text-align: center;
  margin-left: 36px;
  margin-bottom: 13px;
}
.icon-gamelist-content > ul > li {
  width: 130px;
  float: left;
  text-align: center;
  margin-left: 90px;
  margin-bottom: 0px;
}
ul {
  list-style: none;
  display: block;
  /* list-style-type: disc; */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
li {
  display: list-item;
}
img {
  width: 100%;
}

img {
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
img:hover {
  transform: translateY(-8px);
}
.banner {
  height: 100px;
  width: auto;
  background-color: black;
}

/* 新闻资讯 */
.wp {
  width: 1150px;
  margin: 0 auto;
  position: relative;
}
.tempWrap {
  font-size: 12px;
  line-height: 24px;
  color: #666666;
  font-family: 'Microsoft YaHei', '微软雅黑';
  min-width: 1360px;
}
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.wp dl {
  overflow: hidden;
}

.wp dl dt {
  width: 340px;
  float: left;
  margin: 21px 0 0 0;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}
.wp dl dt .b {
  color: #333;
  font-size: 16px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 15px 10px 0 15px;
  font-weight: bold;
}
.wp dl dt p {
  line-height: 18px;
  height: 54px;
  overflow: hidden;
  display: block;
  margin: 10px 10px 10px 15px;
}
.wp dl dt span {
  margin: 0 0 15px 15px;
  display: block;
  background: url(../assets/img/icon_time.png) left center no-repeat;
  padding-left: 22px;
}
.wp dl dt img {
  border: none;
  vertical-align: middle;
}
dt {
  display: block;
}

.wp dl dd {
  width: 355px;
  height: 90px;
  padding: 15px 10px 15px 15px;
  float: left;
  margin: 21px 0 0 21px;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}
dd {
  display: block;
  margin-inline-start: 40px;
}
dd:hover {
  color: #c00;
}
.wp dl dd .time {
  background: #7b89b0;
  color: #fff;
  width: 60px;
  height: 60px;
  overflow: hidden;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
  margin-right: 15px;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}

.wp dl dd .time span {
  display: block;
  font-size: 22px;
  margin: 10px 0 0 0;
}

.wp dl dd a {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.wp dl dd p {
  line-height: 18px;
  height: 36px;
  display: block;
  overflow: hidden;
}
a {
  color: #666666;
  text-decoration: none;
}
.wp dl dt.more {
  width: 100%;
  float: left;
}
.wp dl dt.more a {
  width: 155px;
  line-height: 38px;
  border: 1px solid #000;
  text-align: center;
  margin: 10px auto 0 auto;
  display: block;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
}
.wp dl dt.more a:hover {
  background-color: #7b89b0;
  color: #f6f6f6;
}
</style>

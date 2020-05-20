<template>
  <div class="ui-container clearfix">
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text ? item.text : news.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <div class="ui-news-text fn-left">
      <p class="font-weight-regular text-center headline ma-2">
        {{ news.title }}
      </p>
      <p class="body-2 text-center mb-1 ">
        创建时间:{{ getNowFormatDate(news.created) }} | 编辑:西窗游戏工作室
      </p>
      <v-divider
        align="center"
        justify="center"
        class="pa-3"
        width="620"
        inset
      ></v-divider>
      <span class="content" v-html="news.content"></span>
      <!-- <div class="ui-news-extend">
        <div class="ui-news-more">
          <p id="preDIV">
            <span>上一篇：</span>
            <router-link
              class="router-link"
              v-if="preNews.length !== 0"
              :to="{
                path: `/news/${preNews._id}`,
                query: { pagination: prePagination, index: preIndex }
              }"
              id="pre"
              :title="preNews.title"
              >{{ preNews.title }}</router-link
            >
            <router-link class="router-link" v-else to="/news">
              {{ '没有了' }}
            </router-link>
          </p>
          <p id="nextDIV">
            <span>下一篇：</span>
            <router-link
              class="router-link"
              v-if="nextNews.length !== 0"
              :to="{
                path: `/news/${nextNews._id}`,
                query: { pagination: nextPagination, index: nextIndex }
              }"
              id="next"
              :title="nextNews.title"
              >{{ nextNews.title }}</router-link
            >
            <router-link class="router-link" v-else to="/news">
              {{ '没有了' }}
            </router-link>
          </p>
        </div>
      </div> -->
    </div>
    <div class="fn-left">
      <div class="ui-contact-us">
        <div class="ui-details-right">
          <h2>想了解更多产品详情</h2>
          <h3>
            您可以拨打服务热线<br />
            或联系企业 QQ 寻求帮助
          </h3>
          <div class="ui-contact-detail">
            <p title="153 5663 0075">
              <img src="@/assets/img/contact.png" alt="联系电话" />
            </p>
            <p class="ui-qq-frame">
              <a
                rel="nofollow"
                id="insideQQ"
                href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
                title="企业QQ"
                class="ui-main-qq"
              ></a>
            </p>
          </div>
        </div>

        <div class="ui-relate">
          <h2>相关案例</h2>
          <div class="ui-relate-box">
            <ul>
              <li v-for="item in moreNews" :key="item._id"> 
                <router-link
              class="router-link"
              :to="{
                path: `/cases/${item._id}`
              }"
              id="next"
              :title="item.name"
              >{{ item.name }}</router-link
            >
              </li>
            </ul>
          </div>
          <div style="text-align:center">
            <h2>关注我们</h2>
            <div class="ui-focus">
              <p>微信扫描二维码关注</p>
              <p>西窗棋牌开发公众号</p>
              <img src="/assets/img/weixin-qr.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前第几页
      
      
      news: '',
      moreNews:'',
      items: [
        {
          text: '首页',
          disabled: false,
          href: '/'
        },
        {
          text: '案例',
          disabled: false,
          href: '/cases'
        },
        {
          text: '',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  methods: {
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
      let currentDate =
        nowTime.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        date +
        ' ' +
        nowTime.getHours() +
        seperator2 +
        nowTime.getMinutes() +
        seperator2 +
        nowTime.getSeconds()
      return currentDate
    }
  },
  async asyncData({ $axios, params, query }) {
    const res = await $axios.get(`res/items/${params.id}`)
    const news = await $axios.get('res/items',{
      params:{
        query:'',
        pageNum:1,
        pageSize:10
      }
    })
    console.log('more',news.data)
    return {
      moreNews:news.data.items,
      news: res.data,
    }
  }
}
</script>

<style scoped>
/* 清除浮动 */
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}
/* 对v-html 中图片溢出的处理 */
.content >>> img,
p,
span {
  width: 100%;
}
/* 段落空两格开始 */
.content {
  text-indent: 2rem;
}
.ui-container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.fn-left {
  float: left;
}

.ui-news-text {
  width: 859px;
  padding: 0 40px;
  max-width: 100%;
  /* margin-bottom: -99999px; */
  border-right: 1px solid #dedede;
}

/* .ui-details-right {
  margin-left: 20px;
  width: 230px;
  float: left;
} */
/* 文章尾部  */
.ui-news-extend {
  background: url('../../assets/img/dotted.png') repeat-x 0 0;
  border-width: 1px 0;
  margin-top: -1px;
}

.ui-news-more {
  padding: 20px;
}
.ui-news-more p {
  line-height: 34px;
}
p {
  font-size: 16px;
  color: #666;
}
a {
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  color: black;
}
.router-link {
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.router-link:hover {
  color: red;
}

/* right */
.ui-details-right {
  width: 300px;
  /* padding-bottom: 99999px;
    margin-bottom: -99999px; */
  margin: 0px auto;
  text-align: center;
}
.ui-contact-us {
  width: 300px;
  border-bottom: 1px solid #d4d4d4;
  margin: 0 auto;
}
h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #666;
  text-align: center;
  margin-top: 20px;
}
a.ui-main-qq {
  width: 255px;
  height: 58px;
  background: url('../../assets/img/qq.png');
  display: inline-block;
}

.ui-main-qq:hover,
.ui-main-qq:visited {
  background: url('../../assets/img/qq.png') 0 -60px;
}
.ui-qq-frame {
  padding-bottom: 30px;
}
.ui-contact-detail p {
  padding: 20px 0px;
}

/* 右边新闻列表 */
h2 {
  font-size: 38px;
  font-weight: 100;
  line-height: 39px;
}
.ui-relate h2 {
  font-size: 30px;
  padding: 40px 24px 20px;
}
.ui-relate-box,
.ui-relate h2 {
  background: url('../../assets/img/dotted.png') repeat-x bottom;
}
.ui-relate-box {
  padding-left: 30px;
}
.ui-relate-box ul {
  padding: 20px 0;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.ui-relate-box li {
  display: list-item;
  text-align: -webkit-match-parent;
  font: 14px/1.5 Microsoft Yahei, SimHei, tahoma, arial, Hiragino Sans GB,
    SimSun, sans-serif;
  font-weight: 400;
  color: #333;
}
.ui-relate-box ul li {
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-relate-box ul li:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 10px;
  background: #afafaf;
}
</style>

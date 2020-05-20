<template>
  <!-- @contextmenu.prevent  阻止右键-->
  <div>
    <v-container style="height: 100%;">
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-1 basil--text">资讯</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in news" :key="item.name">
            <v-card max-width="1000" color="basil" flat>
              <v-list three-line>
                <template v-for="(item, index) in item.newsList">
                  <!-- <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader> -->

                  <v-divider :key="index" inset></v-divider>
                  <v-list-item
                    :to="{
                      path: `/news/${item._id}`,
                      query: { pagination: pagination, index: index }
                    }"
                    :key="item._id"
                    @click="find()"
                  >
                    <v-list-item-avatar>
                      <!-- <v-img :src="item.avatar"></v-img> -->
                      <v-icon class="blue white--text"
                        >mdi-text-box-outline</v-icon
                      >
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        
                      >[{{item.categoryName}}]|{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle
                        class="d-inline-block text-truncate"
                        style="max-width: 700px; max-height:25px"
                        v-html="item.content"
                      ></v-list-item-subtitle>
                      <v-list-item-action-text>{{
                        getNowFormatDate(item.created)
                      }}</v-list-item-action-text>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
            <div class="text-center">
          <v-pagination
            v-model="pagination"
            :length="item.total"
            :total-visible="5"
          ></v-pagination>
        </div>
          </v-tab-item>
           
        </v-tabs-items>
       
      </v-card>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagination: 1, //当前页,
      total: '', //总计页
      tab: null,
      items: ['行业资讯', '西窗动态', '常见问题'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      datas: [
        // { header: 'Today' },
        {
          _id: '323llkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        // { divider: true, inset: true },
        {
          _id: '323kkkkkkklkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        // { divider: true, inset: true },
        {
          _id: '323l22222kj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        // { divider: true, inset: true },
        {
          _id: '32122lkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        // { divider: true, inset: true },
        {
          _id: '534343llkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        {
          _id: '3645454lkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        {
          _id: '133111443llkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        },
        {
          _id: '65653llkj',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: '西窗棋牌游戏工作室',
          subtitle:
            '渭城朝雨浥轻尘 客舍青青柳色新 劝君更尽一杯酒 西出阳关无故人'
        }
      ],
      news: [
        {
          name: '行业资讯',
          newsList: [
            {
              _id: '323llkj',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: '',
              content:
                '',
                categoryName:"新闻"
            }
          ],
          total:''
        },
        {
          category: '西窗动态',
          newsList: [
            {
              _id: '323llkj',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: '',
              content:''
            }
          ],
          total:''
        },
        {
          category: '常见问题',
          newsList: [
            {
              _id: '323llkj',
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: '',
              content:
                ''
            }
          ],
          total:''
        }
      ]
    }
  },
  watch: {
    key() {
      this.loadBrands()
    },
    pagination: {
      deep: true, //深度監控
      handler() {
        this.loadBrands()
        // console.log('f分页',this.pagination)
      }
    },
    tab:{
      handler(){
        // console.log('tab',this.tab)
      }
    }
  },
  methods: {
    find() {},
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
        nowTime.getFullYear() + seperator1 + month + seperator1 + date
      // nowTime.getHours() +
      // seperator2 +
      // nowTime.getMinutes() +
      // seperator2 +
      // nowTime.getSeconds()
      return currentDate
    },
    async loadBrands() {
      const res = await this.$axios.get('news/init', {
        params: {
          query: '', //模糊查询参数
          pageNum: this.pagination, //当前第几页
          pageSize: 7,
          tab:this.tab
        }
      })
      this.news = res.data
      // console.log("loadBrands",res.data ,this.total)
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.get('news/init')
    // total 分页总数 分几页
    // const total = Math.floor(parseInt(res.data.countNum) / 7)
    return {
      news: res.data,
      // total: total
    }
  }
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
.fn-left {
  float: right;
}
</style>

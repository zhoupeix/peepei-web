<template>
<v-sheet align='center' justify='center'>
  <div class="service-banner" >   
	</div>
<div id="about" class=" display-3 mt-8 ">服务</div>
<p class="mb-9 mt-2" style="color:#757575">
        五大游戏开发方案 ，为您解决运营难题
      </p>
      <v-row class='mx-12 mt-10' justify="space-around">
        <v-col >
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto pa-6"
                max-width="300"
                height='260'
              >
              <div align="center" justify="center" class="mb-1">
                <img class="icon" src="@/assets/img/poker.png" alt="">
                <p style="font-weight:bold">地方特色棋牌开发</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">游戏设计及研发技术精湛，产品更新快，多款棋牌游戏供您选择，快速上线，运营盈利。</p>
              </div>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto pa-6"
                max-width="300"
                height='260'
              >
                <div align="center" justify="center" class="mb-1">
                <img  class='icon' src="@/assets/img/majiang.png" alt="">
                <p style="font-weight:bold">地方特色麻将开发</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">按需求定制各类地方棋牌玩法、地方特色界面、功能、规则，方言，满足您地方化需求。</p>
              </div>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <v-col>
          <v-hover>
          <template v-slot="{ hover }">
            <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto pa-6"
              max-width="300"
              height='260'
            >
              <div align="center" justify="center" class="mb-1">
                <img class='icon' src="@/assets/img/fish.png" alt="">
                <p style="font-weight:bold">捕鱼游戏开发</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">多样玩法，画面精美，多人同屏，各种捕鱼游戏供您选择</p>
              </div>
            </v-card>
          </template>
        </v-hover>
        </v-col>
        <v-col>
          <v-hover>
          <template v-slot="{ hover }">
            <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto pa-6"
              max-width="300"
              height='260'
            >
              <div align="center" justify="center" class="mb-1">
                <img class='icon' src="@/assets/img/roomcard.png" alt="">
                <p style="font-weight:bold">地方房卡棋牌开发</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">特色棋牌房卡、俱乐部、比赛模式、大联盟模式，更多游戏模式供您选择。</p>
              </div>
              
            </v-card>
          </template>
        </v-hover>
        </v-col>

         <v-col>
          <v-hover>
          <template v-slot="{ hover }">
            <v-card
              :elevation="hover ? 24 : 6"
              class="mx-auto pa-6"
              max-width="300"
              height='260'
            >
              <div align="center" justify="center" class="mb-1">
                <img class='icon' src="@/assets/img/game.png" alt="">
                <p style="font-weight:bold">休闲街机游戏开发</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">画面精美，高度还原真机玩法。</p>
              </div>
              
            </v-card>
          </template>
        </v-hover>
        </v-col>
      </v-row>

      <div id="about" class=" display-3 mt-8 ">核心服务与优势</div>
        <p class="mb-9 mt-2" style="color:#757575">
        强大技术，高效服务，无忧运营
      </p>
      <v-row>
      <v-col v-for="item in items" :key="item._id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="father mx-auto"
            color="grey lighten-4"
            max-width="350"
            height="400"
          >
            <v-img
              :aspect-ratio="16 / 9"
              :src="item.icon"
              contain
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-btn outlined color="white" @click="getToAnchor('#apply')"> 申请使用</v-btn>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
                href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
              >
                <v-icon>mdi-chat-plus</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text mb-2" style="font-size:18px">
                零成本 共享盈利 共担风险
              </div>
              <h3 class="display-1 font-weight-light orange--text mb-2" >
              <p v-text="item.name"></p>    
              </h3>
              <div class="font-weight-light title mb-2 " >
                <p style="overflow: hidden; text-overflow:ellipsis; width:300px" v-text="item.title"></p>
              </div>
              <!-- <v-btn text small bottom color="primary" class="float-right" 
              :to="{
                path: `/cases/${item._id}`
              }"> 详情>></v-btn> -->
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
</v-sheet>
  
  
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          name:'上线速度快',
          title:'签定合同，现有产品快至7天可完成上线运营。',
          icon:require('@/assets/img/hd_character.png')
        },
        {
          name:'研发技术雄厚',
          title:'技术团队深耕棋牌行业研发技术，从业经验丰富。',
          icon:require('@/assets/img/jiangbei.png')
        },
        {
          name:'多端互联',
          title:'安卓、IOS、WEB，多端平台互联互通，便于维护升级。',
          icon:require('@/assets/img/web.png')
        },
        {
          name:'完善全过程服务',
          title:'售前售中售后，7*24小时专属免费运维培训，终生BUG修复。',
          icon:require('@/assets/img/wanfa.png')
        },
        {
          name:'全新后台监控',
          title:'后台管理系统，实时监控平台数据，轻松掌握运营情况。',
          icon:require('@/assets/img/back-end.png')
        },
        {
          name:'全民裂变推广',
          title:'三级分销推广系统，用户裂变，快速积累客户。',
          icon:require('@/assets/img/share.png')
        },
      ]
    }
  },
  methods:{
    getToAnchor(anchorId){
      window.location.replace(window.location.href.split('#')[0]+anchorId)
    }
  }
}
</script>

<style >
.service-banner{
    background: url(../../assets/img/solution.png) no-repeat;
    width: 100%;
    height: 300px;
    display: block;
    min-width: 1250px;
    background-size: 100% 100%;
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
.icon{
  width: 60px;
  height: 60px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
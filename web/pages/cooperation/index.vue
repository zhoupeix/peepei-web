<template>
  <v-sheet>
    <div class="cooperation-banner"></div>
    <div width="400" align="center" justify="center">
      <p class="mt-9 headline font-weight-regular">选择西窗的理由</p>
      <p class="about "></p>
      <v-row>
        <v-col>
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto pa-6"
                max-width="300"
                height="320"
                shaped
              >
                <div align="center" justify="center" class="mb-1">
                  <img src="@/assets/img/coo_1.png" alt="技术强" />
                  <p style="font-weight:bold">技术研发强</p>
                  <p
                    style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;"
                  >
                    拥有较强的管理团队，游戏设计及研发技术精湛，始终追求高品质服务，持有超期视野和持续创新能力。
                  </p>
                  <v-btn
                    class="mt-9"
                    outlined
                    color="indigo"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
                    >了解详情</v-btn
                  >
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
                height="320"
                shaped
              >
                <div align="center" justify="center" class="mb-1">
                  <img src="@/assets/img/coo_2.png" alt="" />
                  <p style="font-weight:bold">产品体验好</p>
                  <p
                    style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;"
                  >
                    界面交互亮眼，服务器架构灵活，产品稳定性和拓展性极强，运维体系成熟，运作高效，安全防御及时，应急情况处理快，每一款都经过市场检验。
                  </p>
                  <v-btn
                    class="mt-1"
                    outlined
                    color="indigo"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
                    >了解详情</v-btn
                  >
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
                height="320"
                shaped
              >
                <div align="center" justify="center" class="mb-1">
                  <img src="@/assets/img/coo_3.png" alt="" />
                  <p style="font-weight:bold">成功经验多</p>
                  <p
                    style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;"
                  >
                    多年市场经验，信息资源丰富，熟知棋牌游戏行业用户的痛点，避免客户不熟悉而受骗，我们承诺互通有无，精诚合作。
                  </p>
                  <v-btn
                    class="mt-9"
                    outlined
                    color="indigo"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
                    >了解详情</v-btn
                  >
                </div>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <div>
      <div width="400" align="center" justify="center">
        <p class="mt-9 headline font-weight-regular">多种合作方式</p>
        <p class="about "></p>
      </div>
      <v-row>
        <v-col>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="350" height="490">
              <v-img
                :aspect-ratio="16 / 9"
                :src="require('@/assets/img/majiang1.png')"
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
                <div class="font-weight-light grey--text title mb-2">
                  零成本 共享盈利 共担风险
                </div>
                <h3 class="display-1 font-weight-light orange--text mb-2">
                  保证金模式
                </h3>
                <p class="font-weight-light subtitle-1 mb-2" >
                  支持合作一款或多款游戏产品，仅需缴纳少量开发保证金即可加入合作项目，在达到一定的条件后，西窗将全额退还保证金部分，真正实现零开发成本合作棋牌项目。
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="350" height="490">
              <v-img
                :aspect-ratio="16 / 9"
                :src="require('@/assets/img/majiang2.png')"
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
                <div class="font-weight-light grey--text title mb-2">
                  独享所有权益
                </div>
                <h3 class="display-1 font-weight-light orange--text mb-2">
                  独家定制服务
                </h3>
                <p class="font-weight-light subtitle-1 mb-2">
                  合作方将承担所有开发费用及后期技术维护费用，西窗持续负责游戏产品的优化更新及营销活动技术支撑；合作方自行负责营销策略的制定和执行工作，以及地方棋牌游戏的推广落地，合作方取得该项目的所有权益。
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="350" height="490">
              <v-img
                :aspect-ratio="16 / 9"
                :src="require('@/assets/img/majiang3.png')"
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
                <div class="font-weight-light grey--text title mb-2">
                  风险可控 灵活搭建 快速盈利
                </div>
                <h3 class="display-1 font-weight-light orange--text mb-2">
                  租赁模式
                </h3>
                <p class="font-weight-light subtitle-1 mb-2">
                  合作方缴纳一定的租赁保证金，西窗将开发符合合作方要求的游戏产品，前期开发费用由西窗承担，后期维护技术费用由合作伙伴承担，游戏收益权归属合作方，西窗提供技术服务。
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <div width="400" align="center" justify="center">
    <p class="mt-9 headline font-weight-regular">合作流程</p>
      <p class="about "></p>
    </div>
    <v-row class="fn-clear mx-10" align="center" justify="center" >
       <v-col>
        <a class="flow-step-ico1 pa-0" align='center' ><p>申请合作<br/> 客户申请</p></a>
      </v-col>
      <v-col class="ui-flow-icon"><img src="@/assets/img/flow_icon.png"></v-col>
      <v-col>
        <a  class="flow-step-ico2" align='center'>
          <p>合作洽谈 <br/> 需求分析</p></a>
      </v-col>
      <v-col class="ui-flow-icon"><img src="@/assets/img/flow_icon.png"></v-col>
      <!-- <v-col>
        <a class="flow-step-ico3" align='center'><p>条件审核</p></a>
      </v-col> -->
      <!-- <v-col class="ui-flow-icon"><img src="@/assets/img/flow_icon.png"></v-col> -->
      <v-col>
        <a  class="flow-step-ico4" align='center'><p>合同签订<br/>技术准备</p></a>
      </v-col>
      <v-col class="ui-flow-icon"><img src="@/assets/img/flow_icon.png"></v-col>
      <v-col>
        <a  class="flow-step-ico5" align='center'><p>开发设计 <br/> 程序实现</p></a>
      </v-col>
      <v-col class="ui-flow-icon" ><img src="@/assets/img/flow_icon.png"></v-col>
      <v-col>
        <a  class="flow-step-ico6" align='center'><p>内外测试 <br/>压力测试</p></a>
      </v-col>
      <v-col class="ui-flow-icon"><img src="@/assets/img/flow_icon.png"></v-col>
      <v-col>
        <a class="flow-step-ico7" align='center'><p>客户确认 <br/> 平台上线</p></a>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
    getToAnchor(anchorId){
      window.location.replace(window.location.href.split('#')[0] + anchorId);
    }
  }
}
</script>

<style>
.cooperation-banner {
  background: url(../../assets/img/operation.png) no-repeat;
  width: 100%;
  height: 300px;
  display: block;
  min-width: 1250px;
  background-size: 100% 100%;
}
.about {
  width: 300px;
  height: 2px;
  background: -webkit-linear-gradient(left, #fff -4%, blue 50%, #fff 100%);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

/* 合作 */
.fn-clear.v-col{
 padding: 0;
}
.ui-flow-icon{
  float: left;
  text-align: center;
}
.flow-step-ico1{
  background: url(../../assets/img/process5.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico2{
  background: url(../../assets/img/process6.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico3{
  background: url(../../assets/img/process7.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico4{
  background: url(../../assets/img/process1.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico5{
  background: url(../../assets/img/process2.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico6{
  background: url(../../assets/img/process3.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico7{
  background: url(../../assets/img/process8.png) no-repeat center;
  width: 110px;
  height: 142px;
  display: inline-block;
}
.flow-step-ico1 p{
  margin-top:130px
  
}
.flow-step-ico2 p{
  margin-top:130px
}
.flow-step-ico3 p{
  margin-top:130px
}
.flow-step-ico4 p{
  margin-top:130px
}
.flow-step-ico5 p{
  margin-top:130px
}
.flow-step-ico6 p{
  margin-top:130px
}
.flow-step-ico7 p{
  margin-top:130px
}
.mb-1 img {
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.mb-1 img:hover {
  transform: translateY(-8px);
}

</style>

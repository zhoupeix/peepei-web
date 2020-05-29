<template>
  <v-sheet color="">
    <div class="contact-banner"></div>
    <div>
      <div class="aboutwho">
        <div class="ab11">
          <h1>关于我们</h1>
          <p>
            西窗游戏是一家集网络棋牌游戏、休闲游戏、手机游戏软件开发、后期技术服务支持为一体的互联网服务型企业。业务范围：全国性、地方特色游戏、休闲类游戏平台开发销售。<br />
          </p>
          <p>
            旗下拥有经验丰富的工程技术团队和技艺精湛的美术团队，开发实力强大，平台游戏自由组合，实现快速上线，定制研发满足客户需求。具有丰富的游戏运营经验，为合作伙伴提供专业的技术支持和培训指导，帮助客户轻松运营。秉承“诚实，守信，优质，创新”的价值观，自主研发、持续创新，热忱为客户和合作伙伴提供优质的游戏平台和游戏体验。为创业投资者提供高效的服务。
          </p>
          <p>
            棋牌游戏开发之于西窗人，不仅仅是兴趣，也是为之毕生奋斗的事业。依托丰富的资源优势和成熟的开发经验，我们将携手更多合作伙伴共谋发展，再创辉煌。
          </p>
        </div>
      </div>
    </div>
    <div class="team mt-10" > </div>
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
                <img src="@/assets/img/team3.png" alt="">
                <p style="font-weight:bold">管理团队</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">拥有较强的管理团队，游戏设计及研发技术精湛，始终追求高品质服务，持有超期视野和持续创新能力。</p>
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
                <img src="@/assets/img/team1.png" alt="">
                <p style="font-weight:bold">技术团队</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">技术团队精通网络编程与性能优化,拥有众多的大型项目实战经验,项目管理与统筹技能卓越,技术精湛及思维独到。</p>
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
                <img src="@/assets/img/team2.png" alt="">
                <p style="font-weight:bold">设计团队</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">设计团队拥有精湛UI界面设计能力,准确把握不同的交互需求,关注每一分设计价值实现,有活力及充满想法的团队,具备各类业务拓展经验。</p>
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
                <img src="@/assets/img/team4.png" alt="">
                <p style="font-weight:bold">客户支持团队</p>
                <p style=" font-size: 14px;
                  color: #696969;
                  line-height: 24px;
                  text-indent: 1em;">客户团队精通媒体推广运营方法论,掌握众多的一手媒体资源,丰富的本地游戏推广经验,丰富的营销落地实践经验,为你的运营保驾护航。</p>
              </div>
              
            </v-card>
          </template>
        </v-hover>
        </v-col>
      </v-row>
    
    <div class="">
      <div class="wwrcon">
        <ul class="clearfloat">
          <div align="center" justify="center" class="mb-1">
            <img src="@/assets/img/culture.png" alt="" />
          </div>

          <li class="clearfloat">
            <div class="wwrconyi">
              <div class="wwrconyik">
                <img src="@/assets/img/dream.png" alt="" />
              </div>
            </div>
            <div class="wwrconer">
              <p>我们的愿景</p>
              <span></span>
            </div>
            <div class="wwrconsan">
              <p style="font-size:18px">
                娱悦自己 娱悦他人 <br />
                丰富人们的娱乐与生活
              </p>
            </div>
          </li>
          <li class="clearfloat">
            <div class="wwrconyi">
              <div class="wwrconyik">
                <img src="@/assets/img/dream1.png" alt="" />
              </div>
            </div>
            <div class="wwrconer">
              <p>我们的使命</p>
              <span></span>
            </div>
            <div class="wwrconsan">
              <p style="font-size:18px">
                聚焦客户关注的挑战与压力，提供有竞争力的游戏解决方案和服务，持续为客户创造最大价值
              </p>
            </div>
          </li>
          <li class="clearfloat">
            <div class="wwrconyi">
              <div class="wwrconyik">
                <img src="@/assets/img/dream2.png" alt="" />
              </div>
            </div>
            <div class="wwrconer">
              <p>我们的价值观</p>
              <span></span>
            </div>
            <div class="wwrconsan">
              <p style="font-size:18px">诚实 守信 优质 创新</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div align="center" justify="center" class="history">
      <img src="@/assets/img/history.png" alt="公司发展史" />
    </div>
  </v-sheet>
</template>

<script>
export default {}
</script>

<style>
.contact-banner {
  background: url(../../assets/img/contactbanner.png) no-repeat;
  width: 1100px;
  height: 400px;
  /* display: block; */
  min-width: 1250px;
  background-size: 100% 100%;
}
.team {
  background: url(../../assets/img/team_bg.png) no-repeat center top;
  width: 100%;
  height: 45px;
  min-width: 1250px;
  /* background-size: 1150px 100%; */
}
/* info */
.aboutwho {
  width: 1003px;
  margin: 0 auto;
  border-bottom: 1px solid #dedede;
}
.ab11 {
  height: 350px;
  padding-left: 650px;
  background: url(../../assets/img/office.png) 10px no-repeat;
  margin-bottom: 50px;
  margin-top: 30px;
}
h1 {
  font-size: 20px;
  /* color: #000; */
  /* font-family: "΢���ź�"; */
  font-weight: bold;
  /* margin-top: -10px; */
}
.ab11 p {
  font-size: 14px;
  /* font-family: '΢���ź�'; */
  color: #696969;
  line-height: 24px;
  text-indent: 2em;
  margin-bottom: 5px !important;
}
.wwrcon {
  padding: 40px 0;
}
.clearfloat {
  zoom: 1;
}
ul,li,ol,dl {
  list-style: none;
}

.wwrcon ul li {
  width: 33.333%;
  float: left;
}
.wwrconyi {
  text-align: center;
}

.wwrconyik {
  display: inline-block;
  width: 145px;
  height: 166px;
  padding: 40px 0 0 0;
  /* background: url(../../assets/img/iback.png) no-repeat; */
}
.wwrconyi img {
  vertical-align: middle;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.wwrconyi img:hover {
  transform: translateY(-8px);
}
/* img {
  border: 0;
} */
.wwrconer {
  text-align: center;
}
.wwrconer p {
  text-align: center;
  font-size: 30px;
  color: #000;
  margin: 25px 0 10px 0;
}
.wwrconer span {
  display: inline-block;
  width: 80px;
  height: 2px;
  background: #fa1747;
}
.wwrconsan {
  padding: 15px 0;
}
.wwrconsan p {
  text-align: center;
  font-size: 22px;
  color: #333;
}
.clearfloat:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>

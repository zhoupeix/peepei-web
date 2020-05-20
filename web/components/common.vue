<template>
  <v-app class="">
    <v-sheet class="middle pt-4" color="" height="100%">
      <div id="apply">
        <countTo
          :startVal="startVal"
          :endVal="endVal"
          :duration="6000"
          class="display-1"
        ></countTo>
        <p class="display-1" style="display:inline-block">
          位客户的选择，加入我们吧！
        </p>
      </div>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">我要免费试用</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">申请免费试用</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <form>
                  <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    :counter="20"
                    label="请输入姓名"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="address"
                    :error-messages="addressErrors"
                    label="请填写详细地址"
                    required
                    @input="$v.address.$touch()"
                    @blur="$v.address.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="请输入邮箱地址"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    :error-messages="phoneErrors"
                    label="请输入手机号码"
                    required
                    @change="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                  ></v-text-field>
                  <v-checkbox
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    label="是否同意我们在适当的时候联系您?"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                  ></v-checkbox>
                </form>
                <v-card-action>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text class="mr-4" @click="submit"
                    >提交申请</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="clear">清除</v-btn>

                  <v-btn color="blue darken-1" text @click="dialog = false"
                    >关闭</v-btn
                  >
                </v-card-action>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
      <v-container>
        <v-carousel
          cycle
          height="300"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <p class="pt-3 headline" >客户案例</p>
              <v-row class="mx-4 " >
                <!-- <p class="">合作伙伴</p>
                <div class="headline">{{ slide }} Slide</div> -->
                
                
                <v-list  width=‘’ style="background:transparent;">
                  <v-list-item >
                    <v-list-item-avatar size='140'>
                      <v-img
                        :src="slide.avatar"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content style="width:650px;">
                      <v-list-item-title style="white-space: pre-wrap; text-indent:2em;" v-text="slide.title"></v-list-item-title>
                      <v-list-item-subtitle v-text="slide.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-sheet>
    <v-sheet color="" height="400">
      <div class="footer">
        <!-- <div class="foot_topbj">
          <a href="javascript:void(0)" class="foot_top"></a>
        </div> -->
        <div class="foot_main">
          <div class="wpb">
            <div class="foot_lx">
              <div class="foot_bt">联系我们 | Contact</div>
              <dl>
                <dt class="tb1">
                  <label>业务手机</label>
                  <em>：</em>
                  <span class="tel"><b>15356630075（同微信）</b></span>
                </dt>
                <dd class="tb2">
                  <label>业务Q Q</label>
                  <em>：</em>
                  <a
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=943831105&amp;site=qq&amp;menu=yes"
                    rel="nofollow"
                    target="_blank"
                    >943831105</a
                  >
                </dd>
                <dd class="tb3">
                  <label>服务热线</label>
                  <em>：</em> <span>40008888888</span>
                </dd>

                <dt class="tb7">
                  <label>地&emsp;&emsp;址</label>
                  <em>：</em>
                  <span>浙江杭州市拱墅区莫干山路425号瑞祺大厦8楼</span>
                </dt>
              </dl>
            </div>
            <div class="foot_about">
              <div class="foot_bt">关于我们 | About</div>
              <div class="nr">
                杭州西窗游戏是一家集网络棋牌游戏、休闲游戏、手机游戏软件开发、后期技术服务支持为一体的互联网一站式服务型企业。业务范围：全国性、地方特色游戏、休闲类游戏平台开发销售；手机网络游戏、游戏软件定制开发、手机街机电玩游戏APP定制开发等。
                旗下拥有经验丰富的工程技术团队和技艺精湛的美术团队，开发实力强大，平台游戏自由组合，实现快速上线，定制研发满足客户需求。
              </div>
            </div>

            <div class="clear"></div>
          </div>
        </div>
        <div class="foot_copy" align="center">
          <div class="wpb">
            <span class="sm">
              Copyright © 2020 西窗游戏 版权所有 &nbsp;&nbsp;
            </span>
            <span>计算机软件著作权登记证书 |</span>
            <span>软件企业认定证书|</span>
            <span>企业法人营业执照 |</span>
            <span>重合同守信用企业 |</span>
            <a href="http://www.beian.miit.gov.cn" target="_blank"
              >浙ICP备16000203号-1</a
            >
          </div>
        </div>
      </div>
    </v-sheet>
  </v-app>
</template>
<script>
import countTo from 'vue-count-to'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'common',
  components: { countTo },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    address: { required },
    email: { required, email },
    phone: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },
  data() {
    return {
      dialog: false,
      startVal: 0,
      endVal: 208,
      phone: '',
      name: '',
      email: '',
      address: '',
      checkbox: false,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        ]
    }
  },
  methods: {
    async getTotalCustom() {
      const res = await this.$axios.get('res/customs')
      this.endVal = res.data
    },
    async submit() {
      if (
        this.$v.name.required &&
        this.$v.email.required &&
        this.$v.phone.required &&
        this.$v.email.email &&
        this.$v.address.required &&
        this.$v.checkbox.checked
      ) {
        const res = await this.$axios.post('res/applicants', {
          name: this.name,
          address: this.address,
          phone: this.phone,
          email: this.email
        })

        this.dialog = false
        // this.$message({
        //   type:success,
        //   text:'申请成功，感谢您的申请，我们会24小时内回复您。'
        // })
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.checkbox = false
    },
    // 获取客户数
    async getTotalCustom() {
      const data = await this.$axios.get('res/customers')
      // console.log('data', data.data[0].total)
      this.endVal = parseInt(data.data[0].total)
    },
    async getSlide(){
      const res = await this.$axios.get('res/cases',{
         params: {
        //当前第几页
        query: '',
        pageNum: 1,
        //显示几条
        pageSize: 6
      }
      })
      // console.log('case',res.data)
      this.slides=res.data.items
    }
  },
  
  created(){
    this.getSlide()
  },
  mounted() {
    this.getTotalCustom()
  },
  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('同意，才能继续!')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('手机号必须填写')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('字符超过20了')
      !this.$v.name.required && errors.push('姓名必须填写.')
      return errors
    },
    addressErrors() {
      const errors = []
      if (!this.$v.address.$dirty) return errors
      !this.$v.address.required && errors.push('地址必须填写.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('请填写正确的邮箱地址')
      !this.$v.email.required && errors.push('邮箱必须填写')
      return errors
    }
  }
}
</script>
<style >
/* .assist-div{
 
  width: 100%;
  height: 100%;
  position: absolute;
  top: -100px;
  left: 0;
} */
.middle {
  text-align: center;
  background: rgb(246, 247, 252) !important;
}
div {
  display: block;
}
.footer {
  overflow: hidden;
  width: 100%;
  color: #ccc;
  font-size: 13px;
  line-height: 26px;
}
.footer .foot_main {
  padding: 28px 0 20px 0;
  position: relative;
  background: #333;
  height: 300px;
  /* font-size: 14px; */
}
.wpb {
  width: 1200px;
  margin: 0 100px;
  position: relative;
}
.footer .foot_main .foot_lx {
  width: 505px;
  height: 250px;
  float: left;
  margin-left: 15px;
}
.footer .foot_main .foot_bt {
  font-size: 16px;
  padding-bottom: 5px;
  line-height: 30px;
}
.footer .foot_main .foot_lx dl {
  padding: 15px 0 0 0;
}
.footer .foot_main .foot_lx .tb1 {
  background: url(../assets/img/footer_icon.png) left 0 no-repeat;
}
.footer .foot_main .foot_lx dt {
  overflow: hidden;
  height: 31px;
  line-height: 31px;
  float: left;
  width: 100%;
  margin: 10px 0;
}
.footer .foot_main .foot_lx label {
  display: block;
  float: left;
  width: 56px;
  margin-left: 40px;
}
.footer .foot_main .foot_lx em {
  float: left;
  font-style: normal;
  padding-right: 5px;
}
.footer .foot_main .foot_lx span {
  float: left;
}
.footer .foot_main .foot_lx .tb2 {
  background: url(../assets/img/footer_icon.png) left -31px no-repeat;
  color: #34a5e3;
}
.footer .foot_main .foot_lx dd {
  overflow: hidden;
  height: 31px;
  line-height: 31px;
  float: left;
  width: 250px;
  margin: 10px 0;
}
dd {
  display: block;
  margin-inline-start: 40px;
}
.footer .foot_main .foot_lx label {
  display: block;
  float: left;
  width: 56px;
  margin-left: 40px;
}
.footer .foot_main .foot_lx .tb2 a {
  color: #34a5e3;
  text-decoration: none;
}
.footer .foot_main .foot_lx a {
  float: left;
}
.footer .foot_main .foot_lx .tb3 {
  background: url(../assets/img/footer_icon.png) left -62px no-repeat;
  width: 230px;
}
.footer .foot_main .foot_lx label {
  display: block;
  float: left;
  width: 56px;
  margin-left: 40px;
}
.footer .foot_main .foot_lx span {
  float: left;
}
.footer .foot_main .foot_lx .tb7 {
  background: url(../assets/img/footer_icon.png) left -186px no-repeat;
}
.footer .foot_main .foot_lx dt {
  overflow: hidden;
  height: 31px;
  line-height: 31px;
  float: left;
  width: 100%;
  margin: 10px 0;
}

.footer .foot_main .foot_about {
  width: 590px;
  height: 250px;
  padding: 0 30px;
  float: left;
  border-left: 1px solid #4d4d4d;
}
.footer .foot_main .foot_bt {
  font-size: 16px;
  padding-bottom: 5px;
  line-height: 30px;
}

.footer .foot_main .foot_about .nr {
  height: 144px;
  overflow: hidden;
  margin: 20px 0 5px 0;
  text-indent: 2rem;
}
.footer .foot_copy {
  background: #292929;
  /* overflow: hidden; */
  padding: 14px 0;
  height: 50px;
}
.footer .foot_copy .sm {
  float: left;
}
.footer .foot_copy .wpb a {
  color: #ccc;
  text-decoration: none;
}

</style>

<template>
  <v-sheet align="center" justify="center">
    <div class="banner"></div>
     <p class="mt-9 headline font-weight-regular">游戏案例</p>
      <p class="about "></p>
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
                  <v-btn outlined color="white" @click="getToAuchor('#apply')"> 申请使用</v-btn>
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
              <h3 class="display-1 font-weight-light orange--text mb-2" >
              <router-link
              class="router-link"
              :to="{
                path: `/cases/${item._id}`
              }"
              tag="p"
              v-text="item.name"></router-link
            >    
              </h3>
              <div class="font-weight-light title mb-2 " >
                <p style="overflow: hidden; text-overflow:ellipsis;white-space:nowrap;width:300px" v-text="item.title"></p>
              </div>
              <v-btn text small bottom color="primary" class="float-right" 
              :to="{
                path: `/cases/${item._id}`
              }"> 详情>></v-btn>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
     <div class="text-center">
          <v-pagination v-model="pagination" :length="total" :total-visible="7"></v-pagination>
        </div>
  </v-sheet>
</template>

<script>
export default {
  data(){
    return{
      pagination: 1,//当前页,
      items:'',
      total:''
    }
  },
  watch:{
      key(){
        this.loadBrands();
      },
      pagination:{
        deep: true,//深度監控
        handler(){
          this.loadBrands();
        }
      }
    },
  methods:{
    getToAuchor(anchorId){
    // 使用replace方法可以保证前一次浏览不会在浏览器中保留记录
    window.location.replace(window.location.href.split('#')[0] + anchorId);
    },
    async loadBrands(){
      const res = await this.$axios.get('res/items',{
        params:{
          query:'',//模糊查询参数
          pageNum:this.pagination, //当前第几页
          pageSize:6,
        }
      })
      this.items = res.data.items
      // console.log("loadBrands",res.data ,this.total)
    }
  },
    async asyncData({ $axios }) {
    const res = await $axios.get('res/items', {
      params: {
        //当前第几页
        query: '',
        pageNum: 1,
        //显示几条
        pageSize: 6
      }
    })
    const total= Math.floor(parseInt(res.data.countNum)/7) + 1;
    // console.log('案例',res.data)
    return {
      items: res.data.items,
      total:total
    }
  }

}
</script>

<style>
.banner {
  background: url('../../assets/img/trust.png') no-repeat;
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

.father:hover p{
  cursor:pointer
}

.router-link-active{
 color: #000;
}
</style>

<template>
  <div class="home">
    <div class="home-slide">
      <router-link to="/home/nbanews"><span>新闻</span></router-link>
      <router-link to="/home/music"><span>音乐</span></router-link>
      <router-link to="/home/chat"><span>论坛</span></router-link>
      <router-link to="/home/look"><span>关注</span></router-link>
      <router-link to="/home/important"><span>重要</span></router-link>
      <router-link to="/home/all"><span>全部</span></router-link>
      <router-link to="/home/end"><span>完赛</span></router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <transition name="detailIn">
      <div class="new-detail" v-show="detailshow">
        <d-header :news="news"></d-header>
        <div class="d-main" v-if="contentWhat == 'detail'">
          <div class="d-title">{{news.content}}</div>
          <div class="d-tips">
            <span class="d-time">{{news.create_time}}</span>
          </div>
          <div class="d-bar">
            <img :src="news.img_path" alt="图片"/>
          </div>
          <p class="d-detail">{{news.detail}}{{news.detail}}{{news.detail}}{{news.detail}}</p>
          <b class="author">{{news.author}}</b>
        </div>
        <div class="ob" v-if="contentWhat == 'ob'">
          <div class="ob-tab">
            <ul>
              <li :class="line === 2 ? 'li-active' : ''" @click="goLine(2)">我的版块</li>
              <li :class="line === 1 ? 'li-active' : ''" @click="goLine(1)">东部球队</li>
              <li :class="line === 0 ? 'li-active' : ''" @click="goLine(0)">西部球队</li>
            </ul>
          </div>
          <div class="ob-content">
            <ul>
              <li v-for="item in nbaTeam" v-show="item.line === line || (item.myob && item.myob === 1 && line === 2)">
                <div class="ob-item-left">
                  <img :src="item.logo" alt="球队logo"/>
                  <div>
                    <span class="tname">{{item.name}}</span>
                    <span>主题:5260</span>
                    <span>回帖:225</span>
                  </div>
                </div>
                <div class="ob-item-right">
                  <span class="obed" v-if="item.myob && item.myob === 1" @click="delobteam(item.id)">已关注</span>
                  <span class="toob" v-else @click="addobteam(item.id)">关注</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import {mapState, mapGetters} from 'vuex'
  import dHeader from '../dHeader/dHeader.vue'
  export default{
    data() {
      return {
        nbaTeam: [],
        allLoaded: false,
        slideindex: 0,
        line: 2
      }
    },
    computed: {
      ...mapState({
        detailshow: state => state.detailModel,
        news: state => state.newsItem,
      }),
      ...mapGetters([
        'contentWhat'
      ])
    },
    mounted(){
      this.$router.push('/home/nbanews')
      this.$http.get('/api/nbateam').then((response) => {
        this.nbaTeam = response.data.data
      }, (response) => {
        console.log('网络错误')
      })
    },
    methods: {
      selectMode(event) {
        this.slideindex = event.target.getAttribute('slideindex')
        //this.slideindex = index
      },
      goLine(txt) {
        this.line = txt
      },
      delobteam(tid) {
        this.nbaTeam.forEach((item,index) => {
          if (item.id === tid) {
            delete item.myob
          }
        })
      },
      addobteam(tid) {
        this.nbaTeam.forEach((item,index) => {
          if (item.id === tid) {
            item.myob = 1
          }
        })
      }
    },
    components: {
      'd-header': dHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "home.styl";
</style>

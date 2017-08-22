<template>
  <div class="news">
    <mt-loadmore :top-method="loadTop" ref="toprefresh">
      <div class="top-menu">
        <span :class="{'new-active': newsindex === -1}" @click="selectNews(-1)">NBA</span>
        <template v-for="team in nbateam">
          <span :class="{'new-active': team.id === newsindex}" @click="selectNews(team.id)">{{team.name}}</span>
        </template>
      </div>
      <div class="news-ball" v-infinite-scroll="loadMore"
           infinite-scroll-disabled="busy"
           infinite-scroll-distance="10">
        <template v-for="news in newsAll" v-if="news.likeId === newsindex || newsindex === -1">
          <div class="newsItem" @click="detail(news)">
            <div class="img-content">
              <img :src="news.img_path"/>
            </div>
            <div class="text-content">
              <p class="main-content">{{news.content}}</p>
              <span class="createTime">{{news.create_time}}</span>
              <span class="repeat"><i class="fa fa-comment-o"></i>{{news.repeat}}</span>
            </div>
          </div>
        </template>
        <div class="loading" v-show="loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          <span class="loading-text">正在加载...</span>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore, InfiniteScroll, Spinner} from 'mint-ui'
  import {toast} from '../mintUi/mintUi'
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import dHeader from '../dHeader/dHeader.vue'
  Vue.use(InfiniteScroll)
  export default{
    data() {
      return {
        nbateam: [],
        newsAll: [],
        newsindex: -1,
        loading: false,
        news: {
          type: Object,
          default: {}
        }
      }
    },
    computed:{
      ...mapState({
        contentShow: state => state.contentShow
      })
    },
    mounted() {
      this.$http.get('/api/nbateam').then((response) => {
        this.nbateam = response.data.data
      }, (response) => {
        console.log('网络错误')
      })
      this.$http.get('/api/news').then((response) => {
        this.newsAll = response.data.data
      }, (response) => {
        console.log('网络错误')
      })
    },
    components: {
      'mtLoadmore': Loadmore,
      'mt-spinner': Spinner
    },
    methods: {
      loadTop() {
        setTimeout(() => {
          this.$http.get('/api/news').then((response) => {
            this.newsAll = response.data.data
          }, (response) => {
            console.log('网络错误')
          })
          this.$refs.toprefresh.onTopLoaded()
          toast('刷新成功')
        }, 2000)
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          this.$http.get('/api/news').then((response) => {
            this.newsAll = [...this.newsAll,...response.data.data];
            this.loading = false;
          }, (response) => {
            console.log('网络错误')
          })
        }, 2500);
      },
      selectNews(id) {
        this.newsindex = id;
      },
      fromdetail(news) {
        this.news = news;
        this.detailshow = true;
      },
      detail(news) {
        this.$store.dispatch('thisNews', {'news': news, 'title': '新闻详情','content':'detail'});
        this.$store.state.detailModel = true;
        console.log(this.contentShow)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../minxin/minxin.styl";
  @import "news.styl";
</style>

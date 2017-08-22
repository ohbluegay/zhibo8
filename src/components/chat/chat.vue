<template>
  <div class="chat">
    <mt-loadmore :top-method="loadTop" ref="toprefresh">
      <div class="chat-like">
        <div class="ob-title">
            <span class="ed-chat">
              已关注的版块
            </span>
          <span class="more" @click="viewMore()">更多<i class="fa fa-angle-right"></i></span>
        </div>
        <div class="mine-like">
          <template v-for="item in myob">
            <span class="ob-item">
              <img :src="item.logo" alt="图标"/>
              <span>{{item.name}}</span>
            </span>
          </template>
        </div>
      </div>
      <div class="repeat">
        <div class="ob-title">热门</div>
        <div class="ob-repeat">
          <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="10">
            <li v-for="item in repeat">
              <div class="pic">
                <img :src="item.avatar" alt="用户头像"/>
              </div>
              <div class="text">
                <p class="name">{{item.name}}</p>
                <div class="content">{{item.content}}</div>
                <div class="img" v-if="item.imgpic">
                  <img v-for="pic in item.imgpic" :src="pic" alt="发布图片"/>
                  <div class="blank"></div>
                </div>
                <div class="bottom-tips">
                  <span class="time">{{item.time}}</span>
                  <div class="loop">
                    <span class="zan"><i class="fa fa-thumbs-o-up"></i>2</span>
                    <span class="pin"><i class="fa fa-commenting-o"></i>25</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading" v-show="loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        <span class="loading-text">正在加载...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Loadmore, InfiniteScroll, Spinner} from 'mint-ui'
  import {toast} from '../mintUi/mintUi'
  import {mapState} from 'vuex'
  export default{
    data() {
      return {
        myob: [],
        repeat:[],
        loading: false
      }
    },
    mounted() {
      this.$http.get('/api/nbateam').then((rep) => {
        rep.data.data.forEach((item) => {
          if (item.myob && item.myob === 1) {
            this.myob.push(item)
          }
        })
      }, (rep) => {
        toast('网络错误...')
      })
      this.$http.get('/api/repeat').then((response) => {
        this.repeat = response.data.data
      }, (response) => {
        console.log('网络错误')
      })
    },
    methods: {
      loadTop() {
        setTimeout(() => {
          this.$http.get('/api/repeat').then((response) => {
            this.repeat = response.data.data
          }, (response) => {
            toast('网络错误')
          })
          this.$refs.toprefresh.onTopLoaded()
          toast('刷新成功')
        }, 2000)
      },
      viewMore() {
        this.$store.state.contentShow = 'ob';
        this.$store.state.childTitle = '版块';
        this.$store.state.detailModel = true;
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          this.$http.get('/api/repeat').then((response) => {
            this.repeat = [...this.repeat,...response.data.data];
            this.loading = false;
          }, (response) => {
            console.log('网络错误')
          })
        }, 2500);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "chat.styl";
</style>

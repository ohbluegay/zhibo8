<template>
  <div id="app">
    <head_top :logo="userimg"></head_top>
    <div class="zhibo8-content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul>
        <li>
          <router-link to="/home">
            <i class="fa fa-home"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/video">
            <i class="fa fa-toggle-right"></i>
            <span>视频</span>
          </router-link>
        </li>
        <li>
          <router-link to="/news">
            <i class="fa fa-id-card-o"></i>
            <span>新闻</span>
          </router-link>
        </li>
        <li>
          <router-link to="/chat">
            <i class="fa fa-file"></i>
            <span>论坛</span>
          </router-link>
        </li>
        <li>
          <router-link to="/number">
            <i class="fa fa-bar-chart-o"></i>
            <span>数据</span>
          </router-link>
        </li>
        <div class="blank"></div>
      </ul>
    </div>
  </div>
</template>

<script>
  import headTop from './components/header/index.vue'
  export default {
    name: 'app',
    data() {
      return {
        userimg: '../../../static/image/george.jpg'
      }
    },
    components: {
      head_top: headTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "index.styl";
</style>

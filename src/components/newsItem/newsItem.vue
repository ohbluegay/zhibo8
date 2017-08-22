<template>
  <div class="newsItem" @click="detail()">
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
<script type="text/ecmascript-6">
  import childHeader from '../header/childHeader.vue'
  export default {
    props: {
      news: {
        type: Object
      }
    },
    components: {
      'child-header': childHeader,
    },
    methods: {
      detail() {
        console.log(1)
        this.$emit('showdetail', this.news)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../minxin/minxin.styl";
  @import "newsItem.styl";
</style>

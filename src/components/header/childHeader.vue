<template>
  <div class="header">
    <div class="header-content">
      <div class="user-logo">
        <i class="fa fa-left"></i>
      </div>
      <div class="title">
        <span>直播8</span>
      </div>
      <div class="repeat">
        <span class="repeat-inner">{{repeat}}条评论</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
        repeat:{
            type:Number
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl"
</style>

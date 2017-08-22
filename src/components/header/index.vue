<template>
  <div class="header">
    <div class="header-content">
      <div class="user-logo">
        <img :src="logo"/>
      </div>
      <div class="title">
        <span>直播8</span>
      </div>
      <div class="shop">
        <i class="fa fa-gift"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      logo: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl";
</style>

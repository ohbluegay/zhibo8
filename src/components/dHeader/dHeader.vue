<template>
  <div class="d-header">
    <i class="fa fa-angle-left" @click="closeNewsDetail"></i>
    <span class="title">{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    computed: {
      title() {
        return this.$store.state.childTitle;
      }
    },
    props: {
      news: {
        type: Object
      }
    },
    methods: {
      closeNewsDetail() {
        this.$store.state.detailModel = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "dHeader.styl";
</style>

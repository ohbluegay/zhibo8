<template>
  <div>
    <m-video :sources="video.sources" :options="video.options"></m-video>
  </div>
</template>

<script type="text/ecmascript-6">
  import mVideo from 'vue-video'
  export default{
    data() {
       return {
         video: {
           sources: [{
             src: 'http://covteam.u.qiniudn.com/oceans.mp4',
             type: 'video/mp4'
           }],
           options: {
             autoplay: true,
             volume: 0.6,
             poster: 'http://covteam.u.qiniudn.com/poster.png'
           }
         }
       }
    },
    components: {
        'm-video': mVideo
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

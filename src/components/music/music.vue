<template>
  <div>
    <a-player ref="player" mode="order" mutex preload="metadata" :music="musicMode">
    </a-player>
    <div id="content">
      <h1>Micro Chat</h1>
      <div id="status"></div>
      <div id="thread">
      </div>
      <div>
        <textarea id="text" name="text"></textarea>
      </div>
      <div>
        <button id="send" @click="say">Send</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueAplayer from 'vue-aplayer'
  require('../../assets/js/jquery-1.11.1.min')
  require('../../assets/js/socket.io')
  require('../../assets/js/chat')
  export default{
    data() {
      return {
        musicMode: {
          title: '回レ！雪月花',
          author: '小倉唯',
          url: 'http://devtest.qiniudn.com/Preparation.mp3',
          pic: 'http://devtest.qiniudn.com/Preparation.jpg',
          lrc: './回レ！雪月花.lrc'
        }
      }
    },
    components: {
      'a-player': VueAplayer
    },
    mounted() {
      let aplay = this.$refs.player.control;
     // aplay.play()
      this.initialize()
    },
    methods: {
      say() {
        var words = $('#text').val();
        if ($.trim(words)) {
          socket.emit('say', {w: words});
          $('#text').val('');
        }
      },
      status(w) {
        $('#status').html(w);
      },
      initialize() {
        $(document).delegate('textarea', 'keydown', function (evt) {
          //console.info(evt.keyCode);
          if (evt.keyCode == 13 && evt.ctrlKey) {
            $('#send').focus().click();
          }
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

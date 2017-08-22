<template>
  <div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    mounted() {
      const [first, ...last] = [1, 2, -2, 3, 4, 5]
      console.log('first: '+first);
      console.log('last: '+last)
      console.log(Math.min(...last))
      console.log([...'hello'])
      const fun = () =>{
          console.log(fun.name)
      }
      fun()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

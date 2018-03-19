<template lang="html">
  <div class="container">
    <router-view></router-view>
    <footer-good></footer-good>
  </div>
</template>

<script>
import FooterGood from '@/components/common/FooterGood'
export default {
  //name: 'App'
  components:{
   
    FooterGood
  }
};
</script>

<style>

</style>


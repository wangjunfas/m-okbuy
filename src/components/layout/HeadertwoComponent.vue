<template lang="html">
  
  <header id="topheader">
    <a href="" class="headerback"><img src="../../assets/images/back.png"></a> 
    <span class="headername">{{navTitle}}</span>
    <a href="/" class="index"><img src="../../assets/images/goindex.png"></a>
  </header>
 
</template>

<script>

export default {
  name: 'Headertwo',
  props:['navTitle']
  
  
};
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset";

#topheader{
   background: #f5f5f5;
   width: 100%;
   height: .5rem;
   position: relative;
   overflow: hidden;
   @include flexbox();
   @include justify-content(space-between);
   img{
   	width: .4rem;
   	vertical-align: top;
    height: .5rem;
   }
   
   span{
   	line-height: .5rem;
   }
   a:nth-of-type(2) img{
      width: .5rem;
      height: .5rem;
   }

}
 </style>


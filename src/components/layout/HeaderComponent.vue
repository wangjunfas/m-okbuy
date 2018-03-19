<template lang="html">
  
    <div class="header">
      <router-link to="/"> 
        <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/logo.png" alt="">
      </router-link>
      <div class="search">
        <i class="iconfont">&#xe60e;</i>
      </div>
      <span class="login">
        <router-link to="/signin"> 
           <i>登录</i>
        </router-link>
      </span>
    </div>
 
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>

</style>


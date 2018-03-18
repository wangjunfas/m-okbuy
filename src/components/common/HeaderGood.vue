<template>
  <div class="header">
      <a href="#index">
        <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/common/logo.png" alt="">
      </a>
      <div class="search">
        <i class="yo-ico">&#xe60e;</i>
      </div>
      <span class="login">
         <router-link to="/user" tag="a">
          <i>登录</i>
        </router-link>
      </span>
    </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset.scss";
.header{
  height: .42rem;
  width: 100%;
  display: block;
  @include flexbox();
  @include align-items();
  @include justify-content();
  background: #f5f5f5;
  a{
    height: .42rem;
    width: .68rem;
    display: block;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .search{
    height: .26rem;
    border: 1px solid #dedede;
    background: #fff;
    @include border-radius(0.15rem);
    @include flex();
    @include flexbox();
    i{
      font-size: .14rem;
      color: #dedede;
      padding-right: .1rem; 
      @include flexbox();
      @include flex();
      @include justify-content(flex-end);
      }
    }
  .login{
    width: .40rem;
    height: 100%;
    text-align: center;
    a{
      width: 100%;
      height: 100%;
      text-align: center;
      @include flexbox();
      @include align-items();
      @include justify-content();
      @include flex-direction(column);
      font-size: .12rem;
      color: #666;
      i{
        font-size: .12rem;
      }
    }
  }
}
</style>


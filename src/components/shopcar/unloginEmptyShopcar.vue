<template>
    <div class="box">
        <div class="nowLogin"> 
            现在登录同步电脑和手机购物车中商品
            <router-link to="###" tag="a" class="login">登录</router-link>
        </div>
        
        <div class="empty-shopcar">


            <div class="empty-shopcar_title">购物车还空着呢，快去挑选商品吧</div>
           <div class="empty-another">
                 <router-link to="###" tag="button"  class="empty-btn">回首页</router-link>
                <router-link to="###" tag="button" class="empty-btn">我的收藏</router-link>
            </div>
           
        </div>
    </div>
	
    
</template>

<script>

</script>

<style lang="scss" scope="true">
    @import "../../styles/yo/usage/core/reset";
   .box{
         font-size:.12rem;
        .nowLogin{
           
            background:#fff;
            height:.44rem;
            @include flexbox();
            @include justify-content();
            @include align-items()
           .login{
                display:block;
                width:.5rem;
                @include flexbox();
                @include justify-content();
                @include align-items()
                color: #d70057;
           }
        }
        .empty-shopcar{
            @include flexbox(); 
            @include align-items()
            @include justify-content();

            @include flex-direction(column)
            .empty-shopcar_title{
                color:#999;
            }
            .empty-another{
                height:.7rem;
                @include flexbox(); 
                @include justify-content(space-around);
                .empty-btn{
                    width:1.2rem;
                    font-size:.12rem;
                    height:.4rem;
                    display: block;
                    color: #d70057;
                    text-align: center;
                    border: 1px solid #d70057;
                   
                }
                
            }
        }
   }
  
</style>

<template>
    <div class="box1">
        <div class="nowLogin"> 
            现在登录同步电脑和手机购物车中商品
            <router-link to="###" tag="a" class="login">登录</router-link>
        </div>
        
        <div class="empty-shopcar">
            <div class="empty-shopcar_icon">
                <i class="yo-ico big">&#xe6b8;</i>
            </div>

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

<style lang="scss">
    @import "../../styles/yo/usage/core/reset";
   .box1{
         font-size:.12rem;
        .nowLogin{
            background:#fff;
            height:.44rem;
            @include flexbox();
            @include justify-content();
            @include align-items();
           .login{
                display:block;
                width:.5rem;
                @include flexbox();
                @include justify-content();
                @include align-items();
                color: #d70057;
           }
        }
        .empty-shopcar{
            @include flexbox(); 
            @include align-items();
            @include justify-content();
            @include flex-direction(column);
            .big{
                margin-top:.4rem;
                font-size:.7rem;
                font-weight:normal;
                color:#999;
            }
            .empty-shopcar_title{
                height:.6rem;
                color:#999;
                @include flexbox(); 
                 @include align-items()
            }
            .empty-another{
                height:.7rem;
                @include flexbox(); 
                @include justify-content(space-around);
                .empty-btn{
                    margin:0 .15rem;
                    width:1.2rem;
                    font-size:.12rem;
                    height:.4rem;
                    display: block;
                    color: #d70057;
                    text-align: center;
                    background:#eee;
                    border: 1px solid #d70057;
                }
                
            }
        }
   }
  
</style>

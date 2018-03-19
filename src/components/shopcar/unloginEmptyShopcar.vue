<template>
<<<<<<< HEAD
    <div class="box">
=======
    <div class="box1">
>>>>>>> 项目初体验
        <div class="nowLogin"> 
            现在登录同步电脑和手机购物车中商品
            <router-link to="###" tag="a" class="login">登录</router-link>
        </div>
        
        <div class="empty-shopcar">
<<<<<<< HEAD


            <div class="empty-shopcar_title">购物车还空着呢，快去挑选商品吧</div>
=======
            <div class="empty-shopcar_icon">
                <i class="yo-ico big">&#xe6b8;</i>
            </div>

            <div class="empty-shopcar_title">购物车还空着呢，快去挑选商品吧</div>

>>>>>>> 项目初体验
           <div class="empty-another">
                 <router-link to="###" tag="button"  class="empty-btn">回首页</router-link>
                <router-link to="###" tag="button" class="empty-btn">我的收藏</router-link>
            </div>
           
        </div>
    </div>
	
    
</template>

<script>

</script>

<<<<<<< HEAD
<style lang="scss" scope="true">
    @import "../../styles/yo/usage/core/reset";
   .box{
         font-size:.12rem;
        .nowLogin{
           
=======
<style lang="scss">
    @import "../../styles/yo/usage/core/reset";
   .box1{
         font-size:.12rem;
        .nowLogin{
>>>>>>> 项目初体验
            background:#fff;
            height:.44rem;
            @include flexbox();
            @include justify-content();
<<<<<<< HEAD
            @include align-items()
=======
            @include align-items();
>>>>>>> 项目初体验
           .login{
                display:block;
                width:.5rem;
                @include flexbox();
                @include justify-content();
<<<<<<< HEAD
                @include align-items()
=======
                @include align-items();
>>>>>>> 项目初体验
                color: #d70057;
           }
        }
        .empty-shopcar{
            @include flexbox(); 
<<<<<<< HEAD
            @include align-items()
            @include justify-content();

            @include flex-direction(column)
            .empty-shopcar_title{
                color:#999;
=======
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
>>>>>>> 项目初体验
            }
            .empty-another{
                height:.7rem;
                @include flexbox(); 
                @include justify-content(space-around);
                .empty-btn{
<<<<<<< HEAD
=======
                    margin:0 .15rem;
>>>>>>> 项目初体验
                    width:1.2rem;
                    font-size:.12rem;
                    height:.4rem;
                    display: block;
                    color: #d70057;
                    text-align: center;
<<<<<<< HEAD
                    border: 1px solid #d70057;
                   
=======
                    background:#eee;
                    border: 1px solid #d70057;
>>>>>>> 项目初体验
                }
                
            }
        }
   }
  
</style>

<template>
	<div  class="box2">
        <div class="youTitle">
            <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/cart/recommend.png">
            为你推荐
            <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/cart/recommend.png">
        </div>
        <div class="goodsComm">
            <div class="shopcarGoodsList">
                <img src="../../assets/shopcarGoodslistDemo.jpg" alt="">
                <div class="recommend-title">Nike耐克&nbsp;男式&nbsp;AIR MAX MOTION RACER 运动跑步鞋</div>
            </div>
             <div class="shopcarGoodsList">
                <img src="../../assets/shopcarGoodslistDemo.jpg" alt="">
            </div>
             <div class="shopcarGoodsList">
                <img src="../../assets/shopcarGoodslistDemo.jpg" alt="">
                <div class="recommend-title">Nike耐克&nbsp;男式&nbsp;AIR MAX MOTION RACER 运动跑步鞋</div>
                <div>
                      <span class="youprice">¥505</span>
                        <span class="youoffer">新品</span>
                        <span class="youoffer">特价</span>   
                </div>
            </div>
             <div class="shopcarGoodsList">
                <img src="../../assets/shopcarGoodslistDemo.jpg" alt="">
            </div>
        </div>
	</div>
</template>
<script>

</script>
<style lang="scss" scope="true">
    @import "../../styles/yo/usage/core/reset";
     .box2{
        overflow-y:scroll;
        .youTitle{
            @include flexbox();
            @include justify-content();
            @include align-content(center);
        }
        .goodsComm{
            background:#fff;
            @include flexbox();
            @include flex-wrap(wrap);                    
            .shopcarGoodsList{
                width:50%;
                height:2.50rem;
                img{
                    width:1.5rem;
                    height:1.5rem;
                }
                .recommend-title{

                }
            }
        }
     
    }
    
    
</style>

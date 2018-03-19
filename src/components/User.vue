<template>
	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
<<<<<<< HEAD
	</div>
</template>
<script>
import HeaderList from '@/components/common/HeaderList'
export default{
    components: {
        HeaderList
    },
    data:()=>{
    	return {
			mess: "用户"
    	}
	}

}
</script>
<style lang="scss" scope="false">

</style>
=======
        <div class="main">	
			<div class="member-head">
				<div class="headcontent">
					<span class="userphotobox">
						<img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/userphoto.png" alt="">
					</span>
					<h5 class="username">{{"username"}}</h5>
				</div>
	    	</div>	
			<div class="member-body">
			<div class="member-toppart">
	            <router-link to="/user/order">
	            	<p class="allline"><span class="allorder">我的订单</span></p>
	            </router-link>
	            <div class="orderbox">
	                <div class="orderitem">
	                    <a href="/ucenter/orders/index?style=no">
	                        <div class="memberorder">
	                            <span class="thumb payorder"></span>
	                            <span class="ordertext">待支付</span>
	                        </div>
	                    </a>
	                </div>
	                <div class="orderitem">
	                    <a href="/ucenter/orders/index?style=nosend">
	                        <div class="memberorder">
	                            <span class="thumb bedelivered"></span>
	                            <span class="ordertext">待发货</span>
	                        </div>
	                    </a>
	                </div>
	                <div class="orderitem">
	                    <a href="/ucenter/orders/index?style=noget">
	                        <div class="memberorder">
	                            <span class="thumb bereceived"></span>
	                            <span class="ordertext">待签收</span>
	                        </div>
	                    </a>
	                </div>
	                <div class="orderitem">
	                    <a href="/ucenter/returns/index">
	                        <div class="memberorder">
	                            <span class="thumb bereturned"></span>
	                            <span class="ordertext">退货换货</span>
	                        </div>
	                    </a>
	                </div>
	            </div>
            </div>
            <div class="member-centerpart">
	            <a href="/ucenter/wish/index">
	                <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/ulike.png">
	                <span class="comment">我的收藏</span>
	            </a>
	             <a href="/user/invite/app_invite?id=79">
	                <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/uinvite.png">
	                <span class="comment">邀请好友得优惠</span>
	            </a>
	            <a href="/ucenter/coupon/index">
	                <span class="coupon">
	                    <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/uconpon.png">
	                </span>
	                <span class="comment">优惠券</span>
	            </a>
	            <a href="/ucenter/address/index">
	                <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/uaddress.png">
	                <span class="comment">收货地址</span>
	            </a>
	            <a href="/ucenter/truename/index">
	                <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/urealname.png">
	                <span class="comment">实名认证</span>
	            </a>
	            <a href="/help/help/index">
	                <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/uhelp.png">
	                <span class="comment">帮助中心</span>
	            </a>
	        </div>
	        <div class="exitmemberwrap">
                <mt-button size="large" type="danger" @click="doSignout">退出登录</mt-button>
            </div>
		</div>	
        </div>
	</div>
</template>
<script>
import Vue from "vue";
import HeaderList from '@/components/common/HeaderList';
import axios from 'axios';
import webStorage from 'web-storage-cache';
import { Button } from 'mint-ui';
export default{
	components: {
		HeaderList,
		wsCache:new webStorage(),
		[Button.name]:Button
    },
    data:()=>{
    	return {
            mess: "用户"
    	}
	},
	 methods:{
    	doSignout(){
			console.log(1)
		  this.wsCache.delete('username')
		  this.wsCache.delete('token')
		  location.hash="#/signin"
		  console.log('ddd')
    	}
    }
}
</script>
<style lang="scss" scope="true">
@import "../styles/yo/usage/core/reset";
.member-head {
    height: 1rem;
    margin-bottom: .1rem;
    background: url(../assets/images/memberbg.jpg) no-repeat;
    background-size: 100% auto;
    .headcontent {
    	height: 1rem;
	    padding: .2rem;
	    overflow: hidden;
	    position: relative;
	    .userphotobox {
		    float: left;
		    width: .6rem;
		    height: .6rem;
		    border-radius: .3rem;
		    margin-right: .1rem;
		    background-color: #fcf6fc;
		    box-shadow: 0 0 0 0.05rem rgba(255,255,255,0.4);
		    img{
		    	width:100%;
		    }

		}
		.username {
		    line-height: .6rem;
		    color: #fff;
		    font-size: .15rem;
		}
	}
}
.member-body{
	.member-toppart {
	    overflow: hidden;
	    margin-bottom: .1rem;
	    padding-bottom: .1rem;
	    background-color: #fff;
	    .allline {
		    height: .46rem;
		    padding: .13rem .1rem .13rem 0;
		    background: #fff url(../assets/images/arr.png) 96% center no-repeat;
		    background-size: .06rem .11rem;
		    @include border(0 0 1px 0,#eee,solid);
		    .allorder {
			    display: block;
			    padding-left: .14rem;
			    height: .2rem;
			    line-height: .2rem;
			    color: #333;
			    font-size: .15rem;
			}
		}
	}
}
.orderbox{
	@include flexbox();
	.orderitem{
		@include flex();
		.memberorder {
		    width: 1rem;
		    height: .5rem;
		    margin: .2rem auto .1rem;
		    .ordertext {
			    display: block;
			    text-align: center;
			    color: #333;
			    font-size: .14rem;
			}
			.thumb{
			    display: block;
			    margin: 0 auto .08rem;
			    position: relative;
			    width: .26rem;
			    height: .26rem;
			}
			.payorder {
			    background: url(../assets/images/bepaid.png) no-repeat;
			    background-size: 100% 100%;

			}
			.bedelivered {
			    background: url(../assets/images/bedelivered.png) no-repeat;
			    background-size: 100% 100%;
			}
			.bereceived {
			    background: url(../assets/images/bereceived.png) no-repeat;
			    background-size: 100% 100%;
			}
			.bereturned {
			    background: url(../assets/images/bereturned.png) no-repeat;
			    background-size: 100% 100%;
			}
		}
	}
}
.member-centerpart {
    margin: .1rem 0;
    background: #fff;
    @include flexbox();
    @include flex-wrap(wrap);
    @include justify-content(flex-start);
    a{
    	width:25%;
	    padding: .24rem 0 .2rem;
	    text-align: center;
	    @include border(0 0 1px 0,#e8e8e8,solid);
	    @include flexbox();
	    @include flex-direction(column);
	    img {
		    width: .22rem;
		    height: .22rem;
		    margin: 0 auto .12rem;
		}
		.comment {
		    display: block;
		    text-align: center;
		    font-size: .13rem;
		    color: #666;
		}
    }
}
.exitmemberwrap{
	padding: .1rem;
}
.mint-button{
    height: .35rem;
    background: #d70057;
    font-size: .15rem;
  }

</style>
>>>>>>> 项目初体验

<template>
	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
        <div class="main">
<<<<<<< HEAD
            <mt-navbar v-model="selected">
=======
            <mt-navbar v-model="selected" class="timeList">
>>>>>>> 项目初体验
				<mt-tab-item id="1" class="li">全部</mt-tab-item>
				<mt-tab-item id="2">最新</mt-tab-item>
				<mt-tab-item id="3">鞋类</mt-tab-item>
				<mt-tab-item id="4">服饰</mt-tab-item>
				<mt-tab-item id="5">包配</mt-tab-item>
				<mt-tab-item id="6">儿童</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
<<<<<<< HEAD
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
=======
			<mt-tab-container v-model="selected" class="tabTime">
				<mt-tab-container-item id="1">
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
								<p>满99减5 满199减20 满289减50</p>
>>>>>>> 项目初体验
							</a>
						</li>
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
<<<<<<< HEAD
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
=======
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
							</a>
						</li>
					</ul>
					<div class="timeSale">
						<h3>特卖预告</h3>
						<ul>
							<li>
								<div class="saleList"><img src="../assets/time02.jpg" alt=""></div>
								<b></b>
								<p><span>03月19日10:00 火爆开抢</span></p>							
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
>>>>>>> 项目初体验
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
<<<<<<< HEAD
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
=======
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
>>>>>>> 项目初体验
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
<<<<<<< HEAD
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
=======
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
							</a>
						</li>
					</ul>
					<div class="timeSale">
						<h3>特卖预告</h3>
						<ul>
							<li></li>
						</ul>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
>>>>>>> 项目初体验
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
<<<<<<< HEAD
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
=======
					<ul class="timeListO">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<span class="itemSpan">仅剩下5天</span>
								<div class="tabTitle"><span>89元起</span><span>无畏无惧 </span><span>满100减20上不封顶,满100减20上不封顶满100减20上不封顶</span></div>
>>>>>>> 项目初体验
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
        </div>
	</div>
</template>
<script>
import Vue from "vue";
import HeaderList from '@/components/common/HeaderList';
import axios from 'axios';
import { TabContainer,TabContainerItem, Navbar, TabItem } from "mint-ui";
export default{
    components: {
        HeaderList,
        [TabContainer.name]: TabContainer,
		[TabContainerItem.name]: TabContainerItem,
    	[Navbar.name]: Navbar,
		[TabItem.name]: TabItem
    },
    data:()=>{
    	return {
            mess: "限时特卖",
            selected: "1",
    	}
    }
}
</script>
<<<<<<< HEAD
<style lang="scss" scope="false">
@import "../styles/yo/usage/core/reset";
.main{
	background: #f5f5f5;
	.mint-navbar{
		@include flexbox();
		height: .36rem;	
		margin-bottom: .04rem;
		.mint-tab-item{
=======
<style lang="scss" scope="true">
@import "../styles/yo/usage/core/reset";
.main{
	background: #f5f5f5;
	height: 100%;
	width: 100%;
	@include flex();
	.timeList{
		@include flexbox();
		height: .36rem;	
		margin-bottom: .04rem;
		>.mint-tab-item{
>>>>>>> 项目初体验
			width:100%;
			@include flexbox();
			color: #1c1c1c;
			@include border(0 0 1px 0, #d6d6d6, solid);
<<<<<<< HEAD
			.mint-tab-item-label{
=======
			>.mint-tab-item-label{
>>>>>>> 项目初体验
				@include flex();
				font-size: .12rem;
			}
		}
<<<<<<< HEAD
		.mint-tab-item.is-selected{
=======
		>.mint-tab-item.is-selected{
>>>>>>> 项目初体验
			color: #d20044;
			border-bottom: 0;
			@include border(0 0 1px 0,#d20044);
			margin-bottom: 1px;
		}		
	}
<<<<<<< HEAD
=======
	.tabTime{
		.timeListO{
			width: 100%;
			background: #f5f5f5;
			>li{
				width: 100%;
				background: #fff;
				margin-bottom: .04rem;
				>a{
					height: 100%;
					width: 100%;
					display: block;
					position: relative;
					>.listPicture{
						height: 1.1rem;
						width: 100%;
						>img{
							height: 100%;
							width: 100%;
						}
					}
					>.itemSpan{
						position: absolute;
						right: 0;
						top: 0;
						background:rgba(0,0,0,0.5);
						color: #fff;
						width: .66rem;
						height: .18rem;
						line-height: .18rem;
						text-align: center;
						font-size: .12rem;
					}
					>.tabTitle{
						height: .30rem;
						line-height: .16rem;
						width: 100%;
						padding: .07rem;
						@include flexbox();
						@include flex-direction();
						>span{
							font-size: .12rem;
							color: #515151;							
							&:nth-child(1){
								color: #d70057;
								padding-right: .08rem;								
							}
							&:nth-child(2){
								padding-right: .08rem;								
							}
							&:nth-child(3){		
								@include flex();
								overflow:hidden;
								text-overflow:ellipsis;
								white-space:nowrap;					
							}
						}
					}
					>p{
						height: .22rem;
						line-height: .16rem;
						font-size: .12rem;
						color: #999;
						padding: 0 .06rem .06rem;
					}
				}
			}
		}
		.timeSale{
			margin-top: .08rem;
			background: #f5f5f5;
			>h3{
				height: .26rem;
				line-height: .26rem;
				padding: 0 0.08rem;
				background: #fff;
				color: #333;
				font-size: .12rem;
			}
			>ul{
				width: 100%;
				>li{
					height: 100%;
					width: 100%;
					position: relative;
					>.saleList{
						width: 100%;
						height: 1.1rem;					
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>b{
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						background: rgba(0,0,0,0.5);
					}
					>p{
						position: absolute;
						left: 0;
						top: 50%;
						margin-top: -0.1rem;
						text-align: center;
						width: 100%;
						>span{
							padding: .02rem .1rem;
							border-radius: 1rem;
							color: #fff;
							font-size: .12rem;
							background: rgba(0,0,0,0.5);
						}
					}
				}
			}
		}
	}
>>>>>>> 项目初体验
}
</style>
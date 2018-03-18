<template>
	<div class="box">
		 <header-good></header-good>
  	<div class="main">
		
			<!-- banner -->
			<mt-swipe :auto="2000">
					<mt-swipe-item  v-for="(v,i) in bannerList" :key="i"><a href="##"><img :src="`http://10.9.163.61:3333/uploads/${v.image}`" alt=""></a></mt-swipe-item>
			</mt-swipe>
			<!-- benner end -->
			<!-- 品牌分类 -->
			<div class="indexBox">
				<a href="##"><img src="../assets/box01.gif" alt=""></a>
				<a href="##"><img src="../assets/box02.png" alt=""></a>
				<a href="##"><img src="../assets/box03.png" alt=""></a>
				<a href="##"><img src="../assets/box04.png" alt=""></a>
			</div>
			<div class="indexBox">
				<a href="##"><img src="../assets/box05.png" alt=""></a>
				<a href="##"><img src="../assets/box06.png" alt=""></a>
				<a href="##"><img src="../assets/box07.png" alt=""></a>
				<a href="##"><img src="../assets/box08.png" alt=""></a>
			</div>
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">全部</mt-tab-item>
				<mt-tab-item id="2">服饰</mt-tab-item>
				<mt-tab-item id="3">最新</mt-tab-item>
				<mt-tab-item id="4">鞋类</mt-tab-item>
				<mt-tab-item id="5">儿童</mt-tab-item>
				<mt-tab-item id="6">包配</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="indexList">
						<li v-for="(n,i) in tabOne" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul class="indexList">
						<li v-for="(n,i) in tabTwo" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<ul class="indexList">
						<li v-for="(n,i) in tabThree" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
					<ul class="indexList">
						<li v-for="(n,i) in tabFour" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
					<ul class="indexList">
						<li v-for="(n,i) in tabFour" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
					<ul class="indexList">
						<li v-for="(n,i) in tabTwo" :key="i">
							<a href="#">
								<div class="listPicture"><img :src="`http://10.9.163.61:3333/uploads/${n.image}`" alt=""></div>
								<div class="listTitle"><span>{{n.title1}}</span><span>{{n.title2}}</span></div>
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
import HeaderGood from '@/components/common/HeaderGood'
import axios from 'axios';
import { Swipe, SwipeItem,TabContainer,TabContainerItem, Navbar, TabItem } from "mint-ui";
export default {
  	components: {
    	[Swipe.name]: Swipe,
    	[SwipeItem.name]: SwipeItem,
		[TabContainer.name]: TabContainer,
		[TabContainerItem.name]: TabContainerItem,
    	[Navbar.name]: Navbar,
		[TabItem.name]: TabItem,
		HeaderGood,
  	},
  	data:()=>{
    	return {
			selected: "1",
			bannerList:[],
			tabOne:[],
			tabTwo:[],
			tabThree:[],
			tabFour:[]
    	}
	},
	mounted(){
		axios({
			url:'/api/banner/list/0'
		}).then((result)=>{
			this.bannerList=result.data.data.result
		})
		axios({
			url:'/api/list/list/0'
		}).then((result)=>{
			this.tabOne=result.data.data.result
		})
		axios({
			url:'/api/list/list/1'
		}).then((result)=>{
			this.tabTwo=result.data.data.result
		})
		axios({
			url:'/api/list/list/2'
		}).then((result)=>{
			this.tabThree=result.data.data.result
		})
		axios({
			url:'/api/list/list/3'
		}).then((result)=>{
			this.tabFour=result.data.data.result
		})
		axios({
			url:'/api/list/list/4'
		}).then((result)=>{
			this.tabFive=result.data.data.result
		})

	}
}
</script>

<style lang="scss" scope="false">
@import "../styles/yo/usage/core/reset";
.main{
	background: #fff;
	.mint-swipe {
		height: 1.1rem;
		width: 100%;
		a {
			height: 100%;
			width: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.mint-swipe-indicators {
			bottom: 0.02rem;
			.mint-swipe-indicator {
				background: #fff;
				opacity: 1;
			}
			.mint-swipe-indicator.is-active {
				background: #d70057;
			}
		}
	}
	.indexBox {
		height: 0.73rem;
		width: 100%;
		@include flexbox();
		padding: 0 0.1rem;
		a {
			height: 100%;
			@include flex();
			@include flexbox();
			@include align-items();
			@include justify-content();
			img {
				height: 0.66rem;
				width: 0.5rem;
			}
		}
	}
	.mint-navbar{
		@include flexbox();
		padding-left: .1rem;
		height: .36rem;	
		margin-bottom: .04rem;
		.mint-tab-item{
			width: .4rem;
			flex: none;
			color: #1c1c1c;
			.mint-tab-item-label{
				font-size: .12rem;
			}
		}
		.mint-tab-item.is-selected{
			color: #d20044;
			border-bottom: 2px solid #d20044;
			bottom: 2px;
			margin-bottom: 3px;
		}		
	}
	.indexList{
		height: 100%;
		width: 100%;
		li{
			width: 100%;
			a{
				height: 100%;
				width: 100%;
				display: block;
				.listPicture{
					height: 1.5rem;
					width: 100%;
					img{
						height: 100%;
						width: 100%;
					}
				}
				.listTitle{
					height: .42rem;
					width: 100%;
					margin: 0 .06rem .07rem;
					@include flexbox();
					@include align-items();
					@include justify-content();
					@include border(0 0 1px 0);
					span{
						font-size: .12rem;
						color: #d0003b;
						&:nth-child(2){
							padding-left: .14rem; 
							@include flex();
							color: #2c2c2c;
						}
					}
				}
			}
		}
	}
}
</style>


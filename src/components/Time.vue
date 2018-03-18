<template>
	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
        <div class="main">
            <mt-navbar v-model="selected">
				<mt-tab-item id="1" class="li">全部</mt-tab-item>
				<mt-tab-item id="2">最新</mt-tab-item>
				<mt-tab-item id="3">鞋类</mt-tab-item>
				<mt-tab-item id="4">服饰</mt-tab-item>
				<mt-tab-item id="5">包配</mt-tab-item>
				<mt-tab-item id="6">儿童</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="indexList">
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
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
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
							</a>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
						<ul class="indexList">
						<li>
							<a href="#">
								<div class="listPicture"><img src="../assets/time01.jpg" alt=""></div>
								<div class="listTitle"><span>89元起</span><span>无畏无惧 满100减20上不封顶</span></div>
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
<style lang="scss" scope="false">
@import "../styles/yo/usage/core/reset";
.main{
	background: #f5f5f5;
	.mint-navbar{
		@include flexbox();
		height: .36rem;	
		margin-bottom: .04rem;
		.mint-tab-item{
			width:100%;
			@include flexbox();
			color: #1c1c1c;
			@include border(0 0 1px 0, #d6d6d6, solid);
			.mint-tab-item-label{
				@include flex();
				font-size: .12rem;
			}
		}
		.mint-tab-item.is-selected{
			color: #d20044;
			border-bottom: 0;
			@include border(0 0 1px 0,#d20044);
			margin-bottom: 1px;
		}		
	}
}
</style>
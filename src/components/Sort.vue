<template>	
    <div class="box">
        <header-good></header-good>
<<<<<<< HEAD
        <div class="mian">asdfasd</div>
    </div>
</template>
<script>
import HeaderGood from '@/components/common/HeaderGood'
export default{
    components: {
        HeaderGood
    }
}
</script>
<style lang="scss">

=======
        <div class="mian">
			<mt-swipe :auto="4000" class="detailsBanner">
				<mt-swipe-item><img src="../assets/banner01.jpg"/></mt-swipe-item>
				<mt-swipe-item><img src="../assets/banner01.jpg"/></mt-swipe-item>
				<mt-swipe-item><img src="../assets/banner01.jpg"/></mt-swipe-item>
			</mt-swipe>
			<div class="proinfowrap">
				<div class="proin">
					<span class="proOne"><i>¥</i><em>549</em></span>
					<span class="proTwo"><i>¥</i><em>549</em></span>
				</div>	
				<p>男式 耐克LUNARCHARGE ESSENTIAL 时尚休闲运动鞋</p>	
			</div>
			<div class="activitywrap">
				<a href="##">
					<span>特价</span>
					<i>NIKE 好鞋好价》</i>
				</a>
			</div>
			<div class="prodetailwrap">
				<div class="prodetailmain">
					<h4>颜色</h4>
					<ul>
						<li>
							<a href=""><img src="../assets/tab01.jpg" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/tab01.jpg" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/tab01.jpg" alt=""></a>
						</li>
						<li>
							<a href=""><img src="../assets/tab01.jpg" alt=""></a>
						</li>
					</ul>
				</div>
				<div class="prodetailmain">
					<h4><em>尺码</em><a href="##">颜色对照表</a></h4>
					<ul>
						<li class="liItem">ddd</li>
						<li class="liItem">33</li>
						<li class="liItem">33.3</li>
						<li class="liItem">22.2</li>
						<li class="sizeitem">ddd</li>
						<li class="sizeitem">33</li>
						<li class="sizeitem">33.3</li>
						<li class="sizeitem">22.2</li>
					</ul>
				</div>
			</div>
			<div class="brand_more">
				<a href="">
					<p><img src="../assets/item.jpg" alt=""><span>NIKE耐克</span></p>
					<span><em>更多</em><i class="yo-ico">&#xe648;</i></span>
				</a>
			</div>
			<mt-navbar v-model="selected" class="tabDetails" ref="viewBox">
				<mt-tab-item id="1">图文详情</mt-tab-item>
				<mt-tab-item id="2">评论晒图</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected" class="tabDetailsList">
				<mt-tab-container-item id="1">
					<ul>
						<li>
							<p><span>商品编号</span><span>17555039</span></p>
						</li>
						<li>
							<p><span>性别</span><span>男</span></p>
						</li>
						<li>
							<p><span>鞋面材质</span><span>牛皮革,织物</span></p>
						</li>
						<li>
							<p><span>鞋帮</span><span>中帮</span></p>
						</li>
						<li>
							<p><span>闭合方式</span><span>系带</span></p>
						</li>
						<li>
							<p><span>功能</span><span>轻便,透气</span></p>
						</li>
						<li>
							<p><span>季节</span><span>夏天</span></p>
						</li>
						<li>
							<p><span>应季功能</span><span>12月,10月,9月,7月,4月,2月</span></p>
						</li>
						<li><img src="../assets/banner03.jpg" alt=""></li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul>
						<li>
							<img src="../assets/pin.png" alt="">
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
    </div>
</template>
<script>
import Vue from "vue";
import HeaderGood from '@/components/common/HeaderGood';
import { Swipe, SwipeItem,Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
export default{
    components: {
		HeaderGood,
		[Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem,
		[Navbar.name]:Navbar,
		[TabItem.name]:TabItem,
		[TabContainer.name]:TabContainer,
		[TabContainerItem.name]:TabContainerItem
    },
    data:()=>{
    	return {
			mess: "用户",
			selected:"1",
			scroll: ''
    	}
	},
	mounted(){
// 		window.addEventListener('scroll',this.handleScroll)
// 		console.log(this.$refs.viewBox)
// 		this.box=this.$refs.viewBox
// 		this.box.addEventListener('scroll', () => {
//   console.log(this.$refs.viewBox.scrollTop)
// }, false)
		console.log(this.$refs.viewBox)
	},
	methods:{
   	 	handleScroll(e){
			console.log(e)
			console.log(this.$refs.viewBox.scrollTop)
    	}
	}
}
</script>
<style lang="scss" scope="false">
@import "../styles/yo/usage/core/reset";
.mian{
	overflow-y: scroll;
	@include flex();
	height: 100%;
	width: 100%;
	>.detailsBanner {
		background: #fff;
		height: 3.54rem;
		width: 100%;
		.mint-swipe-item {
			height: 3.2rem;
			width: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.mint-swipe-indicator{
			background: #ccc;
			opacity: 1;
			&.is-active{
				background: #c4466c;
				opacity: 1;
			}
		}	
	}
	>.proinfowrap{
		background: #fff;
		height: .74rem;
		width: 100%;
		@include flexbox();
		@include flex-direction(column);
		@include border(1px 0 0 0,#e0e0e0);
		padding: .16rem .08rem .12rem;
		>.proin{
			height: .22rem;
			line-height: .22rem;
			margin-bottom: .10rem;
			.proOne{
				margin-right: .08rem;
				color: #d70057;
				>i{
					font-size: .12rem;
				}
				>em{
					font-size: .2rem;
				}
			}
			.proTwo{
				color: #c3c3c3;
				text-decoration: line-through;
			}
		}
		p{
			height: .14rem;
			line-height: .14rem;
			color: #333;
			font-size: .12rem;
		}
	}
	>.activitywrap{
		background: #fff;
		height: .42rem;
		width: 100%;
		padding: .12rem;
		line-height: .18rem;
		>a{
			height: 100%;
			width: 100%;
			display: block;
			color: #8b8b8b;
			font-size: .12rem;
			>span{
				display: inline-block;
				padding: 0 .1rem;
				background: #d70057;
				color: #fff;
				border-radius: .04rem;
				margin-right: .04rem;
			}
		}
	}
	>.prodetailwrap{
		background: #fff;
		padding-left: .08rem;
		margin-bottom: .08rem;
		>.prodetailmain{
			h4{
				padding: .17rem 0 .1rem;
				line-height: .12rem;
				font-size: .12rem;
				color: #333;
				@include flexbox();
				em{
					@include flex();
				}
				a{
					padding-right: .1rem;
					color: #d70057;
					font-size: .12rem;
				}
			}
			ul{
				margin-right: .08rem;
				width: 100%;
				@include flexbox(); 
				@include flex-wrap(wrap);
				li{
					@include border(1px,#e0e0e0);
					height: .34rem;
					width: .34rem;
					margin-right: .06rem;
					margin-bottom: .06rem;
					a{
						height: 100%;
						width: 100%;
						display: block;
						>img{
							height: 100%;
							width: 100%;
						}
					}
					&.liItem{
						height: .34rem;
						width: .52rem;
						background: #f4f4f4;
						color: #ccc;
						line-height: .34rem;
						text-align: center;
						@include border(0);
						@include border-radius(.06rem);
					}
					&.sizeitem{
						height: .34rem;
						width: .52rem;
						background: #f4f4f4;
						color: #333;
						line-height: .34rem;
						text-align: center;
						@include border(0);
						@include border-radius(.06rem);
					}				
				}
			}
		} 
	}
	>.brand_more{
		background: #fff;
		height: .34rem;
		margin: .08rem 0;
		padding: 0 .08rem;
		a{
			height: 100%;
			width: 100%;
			display: block;
			color: #000;
			@include flexbox();
			>p{
				@include flex();
				line-height: .34rem;
				img{
					height: .12rem;
					width: .34rem;
				}
				span{
					margin-left: .08rem;
					font-size: .12rem;					
				}
			}
			>span{
				line-height: .34rem;
				color: #8a8a8a;
				@include flexbox();
				@include align-items();
				@include justify-content();
				font-size: .12rem;
				i{
					margin-top: -0.04rem;
				}
			}
		}
	}
	>.tabDetails{
		height: .38rem;
		line-height: .38rem;
		@include border(0 0 1px 0,#e0e0e0);
		>a{
			color: #666;
			font-size: .12rem;
			&.is-selected{
				color: #d70057;
				border-bottom:0px;
				margin-bottom:0;
				@include border(0 0 2px 0,#d70057);
			}
		}
		&.active{
			position : fixed;
			left :0;
			top: 0.42rem;
		}
	}
	>.tabDetailsList{
		background: #fff;
		ul li{
			height: 100%;
			@include flexbox();
			@include flex-direction(column);
			padding: 0 0.08rem;
			p{
				height: .36rem;
				width: 100%;
				line-height: .36rem;				
				@include flexbox();
				@include border(0 0 1px 0,#e0e0e0);
				span{
					color: #818181;
					font-size: .12rem;
					&:nth-child(1){
						width: .9rem;
					}
					&:nth-child(2){
						@include flex();
					}
				}
			}
			img{
				height: 2.34rem;
				margin-top: .08rem;
			}
		}
	}
}
>>>>>>> 项目初体验
</style>

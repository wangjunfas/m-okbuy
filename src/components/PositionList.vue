<template lang="html">
  <div class="position-list">
    <headertwo-component navTitle="我的好乐买"></headertwo-component>
    <div class="main">
      <div class="topicsortitem">
        <div class="topicsort">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">默认</mt-tab-item>
            <mt-tab-item id="2">销量</mt-tab-item>
            <mt-tab-item id="3">价格</mt-tab-item>
            <mt-tab-item id="4">折扣</mt-tab-item>
            <mt-tab-item id="5" ><div @click="rightScreen">筛选</div></mt-tab-item>
            <mt-popup 
              v-model="popupVisible"
              position="right"
              modal="false">
              <!-- 分类 -->
              <div class="sidefilter">
                <div class="filter1">
                  <div class="top">
                    <span>分类</span>
                    <i class="arrow iconfont">&#xe669;</i>
                  </div>
                </div>
              </div>
            </mt-popup>
            <!-- 筛选end -->
          </mt-navbar>
        </div>
        <div class="choosehead"> 
          <span><em>分类</em><i></i></span>
          <span><em>品牌</em><i></i></span> 
          <span><em>尺码</em><i></i></span> 
        </div>
        <div class="listwrap">
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <div class="itemwrap">
                <div class="listitem">
                  
                  <a class="itemthumb link">
                    <img class="lazy-loaded" alt="LUNARCHARGE ESSENTIAL 时尚休闲运动鞋" src="http://0.image.al.okbuycdn.com/nbn/n500_500/static/f81b9f0318b76d610aa5b98433997df3.jpg">
                  </a>
                  <div class="iteminfo">
                    <p class="itemname">
                      <a class="link">
                        <span>Nike耐克&nbsp;男式&nbsp;LUNARCHARGE ESSENTIAL 时尚休闲运动鞋</span>
                      </a>
                    </p>
                    <p class="itemprice">
                      <span class="okprice">¥369</span>
                      <span class="discount">4.6折</span>
                    </p>
                    <div class="addcart"></div>
                  </div>
                </div>
              </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div class="itemwrap">ssss2</div>
              
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <div class="itemwrap">ssss3</div>

            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <div class="itemwrap">ssss4</div>

            </mt-tab-container-item>
            
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import HeadertwoComponent from '@/components/layout/HeadertwoComponent';
import { Button } from 'mint-ui';
import webStorage from 'web-storage-cache';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Popup } from 'mint-ui';


export default {
  data:()=>{
    return{
      wsCache:new webStorage(),
      selected:"1",
      popupVisible:false
      
    }
  },
  components: {
    HeadertwoComponent,
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem,
    [TabContainer.name]: TabContainer,
    [TabContainerItem.name]: TabContainerItem,
    [Popup.name]: Popup
  },
  methods:{
    rightScreen(){
      this.popupVisible = true
    }
  }
}

</script>

<style lang="scss">
@import "../styles/yo/usage/core/reset";
.container{
  @include flexbox();
  
}
.topicsortitem {
    margin-bottom: .5rem;
    .topicsort {
      width: 100%;
      height: .43rem;
      background: #fff;
      @include border(0 0 1px 0, #dedede,solid);
      .mint-navbar{
        height: .43rem;
        a{
          display: inline-block;
          width: 16%;
          margin: 0 2%;
          height: .42rem;
          line-height: .42rem;
          text-align: center;
          color: #666;
          float: left;
          .mint-tab-item-label{
            font-size: .14rem;
          }
        }
        
        .is-selected {
          color: #d70057;
          border-bottom: .01rem #d70057 solid;
        }
      }
    }
    .choosehead {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      font-size: .12rem;
      color: #333;
      background: #fff;
      z-index: 5;
      @include border(0 0 1px 0,#e5e5e5,solid);
      @include flexbox()
      span {
        display: inline-block;
        width: 3.7rem;
        height: .26rem;
        line-height: .26rem;
        padding: 0 .02rem 0 .04rem;
        margin: .09rem .2rem;
        text-align: center;
        background: #f4f4f4;
        border-radius: .04rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border: 1px solid #f4f4f4;
        em {
          margin-right: .02rem;
        }
        i {
          display: inline-block;
          width: 0;
          height: 0;
          vertical-align: -0.01rem;
          margin-left: .04rem;
          border: .04rem solid transparent;
          border-top: .04rem solid #8b8b8b;
        }
      }
    }
    .listwrap{
      width: 100%;
      padding: .1rem .05rem 0;
      overflow: hidden;
      background-color: #fff;
    }
  }
.itemwrap {
  float: left;
  width: 50%;
  margin: 0 .05rem .1rem;
  .listitem {
    overflow: hidden;
    position: relative;
    height: 2.96rem;
    background-color: #fff;
    a {
      cursor: pointer;
      color: #d70057;
      vertical-align: top;
    }
    .itemthumb {
      display: block;
      width: 100%;
      min-height: 1.72rem;
      overflow: hidden;
      position: relative;
      text-align: center;
      img {
          width: 100%;
      }
    }
    .iteminfo {
      height: .85rem;
      position: relative;
      padding: .09rem 0;
      .itemname {
        height: .46rem;
        overflow: hidden;
        font-size: .12rem;
        a {
          display: block;
          width: 100%;
          margin-bottom: .4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #666;
        }
      }
      .okprice {
        float: left;
        margin-right: .08rem;
        line-height: .18rem;
        color: #d70057;
        font-size: .18rem;
      }
      .discount {
        float: left;
        height: .11rem;
        line-height: .11rem;
        padding: 0 .04rem;
        margin-top: .02rem;
        letter-spacing: -0.01rem;
        font-size: .12rem;
        color: #d70057;
        border-radius: .1rem;
        @include border(1px,#d70057,solid)
      }
      .addcart {
        position: absolute;
        right: .1rem;
        top:.49rem;
        width: .3rem;
        height: .3rem;
        background: url(../assets/images/listcart.png) no-repeat;
        background-size: 100%;
      }
    }
    
  } 
}
.mint-popup-right{
  height: 100%;
  left: 10%;
  background: #fff;
  .filter1{
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    text-align: left;
    font-style: normal;
  }
  .top{
    height:.48rem;
    overflow: hidden;
    background: #fff;
    line-height: .48rem;
    span{
      margin-left: .1rem;
      font-size: .14rem;
      color: #000;
      font-style: normal;
      font-weight: 100;
      font-family: '黑体';
    }
  }
}



</style>


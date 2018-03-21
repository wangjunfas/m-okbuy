<template>
  <div class="contentbox">
    <headertwo-component navTitle="登录"></headertwo-component> 
    <!-- 登录框 -->
    <div class="loginfillbox">
      <div class="login-input-wrap">
        <!--账号-->
        <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
      </div> 
      <div class="login-input-wrap">
        <!--密码-->
        <mt-field placeholder="请输入6-16个字符，数字及字母组合" type="password" v-model="password"></mt-field>
      </div>
      <div class="login-input-wrap">
        <!--图形验证码-->
        <mt-field type="tel" placeholder="请输入验证码" v-model="captcha" >
          <div id="verify">
            <span v-for="(v,i) in randomRes">{{v}}</span>
          </div>
        </mt-field>
      </div>
    </div>
    <div class="loginmethod">
        <div id="passwordway" class="loginshow">
            <input class="ball" type="radio" name="a"><span class="current">密码登录</span>
        </div>
        <div id="mobileway" class="loginshow">
            <input class="ball" type="radio" name="a"></label><span>手机验证码登录</span>
        </div>
    </div>
    
        
    
    <mt-button size="large" type="danger" @click="doSignin">登录</mt-button>
    
    
    <!-- 免登陆 -->
    <div class="unexcended">
      <span class="unexc_check">
        <input type="checkbox" class="checkbox"/>
          <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/returns/checked.png">

          <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/member/returns/check.png">
        
      </span>
      <span class="rightres">一个月内免登录</span>
    </div>
    <div class="otherabout">
       
            <span>忘记密码？</span>
      
            <router-link to="/signup" tag="span">快速注册</router-link>
        
    </div>
    <div class="otherloginways">
        <div class="flexway">
            <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/login/login_qq.png" alt="">
            <span>QQ</span>
        </div>
        <div class="flexway">
            <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/login/login_wb.png" alt="">
            <span>微博</span>
        </div>
        <div class="flexway">
            <img src="http://0.touch.js.al.okbuycdn.com/resources/complete/images/login/login_pay.png" alt="">
            <span>支付宝</span>
        </div>
      </div>
  </div>

</template>

<script>
import HeadertwoComponent from '@/components/layout/HeadertwoComponent'
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import axios from 'axios';
import { Toast } from 'mint-ui';
import webStorage from 'web-storage-cache';

export default {
    data: () => {
      return{
        wsCache:new webStorage(),
        randomRes:[],
        captcha:"",
        username:"",  
        password:"",
        picked: '',
        options:[{
          label: '密码登录',
          value: '值A'
        },
        {
          label: '手机验证码登录',
          value: '值B'
        }]
      } 
    },
    components: {
      HeadertwoComponent,
      [Field.name]: Field,
      [Button.name]: Button
    },
    
    mounted(){
      for(let i=0;i<4;i++ ){
        this.randomRes.push(parseInt(Math.random()*10, 10))
      }
      axios({
        url: '/api/users/issignin',
        data: {
          username: this.username,
          password: this.password
        },
        headers: {
          'X-Access-Token': this.wsCache.get('token')
        }
      })
      .then((res)=>{
        if(res.data.data.issignin == true){
          location.hash="#/user"
        }
      })
   },
    methods:{
      doSignin(){
        axios({
          method: 'post',
          url: '/api/users/signin',
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then((res) => {
          if (res.data.data.success) {
            // 将username, token 保存在localstorage里
            this.wsCache.set('username',JSON.parse(res.data.data.username) , {exp : 3600 * 24})
            this.wsCache.set('token', res.data.data.token, {exp : 3600 * 24})

            location.hash="#/user"
          } else {
            Toast({
                message: '登录失败',
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
};
</script>

<style lang="scss">
@import "../styles/yo/usage/core/reset";
  #verify{
    height: .3rem;
    width: 1rem;
    background: #F66;
    @include flexbox();

    span{
      @include flex();
      line-height: .3rem;
      @include flexbox();
      @include justify-content()
    }
  }
  .mint-button{
    height: .35rem;
    background: #d70057;
    font-size: .15rem;
  }
</style>
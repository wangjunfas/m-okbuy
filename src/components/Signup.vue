<template>
    <div class="contentbox">
        <header-list :headrTitle="mess"></header-list> 
        <div class="loginfillbox">
            <div class="login-input-wrap">
                <!-- 手机号-->
                <mt-field placeholder="请输入手机号" v-model="username" :state="usernameState"></mt-field>
            </div> 
            <div class="login-input-wrap">
                <!-- 图形验证码-->
                <mt-field type="tel" placeholder="请输入验证码" v-model="captcha1" >
                <div id="verify">
                <span v-for="(v,i) in randomRes" :key="i">{{v}}</span>
            </div>
            </mt-field>
            </div>
            <div class="login-input-wrap">
                <!-- 验证码 -->
                <mt-field v-model="password" placeholder="密码：请输入6-16位的字母或数字" :state="passwordState">
                </mt-field>
            </div> 
        </div>   
    <div class="loginnowbox">
        <mt-button size="large" type="danger" @click="dosignup">注册</mt-button>      
        <span class="userremind">
            *点击注册代表同意<a href="#javascript">《好乐买软件隐私声明》</a>
        </span>
        <p class="hreflogin">
          <router-link to="/signin">已有账号，去登录</router-link>          
        </p>
    </div>  
  </div>
</template>
<script>
import HeaderList from '@/components/common/HeaderList';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
    data: () => {
        return{     
            randomRes:[],
            captcha1:"",
            password:"",
            username:"",
            usernameState:"",
            passwordState:"",
            mess: "用户注册"
        } 
    }, 
    components: {
        HeaderList,
        [Field.name]: Field,
        [Button.name]: Button,
        [Toast.name]: Toast
    },
    mounted(){
        for(let i=0;i<4;i++ ){
            this.randomRes.push(parseInt(Math.random()*10, 10))
        }
        
    },
    methods:{
        spot(){},  
        dosignup(){
            let reg1 = /^1\d{10}$/;
            let reg2 = /^\w{6,16}$/
            this.usernameState=reg1.test(this.username)?"success":"error";
            this.passwordState=reg2.test(this.password)?"success":"error";
            if(this.usernameState=="erroe"||this.passwordState=="error"){
                Toast('您的输入有误，要重输哦！');
            }else{
                axios.post('/api/users/signup', {
                    username:this.username,
                    password:this.password
                })
                .then((res)=>{
                    if(res.data.data.success){
                        Toast({
                            message: '操作成功',
                        });
                    }else{
                        Toast({
                            message: '用户名已存在',
                        });
                    }                 
                })
                .catch(function (error) {
                    console.log(error);
                });             
            }          
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
.loginnowbox {
    padding:.1rem;
    .userremind {
        display: block;
        margin-top: .015rem;
        color: #666;
        font-size: .12rem;
        a{
        color:#d70057;
        }
    }
    .hreflogin {
        margin-top: .1rem;
        text-align: right;
    }
}
</style>
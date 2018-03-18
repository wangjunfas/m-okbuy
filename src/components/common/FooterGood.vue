<template lang="html">
  <div class="footer">
      <ul>
        <router-link to="/home" tag="li" active-class="active" exact>
          <i class="yo-ico">&#xe611;</i><i>首页</i>
        </router-link>
        <router-link to="/sort" tag="li" active-class="active">
          <i class="yo-ico">&#xe658;</i><i>分类</i>
        </router-link>
        <router-link to="/time" tag="li" active-class="active">
          <i class="yo-ico">&#xe63e;</i><i>限时特卖</i>
        </router-link>
        <router-link to="/shopcar" tag="li" active-class="active">
          <i class="yo-ico">&#xe605;</i><i>购物车</i>
        </router-link>
        <router-link to="/user" tag="li" active-class="active"> 
          <i class="yo-ico">&#xe649;</i><i>用户</i>
        </router-link>                               
      </ul>
    </div>
</template>
<style lang="scss">
</style>


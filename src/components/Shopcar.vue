<template>
<<<<<<< HEAD

	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
        <unlogin></unlogin>
        <div></div>
        <shopcar-list> </shopcar-list>
	</div>

</template>
<script>
import HeaderList from '@/components/common/HeaderList';
=======
	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
		<div class="main">
			<unlogin></unlogin>
        	<shopcar-list></shopcar-list>
		</div>
	</div>
</template>
<script>
import HeaderList from '@/components/common/HeaderList'
>>>>>>> 项目初体验
import shopcarList from '@/components/shopcar/shopcarList';
import unlogin from '@/components/shopcar/unloginEmptyShopcar';
export default{
    components: {
<<<<<<< HEAD
        HeaderList,
        shopcarList,
        unlogin
=======
		HeaderList,
		shopcarList,
		unlogin
>>>>>>> 项目初体验
    },
    data:()=>{
    	return {
			mess: "我的购物车"
    	}
	}

}
</script>
<style lang="scss" scope="false">
<<<<<<< HEAD

=======
.box{
        overflow-y:scroll;
    }
>>>>>>> 项目初体验
</style>
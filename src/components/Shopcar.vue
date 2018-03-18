<template>

	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
        <unlogin></unlogin>
        <div></div>
        <shopcar-list> </shopcar-list>
	</div>

</template>
<script>
import HeaderList from '@/components/common/HeaderList';
import shopcarList from '@/components/shopcar/shopcarList';
import unlogin from '@/components/shopcar/unloginEmptyShopcar';
export default{
    components: {
        HeaderList,
        shopcarList,
        unlogin
    },
    data:()=>{
    	return {
			mess: "我的购物车"
    	}
	}

}
</script>
<style lang="scss" scope="false">

</style>
<template>
	<div  class="box">
		<header-list :headrTitle="mess"></header-list>
	</div>
</template>
<script>
import HeaderList from '@/components/common/HeaderList'
export default{
    components: {
        HeaderList
    },
    data:()=>{
    	return {
			mess: "用户"
    	}
	}

}
</script>
<style lang="scss" scope="false">

</style>

<template>
    <header class="headers">
        <i class="yo-ico back" onclick="$router.history.go(-1)">&#xe600;</i>
        <span>{{headrTitle}}</span>
        <router-link class="yo-ico home" tag="i" :to="`/home`">&#xe663;</router-link>
    </header>
</template>
<script>
export default{
    props: {
        headrTitle: String
    }
}
</script>

<style lang="scss">
@import "../../styles/yo/usage/core/reset.scss";
.headers{
    padding-right: .1rem;
    height: .42rem;
    width: 100%;
    display: block;
    @include flexbox();
    @include align-items();
    @include justify-content();
    color: #444;
    background: #f5f5f5;
    .back{
        font-size: .26rem;
    }
    span{
        @include flex();
        text-align: center;
        font-size: .14rem;
    }
    .home{
        font-size: .26rem;
    }
}
</style>

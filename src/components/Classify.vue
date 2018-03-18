<template>
    <div>{{$route.params.id}}
    <p v-for="v in 900" :key="v">{{v}}</p></div>
</template>

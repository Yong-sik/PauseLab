<template>
    <h1 v-if="subTitle==='' || subTitle==='null'" class="text-center"><p class="main-title">{{props.mainTitle}}</p></h1>
    <h1 v-else class="text-center"><span class="main-title">{{ props.mainTitle}}</span><span class="sub-title">{{" " + props.subTitle}} </span></h1>
</template>

<script setup lang="ts">
    const props = defineProps(['mainTitle', 'subTitle']);
</script>

<style lang="scss" scoped>
    h1{
        margin-top: 2dvh;
        margin-bottom: 2dvh;
    }
    .main-title{
        color: white;
        font-size: 1em;
    }

    .sub-title{
        color: #bfbfbf;
        font-size: 1em;
    }
</style>
<template>
  <v-app class="home">
    <LoadVideo/>
    
    <SmallTitle class="title"
      :mainTitle="`FILM`"
      :subTitle="`LAB`"
    ></SmallTitle>
    <ContentList
      :contentCategory="`film`"
    >
    </ContentList>
    
    <SmallTitle class="title"
      :mainTitle="`POST`"
      :subTitle="`LAB`"
    ></SmallTitle>
    <ContentList
      :contentCategory="`post`"
    >
    </ContentList>  
    <FooterComponent />
  </v-app>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .title{
    margin-top: 10dvh;
    margin-bottom: 3dvh;
  }
</style>
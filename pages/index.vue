<template>
  <v-app class="home">
    <LoadVideo/>
    
    <SmallTitle class="title"
      :mainTitle="`FILM`"
      :subTitle="`LAB`"
    ></SmallTitle>
    <ContentList
      :contentCategory="`film`"
      :isRequireMore="true"
      :requireContentNum = 7
    >
    </ContentList>
    
    <SmallTitle class="title"
      :mainTitle="`POST`"
      :subTitle="`LAB`"
    ></SmallTitle>
    <ContentList
      :contentCategory="`post`"
      :isRequireMore="true"
      :requireContentNum = 7
    >
    </ContentList>  
    <FooterComponent />
  </v-app>
</template>
<script setup lang="ts">
  const { setScrollLocation, getScrollLocation } = useUtilFunction();

  
  
  onBeforeUnmount(() => {
    const currentYLocation = document.documentElement.scrollTop;
    console.log(currentYLocation);
    setScrollLocation(currentYLocation);  // 현재 Y스크롤의 위치를 Store에 저장.
  })

  onMounted(() => {
    window.scrollTo(0, getScrollLocation());
  })
</script>
<style lang="scss" scoped>
  .title{
    margin-top: 10dvh;
    margin-bottom: 3dvh;
  }
</style>
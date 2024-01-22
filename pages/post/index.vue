<template>
  <!-- <div class="posts">
    <h1>Posts Page</h1>
    <template v-for="post in postsState">
      <div class="post" @click="$router.push(`/post/${post.id}`)">
        <h3>{{ post.id }}</h3>
        <h3>{{ post.title }}</h3>
      </div>
    </template>
  </div> -->
  <v-app>
    <ContentType
      :contentCategory="'post'"
    >
    </ContentType>
    <ContentList
      :contentCategory="`post`"
      :isRequireMore="false"
      :requireContentNum = postsStateLength
    >
  </ContentList>
  </v-app>
</template>
<script setup lang="ts">
import useContentListStore from "@/stores/useContentListStore";

const contentListStore = useContentListStore();
const { postsState } = storeToRefs(contentListStore);
const postsStateLength = ref(postsState.value.length);

const { setScrollLocation, getScrollLocation } = useUtilFunction();

onBeforeUnmount(() => {
  const currentYLocation = document.documentElement.scrollTop;
  // console.log(currentYLocation);
  setScrollLocation(currentYLocation);  // 현재 Y스크롤의 위치를 Store에 저장.
})

onMounted(() => {
  // console.log(getScrollLocation());
  setTimeout(() => window.scrollTo(0, getScrollLocation()), 300);
})

</script>
<style lang="scss" scoped>
// .post {
//   display: flex;
//   gap: 8px;
//   align-items: center;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// }
</style>
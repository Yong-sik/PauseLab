<template>
  <div class="post">
    <h1>Post</h1>
    <div>{{ post.id }}</div>
    <div>{{ post.title }}</div>
    <div>{{ post.contents }}</div>
    <div>{{ post.imgUri }}</div>
    <NuxtLink to="/post">뒤로 가기</NuxtLink>
    <!-- <h2>id: {{ post.id }} title: {{ post.title }}</h2> -->
    <!-- <div class="post-contents">{{ post.contents }}</div> -->
  </div>
</template>
<script setup lang="ts">
const contentListStore = useContentListStore();
const { postsState } = storeToRefs(contentListStore);
// const route = useRoute();
const router = useRouter()

const route = useRouter().currentRoute.value
const postId = parseInt(route.params.id as string);
console.log(router.getRoutes());
const post = ref(postsState.value[postId])
console.log(post);
// import usePostStore from "@/stores/usePostStore";
// import { storeToRefs } from "pinia";

// // 라우터 객체
// const route = useRoute();
// const router = useRouter();

// // 스토어에서 포스트 가져옴
// const postStore = usePostStore();
// const { posts } = storeToRefs(postStore);

// // 포스트를 변수에 저장
// const postId = parseInt(route.params.id as string) - 1;
// const post = ref(posts.value[postId]);

// // 포스트가 없으면 예외처리로 홈으로 보냄
// if (!post.value) router.push("");
</script>
<style lang="scss" scoped>
.post-contents {
  border: 1px solid black;
  border-radius: 4px;
  min-height: 600px;
  padding: 1rem;
}
</style>
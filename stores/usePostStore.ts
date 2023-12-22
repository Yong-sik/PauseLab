import type { Post } from "@/types/stores/postStore";

export default defineStore("post", {
    // state: 변수입니다. 반응성을 가지며 actions로 변경하거나 pinia에 바로 접근해서 변경할 수 있습니다.
  state: () => ({
    posts: [
      {
        id: 1,
        author: "foo",
        title: "첫번째 게시글!",
        contents: "첫번째 게시글 내용!",
      },
      {
        id: 2,
        author: "foo",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
    ] as Post[],
  }),
  // getters: vue의 computed와 비슷합니다. 함수를 미리 계산해 변수에 저장하는 형태로 연산 횟수를 줄이고 더 편하게 사용할 수 있습니다.
  getters: {
    // 포스트가 존재하면 첫번째 포스트 가져옴
    firstPost: (state): Post | boolean => {
      if (state.posts.length) return state.posts[0];
      else return false;
    },
  },
  // actions: state를 변경하기 전에 하고 싶은 로직을 넣습니다. this(store)에 접근할 수 있습니다.
  actions: {
    // Posts 할당
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
  },
});
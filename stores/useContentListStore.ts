import type { Content } from "@/types/stores/contentListStore";

export default defineStore("content", {
    // state: 변수입니다. 반응성을 가지며 actions로 변경하거나 pinia에 바로 접근해서 변경할 수 있습니다.
  state: () => ({
    contents: [
      {
        id: 0,
        imgUri: "_nuxt/assets/images/1.jpg",
        title: "첫번째 게시글!",
        contents: "첫번째 게시글 내용!",
      },
      {
        id: 1,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
      {
        id: 2,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
      {
        id: 3,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
      {
        id: 4,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
      {
        id: 5,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
      {
        id: 6,
        imgUri: "../assets/images/2.jpg",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },

    ] as Content[],
  }),
  // getters: vue의 computed와 비슷합니다. 함수를 미리 계산해 변수에 저장하는 형태로 연산 횟수를 줄이고 더 편하게 사용할 수 있습니다.
  getters: {
    // 포스트가 존재하면 첫번째 포스트 가져옴
    firstPost: (state): Content | boolean => {
      if (state.contents.length) return state.contents[0];
      else return false;
    },
  },
  // actions: state를 변경하기 전에 하고 싶은 로직을 넣습니다. this(store)에 접근할 수 있습니다.
  actions: {
    // Posts 할당
    setContents(contents: Content[]) {
      this.contents = contents;
    },
  },
});
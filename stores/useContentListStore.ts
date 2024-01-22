import type { Content } from "@/types/stores/contentListStore";
import axios from "axios";

export default defineStore("content", () => {
  const filmsState = ref([{ isVisible: true }] as Content[]);
  const filmsStateInAll = ref([] as Content[]);
  const filmsStateInCf = ref([] as Content[]);
  const filmsStateInEtc = ref([] as Content[]);
  const postsState = ref<Content[]>([]);
  const filmTypes = ref([]);
  const postTypes = ref([]);

  function initState() {
    filmsState.value.forEach((film, index) => {
      film.isVisible = true;
    });
  }

  function filterState(contentType: string) {
    filmsState.value.forEach((film) => {
      if (contentType === "all") {
        film.isVisible = true;
        return;
      }
      film.isVisible = film.type === contentType;
    });
  }

  // function setState(){
  //     filmsState.value[0].id = 123456;
  // }
  // function getIdList( size:number ){
  //   let idList = [];
  //   console.log(filmsState.value[0].id);
  //   for(let i=0; i<size; i++){
  //     console.log("filmsState.value");
  //     console.log(filmsState.value[i]);
  //     idList[i] = filmsState.value[i].id;
  //     console.log("idList");
  //     console.log(idList[i]);
  //   }
  //   return idList;
  // }

  async function getFilmTypes() {
    try {
      const { data, status } = await axios.get("filmTypes"); // 구조분해할당

      filmTypes.value = data;
      console.log(filmTypes.value);

      if (status === 200) {
        console.log("Success Message");
      }
    } catch (err) {
      console.error("Fetch ERROR!", err);
    }
  }

  async function getPostTypes() {
    try {
      const { data, status } = await axios.get("postTypes"); // 구조분해할당

      postTypes.value = data;

      if (status === 200) {
        console.log("Success Message");
      }
    } catch (err) {
      console.error("Fetch ERROR!", err);
    }
  }

  async function fetchContents(contentCategory: string) {
    try {
      const { data, status } = await axios.get(contentCategory); // 구조분해할당

      if (contentCategory === "films") {
        filmsState.value = data;
      } else if (contentCategory === "posts") {
        postsState.value = data;
      }
      if (status === 200) {
        console.log("Success Message");
      }
    } catch (err) {
      console.error("Fetch ERROR!", err);
    }
  }

  return {
    fetchContents,
    filmsState,
    postsState,
    getFilmTypes,
    getPostTypes,
    filmTypes,
    postTypes,
    filmsStateInAll,
    filmsStateInCf,
    filmsStateInEtc,
    filterState,
    initState,
  };
});

import type { Content } from "@/types/stores/contentListStore";
import axios from "axios";

export default defineStore("content", () => {
  const filmsState = ref([] as Content[]);
  const postsState = ref<Content[]>([]);

  function setState(){
      filmsState.value[0].id = 123456;
  }
  function getIdList( size:number ){ 
    let idList = [];
    console.log(filmsState.value[0].id);
    for(let i=0; i<size; i++){
      console.log("filmsState.value");
      console.log(filmsState.value[i]);
      idList[i] = filmsState.value[i].id;
      console.log("idList");
      console.log(idList[i]);
    }
    return idList;
  }

  // onMounted( async () => {
  //   await fetchContents('films');
  //   await fetchContents('posts');
  //   // getIdList(7);
  // });

  async function fetchContents( contentCategory :string) {
    try{
      const { data, status } = await axios.get(contentCategory); // 구조분해할당
      
      if(contentCategory === 'films'){
        filmsState.value = data;
      }
      else if (contentCategory === 'posts'){
        postsState.value = data;
      }
      if(status === 200){
        console.log('Success Message');
      }
    } catch (err) {
      console.error('Fetch ERROR!', err);
    }
  }

  return { fetchContents, filmsState, postsState, getIdList }
  
});
import type { CompanyInformation } from "@/types/stores/companyInformationStore";
import axios from "axios";

export default defineStore("companyInformation", () => {
  const companyInformation = ref({} as CompanyInformation);

  // onMounted( async () => {
  //   await fetchContents('films');
  //   await fetchContents('posts');
  //   // getIdList(7);
  // });

  async function fetchInformation() {
    try{
      const { data, status } = await axios.get('companyInformation'); // 구조분해할당
      companyInformation.value = data;
      if(status === 200){
        console.log('Success Message');
      }
    } catch (err) {
      console.error('Fetch ERROR!', err);
    }
  }

  return { fetchInformation, companyInformation }
  
});
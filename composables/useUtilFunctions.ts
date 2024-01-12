import useCompanyInformationStore from "../stores/useCompanyInformationStore";
import { storeToRefs } from "pinia";

export const useUtilFunction = () => {
    const companyInformationStore = useCompanyInformationStore();
    const { companyInformation } = storeToRefs(companyInformationStore);

    function connectLink( linkType:string ){
        switch (linkType) {
            case 'call':
                window.open("tel:" + companyInformation.value.phone);
                break;
            case 'sendMail':
                window.open("mailto:" + companyInformation.value.email); 
                break;
            case 'youtube':
                window.open(companyInformation.value.pauseLabYoutube); 
                break;
            case 'instagram':
                window.open(companyInformation.value.pauseLabInstagram); 
                break;
            case 'kakao':
                window.open(companyInformation.value.pauseLabKakao); 
                break;
        }
    }
  
    return {
        connectLink,
        companyInformation,
        companyInformationStore
    }
}
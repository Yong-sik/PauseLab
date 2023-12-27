import { defineStore } from "pinia";
import { ref } from "vue";

export const commonStore = defineStore("somethingStore", () => {
  const snackbar = ref({ text: "", color: ""});

  const setSnackbar = (data: any) => {
    console.log("snackbar 타입: ", typeof(snackbar.value));
    snackbar.value = data;
  };

  return { snackbar, setSnackbar };
});
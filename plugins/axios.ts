import axios from "axios";


export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    console.log(config)
    axios.defaults.baseURL = config.public.apiBase;
    const defaultUrl = "<https://localhost:3000>";

    let api = axios.create({
        baseURL: defaultUrl,
        headers: {
        common: {},
        },
    });
return {
    provide: {
      api: api,
    },
  };
});
<template>
  <NuxtLayout>
    
  </NuxtLayout>
</template>
<script setup lang="ts">
  import useContentListStore from "@/stores/useContentListStore";
  import useCompanyInformationStore from "@/stores/useCompanyInformationStore";

  const contentListStore = useContentListStore();
  await contentListStore.fetchContents('films');
  await contentListStore.fetchContents('posts');

  const companyInformationStore = useCompanyInformationStore();
  await companyInformationStore.fetchInformation();
</script>
<style lang="scss" scoped>
</style>
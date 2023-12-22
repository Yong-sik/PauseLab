<!-- <template>
  <nav>
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="posts">posts</NuxtLink>
    <NuxtLink to="profile">profile</NuxtLink>
  </nav>
  <NuxtPage />
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
nav {
  & > a {
    text-decoration: none;
    color: green;
    &:hover {
      color: blueviolet;
    }
  }
  display: flex;
  gap: 8px;
}
</style> -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
</style>
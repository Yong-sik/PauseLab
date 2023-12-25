<!-- ts파일 import할 곳 정해야 함. -->

<template>
    <nav>
      <v-toolbar  class="bg-header_background text-main_font">
        <!-- <v-app-bar-nav-icon size="" color="main_font"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="text-uppercase grey--text">Application</v-toolbar-title>
        
        <v-btn @click="eventHamburger">
          
          <div class="hamburger-icon" id="icon">
            <div class="icon-1" id="a"></div>
            <div class="icon-2" id="b"></div>
            <div class="icon-3" id="c"></div>
            <div class="clear"></div>
          </div>
          
        </v-btn>
      </v-toolbar>
      <!-- <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/posts">posts</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink> -->
    </nav>
    <slot />
    <div>footer</div>
  </template>
  <script setup lang="ts">
    function eventHamburger(){
      const icon = document.getElementById("icon");
      const icon1 = document.getElementById("a");
      const icon2 = document.getElementById("b");
      const icon3 = document.getElementById("c");

      icon1?.classList.toggle('a');
      icon2?.classList.toggle('c');
      icon3?.classList.toggle('b');
    }
  </script>
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
  </style>
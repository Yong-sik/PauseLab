<!-- ts파일 import할 곳 정해야 함. -->

<template>
    <v-app>
      <v-toolbar class="bg-header_background text-guide_font">

        <v-overlay
          persistent
          activator=".hamburger-btn"
          class="align-center justify-center"
          location-strategy="static"
          scroll-strategy="reposition"
        >

        <!-- <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="red">
                a
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="blue">
                b
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="red">
                c
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="blue">
                d
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="red">
                e
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2>
              <v-card color="blue">
                f
              </v-card>
            </v-flex>
          </v-layout>
        </v-container> -->

        <div style="position: relative;">

          <div class="shine-logo" style="position: absolute;">
            <v-btn>
              <v-icon icon="custom:shineLogoIcon"></v-icon>
            </v-btn>
          </div>

          <v-row>
            <v-col class="header-col" cols="12" md="6" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                FILM
              </v-sheet>
            </v-col>

            <v-col class="header-col" cols="12" md="6" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                POST
              </v-sheet>
            </v-col>
          </v-row>
          
          <!-- <v-row>
            <v-col sm="12" md="4" align="center">
            </v-col>

            
            <v-col sm="12" md="4" align="center">
              
            </v-col>

            <v-col sm="12" md="4" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                &nbsp
              </v-sheet>
            </v-col>
            
          </v-row>

          <v-spacer></v-spacer>
          <v-row>
            <v-col sm="12" md="4" align="center">
            </v-col>

            
            <v-col sm="12" md="4" align="center">
              <v-btn>
                  <v-icon size="100" icon="custom:logoIcon"></v-icon>
              </v-btn>
            </v-col>

            <v-col sm="12" md="4" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                &nbsp
              </v-sheet>
            </v-col>
            
          </v-row>

          <v-row>
            <v-col sm="12" md="4" align="center">
            </v-col>

            
            <v-col sm="12" md="4" align="center">
              
            </v-col>

            <v-col sm="12" md="4" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                &nbsp
              </v-sheet>
            </v-col>
            
          </v-row> -->

          <v-row>
            <v-col class="header-col" cols="12" md="6" align="center">
              <v-sheet 
                class = "font-weight-black text-guide_font"
              >
                ABOUT
              </v-sheet>
            </v-col>

            <v-col class="header-col" cols="12" md="6" align="center">
              <v-sheet class = "font-weight-black text-guide_font">
                CONTACT
              </v-sheet>
            </v-col>
          </v-row>
        </div>

          <!-- <v-row>
            <v-col cols="1" sm="9">
              <v-row align-content-sm="center">
                <v-col cols="3" lg="3" style="color: white; border: 1px solid red;">1</v-col>
                <v-col cols="3" lg="3" style="color: white; border: 1px solid red;">2</v-col>
              </v-row>
            </v-col>
            <v-col cols="1" sm="9" style="color: white; border: 1px solid red;">3</v-col>
          </v-row>
         -->
        
          <!-- <v-table w-100 theme="dark">
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </v-table> -->
        </v-overlay>
        
        <!-- <v-app-bar-nav-icon size="" color="main_font"></v-app-bar-nav-icon> -->
        <v-btn class="ma-0">
          <v-icon size="32" icon="custom:logoIcon"></v-icon>
        </v-btn>
        
        <v-spacer></v-spacer>

        <v-toolbar-title class="font-weight-black text-uppercase grey--text " >
          Pause Lab
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <!-- <v-btn class="hamburger-btn" @click="eventHamburger">
          <div  class="hamburger-icon" id="icon">
            <div class="icon-1" id="a"></div>
            <div class="icon-2" id="b"></div>
            <div class="icon-3" id="c"></div>
            <div class="clear"></div>
          </div>
        </v-btn> -->

        <v-btn class="hamburger-btn" @click="eventHamburger">
          <burger-button
            :active="isActive"
            :bar-color="isActive ? 'red' : 'black'"
            @click="isActive = !isActive"
          />
        </v-btn>
      </v-toolbar>
      
            <!-- <v-btn
              color="success"
              class="mt-12"
              @click="data.overlay = true"
            >
              Show Overlay
            </v-btn>

            <v-overlay
              v-model="data.overlay"
              activator="parent"
              contained
              class="align-center justify-center"
            >
              <v-btn
                color="success"
                @click="data.overlay = false"
              >
                Hide Overlay
              </v-btn>
            </v-overlay> -->
      
      <!-- <v-snackbar
        v-model="data.isSnackbarVisible"
        :timeout="2000"
        location="top"
        :color="data.snackBarColor"
        @update:model-value="closeSnackbar"
      >
        {{ snackbar?.text }}
        <template v-slot:actions>
          <v-btn variant="text" @click="closeSnackbar"> 닫기 </v-btn>
        </template>
      </v-snackbar> -->
      <router-view />
      <!-- <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/posts">posts</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
      <NuxtLink to="/login">login</NuxtLink> -->
    </v-app>
    <slot />
    <div>footer</div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import BurgerButton from '../types/burgerButton.d';

  function eventHamburger(){
    const icon = document.getElementById("icon");
    const icon1 = document.getElementById("a");
    const icon2 = document.getElementById("b");
    const icon3 = document.getElementById("c");

    icon1?.classList.toggle('a');
    icon2?.classList.toggle('c');
    icon3?.classList.toggle('b');
  }


  const props = defineProps(['isActive'])
  const emit = defineEmits(['update:isActive'])

  const isActive = computed({
    get() {
      return props.isActive;
    },
    set(value) {
      console.log(typeof(value));
      emit('update:isActive', !value)
    }
  })

  // const overlay = computed({
  //   get() {
  //     console.log(props.overlay);
  //     return props.overlay;
  //   },
  //   set(value) {
  //     console.log(typeof(value));
  //     emit('update:overlay', !value)
  //   }
  // })
  // import { ref, watchEffect } from "vue";
  // import { storeToRefs } from "pinia";
  // import { commonStore } from "../stores/useHeaderStore";

  // const store = commonStore();
  // const { snackbar } = storeToRefs(store);

  // const data = ref({
  //   isSnackbarVisible: false,
  //   snackBarColor: "",
  //   overlay: false,
  // });

  // const closeSnackbar = (value : any) => {
  //   if (!value) {
  //     data.value.isSnackbarVisible = false;
  //     store.setSnackbar({ text: "", color: "" });
  //   }
  // };

  // watchEffect(() => {
  //   if (snackbar.value.text !== "") {
  //     data.value.isSnackbarVisible = true;
  //     data.value.snackBarColor = snackbar.value.color
  //   }
  // });

  // const storea = commonStore();
  // storea.setSnackbar({ text: "에러 발생!", color:'red'  });
  
</script>
<style src="vue-burger-button/dist/vue-burger-button.css" lang="scss" scoped>
  .v-toolbar-title{
    font-size: 1.6dvw;
    text-align: center;
    // flex : 0;
  }
  .v-sheet{
    font-size: 3dvw;
    background-color : transparent; 
  }
  .header-col{
    // width: 30%;
    padding-top: 6dvw;
    padding-bottom: 6dvw;
    // heig
  }
  // Vuetify 내부에서 생성되는 태그에 접근하고 싶으면 개발자 도구에서 태그명 확인 후 아래처럼 접근 가능.
  :deep(.v-overlay__content){
    width: 90%;
  }
  :deep(.v-overlay__scrim){
    opacity: 0.7;
  }
  .hamburger-btn{
    z-index: 2001;
  }

  .v-icon{
    width: 30dvw;
    height: 30dvh;
  }

  .shine-logo .v-btn{
    width: 30dvw;
    height: 30dvh;
  }

  .shine-logo{
    width: 30dvw;
    height: 30dvh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 960px) {
  .shine-logo {
    display: none;
  }


} 
</style>
<!-- ts파일 import할 곳 정해야 함. -->

<template>
  <v-app>
    <v-toolbar class="bg-header_background text-guide_font">
      <v-overlay
        :absolute=true
        :model-value = overlay
        persistent
        activator=".hamburger-btn"
        class="align-center justify-center"
        location-strategy="static"
        scroll-strategy="reposition"
      >

        <div style="position: relative;">
          <div class="shine-logo" @click="routePage('')">
            <v-btn>
              <v-icon icon="custom:shineLogoIcon"></v-icon>
            </v-btn>
          </div>

          
          <v-row>
            <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('FILMS')">
              <v-sheet class = "font-weight-black text-guide_font">
                FILM
              </v-sheet>
            </v-col>

            <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('POSTS')">
              <v-sheet class = "font-weight-black text-guide_font">
                POST
              </v-sheet>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('ABOUT')">
              <v-sheet 
                class = "font-weight-black text-guide_font"
              >
                ABOUT
              </v-sheet>
            </v-col>

            <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('CONTACT')">
              <v-sheet class = "font-weight-black text-guide_font">
                CONTACT
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-overlay>
      
      <!-- <v-app-bar-nav-icon size="" color="main_font"></v-app-bar-nav-icon> -->
      <!-- <div class="logo"> -->
        <v-btn class="logo">
          <v-icon size="32" icon="custom:logoIcon"></v-icon>
        </v-btn>
      <!-- </div> -->
      
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
      
      <input type="checkbox" role="button" aria-label="Display the menu" class="hamburger-btn" disabled="true" @click="toggle">
      
    </v-toolbar>
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

  function routePage( pageName : string){
    // overlay.value = false;
    const router = useRouter();
    const relativeAddress = "/" + pageName;
    router.push({ path: relativeAddress }); // url을 그대로 넣어도 됨
  }
  // import { computed } from 'vue'

  // function eventHamburger(){
  //   const icon = document.getElementById("icon");
  //   const icon1 = document.getElementById("a");
  //   const icon2 = document.getElementById("b");
  //   const icon3 = document.getElementById("c");

  //   icon1?.classList.toggle('a');
  //   icon2?.classList.toggle('c');
  //   icon3?.classList.toggle('b');
  // }
  
  let overlay = ref(false);
    

  const toggle = () => {
    overlay = ref(true);
    overlay.value = !overlay.value;
  }
  
  onMounted(() => {
    // 햄버거 버튼 애니메이션이 css에서 이뤄진다. 
    // 자바스크립트보다 css를 먼저 불러오기 때문에 모양만 변하고 Overlay 화면이 뜨지 않는다.
    // 따라서 자바스크립트를 불러올 때까지 버튼을 비활성화 시킨다.
    // 자바스크립트를 불러오고 난 후에 다시 활성화 시켜준다.
    // 위와 같은 처리를 위해 아래 코드를 작성하게 됐다.
    let hamburgerButton = document.querySelector(".hamburger-btn");
    if( hamburgerButton != null){
      hamburgerButton.removeAttribute('disabled');
    }
  })
  // function toggleBurgerButton(){
    
  //   overlay.value = !overlay.value;
  //   // console.log(overlay.value);
  //   // switchValue = overlay.value
  //   // console.log(overlay.value);
  //   // const emit = defineEmits(['update:modelOverlay'])
  //   // defineEmits(['update:modelOverlay'])
  // }

  // function toggleBurgerButton(){
  //   switchValue = !switchValue;
  //   overlay = ref(switchValue);
  // }
  
  // const props = defineProps(['modelOverlay'])
  // const emit = defineEmits(['update:modelOverlay'])

  // const overlay = computed({
  //   get() {
  //     return props.modelOverlay
  //   },
  //   set(overlay) {
  //     emit('update:modelOverlay', overlay) 
  //   }
  // })


  // const overlay = computed({
  //   get() {
  //     console.log(props.overlay);
  //     return props.overlay;
  //   },
  //   set(value) {
  //     console.log(!value);
  //     emit('update:overlay', !value)
  //   }
  // })
</script>
<style lang="scss" scoped>
  .v-toolbar-title{
    margin-inline-start: 0px;
    font-size: 1.4dvw;
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
    cursor: pointer;
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

  .shine-logo .v-icon{
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

  :deep(.v-toolbar__content > .v-btn:first-child){
    margin-inline-start: 0px;
  }

  @media screen and (max-width: 960px) {
    .shine-logo {
      display: none;
    }

    // .v-toolbar-title{
    //   width: 3dvw;
    //   height: 3dvh;
    //   font-size: 3dvw;
    //   text-align: center;
    // // flex : 0;
    // }
  }

  @media screen and (max-width: 600px) {
    .v-toolbar-title{
      width: 600px;
      font-size: 2.5dvw;
      text-align: center;
    }
  }

  a{
    text-decoration: none;
  }

</style>
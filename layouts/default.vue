<!-- ts파일 import할 곳 정해야 함. -->

<template>
  <v-app>
    <!-- <v-card-text style="   height: 100%; width: 100%; position: fixed"> -->
      <div style="display: block; position: fixed; right: 30px; bottom: 50px; z-index: 9999;">
        
        <v-btn 
          class="tooltip" 
          min-width="0" 
          size="50"
          style=" margin: auto; display: block; border-radius: 100%;"
          @click="connectLink('kakao')"
        >
          <v-icon size="25" icon="custom:kakaoIcon"></v-icon>
          <span class="tooltiptext tooltip-left">
            <div id="phone-number-wrap" color="#424242" align="center" elevation="0" >
              <div class="pt-2 pb-2" style="width: 80%; word-wrap: break-word; white-space: normal;">
                무엇이든 문의주세요.
              </div>
            </div>
          </span>
        </v-btn>
        <v-btn 
          min-width="0"
          size="50"
          @click = "scrollTop"
          class="mt-4"
          style="margin: auto; display: block; border-radius: 100%;"
          color="#424242"
        >
          <v-icon size="40">mdi-chevron-up</v-icon>
        </v-btn>
      </div>
  <!-- </v-card-text> -->
    <v-toolbar class="text-guide_font">
      <div >
        <v-overlay
          attach=".v-toolbar"
          :model-value = overlay
          persistent
          activator=".hamburger-btn"
          class="align-center justify-center"
          id="overlay"
          location-strategy="static"
          scroll-strategy="reposition"
        >

          <div style="position: relative;">
            <div class="shine-logo" @click="routePage('/')">
              <v-btn>
                <v-icon icon="custom:shineLogoIcon"></v-icon>
              </v-btn>
            </div>

            
            <v-row>
              <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('/FILM')">
                <v-sheet class = "font-weight-black text-guide_font">
                  FILM
                </v-sheet>
              </v-col>

              <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('/POST')">
                <v-sheet class = "font-weight-black text-guide_font">
                  POST
                </v-sheet>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('/ABOUT')">
                <v-sheet 
                  class = "font-weight-black text-guide_font"
                >
                  ABOUT
                </v-sheet>
              </v-col>

              <v-col class="header-col" cols="12" md="6" align="center" @click="routePage('/CONTACT')">
                <v-sheet class = "font-weight-black text-guide_font">
                  CONTACT
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </v-overlay>
      </div>
      
      <!-- <v-app-bar-nav-icon size="" color="main_font"></v-app-bar-nav-icon> -->
      <!-- <div class="logo"> -->
        <v-btn class="logo" @click="routePage('/')">
          <v-icon size="32" icon="custom:logoIcon"></v-icon>
        </v-btn>
      <!-- </div> -->
      
      <v-spacer></v-spacer>

      <v-toolbar-title class="font-weight-black text-uppercase grey--text " >
        <!-- {{$route.name}} -->
        <span id="headerTitle">Pause Lab</span>
        <!-- <span v-if = "$route.params.id==='post'">Pause Lab</span>
        <span v-else>{{$route.name}}</span> -->
        
        
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
      
      <input type="checkbox" id="hamburger-btn" role="button" aria-label="Display the menu" class="hamburger-btn" disabled="false">
      
    </v-toolbar>
    
    <router-view class="router-view"></router-view>

    
    <!-- <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/posts">posts</NuxtLink>
    <NuxtLink to="/profile">profile</NuxtLink>
    <NuxtLink to="/login">login</NuxtLink> -->
  </v-app>
  
  <!-- <div>footer</div> -->
</template>

<script setup lang="ts">
  const { connectLink } = useUtilFunction();

  let overlay = toRef(false);
  
  function scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  // const toggle = () => {
  //     overlay = ref(true);
  //     overlay.value = !overlay.value;
  //   }
 
  function routePage( pageName : string){
    const router = useRouter();
    
    console.log("useRouter.getRoute: ", router.getRoutes());
   
    console.log("pageName: ", pageName);
    // const relativeAddress = pageName;
    router.push({ 
      path: pageName,
    }); // 상대 경로, 절대 경로 상관없음.
    const headerTitle = document.getElementById("headerTitle");
    if(headerTitle != null){
      console.log("!!!!");
      if(pageName === '/'){
        pageName = "Pause Lab";
        console.log('pageName: ', pageName);
      }
      else{
        pageName = pageName.substring(1);
      }
      headerTitle.innerHTML = pageName;
    }
    // console.log("headerTitle: ", headerTitle);
    let hamburgerButton = document.getElementById("hamburger-btn");
    
    if(hamburgerButton != null){
      let overlayID = document.getElementById("overlay");
      console.log("overlayID: ", overlayID);
      if(overlayID != null){
        hamburgerButton.click();
      }
    }
    
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
    console.log("mounted");
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
  @import "../assets/stylesheets/tooltip.scss";

  .router-view{
    margin-top: 64px;
  }
  .v-toolbar{
    border-bottom: 2px solid #282828;
    position: fixed;
    background: rgba(0, 0, 0, .7);
    z-index:1000;
  }

  @import "../assets/stylesheets/layouts/default.scss";
  .v-toolbar-title{
    margin-inline-start: 0px;
    font-size: 1.4rem;
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
  .v-btn:hover :deep(.v-btn__overlay){
      opacity: 0;
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

    .v-sheet{
      font-size: 4dvw;
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
      font-size: 1rem;
      text-align: center;
    }

    .v-sheet{
      font-size: 8dvw;
    }
  }

  @media screen and (max-width: 500px) {
    // .header-col{
    //   // width: 30%;
    //   font-size: 20dvw;
    //   cursor: pointer;
    //   // heig
    // }

    .v-sheet{
      font-size: 10dvw;
    }
  }

  a{
    text-decoration: none;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: #FEE500;
    position: absolute;
    transform: translateY(10%);
    z-index: 1;
    color: #424242;
    font-weight: 900;
    width: 240px;
    
  }

  

  .tooltip{
    background-color: #424242;
  }
  .tooltip:hover{
    transition: none;
    background-color: #FEE500;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    transition: all .3s ease-out;
  }
  @media screen and (max-width: 430px) {

    .v-toolbar-title{
      font-size: 0.5rem;
    }

    .tooltip .tooltip-left {
      display: none;
    }
  }

  @media screen and (max-width: 280px) {

.v-toolbar-title{
  display: none;
}

.tooltip .tooltip-left {
  display: none;
}
}
</style>
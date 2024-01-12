<template>
    <v-app class="content-list-wrap">
        
        <v-row class="content-list-row">
            <!-- <template v-for="(items) in films"> -->
                <!-- <v-card style="width:100px; height: 100px; color: black;" v-for="(item) in contentLists.slice(0,7)" :key="item.id">
                    <div style="width:100px; height: 100px; color: black;">{{ item.id }}</div>
                    <div style="width:100px; height: 100px; color: black;">{{ item.title }}</div>
                </v-card> -->
            <!-- </template> -->

            <template v-for="(content, index) in contentLists.slice(0,8)">
                <v-col v-if="index<contentLists.slice(0,7).length" class="header-col d-flex child-flex" cols="6" md="3" align="center" >
                    
                    <v-card 
                        @click="$router.push(`/${props.contentCategory}/${index}`)"
                        id="mouse-over-label"
                        class="content"
                        aspect-ratio="1"
                    >
                        <ClientOnly>
                            <v-lazy
                                :min-height="50"
                                :options="{'threshold': (0.1 * index)}"
                                aspect-ratio="1"
                                
                            >
                                <v-img 
                                    :style="itemStyle(index)" 
                                    eager
                                    :id="props.contentCategory + '-img' + index"
                                    aspect-ratio="1"
                                    cover
                                    :src="content.imgUri"
                                    >
                                
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0 bg-background"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                        indeterminate
                                        color="white"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                                </v-img>
                        </v-lazy>
                    </ClientOnly>
                    
                        <v-card-title 
                            :id="props.contentCategory + '-title'+index"
                            class = "justify-center text-white d-flex flex-column">
                                <p class="font-weight-bold">
                                    {{ content.title }}
                                </p>

                                <div>
                                    <p class="">
                                        {{ content.contents }}
                                    </p>
                                </div>
                            </v-card-title>
                    </v-card>
                    
                </v-col>
                
                
                <v-col v-else  class="header-col " cols="6" md="3" justify="center" align="center" >
                    <v-card 
                        style=" justify-content: center; display: flex; align-items: center;"
                        height="100%"
                        id="more-col"
                        @click="$router.push(`/${props.contentCategory}`)"
                    >
                        <v-lazy
                                :min-height="50"
                                :options="{'threshold': (0.1 * index)}"
                                aspect-ratio="1"
                                
                            >
                        
                        
                            <div :style="itemStyle(index)" style="width:100%; height: 100%; display: block;">
                                <div class="more-icon-wrap mt-2 ">
                                    <v-icon size="30" class="more-icon" style=" border: solid 2px #DEDDDA; border-radius: 30%;" color="#DEDDDA">mdi-chevron-right</v-icon>
                                </div>
                                <div class="mt-1" style="color: #DEDDDA; font-size: 0.7rem; font-weight: 900;" >더 보기</div>
                            </div>
                        
                        </v-lazy>
                    </v-card>
                </v-col>
            </template>
            
        </v-row>
    </v-app>
</template>

<script setup lang="ts">

function getImageUrl(name : string) {
    // console.log(name);
    // console.log(new URL(`../assets/images/${name}`, import.meta.url).href);
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

import useContentListStore from "@/stores/useContentListStore";
import type { Content } from "~/types/stores/contentListStore";

const contentListStore = useContentListStore();

let contentLists = ref([] as Content[]);
// const { getIdList } = contentListStore;
const props = defineProps(['contentCategory', 'posts']);
// console.log(props.posts.posts[0]);
if(props.contentCategory === 'film'){
    const { filmsState } = storeToRefs(contentListStore);
    contentLists = filmsState;
}
else if(props.contentCategory === 'post'){
    const { postsState } = storeToRefs(contentListStore);
    contentLists = postsState;
    console.log(contentLists);
    // console.log(getIdList(7))
}
let defaultTransition = 1.0;
const transitionSpacing = 0.3;

function itemStyle(index :number){
    defaultTransition += transitionSpacing;
    console.log(defaultTransition);
    return { 
        // animationDelay: defaultTransition +`s` ,
        animation: 'bubble ' + defaultTransition + 's ease',
        // animationFillMode: 'forwards'
    }
}

// const contentImg = document.getElementById("film-img0");
// console.log(contentImg);
// onMounted(() => {
//     const contentImg = document.getElementById("film-img0");
//     if(contentImg){
//         console.log("hi")
//         console.log(contentLists.value);
//         contentImg.style.animationFillMode = 'forwards';
//         contentImg.style.animation = "bubble 0.5s ease";
//         contentImg.style.animationDelay = defaultTransition + 's'
//     }
// })

const {filmsState} = contentListStore;
console.log(filmsState)
console.log(filmsState.length);
// let defaultTransition = 0.5;
// const transitionSpacing = 0.2;

// let img = new Image();
// if(document.readyState === "complete")
// window.onload = function() {
//     console.log('aa');
//      // place code here for when the background image is loaded
// }
// img.src = filmsState[0].imgUri;
// img.onload = function() {
//     // place code here for when the background image is loaded
//     console.log("Img Load");
// }


// for (let id of getIdList(7)){
//     console.log(id);
//     // const contentImg1 = document.getElementById("#" + props.contentCategory + "-img" + id);
//     // // const contentImg = document.querySelector<HTMLElement>("#" + props.contentCategory + "-img" + id);
//     // if(contentImg1){
//     //     contentImg1.style.transition = defaultTransition + 's'
//     //     defaultTransition += transitionSpacing;
//     // }
// }

function useAsset(path: string) :any{
    console.log (path);
    const assets = import.meta.glob('~/assets/images/*', {
        eager: true,
        import: 'default',
    });
    console.log(assets);
    
    return assets['/assets/images/' + path]
}

function showContent(visible : boolean, index : number){
    
    // if(visible){
    //     // console.log("index:" , index);
    //     const contentTitle = document.querySelector<HTMLElement>("#" + props.contentCategory + "-title" + index);
    //     const contentImg = document.querySelector<HTMLElement>("#" + props.contentCategory + "-img" + index);
    //     // console.log(contentTitle);
    //     if( contentTitle && contentImg ){
    //         // console.log("Mouseover True");
    //         contentImg.style.opacity = "0.5";
    //         contentImg.style.transform = 'scale3d(1.1, 1.1, 1) rotate(0.001deg)';
    //         contentTitle.style.opacity = '1';
    //         contentTitle.style.color = 'white';  
    //     }
    // }
    // else{
        
    //     const contentTitle = document.querySelector<HTMLElement>("#" + props.contentCategory + "-title" + index);
    //     const contentImg = document.querySelector<HTMLElement>("#" + props.contentCategory + "-img" + index);
    //     if( contentTitle && contentImg ){
    //         // console.log("index:" , index);
    //         // console.log("Mouseover False");
    //         contentImg.style.opacity = "1";
    //         contentImg.style.transform = 'scale3d(1.00, 1.00, 1) rotate(0.000deg)';
    //         contentTitle.style.opacity = '0';
            
    //     }
    // }
}

function hoverMore(visible : boolean, index : number){
    // if(visible){
    //     // onMounted(() => {
    //         // 햄버거 버튼 애니메이션이 css에서 이뤄진다. 
    //         // 자바스크립트보다 css를 먼저 불러오기 때문에 모양만 변하고 Overlay 화면이 뜨지 않는다.
    //         // 따라서 자바스크립트를 불러올 때까지 버튼을 비활성화 시킨다.
    //         // 자바스크립트를 불러오고 난 후에 다시 활성화 시켜준다.
    //         // 위와 같은 처리를 위해 아래 코드를 작성하게 됐다.
            
    //         console.log("index:" , index);
    //         const contentTitle = document.querySelector<HTMLElement>("#" + props.contentCategory + "-title"+index);
    //         const contentImg = document.querySelector<HTMLElement>("#" + props.contentCategory + "-img" + index);
    //         console.log(contentTitle);
    //         if( contentImg ){
    //             console.log("Mouseover True");
    //             contentImg.style.background = '#353535'
    //             contentImg.style.transform = 'scale3d(1.1, 1.1, 1) rotate(0.001deg)';
    //         }
    //     // })
    // }
    // else{
    //     const contentImg = document.querySelector<HTMLElement>("#" + props.contentCategory + "-img" + index);
    //     if( contentImg ){
    //         contentImg.style.background = '#282828'
    //         contentImg.style.transform = 'scale3d(1.00, 1.00, 1) rotate(0.000deg)';
            
    //     }
    // }
}
</script>

<style lang="scss" scoped>

.more-icon-wrap {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
}

.more-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.v-card-title > p{
    font-size: 2.2dvw;
}

.v-card-title > div{
    margin-top: 1dvw;
    font-size: 2.0dvw;
}
:deep(.v-application__wrap){
    min-height: 100%;
}
.content-list-row{
    flex: 0;
    margin: 0;
}
.test:hover{
    background-color: orange
}

.header-col{
    // width: 30%;
    
    // padding-top: 6dvw;
    // padding-bottom: 6dvw;
    padding: 0;
    cursor: pointer;
    // heig
  }

  #more-col{
    background-color: #282828;
  }
  #more-col :deep(.v-img__img){
    top: 50%;
    left: 50%;
    width:10%;
    height:10%;
    transform: translate(-50%, -50%);
    border-radius: 40%;
    border: solid 2px white;
    padding: 3%;
  }

  #more-col:hover{
    
    background-color: #424242;
  }
//   #more-col:hover :deep(.v-img__img){
//     transform: translate(-50%, -50%) scale3d(1.2, 1.2, 1) ;
//     transition: all linear 0.3s 0s;
//   }
  .content{
    width: 100%;
    height: 100%;
    background-color: #282828;
  }

  .v-card-title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 100%;
    white-space: normal;
    word-wrap: break-word;
    line-height: 2.8dvw;
    padding-left: 2dvw;
    padding-right: 2dvw;
}
  .content:hover > .v-card-title{
    opacity: 1;
    color: white;
  }
  .content:hover > .v-lazy > .v-img{
    opacity: 0.4 ;
    transform: scale3d(1.05, 1.05, 1);
    transition: all linear 0.3s 0s;
  }
  .v-sheet{
    font-size: 3dvw;
    background-color : transparent; 
  }

  #more{
    border: solid 1px #585858;
  }

  .aa{
    color: white;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

@media screen and (max-width: 430px) {
    .tooltip .tooltip-top {
        width: 300px;
        bottom: 150%;
        background-color: #424242;
    }
}  


 
</style>
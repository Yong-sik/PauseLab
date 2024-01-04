<template>
    <v-app class="content-list-wrap">
        <v-row class="content-list-row">
            <template v-for="(index) in contentListStore.contents.length">
                
                <v-col v-if="index<contentListStore.contents.length" class="header-col d-flex child-flex" cols="6" md="3" align="center" >
                    
                    <v-card 
                        @mouseover="showContent(true, index)"
                        @mouseout="showContent(false, index)"
                        id="mouse-over-label"
                        class="content"
                    >
                        
                        <v-img 
                            
                            :id="'content-img'+index"
                            aspect-ratio="1"
                            cover
                            :src= "useAsset(contentListStore.contents[index].id + '.jpg')"
                            >
                        
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height ma-0 bg-header_background"
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
                        <v-card-title 
                            :id="'content-title'+index"
                            class = "justify-center text-h6 text-white d-flex flex-column">
                                <p class="mt-4">
                                    {{ contentListStore.contents[index].title }}
                                </p>

                                <div>
                                    <p class="ma-0 text-body-1 font-weight-bold">
                                        {{ contentListStore.contents[index].contents }}
                                    </p>
                                </div>
                            </v-card-title>
                    </v-card>
                </v-col>
                
                
                <v-col v-else  class="header-col " cols="6" md="3" justify="center" align="center" >
                    <v-card class="content" id="more-col">
                        
                            <v-img
                            id="more-col"
                            aspect-ratio="1"
                            cover
                            :src= "useAsset('ico_arr.svg')"
                            >
                            </v-img>
                        
                    </v-card>
                </v-col>
                
            
            </template>
            <!-- <v-col id="more" class="header-col d-flex child-flex" cols="6" md="3" align="center" >
                <v-btn style="margin:auto"> 더 많은 FILM 보러가기 ></v-btn> -->
                    <!-- <v-img
                        aspect-ratio="1"
                        :src= "useAsset('ico_more.svg')"
                        >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0 bg-header_background"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                indeterminate
                                color="white"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img> -->
            
        </v-row>
    </v-app>
</template>

<script setup lang="ts">
import useContentListStore from "@/stores/useContentListStore";
const props = defineProps(['contentCategory']);
if(props.contentCategory === 'film'){
    // Film 데이터를 Store를 통해 불러오면 됨.
}
else if(props.contentCategory === 'post'){
    // Post 데이터를 Store를 통해 불러오면 됨.
}

const contentListStore = useContentListStore();

function useAsset(path: string) :any{
    const assets = import.meta.glob('~/assets/images/*', {
        eager: true,
        import: 'default',
    });
    console.log(assets);
    
    return assets['/assets/images/' + path]
}

function showContent(visible : boolean, index : number){
    if(visible){
        // onMounted(() => {
            // 햄버거 버튼 애니메이션이 css에서 이뤄진다. 
            // 자바스크립트보다 css를 먼저 불러오기 때문에 모양만 변하고 Overlay 화면이 뜨지 않는다.
            // 따라서 자바스크립트를 불러올 때까지 버튼을 비활성화 시킨다.
            // 자바스크립트를 불러오고 난 후에 다시 활성화 시켜준다.
            // 위와 같은 처리를 위해 아래 코드를 작성하게 됐다.
            
            console.log("index:" , index);
            const contentTitle = document.querySelector<HTMLElement>("#content-title"+index);
            const contentImg = document.querySelector<HTMLElement>("#content-img" + index);
            console.log(contentTitle);
            if( contentTitle && contentImg ){
                console.log("Mouseover True");
                contentImg.style.opacity = "0.5";
                contentImg.style.transform = 'scale3d(1.1, 1.1, 1) rotate(0.001deg)';
                contentTitle.style.opacity = '1';
                contentTitle.style.color = 'white';  
            }
        // })
    }
    else{
        
        const contentTitle = document.querySelector<HTMLElement>("#content-title" + index);
        const contentImg = document.querySelector<HTMLElement>("#content-img" + index);
        if( contentTitle && contentImg ){
            console.log("index:" , index);
            console.log("Mouseover False");
            contentImg.style.opacity = "1";
            contentImg.style.transform = 'scale3d(1.00, 1.00, 1) rotate(0.000deg)';
            contentTitle.style.opacity = '0';
            
        }
    }
}
</script>

<style lang="scss" scoped>

.v-card-title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
}
:deep(.v-application__wrap){
    min-height: 100%;
}
.content-list-row{
    flex: 0;
    margin: 0;
}
.test2{
    width: 100%;
    background-color: #282828;
}

.header-col{
    // width: 30%;
    
    // padding-top: 6dvw;
    // padding-bottom: 6dvw;
    padding: 0;
    cursor: pointer;
    // heig
  }

  #more-col :deep(.v-img__img){
    // max-width: 10%;
    // max-height: 100%;
    
    top: 50%;
    left: 50%;
    width:20%;
    height:20%;
    transform: translate(-50%, -50%) rotate(-90deg);
    border-radius: 40%;
    border: solid 2px white;
    padding: 4%;
    transition: transform .5s;
    // animation: fadein 1s;    
    // transition: all 0.25s ease-out;
  }
  .content{
    width: 100%;
    height: 100%;
    background-color: #282828;
    // height: 50%;
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

  .fade-enter {
    background-color: white;
    transform: translateY(40px);
    opacity: 0;
    /* absolute를 정의해서 애니메이션되는 동안 
        다른 element가 그 자리를 채워 넣을 수 있게 만들어줌 */
  }
  .fade-enter-active {
    transition: all .7s ease-out;
  }
</style>
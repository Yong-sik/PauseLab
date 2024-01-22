<template>

    <div class="type-background">

    </div>
    <div class="type-wrap">
        <v-btn 
            v-for="(item, index) in contentTypes"
            :id="'type' + index"
            class="type mr-8 ml-8"
            elevation="0"
            :ripple="false"
            @click="selectCategory(index)"
        >
            <span>{{ item }}</span>
        </v-btn>
    </div>

</template>

<script setup lang="ts">
    const contentListStore = useContentListStore();
    const {filmsState, filmsStateInAll, filmsStateInCf, filmsStateInEtc } = storeToRefs(contentListStore);
    console.log(filmsState.value);
    console.log(filmsStateInCf.value);
    console.log(filmsStateInEtc.value);
    
    let contentTypes = ref([]);
    
    const props = defineProps(['contentCategory']);
    // console.log(props.posts.posts[0]);
    if(props.contentCategory === 'film'){
        const { filmTypes } = storeToRefs(contentListStore);
        console.log(filmTypes);
        contentTypes = filmTypes;
    }
    else if(props.contentCategory === 'post'){
        const { postTypes } = storeToRefs(contentListStore);
        contentTypes = postTypes;
    }

    console.log("contentTypes: ", contentTypes)

    function selectCategory( index :number){
        for(let i=0; i<contentTypes.value.length; i++){
            const typeElement = document.getElementById('type' + i);
            if(typeElement){
                typeElement.classList.remove('isVisible');
            }
        }
        const typeElement = document.getElementById('type' + index);
        if(typeElement){
            typeElement.className += ' isVisible';
        }

        

        if(index==0){   //ALL이 선택됐을 경우
            contentListStore.filterState('all');
        }
        else if(index==1){  // CF/Brand Film이 선택됐을 경우
            contentListStore.filterState('cf/brand film');
        }
        else if(index==2){  // ETC가 선택됐을 경우
            contentListStore.filterState('etc');
        }
    }

    onMounted(() => {
        const typeElement = document.getElementById('type0');
        if(typeElement){
            typeElement.className += ' isVisible';
        }
        // filmsState.value = filmsStateInAll.value
    })


</script>

<style lang="scss" scoped>

.type{
    display: flex;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-size: 18px;
}

.type.isVisible span{
    padding: 4px 16px;
    border: 2px solid white;
    border-radius: 25px;
}

.type:hover{
    background-color: transparent !important;
    transform: scale(1.2, 1.2);
}

.type:hover > :deep( .v-btn__overlay){
    opacity: 0 !important;
}

.type::before{
    background-color: transparent !important;
}

.type::after{
    background-color: transparent !important;
}
.type-wrap{    
    height: 64px;
    display: flex;
    position: fixed;
    top: 64px;
    z-index: 1;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.type-background{
    height: 64px;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    top: 64px;
    z-index: 1;
    left: 0;
    right: 0;
}

@media screen and (max-width: 550px) {
    .type{
        width: 100%;
        display: block;
        font-size: 9px;
        margin:0 !important;
    }

    .type-wrap{
        
        padding:0;
        display: block;
        font-size: 9px;
        font-weight: 570;   
        margin: auto;
        height: 110px;    
    }

    .type-background{
    height: 110px;
    }
} 
</style>


<template>    

    <div class="wrap-iframe">
        
        <iframe id="iframe"
            width="1920" 
            height="1080" 
            src="https://www.youtube.com/embed/7WOahK_aqUY?autoplay=1&mute=1&loop=1&controls=0&rel=0&fs=0&playlist=7WOahK_aqUY"
            title="[브랜드 필름] KOMANS - 떠올리고 싶은 맛, 코만스"
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        >
        </iframe>
        
    </div>

        <!-- <Test /> -->
        <!-- Youtube API 주소: https://developers.google.com/youtube/player_parameters?hl=ko -->
</template>



<script setup lang="ts">

</script>

<style lang="scss" scoped>

    .wrap-iframe {
        // margin: auto;
        position: relative;
        /* No clicking/hover effects */
        pointer-events: none;
        padding-top: 56.25%;
        height: 0;
        z-index: 900;
    }
    /* iframe */
    #iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // height: 100%;
        // margin-left: -100%;
        // background-color: #282828;
    }
</style>


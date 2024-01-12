<template>
    
    <footer class="footer">
      <div class="about-us">
        <div class="copyright">
          <div>Copyright 2021</div>
          <div class="separator">&nbsp | &nbsp</div>
          <div>PAUSE LAB Corporation</div>
          <div class="separator">&nbsp | &nbsp</div>
          <div>ALL RIGHT RESERVED</div>
        </div>
        <div class="company-info">
          <div>대표 박찬웅</div>
          <div>&nbsp 사업자등록번호 840-03-02450 &nbsp</div>
          <div>{{ companyInformation.address }} </div>
        </div>
      </div>
      
      <v-spacer></v-spacer>
      <div class="contact">    
        <v-btn @click="connectLink('instagram')" class="tooltip" color="#282828" elevation="0">
          <v-icon icon="custom:instaIcon"></v-icon>
        </v-btn>

        <v-btn class="tooltip" color="#282828" elevation="0">
          <v-icon icon="custom:telIcon"></v-icon>
          <span class="tooltiptext tooltip-top">
            <v-card color="#424242" align="center" elevation="0"><div class="mt-3"><b>TEL</b></div></v-card>
            <v-card id="phone-number-wrap" color="#424242" align="center" elevation="0" >
              <div @click="connectLink('call')" class="mt-1 mb-4 contact-tooltip" style="width: 80%; word-wrap: break-word; white-space: normal;">
                {{ companyInformation.phone }}
              </div>
            </v-card>
            <v-card color="#424242" align="center" style="word-wrap: break-word;" elevation="0"><b>EMAIL</b></v-card>
            <v-card id="email-wrap" color="#424242" align="center" style="word-wrap: break-word;" elevation="0">
              <div @click="connectLink('sendMail')" class="mt-1 mb-4 contact-tooltip text-lowercase" style="height: 25px; width: 80%; word-wrap: break-word; white-space: normal;">
                {{ companyInformation.email }}
              </div>
            </v-card>
          </span>
        </v-btn>

        <v-btn @click="connectLink('youtube')" color="#282828" elevation="0">
          <v-icon icon="custom:youtubeIcon"></v-icon>
        </v-btn>
      </div>
      
    </footer>
</template>

<script setup lang="ts">

  const { connectLink, companyInformation } = useUtilFunction();

</script>

<style lang="scss" scoped>
#phone-number-wrap > .contact-tooltip > a{
  text-decoration-line: none;
  color: white;
}
#phone-number-wrap:hover > .contact-tooltip{
  color: #FEC800;
}

#email-wrap:hover > .contact-tooltip{
  color: #FEC800;
}

.contact-tooltip {
  animation: hithere 1s ease infinite;
  width: 300px;
  word-wrap: break-word;
  cursor: pointer;
}
@keyframes hithere {
  30% { transform: scale(1.1); }
  40%, 60% { transform: rotate(-2deg) scale(1.1); }
  50% { transform: rotate(2deg) scale(1.1); }
  70% { transform: rotate(0deg) scale(1.1); }
  100% { transform: scale(1); }
}
    .footer{
      margin: 13dvh 10dvw;
      font-size: 0.8rem;
      background-color: #282828;
      display: flex;
      white-space: normal;
    }

    .about-us{
      display: block;
      
      text-align: center;
    }

    .copyright{
      display: flex;
      // justify-content: center;
    }

    .company-info{
      display: flex;
      // justify-content: center;
    }

    .contact{
      display: flex;
      // justify-content: center;
    }

    .v-btn:hover :deep(.v-btn__overlay){
      opacity: 0;
    }

    #tel-btn > :deep(.v-btn__content){
      display: block;
    }

    .v-btn{
      padding: 0 15px;
      min-width: 0;
    }

    .v-icon{
      width: 30px;
      height: 30px;
    }
    .v-btn:hover .v-icon{
      transform: translate(5px, -2.5px)  ;
      transform: scale(1.2)
    }
/* 툴팁 기본 스타일 설정 시작 */

.tooltip {
  position: relative;
  display: block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
}

.tooltip:focus .tooltiptext {
  visibility: visible;
}

/* 툴팁 기본 스타일 설정 끝 */

/* -------------------------- */

/* 툴팁 화살표 기본 스타일 설정 시작 */

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  border-style: solid;
  border-width: 5px;
}

/* 툴팁 화살표 기본 스타일 설정 끝 */

/* 툴팁 방향 설정 시작 */

/* 위쪽 툴팁 시작 */

.tooltip .tooltip-top {
  width: 300px;
  bottom: 150%;
  background-color: #424242;
  // padding: 20px;
  // left: 50%;
  // margin-left: -60px;
}

.tooltip .tooltip-top::after {
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-color: #424242 transparent transparent transparent;
}
@media screen and (max-width: 430px) {

  .tooltip .tooltip-top {
    width: 300px;
    bottom: 150%;
    background-color: #424242;
    // padding: 20px;
    // left: 50%;
    // margin-left: -60px;
  }
}  

    
    

    @media screen and (max-width: 960px) {

      .tooltip .tooltip-top {
        width: 90vw;
        bottom: 150%;
        background-color: #424242;
        // padding: 20px;
        // left: 50%;
        // margin-left: -60px;
      }
      .footer{
        display: block;
      }

      .about-us div{
        margin: 1dvh 0;
        white-space: normal;
      }
      .company-info div{
        margin: 1dvh 0;
        white-space: normal;
      }

      .copyright{
        display: block;
        justify-content: center;
      }
   
      .company-info{
        padding : 3dvh 0;
        display: block;
        justify-content: center;
      }

      .contact{
        justify-content: center;
      }
      .separator{
        display: none;
      }

      .contact > .v-btn{
        background-color: #282828;
      }

    }
</style>


import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import logoIcon from "../../components/logoIcon.vue";
import shineLogoIcon from "../../components/shineLogoIcon.vue";
import moreIcon from "../../components/moreIcon.vue";
import telIcon from "../../components/telIcon.vue";
import instaIcon from "../../components/instaIcon.vue";
import youtubeIcon from "../../components/youtubeIcon.vue";
import kakaoIcon from "../../components/kakaoIcon.vue";
import topIcon from "../../components/topIcon.vue";


const customSvgNameToComponent: any = {
    logoIcon,
    shineLogoIcon,
    moreIcon,
    telIcon,
    instaIcon,
    youtubeIcon,
    kakaoIcon,
    topIcon,
};

const customSVGs: IconSet = {
    component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs /* aliases */ };
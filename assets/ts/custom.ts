import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import logoIcon from "../../components/logoIcon.vue";
import shineLogoIcon from "../../components/shineLogoIcon.vue";
import moreIcon from "../../components/moreIcon.vue";

const customSvgNameToComponent: any = {
    logoIcon,
    shineLogoIcon,
    moreIcon,
};

const customSVGs: IconSet = {
    component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs /* aliases */ };
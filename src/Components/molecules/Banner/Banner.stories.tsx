import React from "react";
import BannerComponent, {BannerProps} from "./BannerComponent";
import { Story } from "@storybook/react";

export default {
    title: "Molecules/Banner",
    component: BannerComponent
}

const Template: Story<BannerProps> = () => <BannerComponent/>

export const CardBanner = Template.bind({})

CardBanner.args = {};

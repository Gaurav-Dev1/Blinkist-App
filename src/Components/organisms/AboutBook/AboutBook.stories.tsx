import React from "react";
import { Story } from "@storybook/react";
import AboutBookTab from "./AboutBookTab";

export default {
    title: 'Organisms/AboutBookTab',
    component: AboutBookTab
}

const Template : Story<typeof AboutBookTab> = () => <AboutBookTab />

export const AboutBook = Template.bind({})
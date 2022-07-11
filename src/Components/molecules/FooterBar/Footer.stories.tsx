import React from "react";
import { Story } from "@storybook/react";
import FooterComponent from "./FooterComponent";

export default {
    title: 'Molecules/footer',
    component: FooterComponent
}

const Template : Story<typeof FooterComponent> = () => <FooterComponent />

export const Footer = Template.bind({})
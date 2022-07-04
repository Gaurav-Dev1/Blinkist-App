import React from "react";
import { Story } from "@storybook/react";
import Header from "./Header";

export default {
    title: 'Organisms/Header',
    component: Header
}

const Template : Story<typeof Header> = () => <Header />

export const HeaderComponent = Template.bind({})
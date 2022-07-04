import React, { Component } from "react";
import { Story } from "@storybook/react";
import Tabs from "./Tabs";

export default {
    title: 'Organisms/Tabs',
    Component: Tabs
}

const Template : Story<typeof Tabs> = () => <Tabs />

export const ReadingTabs = Template.bind({});

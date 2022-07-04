import React from "react";
import { Story } from "@storybook/react";
import ExploreTabOpen from "./ExploreTabOpen";

export default {
    title: 'Organisms/ExploreTabOpen',
    component: ExploreTabOpen
}

const Template: Story <typeof ExploreTabOpen> = () => <ExploreTabOpen />

export const ExploreTab = Template.bind({})

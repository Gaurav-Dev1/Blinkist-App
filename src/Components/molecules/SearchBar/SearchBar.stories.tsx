import { Story } from "@storybook/react";
import React from "react";
import  SearchBarComponent  from "./SearchBarComponent";


export default {
    title: 'Molecules/SearchBar',
    component : SearchBarComponent
};

const Template : Story<typeof SearchBarComponent> = ()=><SearchBarComponent/>

export const SearchBar = Template.bind({});
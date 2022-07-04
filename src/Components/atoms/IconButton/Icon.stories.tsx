import React from "react";
import { Story } from "@storybook/react";
import IconButtonComponent ,{IconButtonProps} from "./IconButton";
import { ReactComponent as Search } from "./../../../Images/Search.svg";
import { ReactComponent as DropdownIcon } from "./../../../Images/Dropdown.svg";

export default {
    title: 'Atoms/Iconbuttons',
    component: IconButtonComponent
}

const Template : Story<IconButtonProps> = args => <IconButtonComponent{...args}/>

export const searchIconButton = Template.bind({})

searchIconButton.args = {
    children : <Search/>
}

export const dropDownButton = Template.bind({})

dropDownButton.args = {
    children : <DropdownIcon />
}


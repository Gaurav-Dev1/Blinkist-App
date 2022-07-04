import React from "react";
import {Story} from "@storybook/react";
import { AvatarIcon,AvatarProps } from "./Avatar";

export default {
    title: 'Atoms/Avatars',
    component: AvatarIcon
}

const Template : Story<AvatarProps> = args =><AvatarIcon{...args}/>

export const AvatarWithG = Template.bind({});

AvatarWithG.args = {
    letter: 'A'
}
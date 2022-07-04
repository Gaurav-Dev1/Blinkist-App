import React from "react";
import {Story} from "@storybook/react";
import Logo, { LogoProps } from "./Logo";
import BlinkistLogo from './BlinkistLogo.svg'

export default {
    title: 'Atoms/logo',
    component: Logo
}

const Template : Story<LogoProps> = args =><Logo{...args}/>

export const BlinkistImageLogo = Template.bind({});

BlinkistImageLogo.args = {
    src: BlinkistLogo
}
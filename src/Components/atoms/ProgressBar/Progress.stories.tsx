import React from "react";
import {Story} from "@storybook/react";
import  { ProgressBarProps } from "./ProgressBar";
import ProgressBarComponent from "./ProgressBar";

export default {
    title: 'Atoms/ProgressBar',
    component: ProgressBarComponent
}

const Template : Story<ProgressBarProps> = args =><ProgressBarComponent{...args}/>

export const progress = Template.bind({})

progress.args={
    progress:30,
}


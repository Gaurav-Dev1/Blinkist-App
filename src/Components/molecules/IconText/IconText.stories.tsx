import React from "react";
import {Story} from '@storybook/react';
import IconText, {IconTextProps} from "./IconText";
import Entrepreneurship from '../../../Images/entrepreneurship.svg'
import Science from '../../../Images/Science.svg'

export default {
    title: "Molecules/IconText",
    component: IconText
}

const Template: Story<IconTextProps> = args => <IconText{...args} />

export const EntrepreneurshipData = Template.bind({})

EntrepreneurshipData.args = {

    imgSrc: Entrepreneurship,
    title: 'Entrepreneurship'
}

export const ScienceData = Template.bind({})

ScienceData.args = {

    imgSrc: Science,
    title: 'Science'
}


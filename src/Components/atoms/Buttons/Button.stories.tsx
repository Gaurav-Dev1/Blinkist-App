import React from "react";
import {Story} from "@storybook/react";
import {ButtonComponent,ButtonIconProps} from "./Button";
import  AddIcon  from "@mui/icons-material/Add";

export default {
    title: 'Atoms/Buttons',
    component: ButtonComponent
}

const Template : Story<ButtonIconProps> = args =><ButtonComponent{...args}/>

export const AddToLibButtonHoverState = Template.bind({})

AddToLibButtonHoverState.args={
    variant:'contained',
    startIcon:<AddIcon/>,
    style:{
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'

    },
    children: 'Add to library'
}

export const ReadNow = Template.bind({});

ReadNow.args = {
    variant: 'outline',
    style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 24px 12px 24px',
        gap: '10px',
        textTransform: 'none',
        borderRadius: '4px',
        border: '1px solid lightgray',
        fontFamily: 'Cera Pro',
        color: '#22C870',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
    },
    children:'Read now'
}

export const sendToKindle = Template.bind({});

sendToKindle.args = {
    variant:'text',
    style: {
        width: '110px',
        height: '20px',
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px',
        flex: 'none',
        order: 0,
        color: '#6D787E'

    },
    children: 'send to kindle'
}
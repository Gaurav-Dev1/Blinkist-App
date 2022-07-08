import React from "react";
import MyLibraryTemplate, {MyLibraryTemplateProps} from "./MyLibraryTemplate";
import {Story} from '@storybook/react';
import Tabs from "../../organisms/Tabs/Tabs";


export default {
    title: 'Templates/My Library',
    component: MyLibraryTemplate
}

const Template: Story<MyLibraryTemplateProps> = args => <MyLibraryTemplate{...args} />

export const MyLibrary = Template.bind({})

MyLibrary.args = {
    body: <Tabs />
}

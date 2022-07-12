import React from "react";
import BookDescriptionLayout, {BookDescriptionTemplateProps} from "./BookDescriptionLayout";
import {Story} from '@storybook/react';
import BookDescription from "../../organisms/BookDescription/BookDescription";


export default {
    title: 'Templates/BookDescription',
    component: BookDescriptionLayout
}

const Template: Story<BookDescriptionTemplateProps> = args => <BookDescriptionLayout{...args} />

export const BookDescriptionTemplate = Template.bind({})

BookDescriptionTemplate.args = {
    body: <BookDescription />
}


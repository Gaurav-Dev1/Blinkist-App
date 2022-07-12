import React from "react";
import { Story } from "@storybook/react";
import BookDescription from "./BookDescription";

export default {
    title: 'Organisms/BookDescription',
    component: BookDescription
}

const Template : Story<typeof BookDescription> = () => <BookDescription />

export const BookDesc = Template.bind({})
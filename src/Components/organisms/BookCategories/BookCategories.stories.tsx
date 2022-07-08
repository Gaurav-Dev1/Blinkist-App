import React from "react";
import BookCategories, {BookCategoryProps} from "./BookCategories";
import {Story} from '@storybook/react'

export default {
    title: 'Organisms/Book Categories',
    component: BookCategories
}

const Template : Story<BookCategoryProps> = args => <BookCategories {...args} /> 

export const BookCategoryStory = Template.bind({})

BookCategoryStory.args = {
    status: 'justAdded',
    title: 'Trending blinks'
}


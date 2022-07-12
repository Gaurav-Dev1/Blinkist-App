import React from "react";
import {Story} from '@storybook/react';
import BookCard, {BookCardProps} from "./BookCard";
import beingBoss from '../../../Images/Book10.svg'

export default {
    title: 'Organisms/BookCard',
    component: BookCard
}
const Template: Story<BookCardProps> = args => <BookCard {...args} />
export const CardComponent = Template.bind({})
CardComponent.args = {
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    //isFinished: true,
    // readAgain: true,
     addToLibrary: true
}

console.log(beingBoss)
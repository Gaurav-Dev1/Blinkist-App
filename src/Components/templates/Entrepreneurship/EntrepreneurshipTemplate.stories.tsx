import React from "react";
import EntrepreneurshipTemplate, {EntrepreneurshipTemplateProps } from "./EntrepreneurshipTemplate";
import {Story} from '@storybook/react';
import Tabs from "../../organisms/Tabs/Tabs";
import BannerComponent from "../../molecules/Banner/BannerComponent";
import SearchBarComponent from "../../molecules/SearchBar/SearchBarComponent";
import BookCategories from "../../organisms/BookCategories/BookCategories";



export default {
    title: 'Templates/Entrepreneurship Template',
    component: EntrepreneurshipTemplate
}

const Template: Story<EntrepreneurshipTemplateProps> = args => <EntrepreneurshipTemplate{...args} />

export const EntrepreneurshipTemp = Template.bind({})

EntrepreneurshipTemp.args = {
    banner: <BannerComponent />,
    searchBar: <SearchBarComponent />,
    trendingBlinks: <BookCategories  title="Trending blinks" status="trending"/>,
    justAddedBlinks: <BookCategories  title="Just added" status="justAdded"/>,
    featuredBlinks: <BookCategories  title="Featured audio blinks" status="featured"/>
}

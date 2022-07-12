import React, { useEffect, useState } from 'react';
import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { BookInfo } from '../BookCard/BookCard';
import api from '../../../Axios/api';
import BookCard from '../BookCard/BookCard';

export interface BookDataProps {
    id: number;
    title: string;
    author: string;
    timeToRead : string;
    numberOfReads : string;
    image: string;
    status :{
        isTrending:boolean;
        isFinished:boolean;
        isFeatured:boolean;
        justAdded:boolean;
    };
}

export interface BookCategoryProps {
    // bookData: Array<BookDataProps>;
    status?: string;
    title: string;
}

const MainContainer = styled('div') ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '25px 30px',
    width: 1200
})

function BookCategories(props: BookCategoryProps) {
    let { status, title} = props;

    const[count,setCount] = useState(0)

    const [books, setBooks] = useState<BookInfo[]>([
        {
          id: 0,
          title: "",
          author: "",
          timeToRead: "",
          numberOfReads: "",
          image: "",
          status: {
            isFinished: false,
            isFeatured: false,
            isTrending: false,
            justAdded: false,
            inLibrary: false
          },
        },
    ]);

    const getBooks = async () => {
        const booksDataResponse = await api.get("/library")
        const data = booksDataResponse.data;
        console.log('get books called')
        setBooks(data);
    }
    
    useEffect(() => {
        getBooks();
    }, [status,count])

    return (
        <>
        <Typography variant='h3'>{title}</Typography>
        <br></br>
        <MainContainer onClick={() => setCount(count+1)} data-testid='books'>
            {
                (status === 'trending') ? 
        
                    books.filter((item) => item.status.isTrending)
                    .map((book, key) => {   
                        return (
                            <BookCard
                                id = {book.id}
                                key = {key}
                                title={book.title}
                                author = {book.author}
                                timeToRead={book.timeToRead}
                                numberOfReads={book.numberOfReads}
                                image = {book.image}
                                inLibrary={book.status.inLibrary}
                                value={book.id}
                            />
                        )
                    }) : 

                    (status === 'featured') ?
                    books.filter((item) => item.status.isFeatured)
                    .map((book, key) => {   
                        return (
                            <BookCard
                                id = {book.id}
                                key = {key}
                                title={book.title}
                                author = {book.author}
                                timeToRead={book.timeToRead}
                                numberOfReads={book.numberOfReads}
                                image = {book.image}
                                inLibrary={book.status.inLibrary}
                                value={book.id}
                            />
                        )
                    }) : 

                    (status === 'justAdded') ?

                    books.filter((item) => item.status.justAdded)
                    .map((book, key) => {   
                        return (
                            <BookCard
                                id = {book.id}
                                key = {key}
                                title={book.title}
                                author = {book.author}
                                timeToRead={book.timeToRead}
                                numberOfReads={book.numberOfReads}
                                image = {book.image}
                                inLibrary={book.status.inLibrary}
                                value={book.id}
                            />
                        )
                    }) : null
                }
        </MainContainer>
        </>
    );
}

export default BookCategories;
import React from "react";
import { screen, render } from "@testing-library/react";
import BookCard from "./BookCard";
import { BrowserRouter } from "react-router-dom";

let MockBookCard = (args: any) => {
  return (
    <BrowserRouter>
      <BookCard {...args} />
    </BrowserRouter>
  );
};

describe("Book card unit tests", () => {
  test("image appear test", () => {
    render(<MockBookCard />);
    const bookImage = screen.getByAltText("book");
    expect(bookImage).toBeInTheDocument();
  });

  test("finished card test", () => {
    render(<MockBookCard value={1} title={'Test Card'} author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={true}/>)
    
    const bookTitle = screen.getByText('Test Card')
    expect(bookTitle).toBeInTheDocument();

    const bookAuthor = screen.getByText('Test author')
    expect(bookAuthor).toBeInTheDocument();

    const numberOfReads = screen.getByText('1.9k reads')
    expect(numberOfReads).toBeInTheDocument();

    const timeToRead = screen.getByText('13-minute read')
    expect(timeToRead).toBeInTheDocument();

    const finishedButton = screen.getByText('Finished')
    expect(finishedButton).toBeInTheDocument();
  })

  test("Read again card test", () => {
    render(<MockBookCard value={1} title={'Test Card'} author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={false} readAgain={true}/>)
    
    const bookTitle = screen.getByText('Test Card')
    expect(bookTitle).toBeInTheDocument();

    const bookAuthor = screen.getByText('Test author')
    expect(bookAuthor).toBeInTheDocument();

    const numberOfReads = screen.getByText('1.9k reads')
    expect(numberOfReads).toBeInTheDocument();

    const timeToRead = screen.getByText('13-minute read')
    expect(timeToRead).toBeInTheDocument();

    const readAgainButton = screen.getByText('Read Again')
    expect(readAgainButton).toBeInTheDocument();
  })

  test("Add to library card test", () => {
    render(<MockBookCard value={1} title={'Test Card'} author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" inLibrary={false} readAgain={false} isFinished={false} />)
    
    const bookTitle = screen.getByText('Test Card')
    expect(bookTitle).toBeInTheDocument();

    const bookAuthor = screen.getByText('Test author')
    expect(bookAuthor).toBeInTheDocument();

    const numberOfReads = screen.getByText('1.9k reads')
    expect(numberOfReads).toBeInTheDocument();

    const timeToRead = screen.getByText('13-minute read')
    expect(timeToRead).toBeInTheDocument();

    const addToLibraryButton = screen.getByTestId('addToLibrary')
    expect(addToLibraryButton).toBeInTheDocument();
  })
});

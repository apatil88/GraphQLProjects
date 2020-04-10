import React, { Fragment, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../queries/queries";

// Components
import BookDetails from "./BookDetails";

const BookList = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  const [selectedBook, setSelectedBook] = useState(null);

  if (loading) return <div> Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!data) return <div>No books found</div>;

  return (
    <Fragment>
      <ul id="book-list">
        {data.books.map((book) => {
          return (
            <li key={book.id} onClick={(e) => setSelectedBook(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selectedBook} />
    </Fragment>
  );
};

export default BookList;

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOK_BY_ID } from "../queries/queries";

const BookDetails = (props) => {
  const { bookId } = props;

  const { data, loading, error } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      id: bookId,
    },
  });

  if (loading) return <div> Loading...</div>;
  if (error) return <div>ERROR</div>;

  const displayBookDetails = () => {
    const { book } = data;
    console.log(book);
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>
            <i>Genre:</i> {book.genre}
          </p>
          <p>
            <i>Author:</i> {book.author.name}
          </p>
          <i>All books by this author: </i>
          <ul>
            {book.author.books.map((book) => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;

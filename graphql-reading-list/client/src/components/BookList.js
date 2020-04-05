import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../queries/queries";

const BookList = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <div> Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!data) return <div>Not found</div>;

  return (
    <Fragment>
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default BookList;

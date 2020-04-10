import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";

const AddBook = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);

  const [formState, setFormState] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  if (loading) return <div> Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!data) return <div>Not found</div>;

  const displayAuthors = () => {
    if (data.loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitFormData = (e) => {
    e.preventDefault();
    console.log(formState);
    addBook({
      variables: {
        name: formState.name,
        genre: formState.genre,
        authorId: formState.authorId,
      },
      refetchQueries: [
        {
          query: GET_BOOKS,
        },
      ],
    });
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => {
            setFormState({ ...formState, name: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => {
            setFormState({ ...formState, genre: e.target.value });
          }}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) =>
            setFormState({ ...formState, authorId: e.target.value })
          }
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button onClick={submitFormData}>+</button>
    </form>
  );
};

export default AddBook;

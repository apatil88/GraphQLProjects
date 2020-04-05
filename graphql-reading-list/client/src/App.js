import React, { Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// components
import BookList from "./components/BookList";

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <BookList />
      </Fragment>
    </ApolloProvider>
  );
}

export default App;

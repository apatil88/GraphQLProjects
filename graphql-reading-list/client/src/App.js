import React from "react";
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
      <div className="App">
        <h1>React App</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;

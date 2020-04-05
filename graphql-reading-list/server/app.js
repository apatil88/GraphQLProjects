const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();
mongoose.connect(
  "mongodb://graphql:gql123@ds113866.mlab.com:13866/gql-reading-list"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen("4000", () => {
  console.log("Listening requests on port 4000");
});

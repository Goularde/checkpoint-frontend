import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContientsView from "./Continents/ContientsView.tsx";
import Countries from "./Countries/Countries.tsx";
import Country from "./Country/Country.tsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContientsView />,
  },
  { path: "countries", element: <Countries /> },
  { path: "country", element: <Country /> },
]);
const client = new ApolloClient({
  uri: "https://countries.nausicaa.wilders.dev/",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

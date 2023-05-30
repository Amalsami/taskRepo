import {
  gql,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import client from "./Components/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DataList from "./Components/DataList";
import CreatePickup from "./Components/CreatePickup";
import UpdatePickup from "./Components/UpdatePickup";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route path="/getdata" element={<GetData />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dataList" element={<DataList />} />
          <Route path="/createPickup" element={<CreatePickup />} />
          <Route path="/updatePickup/:id" element={<UpdatePickup />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;

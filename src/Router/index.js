import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound"
import HomePage from "../Components/Homepage";
import CarPage from "../Components/CarPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/CarPage/:id' element={ <CarPage /> }/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

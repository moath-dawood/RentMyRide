import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound"
import HomePage from "../Components/Homepage";
import PaymentPage from '../Components/PaymentPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/payment-page/:carId' element={ <PaymentPage /> }/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

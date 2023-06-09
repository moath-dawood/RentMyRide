import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound"
import HomePage from "../Components/Homepage";
import PaymentPage from '../Components/PaymentPage'
import LoginPage from "../Components/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/payment-page/:carId' element={ <PaymentPage /> }/>
          <Route path="*" element={<NotFound />} />
          <Route path='/carPage/:id'/>
        </Route>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

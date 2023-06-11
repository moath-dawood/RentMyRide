import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound"
import HomePage from "../Components/Homepage";
import PaymentPage from '../Components/PaymentPage'
import LoginPage from "../Components/LoginPage";
import CarPage from "../Components/CarPage";
import CarSearch from "../Components/CarSearch";
import { FilterContextProvider } from "../Components/Store/FilterContext";

function Router() {

  return (
    <FilterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/payment-page/:carId' element={<PaymentPage />} />
            <Route path='/car-page/:carId' element={<CarPage />} />
            <Route path='/car-search' element={<CarSearch />} />
            <Route path='/car-search/:carName' element={<CarSearch />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </FilterContextProvider>

  );
}

export default Router;

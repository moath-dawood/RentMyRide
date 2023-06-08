import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import NotFound from "../Components/NotFound"
import HomePage from "../Components/Homepage";
import LoginPage from "../Components/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

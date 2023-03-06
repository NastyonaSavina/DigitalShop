import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const CartPage = lazy(() => import('../pages/CartPage/CartPage'));



export const App = () => {
  return (
    <>
      <Layout >
        <Suspense fallback={<p>Loading...</p>}>

          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />}/>

          </Routes>
        </Suspense> 
      </Layout >

    </>
  );
};

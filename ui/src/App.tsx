import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from '../src/components/ProductList';
import ProductDetails from '../src/components/ProductDetails';
import Navbar from './components/Navbar';
import './App.css';
import type { JSX } from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Login from './components/Login';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <ProductList />
      <Hero />
      <Category />
      <Login />
    </>
  );
}

export default App;

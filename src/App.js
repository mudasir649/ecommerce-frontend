import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Admin/home/Home';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import Main from './pages/MainWeb/main/Main';
import Checkout from './pages/MainWeb/checkout/Checkout';
import ProductDetails from './pages/MainWeb/productdetails/ProductDetails';
import Products from './pages/MainWeb/allproducts/Products';
import AddToCart from './pages/MainWeb/addtocart/AddToCart';
import CheckoutList from './pages/MainWeb/checkoutlist/CheckoutList';
import Auth from './pages/MainWeb/Auth/Auth';
import Users from './pages/Admin/Users/Users';
import UpdateProduct from './pages/Admin/Update Product/UpdateProduct';
import PurchasedProductList from "./pages/Admin/Purchased Product List/PurchasedProductList";
import SellerProductList from './pages/Admin/SellerProductList/SellerProductList';
import Buyers from "./pages/Admin/Buyers/Buyers";
import CreateProduct from "./pages/Admin/Create Product/CreateProduct";
import BuyersProductsList from "./pages/Admin/Buyers Products List/BuyersProductsList";
import PrivateRoutes from './helpers/PrivateRoutes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js"
function App() {

  const { darkMode, user } = useContext(DarkModeContext);

  const publishablekey = 'pk_test_51MfmtsFYIXNQRXXwpv8ifSZVS6nJMMZMZPx75ih49Qc9v8uh46vWrWjuRKIx0LU39IaXjQqN0HqLJo0u8BiwzwSH0075mbKwp6';

  const stripePromise = loadStripe(publishablekey);
  
  return (
    <div className={darkMode ? "bg-[#111]" : "App"}>
      <Router>
        <Routes>
        <Route path='/'>
            <Route index element={<Main />} />
            <Route path="/checkout" element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
            } />
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="/products/:name" element={<Products />} />
            <Route path="checkoutdetails" element={<CheckoutList />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/login" element={<Auth authValue="login" />} />
            <Route path="/register" element={<Auth authValue="register" />} />
            {user && <Route path='/admin/*' element={
            <PrivateRoutes>
              <Route index element={<Home />} />
              <Route path='/users' element={<Users />} />
              <Route path='/updateproduct' element={<UpdateProduct />} />
              <Route path='/purchasedproductlist' element={<PurchasedProductList />
                } />
              <Route path='/buyers' element={<Buyers />} />
              <Route path='/buyersproductlist' element={<BuyersProductsList  />} />
              <Route path='/sellerproductlist' element={<SellerProductList />} />
              <Route path='/createproduct' element={<CreateProduct  />} />
            </PrivateRoutes>} />
          }
          {/* {user && <Route path='/admin/users' element={
            <PrivateRoutes>
              <Route index element={<Users />} />
            </PrivateRoutes>
          }/>}
          {user && <Route path='/admin/updateproduct' element={
            <PrivateRoutes>
              <Route index element={<UpdateProduct />} />
            </PrivateRoutes>
          }/>}
          {user && <Route path='/admin/purchasedproductlist' element={
            <PrivateRoutes>
              <Route index element={<PurchasedProductList  />} />
            </PrivateRoutes>
          }/>}
          {user && <Route path='/admin/buyers' element={
            <PrivateRoutes>
              <Route index element={<Buyers />} />
            </PrivateRoutes>
          }/>}
          {user && <Route path='/admin/buyersproductlist' element={
            <PrivateRoutes>
              <Route index element={<BuyersProductsList  />} />
            </PrivateRoutes>
          }/>}
          {user && <Route path='/admin/createproduct' element={
            <PrivateRoutes>
              <Route index element={<CreateProduct  />} />
            </PrivateRoutes>
          }/>} */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/order' element={
           <ProtectedRoutes>
           <Order />
         </ProtectedRoutes>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
        }/>
        <Route path='/*' element={<NoPage/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='productinfo/:id' element={<ProductInfo/>}/>
        <Route path='/addproduct' element={
          <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>
        }/>
        <Route path='/updateproduct' element={
          <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>
        }/>
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/order' />
  }
}


export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'keerthi@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
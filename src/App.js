import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {actions} from './Store/index';
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/UserView/Product/Products';
import Details from './Components/UserView/Details/Details';
import Profile from './Components/UserView/User/Profile';
import Wishlist from './Components/UserView/Wishlist/Wishlist';
import Cart from './Components/UserView/Cart/Cart';
import Auth from './Components/Authentication/Auth';
import Layout from './Layout';

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<div>404 Error</div>,
      children:[
        {
          path:"",
          element:<Home/>,
          errorElement:<div>404 Error</div>
        },
        {
          path:"products",
          element:<Products/>,
          errorElement:<div>404 Error</div>
        },
        {
          path:"products/detail",
          element:<Details/>,
          errorElement:<div>404 Error</div>
        },
        {
          path:"profile",
          element:<Profile/>,
          errorElement:<div>404 Error</div>
        },
        {
          path:"wishlist",
          element:<Wishlist/>,
          errorElement:<div>404 Error</div>
        },
        {
          path:"cart",
          element:<Cart/>,
          errorElement:<div>404 Error</div>
        }
      ]
    },
    {
      path:"/login",
      element:<Auth/>,
      errorElement:<div>404 Error</div>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

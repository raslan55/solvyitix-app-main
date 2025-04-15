import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Trainers from "./pages/Trainers";
import Payment from "./pages/Payment";
import Layout from "./componentes/Layout/Layout";
import Login from "./pages/Login";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./componentes/PaymentSuccess/PaymentSuccess";


let routes = createBrowserRouter([
 { index: true, element: <Login/>    },
  {
    path: "",
    element: <Layout />,
    children: [

      {
      element: <ProtectedRoute />, children: [ 
        { path: "Home", element: <Home/>    },
        { path: "Courses", element: <Courses /> },
        { path: "Trainers", element: <Trainers /> },
        { path: "Payment", element: <Payment /> },
        {path:"/checkout/:id", element: <Checkout />},
        {path:"/success" ,element:<PaymentSuccess />}
      ]
    },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={routes}> </RouterProvider>
    </>
  );
}

export default App;

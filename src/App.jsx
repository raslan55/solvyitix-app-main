import { HashRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="Home" element={<Home />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Trainers" element={<Trainers />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="checkout/:id" element={<Checkout />} />
            <Route path="success" element={<PaymentSuccess />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
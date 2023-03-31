import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store, pStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import NotFound from "./pages/NotFound";
import About from "./pages/About";

import VertificationAccount from "./pages/VertificationAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import EditProfile from "./pages/EditProfile";
import ApplianceType from "./pages/ApplianceType";
import ApplianceDetail from "./pages/ApplianceDetail";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import AddAppliance from "./pages/AddAppliance";
import ViewMore from "./pages/ViewMore";
import History from "./pages/History";
import ApplianceProduct from "./pages/ApplianceProduct";
import HistoryOrderRenter from "./pages/HistoryOrderRenter";

// private route
import AuthRoutes from "./components/AuthRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import OwnerRoutes from "./components/OwnerRoutes";
import ErrorServer from "./pages/ErrorServer";
import Faq from "./pages/Faq";
import Insurance from "./pages/Insurance";

const main = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <BrowserRouter>
          <Routes>
            {/* public All */}
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="appliance/type" element={<ApplianceType />} />
            <Route path="view-more" element={<ViewMore />} />
            <Route path="appliance/detail/:id" element={<ApplianceDetail />} />
            <Route path="history" element={<History />} />
            <Route path="about" element={<About />} />
            <Route path="error_server" element={<ErrorServer />} />
            <Route path="faq" element={<Faq />} />
            <Route path="insurance" element={<Insurance />} />


            {/* route Auth */}
            <Route element={<AuthRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="auth/verify/:pin"
                element={<VertificationAccount />}
              />
              <Route path="forgot/password" element={<ForgotPassword />} />
            </Route>

            {/* Private Router */}
            <Route element={<PrivateRoutes />}>
              <Route path="edit/profile" element={<EditProfile />} />
              <Route
                path={`reservation/appliance=:id&quantity=:quantity`}
                element={<Reservation />}
              />
              <Route
                path={`payment/appliance=:id&quantity=:quantity&day=:day&price%20perday=:priceDay&totalPrice=:total`}
                element={<Payment />}
              />
              <Route path="history_renter" element={<HistoryOrderRenter />} />
            </Route>

            {/* private owner */}
            <Route element={<PrivateRoutes />}>
              <Route element={<OwnerRoutes />}>
                <Route path="appliance/add" element={<AddAppliance />} />
                <Route path="appliance_product" element={<ApplianceProduct />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default main;

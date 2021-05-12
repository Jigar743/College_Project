import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Profile from "./Profile";
import PhoneVerify from "./PhoneVerify";
import SellerInfo from "./SellerInfo";
import AccountInfo from "./AccountInfo";
import YouProducts from "./YourProducts";
import PaymentReceives from "./PaymentReceives";
import YourAccount from "./YourAccount";
import { useSelector } from "react-redux";
import db from "../../Firebase/firebase_Config";

export default function Main() {
  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/phone-verify" component={PhoneVerify} />
        <Route path="/seller-info" component={SellerInfo} />
        <Route path="/account-info" component={AccountInfo} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/seller-account" component={YourAccount} />
        <Route path="/products" component={YouProducts} />
        <Route path="/payment-receives" component={PaymentReceives} />
        <Redirect from="*" to="/phone-verify" />
      </Switch>
      <Footer />
    </div>
  );
}

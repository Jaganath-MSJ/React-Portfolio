import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  return (
    <main>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;

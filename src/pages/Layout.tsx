import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
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

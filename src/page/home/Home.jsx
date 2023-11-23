import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Fotter from "./fotter/Fotter";
import Banner from "./Banner/Banner";
import { Route, Routes, NavLink } from "react-router-dom";
import Product from "./Product/Product";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
      <Fotter></Fotter>
    </div>
  );
}

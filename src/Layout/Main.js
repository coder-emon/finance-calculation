import React from "react";
import { Outlet } from "react-router-dom";
import AuthorInfo from "../Components/AuthorInfo/AuthorInfo";
import Nav from "../Components/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <AuthorInfo></AuthorInfo>
    </div>
  );
};

export default Main;

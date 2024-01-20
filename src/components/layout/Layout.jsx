import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

const LinkComponent = ({ props }) => {
  const { page_name, page_url } = props;
  return (
    <>
      <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <Link to={page_url}>{page_name}</Link>
      </span>
    </>
  );
};

const Layout = () => {
  return (
    <div>
      <div
        className="flex-all-center"
        style={{
          width: "inherit",
          height: "50px",
          border: "2px solid black",
        }}
      >
        <LinkComponent
          props={{ page_name: "Homepage", page_url: "/" }}
        ></LinkComponent>
        <LinkComponent
          props={{ page_name: "About Us", page_url: "/about-us" }}
        ></LinkComponent>
        <LinkComponent
          props={{ page_name: "Contact Us", page_url: "/contact-us" }}
        ></LinkComponent>
        <LinkComponent
          props={{ page_name: "Login", page_url: "/login" }}
        ></LinkComponent>
        <LinkComponent
          props={{ page_name: "Register", page_url: "/register" }}
        ></LinkComponent>
      </div>
      <div
        className="flex-all-center"
        style={{
          width: "inherit",
          border: "2px solid black",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;

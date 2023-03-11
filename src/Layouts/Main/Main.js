import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  BsArrowDown,
  BsBagPlus,
  BsBox,
  BsChevronDown,
  BsSearch,
  BsTrash,
  BsTrash3,
} from "react-icons/bs";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="nav md:w-72 md:h-screen border-r">
          <Link to="/">
            <h1 className="text-center text-xl font-semibold border-b flex items-center  h-20 text-blue-600">
              Product Management System
            </h1>
          </Link>

          <div className="pt-12">
            <ul className="flex md:flex-col justify-center gap-12 md:gap-5  text-lg font-semibold">
              <li>
                <NavLink to="/" className="flex gap-2 items-center px-8 py-2">
                  <BsBox className="inline"></BsBox>Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-products"
                  className="flex gap-2 items-center px-8 py-2"
                >
                  <BsBagPlus></BsBagPlus>Add Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bin"
                  className="flex gap-2 items-center px-8 py-2"
                >
                  <BsTrash3 /> Trash
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className=" px-32 flex justify-end gap-4 items-center h-20  border-b-2">
            <BsSearch></BsSearch>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;

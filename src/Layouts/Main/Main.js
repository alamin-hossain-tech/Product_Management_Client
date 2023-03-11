import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="nav md:w-72 md:h-screen shadow">
          <h1 className="text-center text-xl font-semibold border-b border-r h-20 text-blue-600">
            Product Management System
          </h1>

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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="font-bold"
              >
                username <BsChevronDown></BsChevronDown>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
            <Avatar>H</Avatar>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;

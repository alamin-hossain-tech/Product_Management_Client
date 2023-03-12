import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsBagPlus, BsBox, BsSearch, BsTrash3 } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="nav md:w-72 md:h-screen border-r">
          <Link to="/">
            <h1 className="text-center justify-center text-xl font-semibold border-b flex items-center  h-20 text-blue-600">
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
          <div className=" pr-4 md:px-32 flex justify-end gap-4 items-center h-20  border-b-2">
            <BsSearch></BsSearch>{" "}
            <p> Welcome, {localStorage.getItem("userName")}</p>{" "}
            <Button onClick={() => setModalOpen(true)}>Logout</Button>
            <Modal
              show={modalOpen}
              size="md"
              popup={true}
              onClose={() => setModalOpen(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to do logout?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={handleLogout}>
                      Yes, I'm sure
                    </Button>
                    <Button color="gray" onClick={() => setModalOpen(false)}>
                      No, cancel
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;

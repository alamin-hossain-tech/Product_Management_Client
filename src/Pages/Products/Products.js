import { Breadcrumb, Button, TextInput } from "flowbite-react";
import React from "react";
import {
  BsChevronRight,
  BsHouse,
  BsHouseDoor,
  BsPlus,
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-gray-200 h-[91.4vh]">
      <div className="container mx-auto pt-5">
        <h2 className="text-4xl font-semibold pb-2">Product List</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item icon={() => <BsHouseDoor />}>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex justify-between pt-8">
          <Button>
            <BsPlus></BsPlus>Add Product
          </Button>
          <div className="flex gap-2">
            <TextInput
              id="email4"
              type="email"
              icon={() => <BsSearch></BsSearch>}
              placeholder="name@flowbite.com"
              required={true}
              className="w-72"
            />
            <Button className="px-4">Search</Button>
            <Button color="light">Reset</Button>
          </div>
        </div>
        <div className="pt-8">products</div>
      </div>
    </div>
  );
};

export default Products;

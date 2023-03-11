import {
  Breadcrumb,
  Button,
  Checkbox,
  FileInput,
  Label,
  TextInput,
} from "flowbite-react";
import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddProducts = () => {
  return (
    <div className="bg-gray-200 h-[91.4vh]">
      <div className="px-6 container mx-auto pt-5">
        <h2 className="text-4xl font-semibold pb-2">Add Product</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item icon={() => <BsHouseDoor className="mr-1" />}>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Add Products</Breadcrumb.Item>
        </Breadcrumb>
        <div className="pt-5">
          <form className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-2/3">
                <div className="mb-2 block">
                  <Label htmlFor="ProductName" value="Product Name" />
                </div>
                <TextInput
                  id="productName"
                  type="text"
                  placeholder="Product Name"
                  required={true}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="Category" value="Product Name" />
                </div>
                <TextInput
                  id="Category"
                  type="text"
                  placeholder="Category"
                  required={true}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="Seller" value="Seller" />
                </div>
                <TextInput
                  id="Seller"
                  type="email"
                  placeholder="Seller"
                  required={true}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="Price" value="Price" />
                </div>
                <TextInput
                  id="Price"
                  type="email"
                  placeholder="Price"
                  required={true}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="rating" value="Rating" />
                </div>
                <TextInput
                  id="rating"
                  type="email"
                  placeholder="Rating"
                  required={true}
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="Stock" value="Stock" />
                </div>
                <TextInput
                  id="Stock"
                  type="email"
                  placeholder="Stock"
                  required={true}
                />
              </div>
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Product Image" />
              </div>
              <FileInput
                id="file"
                helperText="Dimension should be less than 400px"
              />
            </div>
            <Button className="mr-auto w-32 mt-3" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

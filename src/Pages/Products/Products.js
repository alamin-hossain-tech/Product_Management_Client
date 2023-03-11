import {
  Breadcrumb,
  Button,
  Pagination,
  Table,
  TextInput,
} from "flowbite-react";
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
        <div className="pt-8">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-1 items-center">
                  <img
                    src="https://i.ibb.co/xDPRLRt/hero-image-resized.png"
                    alt=""
                    className="w-20"
                  />{" "}
                  Apple MacBook Pro 17"
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="text-center">
          <Pagination
            currentPage={1}
            // onPageChange={onPageChange}
            showIcons={true}
            totalPages={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

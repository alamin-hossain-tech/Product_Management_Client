import {
  Breadcrumb,
  Button,
  Pagination,
  Table,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import {
  BsChevronRight,
  BsHouse,
  BsHouseDoor,
  BsPlus,
  BsSearch,
} from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Products = () => {
  const [page, setPage] = useState(0);
  const { data = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/products?page=${page}`).then((res) =>
        res.json()
      ),
  });
  const onPageChange = (e) => {
    setPage(e - 1);
    refetch();
  };
  return (
    <div className="bg-gray-200 h-[91.4vh]">
      <div className="px-6 container mx-auto pt-5">
        <h2 className="text-4xl font-semibold pb-2">Product List</h2>
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item icon={() => <BsHouseDoor className="mr-1" />}>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
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
                <span className="sr-only">View</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Delete</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((product) => (
                <Table.Row
                  key={product._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-1 items-center">
                    <img src={product.img} alt="" className="w-16" />
                    {product.name}
                  </Table.Cell>
                  <Table.Cell>{product.stock}</Table.Cell>
                  <Table.Cell>{product.category}</Table.Cell>
                  <Table.Cell>{product.price + "$"}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      View
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Delete
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="text-center">
          <Pagination
            currentPage={1}
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={data.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

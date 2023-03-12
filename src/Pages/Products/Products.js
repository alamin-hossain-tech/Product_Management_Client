import { Stack } from "@mui/material";
import {
  Breadcrumb,
  Button,
  Pagination,
  Spinner,
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
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { refetch, isLoading } = useQuery({
    queryKey: [search, page],
    queryFn: () =>
      fetch(
        `http://localhost:5000/products?page=${page}&search=${search}`
      ).then((res) => res.json().then((data) => setProducts(data))),
  });
  const handleSerch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    // refetch();
    setPage(0);
    setTimeout(() => {
      const searchvalue = document.getElementById("search");
      searchvalue.value = search;
    }, 100);
  };

  const pages = Math.ceil(products?.count / 5);

  if (isLoading) {
    return (
      <div className=" text-center bg-white h-64 flex items-center justify-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

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
          <form onSubmit={handleSerch}>
            <div className="flex gap-2">
              <TextInput
                id="search"
                type="text"
                icon={() => <BsSearch></BsSearch>}
                placeholder="Search product"
                className="w-72"
                name="search"
              />
              <Button type="submit" className="px-4">
                Search
              </Button>
              <Button
                onClick={() => {
                  setSearch("");
                  const search = document.getElementById("search");
                  search.value = "";
                  setPage(0);
                }}
                color="light"
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
        <div className="pt-8">
          {isLoading ? (
            <div className=" text-center bg-white h-64 flex items-center justify-center">
              <Spinner aria-label="Center-aligned spinner example" />
            </div>
          ) : (
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
                {!isLoading &&
                  products?.products?.map((product) => (
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
          )}
        </div>

        <div className="text-center pt-5">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex flex-wrap md:flex-nowrap items-center -space-x-px">
              <li>
                <Link
                  onClick={() => page > 0 && setPage(page - 1)}
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
              {!isLoading &&
                [...Array(pages || 0).keys()].map((number, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setPage(number)}
                      className={`${
                        page === number && "selected"
                      } px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                      {number + 1}
                    </Link>
                  </li>
                ))}

              <li>
                <Link
                  onClick={() => page < pages - 1 && setPage(page + 1)}
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;

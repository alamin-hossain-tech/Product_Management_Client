import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/jwt", {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Message === "Valid User") {
          setLoading(false);
        } else {
          setLoading(false);
          router("/login");
        }
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner></Spinner>
      </div>
    );
  }

  return children;
};

export default PrivateRoutes;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComTest from "./Comtest/ComTest";
import ComSingleTest from "./Comtest/ComSingleTest";

const MyApp = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <ComTest />,
    },
    {
      path: `/comTest/:id`,
      element: <ComSingleTest />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;

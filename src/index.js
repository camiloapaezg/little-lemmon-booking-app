import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/App.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import BookingPage from "./components/bookingTable/BookingPage";
import Layout from "./components/Layout";
import ConfirmedBooking from "./components/bookingTable/ConfirmedBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book-a-table",
        element: <BookingPage />,
      },
      {
        path: "/book-a-table/:confirmed",
        element: <ConfirmedBooking />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

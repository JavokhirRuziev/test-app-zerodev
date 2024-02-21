import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Incomes from "../pages/Incomes";
import Expenses from "../pages/Expenses";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/incomes", element: <Incomes /> },
  { path: "/expenses", element: <Expenses /> },
]);

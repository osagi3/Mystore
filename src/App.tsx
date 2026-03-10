import { createBrowserRouter } from "react-router";
import HomePage from "./UI/HomePage";
import { RouterProvider } from "react-router/dom";
import StorePage from "./Store/StorePage";
import Header from "./UI/Header";
import AppLayout from "./UI/AppLayout";
import { productsLoader } from "./service/productsLoader";
import CheckOutPage from "./Store/CheckOutPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/store", loader: productsLoader, element: <StorePage /> },
      { path: "/header", element: <Header /> },
      { path: "checkout", element: <CheckOutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router";
import HomePage from "./UI/HomePage";
import { RouterProvider } from "react-router/dom";
import StorePage from "./Store/StorePage";
import Header from "./UI/Header";
import AppLayout from "./UI/AppLayout";
import { productsLoader } from "./service/productsLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/store", loader: productsLoader, element: <StorePage /> },
      { path: "/header", element: <Header /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

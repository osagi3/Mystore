import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./UI/HomePage";
import StorePage from "./Store/StorePage";
import AppLayout from "./UI/AppLayout";
import { productsLoader } from "./service/productsLoader";
import CheckOutPage from "./Store/CheckOutPage";
import CartProvider from "./Context/CartContext";
import ProductDetails from "./Store/ProductDetails";
import { ProductDeatilsLoader } from "./service/ProductDetailsLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/store", loader: productsLoader, element: <StorePage /> },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ProductDeatilsLoader,
      },
      { path: "/checkout", element: <CheckOutPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

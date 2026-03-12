// import { createBrowserRouter, RouterProvider } from "react-router";
// import HomePage from "./UI/HomePage";
// // import {} from "react-router/dom";
// import StorePage from "./Store/StorePage";
// import Header from "./UI/Header";
// import AppLayout from "./UI/AppLayout";
// import { productsLoader } from "./service/productsLoader";
// import CheckOutPage from "./Store/CheckOutPage";
// import CartProvider from "./Context/CartContext";

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/store", loader: productsLoader, element: <StorePage /> },
//       // { path: "/header", element: <Header /> },
//       { path: "/checkout", element: <CheckOutPage /> },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <CartProvider>
//       <RouterProvider router={router} />
//     </CartProvider>
//   );
// }

// export default App;

// 1. Get everything from "react-router" (or "react-router-dom", but pick ONE)
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./UI/HomePage";
import StorePage from "./Store/StorePage";
import AppLayout from "./UI/AppLayout";
import { productsLoader } from "./service/productsLoader";
import CheckOutPage from "./Store/CheckOutPage";
import CartProvider from "./Context/CartContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/store", loader: productsLoader, element: <StorePage /> },

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

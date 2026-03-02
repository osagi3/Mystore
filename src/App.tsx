import { createBrowserRouter } from "react-router";
import HomePage from "./UI/HomePage";
import { RouterProvider } from "react-router/dom";
import StorePage from "./Store/StorePage";
import Header from "./UI/Header";
import AppLayout from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/header", element: <Header /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

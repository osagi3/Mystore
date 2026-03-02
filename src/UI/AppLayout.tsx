import { Outlet, useNavigate } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

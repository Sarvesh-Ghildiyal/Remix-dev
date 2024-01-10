import { redirect, Link } from "@remix-run/react";
import logo from "~/assets/logo.png";

// Users Sidebar
export default function sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <Link to={"/users"}>
        <img
          className="w-[160px] h-auto mx-auto my-3"
          src={logo}
          alt="College Logo"
        />
        <h1 className="heading">Complain Portal</h1>
      </Link>

      {/* For navbar */}
      <nav className="text-lg">
        <ul className="flex flex-col font-light">
          <NavLink to={"/users/fillComp"} label={"Fill Complain"} />
          <NavLink to={"/users/viewComp"} label={"View Complain"} />
          <NavLink to={"/users/editComp"} label={"Edit Complain"} />
          <NavLink to={"/users/compStatus"} label={"Check Status"} />
          <NavLink to={"/users/compRemark"} label={"Remark"} />
          <NavLink to={"/users/delComp"} label={"Delete Complain"} />
        </ul>
      </nav>

      {/* For logout Link */}
      
    </aside>
  );
}

function NavLink({ to, label }) {
  return (
    <Link to={to}>
      <li className="p-3 hover:bg-blue-500 hover:text-white">{label}</li>
    </Link>
  );
}

export const meta = () => {
  return [{ title: "Login form" }];
};

import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Index() {
  function NavigationLink({ to, label }) {
    return (
      <Link to={to} style={{ color: "blue" }}>
        {label}
      </Link>
    );
  }
  return (
    <div className="grid place-items-center h-screen">
      <Button size="lg" variant="destructive">
        Login Form
      </Button>
      <NavigationLink to={"/users"} label="UD :D" />
      <NavigationLink to={"/admin"} label="Admin " />
      <NavigationLink to={"/workers"} label="Worker :D" />
    </div>
  );
}


import Sidebar from "~/components/page/sidebar";
import Header from "../components/page/header";
import Footer from "../components/page/footer";

import styles from "~/globals.css";
export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Layout({ children }) {
  return (
    <div className="w-screen flex">
      {/* Side Bar */}
      <Sidebar />

      <main className="flex-grow">
        {/* Header */}
        <Header />

        {/* Form section of the page */}
        {children}

        <Footer />
      </main>
    </div>
  );
}

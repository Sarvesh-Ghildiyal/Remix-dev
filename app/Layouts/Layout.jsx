import Sidebar from "~/components/ui/sidebar";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";

import styles from "~/globals.css";
export const links = () => [{ rel: "stylesheet", href: styles }];

export default function  Layout({children}) {
  return (
    // <div class="w-screen font-light flex">
    <div className="mw-screen flex">
      {/* Side Bar */}
      <Sidebar />

      {/* Main Component */}
      <main className="flex-grow">
        {/* Header */}
        <Header />

        {/* Main content of the page */}
        {children}

        <Footer />
      </main>
    </div>
  );
}

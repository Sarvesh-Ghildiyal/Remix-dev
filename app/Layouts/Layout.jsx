import Sidebar from './sidebar'
import Header from "./header";

import styles from "~/globals.css";
export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Layout({ children }) {
  return (
    <>
      <div className="w-screen flex">
        {/* Side Bar */}
        <Sidebar />

        <main className="flex-grow">
          {/* Header */}
          <Header />

          {/* Form section of the page */}
          {children}
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
}

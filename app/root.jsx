import {
  Outlet,
  Link,
  Links,
  LiveReload,
  Scripts,
  Meta,
} from "@remix-run/react";
import styles from "~/globals.css";
export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title : " CMS"}</title>
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <Scripts />
      </body>
    </html>
  );
}

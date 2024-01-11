import { Link } from "@remix-run/react";
import YourComponent from "~/components/ui/navigation-link";
export default function Header() {
  return (
    <header class="w-[85%] h-auto mx-auto mt-5 flex justify-between rounded-sm shadow-xl">
      {/* Dashboard Text and SVG */}
      <div class="w-auto p-2.5">
        {/* Svg and Dashboard text */}
        <Link to="/users" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <circle cx="12" cy="6" r="4" />
              <path
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
                opacity=".5"
              />
            </g>
          </svg>
          <p>Dashboard</p>
        </Link>
      </div>

      {/* <!-- Bell, User name, and Dropdown --> */}

      <div class="w-auto p-2.5 flex items-center space-x-2 relative">
        {/* bell svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 50 50"
        >
          <path
            fill="currentColor"
            d="M42 36c-6.5 0-7.4-6.3-8.2-11.9C32.9 17.9 32.1 12 25 12s-7.9 5.9-8.8 12.1C15.4 
                29.7 14.5 36 8 36v-2c4.6 0 5.3-3.9 6.2-10.1c.9-6.2 2-13.9 10.8-13.9s9.9 7.7 10.8 13.9C36.7 30.1 37.4 34 42 34v2z"
          />
          <path
            fill="currentColor"
            d="M25 40c-2.8 0-5-2.2-5-5h2c0 1.7 1.3 3 3 3s3-1.3 3-3h2c0 2.8-2.2 5-5 5z"
          />
          <path
            fill="currentColor"
            d="M8 34h34v2H8zm19-24c0 1.1-.9 1.5-2 1.5s-2-.4-2-1.5s.9-2 2-2s2 .9 2 2z"
          />
        </svg>

        {/* User name and DropDown */}
        <YourComponent />
      </div>
    </header>
  );
}

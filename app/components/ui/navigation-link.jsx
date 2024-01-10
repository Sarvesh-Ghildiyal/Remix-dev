import { useState } from "react";

const YourComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* User Dropdown Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 border-transparent focus:outline-none transition ease-in-out duration-150"
      >
        <p>Hello</p>
        <svg
          className={`h-6 w-6 fill-current ${!open ? "block" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className={`h-6 w-6 fill-current ${open ? "block" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Dropdown Content */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-xs bg-white">
          <a
            href="{/* Replace this with the link to the profile edit route */}"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100s transition duration-150 ease-in-out"
          >
            Profile
          </a>
          <a
            href="{/* Replace this with the link to the logout route */}"
            onClick={(e) => {
              e.preventDefault();
              // Replace this with your logout logic
            }}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100s transition duration-150 ease-in-out"
          >
            Log Out
          </a>
          {/* Replace this with the actual form handling your logout logic */}
          <form
            id="logout-form"
            method="POST"
            action="{/* Replace this with the logout route */}"
            style={{ display: "none" }}
          >
            {/* Replace this with your CSRF token */}
            {/* @csrf */}
          </form>
        </div>
      )}
    </div>
  );
};

export default YourComponent;

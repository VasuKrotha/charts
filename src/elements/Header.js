import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4 ">
        <div className="flex flex-col items-center justify-items-center">
          <div className="">
            <Link to={"/"}>
              <h6 className="text-4xl font-semibold ">Jeddah</h6>
            </Link>
          </div>

          <div>
            <h3 className="text-xs"> House of commerce</h3>
          </div>
        </div>
        <div>
          <ul className="flex  justify-end md:justify-start cursor-pointer  space-x-4 md:space-x-8 text-lg items-center">
            <li className="font-semibold ">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="font-semibold ">
              <Link to="/task">ViewData</Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <button
            type="button"
            className="me-2 mb-2 text-white bg-cyan-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Logout
          </button>
        </div> */}
      </nav>
    </header>
  );
};

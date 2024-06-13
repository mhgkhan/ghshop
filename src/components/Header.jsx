"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import React from "react";
import { FaAlignJustify, FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (window.innerWidth == 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <header className="w-full bg-green-700">
      <div className="container p-1 mx-auto text-white flex items-center justify-between gap-1 md:flex-row flex-col">
        <div className="logo flex items-center md:justify-center justify-between gap-1 md:w-auto w-full md:p-0 px-3">
          <Image
            src={"/logo.png"}
            width={60}
            height={70}
            alt="GHShop logo"
            className="border-2 border-white rounded-full filter drop-shadow-md "
          />
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="p-1 md:hidden block bg-white text-black text-3xl rounded-md cursor-pointer"
          >
            <FaAlignJustify />
          </button>
        </div>
        <div
          className={`left flex items-center transition-all duration-500 justiyf-center gap-1 md:flex-row flex-col-reverse md:w-auto w-full overflow-hidden md:h-auto ${
            menuOpened ? "h-[300px]" : "h-0"
          }`}
        >
          <div className="search md:w-[450px] h-[40px] w-full p-1 bg-white rounded-md flex items-center justify-between">
            <input
              type="text"
              name="search"
              placeholder="Type to search"
              className="w-full h-full px-1 bg-none outline-none"
            />
            <button className="text-xl text-gray-600">
              <FaSearch />
            </button>
          </div>

          <nav className="w-full">
            <ul className="flex items-center justify-center gap-3 md:flex-row flex-col md:w-auto w-full">
              {Array.from([
                "home",
                "tranding",
                "top Products",
                "about",
                "conact",
              ]).map((li, ind) => {
                return (
                  <li className="md:w-auto w-full text-center md:border-none  border-b-[1px] border-gray-400 md:m-0 mt-3">
                    <Link className="w-full" href={"/"}>
                      {li.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

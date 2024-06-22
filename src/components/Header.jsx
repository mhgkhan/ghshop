"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import React from "react";
import { FaAlignJustify, FaCartArrowDown, FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <header className="w-full bg-green-700">
      <div className="container p-1 mx-auto text-white flex items-center justify-between gap-1 md:flex-row flex-col">
        <div className="logo flex items-center md:justify-center justify-between gap-1 md:w-auto w-full md:p-0 px-3">
          <div className="flex items-center gap-1">
            <Image
              src={"/logo.png"}
              width={60}
              height={70}
              alt="GHShop logo"
              className="border-2 border-white rounded-full filter drop-shadow-md "
            />
            <div className="flex items-cneter">
              <h2
                className="text-2xl font-bold text-white border-2 p-1 border-yellow-400 rounded-lg"
                style={{ borderRadius: "10px 3px 3px 10px" }}
              >
                GH
              </h2>
              <h2
                className="text-2xl font-bold text-white border-2 p-1 border-white rounded-lg"
                style={{
                  borderRadius: "0px 10px 10px 0px",
                  borderLeft: "none",
                }}
              >
                SHOP
              </h2>
            </div>
          </div>

          {isMobile ? (
            <button className="p-1 md:hidden block bg-white text-black text-3xl rounded-md cursor-pointer">
              <FaCartArrowDown />
            </button>
          ) : (
            ""
          )}

          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="p-1 md:hidden block bg-white text-black text-3xl rounded-md cursor-pointer"
          >
            <FaAlignJustify />
          </button>
        </div>
        <div
          className={`left flex items-center transition-all duration-500 justiyf-center gap-1 md:flex-row flex-col-reverse md:w-auto w-full overflow-hidden md:h-auto ${
            menuOpened ? "h-auto" : "h-0"
          }`}
        >
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
              <li className="md:w-auto w-full text-center md:border-none  border-b-[1px] border-gray-400 md:m-0 mt-3">
                <Link
                  className="w-full text-center flex items-center justify-center"
                  href={"/"}
                >
                  <FaSearch />
                </Link>
              </li>
            </ul>
          </nav>

          {/* 
          <div className="search md:w-[300px] h-[40px] w-full p-1 bg-white rounded-md flex items-center justify-between">
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


 */}
        </div>

        {isMobile ? (
          ""
        ) : (
          <button className="p-1  hidden md:block bg-white text-black text-3xl rounded-md cursor-pointer">
            <FaCartArrowDown />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

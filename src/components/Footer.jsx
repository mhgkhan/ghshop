import Link from "next/link";
import React from "react";
import { FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 w-full">
      <div className="container mx-auto p-5 flex items-center justify-between gap-3 flex-wrap-reverse">
        <p className="text-white">
          | Copyright&copy; Allright reserved GHSHOP 2024
        </p>
        <div className="icons-social flex items-center justify-center gap-2 text-white text-2xl">
          <Link href={"/"}>
            <FaDiscord />
          </Link>
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
          <Link href={"/"}>
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

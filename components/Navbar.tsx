import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex gap-4 justify-between">
        <Link href="/">Logo</Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Blogs</Link>
          </li>
        </ul>
        <Link href="/">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;

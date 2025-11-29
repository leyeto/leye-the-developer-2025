import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="my-6">
      <nav className="flex gap-4 justify-between items-end">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex gap-6 align-baseline">
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
        <Button variant="outline" href="/">
          Contact Us
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;

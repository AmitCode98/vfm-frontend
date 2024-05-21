import React from "react";
import Logo from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-transparent fixed top-0 inset-x-0 py-4 z-30">
      <nav className="container flex items-center justify-between">
        <Image src={Logo} alt="company logo" />
        <ul className="flex items-center justify-between gap-8 capitalize text-lg font-semibold">
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Our Services</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <Button>
          call now <ArrowUpRight />
        </Button>
      </nav>
    </header>
  );
}

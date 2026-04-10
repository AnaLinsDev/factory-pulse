"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import LiveInfo from "./LiveInfo";
import { usePathname } from "next/navigation";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`w-full lg:w-auto p-2 rounded transition ${
        isActive ? "text-navbar-link font-semibold" : "hover:text-navbar-link"
      }`}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  // Handle initial navigation
  useEffect(() => {}, []);

  function showMenuMobile() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-navbar text-navbar-foreground">
      {/* Botão menu */}
      <div className="p-2 lg:hidden flex flex-row justify-between">
        <h1 className="flex items-center gap-2 text-lg font-bold my-auto">
          {" "}
          <Image
            src="/logo.png"
            alt="FactoryPulse logo"
            width={26}
            height={26}
            className="object-contain"
          />{" "}
          FactoryPulse
          <LiveInfo />
        </h1>

        <MdMenu
          className=" text-white text-4xl cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={showMenuMobile}
        />
      </div>

      {/* Menu */}
      <div
        className={`
          flex flex-col lg:flex-row lg:py-3 justify-between items-left w-full px-4 lg:px-12 py-1 shadow
          transform transition-all duration-300 ease-in-out
          ${showMenu ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"}
          lg:opacity-100 lg:translate-y-0 lg:max-h-full
        `}
      >
        <h1 className="hidden lg:flex items-center gap-2 text-lg font-bold my-auto">
          <Image
            src="/logo.png"
            alt="FactoryPulse logo"
            width={26}
            height={26}
            className="object-contain"
          />
          FactoryPulse
          <LiveInfo />
        </h1>

        <div className="flex flex-col lg:flex-row items-left gap-2 lg:gap-6 w-full lg:w-auto">
          <NavItem href="/" label="Dashboard" />
          <NavItem href="/machines" label="Machines" />
          <NavItem href="/orders" label="Orders" />
        </div>
      </div>
    </div>
  );
}

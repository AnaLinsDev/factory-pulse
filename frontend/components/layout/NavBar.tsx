"use client";

import Link from "next/link";
import { useState } from "react";
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

function NavTitle({ size }: { size: number }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg font-bold">
      <Image
        src="/logo.png"
        alt="FactoryPulse logo"
        width={size}
        height={size}
        className="object-contain"
      />
      FactoryPulse
    </Link>
  );
}
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div className="bg-navbar text-navbar-foreground">
      {/* MOBILE */}
      <div className="p-2 lg:hidden flex justify-between items-center">
        <NavTitle size={26} />

        <MdMenu
          className="text-white text-4xl cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
        />
      </div>

      {/* Menu */}
      <div
        className={`
          flex flex-col lg:flex-row lg:items-center justify-between w-full px-4 lg:px-12 py-1 lg:py-3 shadow
          transform transition-all duration-300 ease-in-out
          ${
            showMenu
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
          }
          lg:opacity-100 lg:translate-y-0 lg:max-h-full
        `}
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <NavTitle size={26} />
          </div>

        {/* Server live chip */}
          <LiveInfo />
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full lg:w-auto">
          <NavItem href="/" label="Dashboard" />
          <NavItem href="/machines" label="Machines" />
          <NavItem href="/orders" label="Orders" />
        </div>
      </div>
    </div>
  );
}

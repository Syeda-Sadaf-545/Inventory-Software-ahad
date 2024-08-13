"use client";
import { Building2 } from "lucide-react";
import React from "react";
import Link from "next/link";
import { hrtime, title } from "process";
import { usePathname } from "next/navigation";
import path from "path";

export default function HomeNavbar() {
  const pathname = usePathname();
  console.log(pathname);
  const navlink = [
    {
      title: "Dashboard",
      href: "/backoffice/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/backoffice/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/backoffice/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/backoffice/dashboard/home/announcements",
    },
  ];
  return (
    <div className="h-32 p-5 dashboardhome header-bg bg-slate-50 border-b border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 bg-white rounded-lg items-center justify-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="text-slate-700 font-semibold">Hello, Ahad Alam</p>
          <span className="text-sm">ALAM</span>
        </div>
      </div>
      <nav className="sticky mt-6 flex space-x-4">
        {navlink.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              // yahan condition lagai he lec 2 k hisab se
              // yaha if else statement lagai he if ? else :
              className={`${
                pathname === item.href
                  ? "py-1 border-b-2 border-blue-600"
                  : "py-1"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

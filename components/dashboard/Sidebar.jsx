"use client";
import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  CirclePlus,
  Files,
  Home,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar() {
  const inventoryLinks = [
    {
      title: "Items",
      href: "/backoffice/dashboard/inventory/items/new",
    },
    {
      title: "Categories",
      href: "/backoffice/dashboard/inventory/categories/new",
    },
    {
      title: "Brands",
      href: "/backoffice/dashboard/inventory/brands/new",
    },
    {
      title: "Units",
      href: "/backoffice/dashboard/inventory/units/new",
    },
    {
      title: "Warehouse",
      href: "/backoffice/dashboard/inventory/warehouse/new",
    },
    {
      title: "Inventory Adjustments",
      href: "#",
    },
  ];

  const salesLinks = [
    {
      title: "Customers",
      href: "#",
    },
    {
      title: "Sales Orders",
      href: "#",
    },
    {
      title: "Packages",
      href: "#",
    },
    {
      title: "Shipments",
      href: "#",
    },
    {
      title: "Invoices",
      href: "#",
    },
    {
      title: "Sales Receipts",
      href: "#",
    },
    {
      title: "Payments Received",
      href: "#",
    },
    {
      title: "Sales Returns",
      href: "#",
    },
    {
      title: "Credit Notes",
      href: "#",
    },
  ];
  return (
    <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed ">
      {/* Top Part*/}
      <div className="flex flex-col">
        {/* Logo*/}
        <Link
          href=""
          className="flex space-x-2 items-center bg-slate-950 py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-semibold text-xl">Inventory</span>
        </Link>
        {/* Links*/}
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href=""
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {/* //// SHADCN CODE */}
          {/* FOR INVENTORY */}
          <SidebarDropdownLink
            title="Inventory"
            items={inventoryLinks}
            icon={BaggageClaim}
          />
          {/* FOR SALES */}
          <SidebarDropdownLink
            title="Sales"
            items={salesLinks}
            icon={ShoppingBasket}
          />

          {/* <button className=" p-2 flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sales</span>
          </button> */}
          <button className=" p-2 flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>

          <Link href="" className="p-2 flex items-center space-x-2">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link href="" className="p-2 flex items-center space-x-2">
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link href="" className="p-2 flex items-center space-x-2">
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
        {/* Now adding left nav down section here */}
        <SubscriptionCard />
      </div>

      {/* Bottom Part */}
      <div className="flex flex-col ">
        <button className="flex space-x-2 items-center bg-slate-950 py-3 px-2 justify-center">
          <ChevronLeft />
        </button>
      </div>
      {/* Subscription card*/}
      {/* Footer Icon*/}
    </div>
  );
}

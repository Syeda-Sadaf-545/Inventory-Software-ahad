"use client";
import React from "react";
import FixedHeader from "../../../../components/dashboard/FixedHeader";
import { Boxes, Component, ScrollText, Shirt, ShirtIcon } from "lucide-react";
import Link from "next/link";
import OptionCard from "../../../../components/dashboard/OptionCard";

export default function Inventory() {
  //Array
  const optionCards = [
    {
      title: "Item Groups",
      description:
        "Create multiple variants of the same item using Item Groups",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Composite Items",
      description: "Bundle different items together and sell them as kits",
      link: "/new",
      linkTitle: "New Composite item",
      enabled: false,
      icon: Component,
    },
    {
      title: "Price Lists",
      description:
        "Tweak your item prices for specific contacts or transactions",
      link: "/new",
      linkTitle: "Enable Now",
      enabled: false,
      icon: ScrollText,
    },
  ];
  return (
    <main>
      <div>
        <FixedHeader newLink="/backoffice/dashboard/inventory/items/new" />
        <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
          {optionCards.map((card, i) => {
            return <OptionCard key={i} optionData={card} />;
          })}
          {/* <OptionCard />
          <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
            <h2>Item Groups</h2>
            <div className="">
              <Shirt strokeWidth=".5px" className="w-36 h-36" />
            </div>
            <p className="line-clamp-1">
              Create multiple variants of the same item using Item Groups
            </p>
            <Link
              href="#"
              className="p-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white  "
            >
              New Item Group
            </Link>
            {/* <button className="p-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white  ">
              Enable
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}

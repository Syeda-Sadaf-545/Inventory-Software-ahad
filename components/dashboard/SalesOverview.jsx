import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import React from "react";
import SalesActivity from "./SalesActivity";
import InventoryCard from "./InventoryCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be packed",
      number: 10,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      number: 12,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced",
      number: 7,
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];
  const inventorySummary = [
    {
      title: "Quantity In Hand",
      number: "90",
    },
    {
      title: "Quantity to be recieved",
      number: "3",
    },
  ];
  return (
    <div className="bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4">
      {/* Sales Activity */}
      <div className="col-span-8 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className="pr-8 grid grid-cols-4 gap-4 ">
          {/* Card No1 */}
          {salesActivity.map((item, i) => {
            return <SalesActivity item={item} key={i} />;
          })}
        </div>
      </div>
      {/* Inventory Summary */}
      <div className="col-span-4 p-8 ">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div className="">
          {inventorySummary.map((itemss, j) => {
            return (
              <InventoryCard itemss={itemss} key={j}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

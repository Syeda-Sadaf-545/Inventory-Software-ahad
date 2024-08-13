import {
  BaggageClaim,
  BarChart,
  BarChart4,
  Cable,
  ChartNoAxesColumnIncreasing,
  ChevronLeft,
  Files,
  Home,
  HomeIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
export default function Sidebar() {
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
          <button className=" p-2 flex items-center space-x-2">
            <BaggageClaim className="w-4 h-4" />
            <span>Inventory</span>
          </button>
          <button className=" p-2 flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Sales</span>
          </button>
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

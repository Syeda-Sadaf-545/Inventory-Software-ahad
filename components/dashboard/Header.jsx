import {
  Bell,
  ChevronDown,
  Grip,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users2,
} from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200">
      {/* Left nav items   */}

      <div className="flex gap-3">
        {/* Recent Activities */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* Search */}
        <SearchInput />
      </div>

      {/* Right nav items   */}

      <div className="flex items-center gap-3">
        {/* 1st Segment  PLUS ICON*/}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg bg-blue-600">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        {/* right wly buttons 3 */}
        <div className="flex  border-r border-gray-300 space-x-2">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users2 className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        {/* 2nd Segment */}
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Ahad</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <Image
              src="/user.png"
              alt="user image"
              width={96}
              height={96}
              className="rounded-full w-8 h-8 border border-slate-800"
            />
          </button>

          <button>
            <Grip className="w-6 h-6 text-slate-900" />
          </button>
        </div>
        {/* 3rd Segment */}
      </div>
    </div>
  );
}

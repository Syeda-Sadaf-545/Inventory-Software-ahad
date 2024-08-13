import React from "react";
import Link from "next/link";
export default function SubscriptionCard() {
  return (
    <div className="px-1 py-3 ">
      <div className="p-3 bg-slate-900 rounded-lg ">
        <div className="border-b border-slate-600 pb-3">
          <p className="text-sm border-l-2 border-orange-400 pl-2">
            Your Premium plan's trial expires in
            <span className="text-orange-400"> 13 days</span>.
          </p>
        </div>
        <div className="flex text-sm">
          <button className="border-r border-slate-600 p-1">Change Plan</button>
          <Link className="p-2" href="#">
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}

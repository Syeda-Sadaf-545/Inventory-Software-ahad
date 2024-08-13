import React from "react";
import DashboardBanner from "../../../../../components/dashboard/DashboardBanner";
import SalesOverview from "../../../../../components/dashboard/SalesOverview";

export default function Dashboard() {
  return (
    <main>
      <div>
        <DashboardBanner />
        <SalesOverview />
      </div>
    </main>
  );
}

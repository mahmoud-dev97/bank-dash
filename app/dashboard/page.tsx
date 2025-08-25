"use client";
import MyCards from "@/components/dashboard/MyCards";
import WeeklyActivity from "@/components/dashboard/WeeklyActivity";
import ExpenseStatistics from "@/components/dashboard/ExpenseStatistics";
import QuickTransfer from "@/components/dashboard/QuickTransfer";
import BalanceHistory from "@/components/dashboard/BalanceHistory";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 space-y-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <MyCards />
        <RecentTransactions />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  );
}

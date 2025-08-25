import {
  Home,
  Settings,
  CreditCard,
  Wallet,
  BarChart3,
  Landmark,
  PieChart,
} from "lucide-react";

export const links = [
  { name: "Dashboard", icon: Home, url: "/dashboard" },
  { name: "Transactions", icon: CreditCard, url: "/", disabled: true },
  { name: "Accounts", icon: Wallet, url: "/accounts" },
  { name: "Investments", icon: BarChart3, url: "/", disabled: true },
  { name: "Credit Cards", icon: CreditCard, url: "/", disabled: true },
  { name: "Loans", icon: Landmark, url: "/", disabled: true },
  { name: "Services", icon: PieChart, url: "/", disabled: true },
  { name: "My Privileges", icon: BarChart3, url: "/", disabled: true },
  { name: "Setting", icon: Settings, url: "/", disabled: true },
];

"use client";
import { Badge } from "@/components/ui/badge";
import { Account } from "@/hooks/ useAccounts";
import { TableCell, TableRow } from "@/components/ui/table";
const statusConfig: Record<string, string> = {
  Open: "bg-blue-500",
  Paid: "bg-green-500",
  Inactive: "bg-gray-400",
  Due: "bg-red-500",
};

export default function AccountRow({
  c,
  index,
}: {
  c: Account;
  index: number;
}) {
  const statuses = ["Open", "Paid", "Inactive", "Due"] as const;
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const balance = Math.floor(Math.random() * 1000 - 500);
  const deposit = 500;

  return (
    <TableRow
      className={`${
        index % 2 === 0 ? "bg-[#F4F7FCBF]" : "bg-white"
      } hover:bg-[#F4F7FCBF]`}
    >
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <div className="font-medium">{c.name}</div>
        <div className="text-xs text-gray-500">{c.email}</div>
      </TableCell>
      <TableCell>{c.company.name}</TableCell>
      <TableCell>
        <Badge className={statusConfig[status]}>{status}</Badge>
      </TableCell>
      <TableCell>$70.00 CAD</TableCell>
      <TableCell className={balance < 0 ? "text-red-500" : "text-green-600"}>
        {balance < 0 ? "-" : "+"}${Math.abs(balance)} CAD
      </TableCell>
      <TableCell>${deposit} CAD</TableCell>
    </TableRow>
  );
}

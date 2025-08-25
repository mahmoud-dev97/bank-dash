"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useAccounts } from "@/hooks/ useAccounts";
import TableSkeleton from "./TableSkeleton";
import AccountRow from "./AccountRow";
import PaginationControls from "./PaginationControls";

export default function AccountsTable() {
  const { data, loading } = useAccounts();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const filtered = data.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginated = filtered.slice(startIndex, endIndex);
  const total = filtered.length;
  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <ScrollArea className="w-[300px] md:w-full rounded-md border whitespace-nowrap">
      <div className="border rounded-lg shadow-lg w-max md:w-full pb-5 bg-[#F4F7FCBF]">
        {/* Search & Add */}
        <div className="flex justify-between items-center mb-4 p-5 bg-[#F4F7FCBF]">
          <Input
            placeholder="Search..."
            className="w-1/3 bg-white"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
          <Button className="bg-blue-500 hover:bg-blue-700 text-white">
            <Plus className="mr-2 h-4 w-4" /> Add customer
          </Button>
        </div>

        {/* Table */}
        <Table className="bg-[#F4F7FCBF]">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Deposit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableSkeleton rows={rowsPerPage} />
            ) : (
              paginated.map((c, i) => (
                <AccountRow key={c.id} c={c} index={startIndex + i} />
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <PaginationControls
          page={page}
          totalPages={totalPages}
          total={total}
          startIndex={startIndex}
          endIndex={endIndex}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

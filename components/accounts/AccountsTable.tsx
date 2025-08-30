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
import { Plus, AlertTriangle, RefreshCcw } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TableSkeleton from "./TableSkeleton";
import AccountRow from "./AccountRow";
import PaginationControls from "./PaginationControls";
import { useAccounts } from "@/hooks/ useAccounts";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AccountsTable() {
  const { data, loading, error, refetch } = useAccounts();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const filtered =
    data?.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())) ||
    [];

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginated = filtered.slice(startIndex, endIndex);
  const total = filtered.length;
  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <ScrollArea
      className={`w-[300px] md:w-full  ${
        error ? "" : "rounded-md border"
      } whitespace-nowrap`}
    >
      <div
        className={`w-max md:w-full ${
          error ? "" : "pb-5 bg-[#F4F7FCBF] border rounded-lg shadow-lg"
        }`}
      >
        {error ? (
          <div className="flex items-center justify-center h-full">
            <Card className="max-w-md w-full h-full">
              <CardContent className="p-8 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center mb-4">
                    <AlertTriangle className="h-16 w-16 text-destructive" />
                  </div>
                  <h1 className="text-2xl font-semibold text-foreground mb-4">
                    Something went wrong!
                  </h1>
                  <p className="text-muted-foreground mb-6">{error}</p>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                  <Button onClick={refetch} className="w-full">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link href={"/dashboard"}>Go back to dashboard</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4 p-5 bg-[#F4F7FCBF] gap-2">
              <Input
                placeholder="Search..."
                className="w-1/3 bg-white"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <div className="flex gap-2">
                <Button
                  onClick={refetch}
                  variant="outline"
                  className="flex items-center"
                  disabled={loading}
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  {loading ? "Loading..." : "Reload"}
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white">
                  <Plus className="mr-2 h-4 w-4" /> Add customer
                </Button>
              </div>
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
                    <AccountRow key={c.id} c={c} index={startIndex + i + 1} />
                  ))
                )}
              </TableBody>
            </Table>

            {/* Pagination */}
            {total > rowsPerPage && (
              <PaginationControls
                page={page}
                totalPages={totalPages}
                total={total}
                startIndex={startIndex}
                endIndex={Math.min(endIndex, total)}
                onPrev={() => setPage((p) => Math.max(1, p - 1))}
                onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
              />
            )}
          </>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

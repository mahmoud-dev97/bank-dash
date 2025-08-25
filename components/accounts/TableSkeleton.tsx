import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton({ rows }: { rows: number }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
          {Array.from({ length: 7 }).map((_, j) => (
            <TableCell key={j}>
              <Skeleton className="h-4 w-20 bg-white" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

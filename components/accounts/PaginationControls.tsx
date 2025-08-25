import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  total: number;
  startIndex: number;
  endIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function PaginationControls({
  page,
  totalPages,
  total,
  startIndex,
  endIndex,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-4 px-5">
      <p className="text-sm text-gray-500">
        {total > 0
          ? `${startIndex + 1}-${Math.min(endIndex, total)} of ${total}`
          : "0 results"}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          disabled={page === 1}
          onClick={onPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="outline"
          size="icon"
          disabled={page === totalPages || total === 0}
          onClick={onNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

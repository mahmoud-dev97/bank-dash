"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              Something went wrong!
            </h1>
            <p className="text-muted-foreground mb-6">
              An unexpected error occurred. This could be a temporary issue.
              Please try again or contact support if the problem persists.
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mb-4 font-mono bg-muted p-2 rounded">
                Error ID: {error.digest}
              </p>
            )}
          </div>
          <div className="space-y-3">
            <Button onClick={reset} className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href={"/dashboard"}>Go back to dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

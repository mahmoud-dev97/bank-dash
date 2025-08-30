import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/dashboard">Go back to dashboard</Link>
            </Button>
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="javascript:history.back()">Go back</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

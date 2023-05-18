"use client";

import Posts from "@/components/ServerComponent";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  return (
    <>
      <h1>Posts</h1>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<>Loading...</>}>
          {/* @ts-expect-error Server Component */}
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

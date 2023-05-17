"use client";

import ListBox from "@/components/ListBox";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ resetErrorBoundary }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <button onClick={() => resetErrorBoundary()}>
      <p>Error (this will alway fail):</p>
      <pre style={{ color: "red" }}>Click to retry</pre>
    </button>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="text-xl font-extrabold">Dashboard</h1>
      <section id="dashboard-section" className="grid grid-cols-2 gap-6">
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <ListBox title="User" url={"posts1"} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <ListBox title="Posts" url={"posts"} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <ListBox title="Posts" url={"posts"} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <ListBox title="Posts" url={"posts"} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
}

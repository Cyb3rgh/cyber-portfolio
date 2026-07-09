import Link from "next/link";
import VisitorInfo from "@/components/VisitorInfo";

export default function OsintDemoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              OSINT Intelligence Dashboard
            </p>

            <h1 className="text-4xl font-bold">
              Visitor Network Intelligence
            </h1>

            <p className="mt-4 max-w-3xl text-gray-400">
              This dashboard demonstrates how websites can collect publicly
              available browser and network metadata during normal web requests.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border border-cyan-500 px-5 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <VisitorInfo />

      </div>
    </main>
  );
}
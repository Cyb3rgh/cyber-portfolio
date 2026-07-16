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
            className="shrink-0 rounded-lg border border-cyan-500 px-5 py-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <aside
          aria-labelledby="privacy-notice-title"
          className="mb-8 rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-6"
        >
          <h2
            id="privacy-notice-title"
            className="text-xl font-semibold text-cyan-300"
          >
            Privacy and Ethical-Use Notice
          </h2>

          <p className="mt-3 leading-7 text-gray-300">
            This educational demonstration displays technical metadata exposed
            during a normal web request. This may include browser, device,
            network, and approximate IP-based location information.
          </p>

          <p className="mt-3 leading-7 text-gray-300">
            The information is presented for cybersecurity awareness only. Do
            not use it to identify, track, profile, or target another person.
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            This page does not request your name, password, account credentials,
            or other form input.
          </p>
        </aside>

        <VisitorInfo />
      </div>
    </main>
  );
}
import VisitorInfo from "@/components/VisitorInfo";

export default function OsintDemoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          OSINT Demo
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Visitor Network Information
        </h1>

        <p className="mb-10 max-w-2xl text-gray-400">
          This demo shows basic network and browser information that websites
          can receive from normal web requests.
        </p>

        <VisitorInfo />
      </div>
    </main>
  );
}
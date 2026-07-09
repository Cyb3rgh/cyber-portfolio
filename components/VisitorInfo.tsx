"use client";

import { useEffect, useState } from "react";

export default function VisitorInfo() {
  const [data, setData] = useState({
    ip: "Loading...",
    country: "Loading...",
  });

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() =>
        setData({
          ip: "Unavailable",
          country: "Unavailable",
        })
      );
  }, []);

  const getFlag = (country: string) => {
    const flags: Record<string, string> = {
      LB: "🇱🇧",
      US: "🇺🇸",
      DE: "🇩🇪",
      FR: "🇫🇷",
      GB: "🇬🇧",
      CA: "🇨🇦",
    };

    return flags[country] || "🌍";
  };

  return (
    <div className="mt-8 rounded-xl border border-cyan-500/30 bg-gray-900/50 p-6">
      <h3 className="text-xl font-semibold text-cyan-400">
        Visitor Environment
      </h3>

      <p className="mt-4 text-gray-300">
        Location: {getFlag(data.country)} {data.country}
      </p>

      <p className="mt-2 text-gray-300">
        IP Address: <span className="text-cyan-400">{data.ip}</span>
      </p>
    </div>
  );
}
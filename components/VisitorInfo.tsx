"use client";

import { useEffect, useState } from "react";

type VisitorData = {
  ip: string;
  country: string;
  city?: string;
  region?: string;
  isp?: string;
  asn?: string;
  latitude?: number;
  longitude?: number;
  connectionType?: string;
  securityStatus?: string;
};

export default function VisitorInfo() {
  const [data, setData] = useState<VisitorData>({
    ip: "Loading...",
    country: "Loading...",
  });

  const [browserInfo, setBrowserInfo] = useState({
    browser: "Loading...",
    os: "Loading...",
    device: "Loading...",
    language: "Loading...",
    timezone: "Loading...",
    screen: "Loading...",
    cpu: "Loading...",
    memory: "Loading...",
    cookies: "Loading...",
    colorDepth: "Loading...",
    touch: "Loading...",
    online: "Loading...",
    doNotTrack: "Loading...",
    theme: "Loading...",
  });

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then(async (ipData) => {
        const geoRes = await fetch(`https://ipwho.is/${ipData.ip}`);
        const geoData = await geoRes.json();

        const isp = geoData.connection?.isp || "Unknown";
        const org = geoData.connection?.org || "Unknown";
        const type = geoData.type || "Unknown";

        const suspiciousKeywords = [
          "vpn",
          "proxy",
          "hosting",
          "cloud",
          "data center",
          "datacenter",
          "server",
          "digitalocean",
          "amazon",
          "google",
          "microsoft",
          "ovh",
          "hetzner",
        ];

        const combined = `${isp} ${org} ${type}`.toLowerCase();

        const isSuspicious = suspiciousKeywords.some((word) =>
          combined.includes(word)
        );

        setData({
          ip: ipData.ip,
          country: geoData.country_code || ipData.country || "Unknown",
          city: geoData.city || "Unknown",
          region: geoData.region || "Unknown",
          isp,
          asn: geoData.connection?.asn
            ? `AS${geoData.connection.asn}`
            : "Unknown",
          latitude: geoData.latitude,
          longitude: geoData.longitude,
          connectionType: type,
          securityStatus: isSuspicious
            ? "Possible VPN / Proxy / Hosting Provider"
            : "Likely Residential or Mobile ISP",
        });
      })
      .catch(() =>
        setData({
          ip: "Unavailable",
          country: "Unavailable",
        })
      );

    const userAgent = navigator.userAgent;

    const browser = userAgent.includes("Edg")
      ? "Microsoft Edge"
      : userAgent.includes("Chrome")
      ? "Chrome"
      : userAgent.includes("Firefox")
      ? "Firefox"
      : userAgent.includes("Safari")
      ? "Safari"
      : "Unknown";

    const os = userAgent.includes("Windows")
      ? "Windows"
      : userAgent.includes("Mac")
      ? "macOS"
      : userAgent.includes("Linux")
      ? "Linux"
      : userAgent.includes("Android")
      ? "Android"
      : userAgent.includes("iPhone")
      ? "iOS"
      : "Unknown";

    setBrowserInfo({
      browser,
      os,
      device: window.innerWidth < 768 ? "Mobile Device" : "Desktop Device",
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: `${window.screen.width} x ${window.screen.height}`,
      cpu: navigator.hardwareConcurrency?.toString() || "Unknown",
      memory:
        (navigator as any).deviceMemory
          ? `${(navigator as any).deviceMemory} GB`
          : "Unknown",
      cookies: navigator.cookieEnabled ? "Enabled" : "Disabled",
      colorDepth: `${window.screen.colorDepth}-bit`,
      touch:
        navigator.maxTouchPoints > 0
          ? "Supported"
          : "Not Supported",
      online:
        navigator.onLine
          ? "Online"
          : "Offline",
      doNotTrack:
        navigator.doNotTrack === "1"
          ? "Enabled"
          : "Disabled",
      theme:
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "Dark"
          : "Light",
    });
  }, []);

  const getFlag = (countryCode: string) => {
    if (!countryCode || countryCode === "Unknown") return "🌍";

    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  };

  return (
    <div className="rounded-xl border border-cyan-500/30 bg-gray-900/50 p-6">
      <h3 className="mb-6 text-2xl font-bold text-cyan-400">
        OSINT Intelligence Dashboard
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        <Info label="IP Address" value={data.ip} />
        <Info label="Country" value={`${getFlag(data.country)} ${data.country}`} />
        <Info label="City" value={data.city || "Unknown"} />
        <Info label="Region" value={data.region || "Unknown"} />
        <Info label="ISP" value={data.isp || "Unknown"} />
        <Info label="ASN" value={data.asn || "Unknown"} />
        <Info label="Coordinates" value={`${data.latitude || "?"}, ${data.longitude || "?"}`} />
        <Info label="Connection Type" value={data.connectionType || "Unknown"} />
        <Info label="Security Estimate" value={data.securityStatus || "Unknown"} />

        <Info label="Browser" value={browserInfo.browser} />
        <Info label="Operating System" value={browserInfo.os} />
        <Info label="Device Type" value={browserInfo.device} />
        <Info label="Language" value={browserInfo.language} />
        <Info label="Timezone" value={browserInfo.timezone} />
        <Info label="Screen Resolution" value={browserInfo.screen} />

        <Info label="CPU Cores" value={browserInfo.cpu} />
        <Info label="Device Memory" value={browserInfo.memory} />
        <Info label="Cookies" value={browserInfo.cookies} />
        <Info label="Color Depth" value={browserInfo.colorDepth} />
        <Info label="Touch Support" value={browserInfo.touch} />
        <Info label="Online Status" value={browserInfo.online} />
        <Info label="Do Not Track" value={browserInfo.doNotTrack} />
        <Info label="Preferred Theme" value={browserInfo.theme} />
      </div>

      <p className="mt-6 text-sm text-gray-500">
        This dashboard demonstrates how websites can collect publicly available
        browser and network metadata during normal web requests.
      </p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-800 bg-black/40 p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 font-semibold text-gray-200">{value}</p>
    </div>
  );
}
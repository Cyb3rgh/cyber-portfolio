export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-400">
      <div className="mx-auto max-w-5xl px-6">
        {/* Name */}
        <p className="text-lg font-semibold text-cyan-400">
          Fayyad Dahweesh
        </p>

        {/* Professional Titles */}
        <p className="mt-2">
          Technical Support Specialist | IT Support Professional |
          Cybersecurity Professional
        </p>

        {/* Technologies */}
        <p className="mt-4 text-sm text-gray-500">
          Built with Next.js, TypeScript, Tailwind CSS and Vercel
        </p>

        {/* Copyright */}
        <p className="mt-2 text-sm text-gray-600">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="freepik-bg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <Link
          href="/workflows"
          className="flex items-center justify-center text-white hover:text-gray-300 transition-colors"
        >
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mr-3">
            New
          </span>
          <span className="text-sm md:text-base">
            Assistant + Workflows: Follow guided steps to complete multiple design tasks
          </span>
          <div className="flex items-center ml-3">
            <span className="text-sm font-medium">Try it now</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

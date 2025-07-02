"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="freepik-bg border-b border-gray-800 sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 text-white hover:text-gray-300 mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/" className="flex items-center">
              <div className="text-white font-bold text-xl">FREEPIK</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/ai" className="text-white hover:text-gray-300 flex items-center">
                AI Suite
                <span className="ml-1 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">New</span>
              </Link>
            </div>

            <div className="relative group">
              <Link href="/stock" className="text-white hover:text-gray-300">
                Stock
              </Link>
            </div>

            <div className="relative group">
              <Link href="/company" className="text-white hover:text-gray-300">
                Company
              </Link>
            </div>

            <div className="relative group">
              <Link href="/more" className="text-white hover:text-gray-300">
                More
              </Link>
            </div>

            <Link href="/events" className="text-white hover:text-gray-300">
              Events
            </Link>

            <Link href="/enterprise" className="text-white hover:text-gray-300">
              Enterprise
            </Link>

            <Link href="/pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
          </nav>

          {/* Sign In Button */}
          <div className="flex items-center">
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800">
              Sign in
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/ai" className="text-white hover:text-gray-300 flex items-center">
                AI Suite
                <span className="ml-1 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">New</span>
              </Link>
              <Link href="/stock" className="text-white hover:text-gray-300">Stock</Link>
              <Link href="/company" className="text-white hover:text-gray-300">Company</Link>
              <Link href="/more" className="text-white hover:text-gray-300">More</Link>
              <Link href="/events" className="text-white hover:text-gray-300">Events</Link>
              <Link href="/enterprise" className="text-white hover:text-gray-300">Enterprise</Link>
              <Link href="/pricing" className="text-white hover:text-gray-300">Pricing</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

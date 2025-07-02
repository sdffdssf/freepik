import Link from "next/link";

export default function Footer() {
  return (
    <footer className="freepik-bg border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Suite */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">AI SUITE</h3>
            <div className="space-y-3">
              <Link href="/ai-assistant" className="block text-gray-400 hover:text-white text-sm">
                AI Assistant
              </Link>
              <Link href="/ai-image-generator" className="block text-gray-400 hover:text-white text-sm">
                AI Image Generator
              </Link>
              <Link href="/ai-video-generator" className="block text-gray-400 hover:text-white text-sm">
                AI Video Generator
              </Link>
              <Link href="/ai-voice-generator" className="block text-gray-400 hover:text-white text-sm">
                AI Voice Generator
              </Link>
              <Link href="/freepik-tools" className="block text-gray-400 hover:text-white text-sm">
                All Freepik tools
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">INFORMATION</h3>
            <div className="space-y-3">
              <Link href="/pricing" className="block text-gray-400 hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white text-sm">
                About us
              </Link>
              <Link href="/api" className="block text-gray-400 hover:text-white text-sm">
                API
              </Link>
              <Link href="/jobs" className="block text-gray-400 hover:text-white text-sm">
                Jobs
              </Link>
              <Link href="/sell-content" className="block text-gray-400 hover:text-white text-sm">
                Sell content
              </Link>
              <Link href="/brand-guidelines" className="block text-gray-400 hover:text-white text-sm">
                Brand guidelines
              </Link>
              <Link href="/events" className="block text-gray-400 hover:text-white text-sm">
                Events
              </Link>
              <Link href="/search-trends" className="block text-gray-400 hover:text-white text-sm">
                Search trends
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">LEGAL</h3>
            <div className="space-y-3">
              <Link href="/terms" className="block text-gray-400 hover:text-white text-sm">
                Terms of use
              </Link>
              <Link href="/license" className="block text-gray-400 hover:text-white text-sm">
                License agreement
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white text-sm">
                Privacy policy
              </Link>
              <Link href="/copyright" className="block text-gray-400 hover:text-white text-sm">
                Copyright information
              </Link>
              <Link href="/cookies" className="block text-gray-400 hover:text-white text-sm">
                Cookies policy
              </Link>
              <div className="mt-6">
                <h4 className="text-white font-semibold text-lg mb-3">SUPPORT</h4>
                <Link href="/docs" className="block text-gray-400 hover:text-white text-sm">
                  AI Suite documentation
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-white text-sm">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">SOCIAL MEDIA</h3>
            <div className="space-y-3">
              <Link href="/facebook" className="block text-gray-400 hover:text-white text-sm">
                Facebook
              </Link>
              <Link href="/twitter" className="block text-gray-400 hover:text-white text-sm">
                Twitter
              </Link>
              <Link href="/pinterest" className="block text-gray-400 hover:text-white text-sm">
                Pinterest
              </Link>
              <Link href="/instagram" className="block text-gray-400 hover:text-white text-sm">
                Instagram
              </Link>
              <Link href="/youtube" className="block text-gray-400 hover:text-white text-sm">
                Youtube
              </Link>
              <Link href="/linkedin" className="block text-gray-400 hover:text-white text-sm">
                LinkedIn
              </Link>
              <Link href="/discord" className="block text-gray-400 hover:text-white text-sm">
                Discord
              </Link>
              <Link href="/reddit" className="block text-gray-400 hover:text-white text-sm">
                Reddit
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-white font-bold text-xl mr-8">FREEPIK</div>
              <p className="text-gray-400 text-sm">
                Copyright © 2010-2025 Freepik Company S.L. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Freepik Company projects</span>
              <Link href="/freepik" className="text-gray-400 hover:text-white text-sm">
                Freepik
              </Link>
              <Link href="/slidesgo" className="text-gray-400 hover:text-white text-sm">
                Slidesgo
              </Link>
              <Link href="/magnific" className="text-gray-400 hover:text-white text-sm">
                Magnific
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="freepik-bg py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Slides/Images */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/165477681/4236581831.jpeg"
                  alt="Guide the AI with Gen-4 References"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Guide the AI with Gen-4 References</h3>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/165477681/2214170306.jpeg"
                  alt="AI Assistant: Your creative chat partner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">AI Assistant: Your creative chat partner</h3>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/165477681/4272900714.jpeg"
                  alt="Video Upscaler: Powered by Topaz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Video Upscaler: Powered by Topaz, built for creators</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hailuo 02 Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Meet Hailuo 02, MiniMax latest model
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hailuo 02 delivers extreme and natural fluidity even in the most complex scenes,
            making intricate camera moves easier and smoother than ever.
          </p>

          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            Try now
          </Button>
        </div>
      </div>
    </section>
  );
}

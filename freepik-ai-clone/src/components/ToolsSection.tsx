import { ArrowRight } from "lucide-react";

export default function ToolsSection() {
  const tools = [
    {
      title: "AI Assistant",
      subtitle: "Create and edit images with AI",
      image: "https://ext.same-assets.com/165477681/1398519189.png",
      gradient: "freepik-gradient-purple"
    },
    {
      title: "AI image generator",
      subtitle: "From words to images",
      image: "https://ext.same-assets.com/165477681/468257112.jpeg",
      gradient: "freepik-gradient-red"
    },
    {
      title: "AI video generator",
      subtitle: "Create stunning videos from text or images",
      image: "https://ext.same-assets.com/165477681/1453620700.jpeg",
      gradient: "freepik-gradient-green"
    },
    {
      title: "Video Editor",
      subtitle: "Create video projects instantly",
      image: "https://ext.same-assets.com/165477681/631714830.jpeg",
      gradient: "freepik-gradient-blue"
    }
  ];

  return (
    <section className="freepik-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tools to skyrocket<br />your creative freedom
          </h2>
          <p className="text-xl text-gray-300">
            More tools and features coming soon! Want to test them before anyone?{" "}
            <span className="text-blue-400">Become our AI partner</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="group relative overflow-hidden rounded-lg hover:scale-105 hover-glow transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-80">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${tool.gradient} opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {tool.subtitle}
                </p>
                <ArrowRight
                  size={20}
                  className="text-white group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* More tools grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
          {[
            "Reimagine", "Upscale", "Retouch", "Background Remover",
            "Voiceovers", "Custom characters", "Custom style", "Mockup Generator",
            "Designer", "Image Editor", "Expand", "AI icon generator",
            "Sketch to Image", "Video Upscaler"
          ].map((tool, index) => (
            <div
              key={tool}
              className="freepik-card p-4 rounded-lg text-center hover:scale-105 hover-glow transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-white text-sm font-medium">{tool}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

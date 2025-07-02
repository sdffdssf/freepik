import { ArrowRight } from "lucide-react";

export default function DocsSection() {
  const docs = [
    {
      title: "Quickstart",
      description: "Set up your account and choose a plan in a few easy steps.",
      icon: "→"
    },
    {
      title: "Pricing",
      description: "Four plans: Free, Essential, Premium, and Premium+.",
      icon: "→"
    },
    {
      title: "Your first AI image",
      description: "Generate images from prompts, sketches, or photos.",
      icon: "→"
    },
    {
      title: "Your first AI video",
      description: "Create videos from text or images in seconds.",
      icon: "→"
    },
    {
      title: "Retouch images",
      description: "Use the Retouch tool to adjust objects and details in any image.",
      icon: "→"
    },
    {
      title: "Background Remover",
      description: "Change any image background in seconds with one AI tool.",
      icon: "→"
    },
    {
      title: "Upscale videos",
      description: "Cleaner, sharper clips with the Freepik Video Upscaler.",
      icon: "→"
    },
    {
      title: "Video Editor",
      description: "The Video Editor helps you edit and export videos fast.",
      icon: "→"
    },
    {
      title: "Custom Characters",
      description: "This guide shows you how to train AI for consistent character design.",
      icon: "→"
    },
    {
      title: "Objects (LoRAs)",
      description: "Turn any object into a branded product image with AI.",
      icon: "→"
    },
    {
      title: "AI image models",
      description: "Explore different AI image generation models.",
      icon: "→"
    },
    {
      title: "AI video models",
      description: "Find the right AI video generation model for your needs.",
      icon: "→"
    }
  ];

  return (
    <section className="freepik-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Freepik AI Docs
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A hub of clear, practical docs covering tools, tips, credit usage, pricing, and more.
            Everything you need to navigate the Freepik AI Suite with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {docs.map((doc, index) => (
            <div
              key={doc.title}
              className="freepik-card rounded-lg p-6 hover:scale-105 hover-glow transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>
                <ArrowRight
                  size={20}
                  className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="freepik-card px-8 py-3 rounded-lg text-white hover:scale-105 transition-transform duration-300">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}

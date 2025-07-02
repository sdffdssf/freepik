import { ArrowRight } from "lucide-react";

export default function TutorialSection() {
  const tutorials = [
    {
      title: "How to make CGI ads with AI",
      description: "A hands-on tutorial for creating CGI ads with the Freepik AI Suite.",
      image: "https://ext.same-assets.com/165477681/298812975.jpeg",
      gradient: "freepik-gradient-red"
    },
    {
      title: "How to create AI product images with Objects",
      description: "Learn how to generate consistent AI product images using the Objects feature in the AI Image Generator.",
      image: "https://ext.same-assets.com/165477681/3923515948.jpeg",
      gradient: "freepik-gradient-orange"
    },
    {
      title: "How to make AI influencers that look real",
      description: "Create your own AI influencer easily, with step-by-step guidance and zero design skills needed.",
      image: "https://ext.same-assets.com/165477681/2857842208.jpeg",
      gradient: "freepik-gradient-blue"
    },
    {
      title: "How to make thumbnails for YouTube videos with AI",
      description: "Use the Freepik AI Suite to create bold, clickable thumbnails for your YouTube videos.",
      image: "https://ext.same-assets.com/165477681/1412996186.png",
      gradient: "freepik-gradient-purple"
    },
    {
      title: "Morphing from one product to another",
      description: "Discover a fun, easy way to show product evolution with AI-powered morphing.",
      image: "https://ext.same-assets.com/165477681/4144858172.png",
      gradient: "freepik-gradient-green"
    },
    {
      title: "How to make product scenes using AI",
      description: "Create product visuals from every angle using the Freepik AI Suite.",
      image: "https://ext.same-assets.com/165477681/2333032761.jpeg",
      gradient: "freepik-gradient-orange"
    },
    {
      title: "How to make AI POV videos",
      description: "Use the Freepik AI Suite to build immersive POV videos from image to animation, no camera needed.",
      image: "https://ext.same-assets.com/165477681/3187856900.png",
      gradient: "freepik-gradient-blue"
    }
  ];

  return (
    <section className="freepik-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn how to create<br />with the Freepik AI Suite
          </h2>
          <p className="text-xl text-gray-300">
            Watch tutorials that walk you through different use cases<br />
            and practical how-to guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div key={tutorial.title} className="freepik-card rounded-lg overflow-hidden hover:scale-105 hover-glow transition-all duration-300 cursor-pointer">
              <div className="relative h-48">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${tutorial.gradient} opacity-60`} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {tutorial.description}
                </p>
                <button className="flex items-center text-white hover:text-gray-300 font-medium">
                  View more
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="freepik-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Get early access to our beta tools
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Try out our upcoming releases before anyone else and join the community of AI artists
            shaping the future of design by becoming our AI Partner
          </p>

          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold">
            Become our AI partner
          </Button>
        </div>
      </div>
    </section>
  );
}

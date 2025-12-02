const testimonials = [
  {
    quote: "I was facing serious charges that could've ended my career. The team at Octagon Legal dissected the case, found procedural flaws, and got the charges dropped. A tactical genius in the courtroom.",
    name: "JACOB R.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "When I thought I'd never see my kids again, Octagon Legal stepped in. The team was compassionate, fierce, and relentless in securing shared custody. They restored my hope.",
    name: "SAMIRA H.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "After being wrongfully arrested, I needed more than a lawyer. I needed someone who believed me. The team at Octagon Legal didn't just fight — they dismantled the case.",
    name: "MARCUS V.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "I felt silenced during my divorce. Octagon Legal changed that. They gave me a voice in mediation and secured a just property split and full protection order.",
    name: "EMMA J.",
    rating: "⭐⭐⭐⭐⭐"
  },
];

export default function Testimonials() {
  return (
    <section className="py-responsive-md bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-responsive-3xl font-serif font-bold text-navy mb-2 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto">
            Real stories from real clients who trusted us with their most important legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-responsive-xs rounded-lg shadow-lg border-l-4 border-gold hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-3 sm:mb-4">
                <p className="text-gray-700 text-responsive-xs leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-navy text-xs tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm">
                  {testimonial.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

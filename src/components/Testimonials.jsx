import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Fawzi Sayed',
    role: 'UI/UX Designer',
    rating: 5.0,
    text: 'Working with Jenny has been an absolute pleasure. Her attention to detail and ability to understand complex user needs is exceptional. She delivered a product that exceeded our expectations and significantly improved our user engagement.',
  },
  {
    name: 'Fawzi Sayed',
    role: 'UI/UX Designer',
    rating: 5.0,
    text: 'Jenny is a true professional with an incredible eye for design. Her work on our project was outstanding, bringing fresh ideas and innovative solutions that transformed our digital presence. Highly recommend her expertise!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials That Speak to My Results
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <Quote className="w-12 h-12 text-blue-600 opacity-50" />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-white fill-current" />
                  <span className="text-white font-bold">{testimonial.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

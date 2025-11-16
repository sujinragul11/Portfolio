import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Fawzi Sayed',
    role: 'UI Ux Designer',
    rating: 5.0,
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Fawzi Sayed',
    role: 'UI Ux Designer',
    rating: 5.0,
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    avatar: '/avatar2.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative Diagonal Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,#f97316_50px,#f97316_51px)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials That<br />
            Speak to <span className="text-orange-500">My Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {/* Large Quote Mark */}
          <div className="absolute -left-8 top-0 text-9xl text-gray-700 opacity-20 font-serif">"</div>
          <div className="absolute -right-8 bottom-0 text-9xl text-gray-700 opacity-20 font-serif rotate-180">"</div>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-500 relative"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
                <span className="text-white font-bold ml-2">{testimonial.rating}</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
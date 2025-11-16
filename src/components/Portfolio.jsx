import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Lirante',
    category: 'Landing Page',
    image: '/lirante.jpg',
  },
  {
    title: 'Lirante',
    category: 'Product Design',
    image: '/lirante2.jpg',
  },
];

const categories = ['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'];

export default function Portfolio() {
  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Lets have a look at
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              my <span className="text-orange-500">Portfolio</span>
            </h2>
          </div>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] hover:shadow-2xl transition-all duration-500"
            >
              {/* Portfolio Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200">
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent to-white/90"></div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-6xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-600">{item.category}</span>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-8 right-8">
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            Lirante - Food Delivery Solution
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
}
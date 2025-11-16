import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900 rounded-full px-6 py-3 flex items-center gap-6">
          <a href="#home" className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all">
            Home
          </a>
          <a href="#about" className="text-white hover:text-orange-500 transition-all">
            About
          </a>
          <a href="#services" className="text-white hover:text-orange-500 transition-all">
            Service
          </a>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JC</span>
            </div>
            <span className="text-white font-semibold">JCREA</span>
          </div>
          <a href="#resume" className="text-white hover:text-orange-500 transition-all">
            Resume
          </a>
          <a href="#project" className="text-white hover:text-orange-500 transition-all">
            Project
          </a>
          <a href="#contact" className="text-white hover:text-orange-500 transition-all">
            Contact
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                Hello!
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              I'm <span className="text-orange-500">Jenny</span>,
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Product Designer
            </h2>

            {/* Testimonial Quote */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 mb-8 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-orange-500 opacity-20">"</div>
              <p className="text-gray-700 italic relative z-10">
                Jenny's Exceptional product design ensures our website's success. Highly Recommended
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#portfolio"
                className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Portfolio →
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-900 text-center"
              >
                Hire me
              </a>
            </div>
          </div>

          {/* Right Side - Image with Stats */}
          <div className="relative">
            {/* Orange Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full"></div>
            
            {/* Profile Image Placeholder */}
            <div className="relative z-10 flex justify-center items-end h-[600px]">
              <div className="w-80 h-96 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full"></div>
            </div>

            {/* 10 Years Experience Badge */}
            <div className="absolute top-12 right-8 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">10 Years</div>
              <div className="text-gray-600">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
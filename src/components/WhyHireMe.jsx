export default function WhyHireMe() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              {/* Orange Circle Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500 rounded-full -z-10"></div>
              
              {/* Profile Image Placeholder */}
              <div className="relative z-10 flex justify-center">
                <div className="w-72 h-96 bg-gradient-to-b from-orange-400 to-orange-600 rounded-t-full"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Hire me</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">450+</div>
                  <div className="text-gray-600">Project Completed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">450+</div>
                  <div className="text-gray-600">Project Completed</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-900"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { CheckCircle, TrendingUp } from 'lucide-react';

export default function WhyHireMe() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Hire Me For Your Next Project?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With over a decade of experience in product design, I bring a unique blend of creativity, strategic thinking, and technical expertise to every project. I'm passionate about creating designs that not only look beautiful but also solve real business problems and delight users.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">User-centered design approach that prioritizes real user needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Proven track record with 450+ successfully completed projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Strong collaboration skills with cross-functional teams</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hire Me
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-5xl font-bold mb-2">450+</div>
                <div className="text-xl opacity-90">Projects Completed</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

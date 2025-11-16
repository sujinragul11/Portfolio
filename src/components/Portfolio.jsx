import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's have a look at my Portfolio
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                    <ExternalLink className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-white text-6xl font-bold opacity-90">Lirante</div>
                </div>
              </div>

              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Lirante
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  Food Delivery Solution
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  A comprehensive food delivery platform designed with modern glassmorphism aesthetics and smooth animations. The solution provides an intuitive user experience with seamless ordering flow, real-time tracking, and engaging visual design that makes food ordering delightful.
                </p>

                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

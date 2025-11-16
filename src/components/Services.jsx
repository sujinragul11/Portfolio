import { Palette, Monitor, Layout, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    image: '/ui-ux-design.jpg',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    image: '/web-design.jpg',
  },
  {
    icon: Layout,
    title: 'Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales',
    image: '/landing-page.jpg',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="services">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis locus nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-500"
              >
                {/* Image/Preview Area */}
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"></div>
                  
                  {/* Mockup placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-40 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                    {service.title}
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
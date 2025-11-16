import { Calendar, ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Design Unraveled: Behind the Scenes of UI/UX Magic',
    author: 'Jayesh Patil',
    date: '10 Nov, 2023',
    category: 'UI/ UX Design',
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Sugee: Loan Management System for Rural Sector.',
    author: 'Jayesh Patil',
    date: '09 Oct, 2023',
    category: 'App Design',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Cinetrade: Innovative way to invest in Digital Media',
    author: 'Jayesh Patil',
    date: '13 Aug, 2023',
    category: 'App Design',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-gray-50" id="blog">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              From my
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-orange-500">blog post</span>
            </h2>
          </div>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`h-56 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
                
                {/* Mockup/Preview */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl"></div>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3">{post.category}</div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
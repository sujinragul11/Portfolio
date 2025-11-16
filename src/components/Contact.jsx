import { Send, Award, Star, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have an Awesome Project Idea? Let's Discuss
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Send
              <Send className="w-5 h-5" />
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Ratings</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Winning Awards</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">Certified</div>
              <div className="text-blue-100">Product Designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

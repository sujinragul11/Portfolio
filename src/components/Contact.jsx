import { Send, Award, Star, ShieldCheck, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Have an Awesome Project<br />
            Idea? <span className="text-orange-500">Let's Discuss</span>
          </h2>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
            <div className="flex-grow relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Send
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <Star className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-3xl font-bold mb-2 text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Ratings</div>
            </div>

            <div className="p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-3xl font-bold mb-2 text-gray-900">25+</div>
              <div className="text-gray-600">Winning Awards</div>
            </div>

            <div className="p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <div className="text-3xl font-bold mb-2 text-gray-900">Certified</div>
              <div className="text-gray-600">Product Designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
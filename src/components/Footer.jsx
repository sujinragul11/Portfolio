import { Mail, Phone, Globe, Send, Facebook, Youtube, MessageCircle, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Orange Scrolling Text Banner */}
      <div className="bg-orange-500 py-4 mb-16 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex items-center gap-8 text-white text-xl font-bold">
            <span>UX Design</span>
            <span className="text-2xl">+</span>
            <span>App Design</span>
            <span className="text-2xl">+</span>
            <span>Dashboard</span>
            <span className="text-2xl">+</span>
            <span>Wireframe</span>
            <span className="text-2xl">+</span>
            <span>User Research</span>
            <span className="text-2xl">+</span>
            <span>UX Design</span>
            <span className="text-2xl">+</span>
            <span>App Design</span>
            <span className="text-2xl">+</span>
            <span>Dashboard</span>
            <span className="text-2xl">+</span>
            <span>Wireframe</span>
            <span className="text-2xl">+</span>
            <span>User Research</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Footer Section */}
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-6">Lets Connect there</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex gap-16">
            {/* Navigation */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="text-gray-400">
                  +20 11 43 63 73 41
                </li>
                <li className="text-gray-400 break-all max-w-xs">
                  fawzisayed1209@gmail.com
                </li>
                <li className="text-gray-400">
                  fawziuiux.com
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-6">Get the latest information</h4>
              <form className="flex flex-col gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              Copyright© 2023 Fawziuiux. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                User Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-econoscope-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-econoscope-blue to-econoscope-blue-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EconoScope</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Explore and test new economic models without real-world risk.
            </p>
            <p className="text-gray-400 text-xs">
              © 2024 EconoScope. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/model-builder" className="hover:text-white transition-colors">Model Builder</Link></li>
              <li><Link to="/simulations" className="hover:text-white transition-colors">Simulations</Link></li>
              <li><Link to="/data-hub" className="hover:text-white transition-colors">Data Hub</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Research</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/research" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/research" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Built for researchers, policymakers, and economic innovators worldwide.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

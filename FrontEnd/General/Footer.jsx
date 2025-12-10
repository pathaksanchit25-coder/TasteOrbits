import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-3 text-white drop-shadow-md">ABOUT TASTEORBITS</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-red-400 cursor-pointer">Who We Are</li>
            <li className="hover:text-red-400 cursor-pointer">Blog</li>
            <li className="hover:text-red-400 cursor-pointer">Work With Us</li>
            <li className="hover:text-red-400 cursor-pointer">Investor Relations</li>
            <li className="hover:text-red-400 cursor-pointer">Report Fraud</li>
            <li className="hover:text-red-400 cursor-pointer">Press Kit</li>
            <li className="hover:text-red-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Column 2 removed (Zomaverse) */}

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3 text-white drop-shadow-md">FOR RESTAURANTS</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-red-400 cursor-pointer">Partner With Us</li>
            <li className="hover:text-red-400 cursor-pointer">Apps For You</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3 text-white drop-shadow-md">LEARN MORE</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-red-400 cursor-pointer">Privacy</li>
            <li className="hover:text-red-400 cursor-pointer">Security</li>
            <li className="hover:text-red-400 cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold mb-3 text-white drop-shadow-md">SOCIAL LINKS</h4>
          <div className="flex gap-4 mb-4 text-xl text-gray-300">
            <i className="ri-facebook-line hover:text-red-400 cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-red-400 cursor-pointer"></i>
            <i className="ri-twitter-x-line hover:text-red-400 cursor-pointer"></i>
            <i className="ri-youtube-line hover:text-red-400 cursor-pointer"></i>
            <i className="ri-linkedin-line hover:text-red-400 cursor-pointer"></i>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded text-sm hover:bg-white/20 transition flex items-center gap-2">
              <i className="ri-app-store-line text-xl"></i> Download on the App Store
            </button>
            <button className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded text-sm hover:bg-white/20 transition flex items-center gap-2">
              <i className="ri-google-play-line text-xl"></i> Get it on Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Country & Language */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm mb-6 text-gray-400">
        <div>🌍 India</div>
        <div>🌐 English</div>
      </div>

      {/* Legal Disclaimer */}
      <p className="text-xs text-center text-gray-500 max-w-4xl mx-auto">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. 
        All trademarks are properties of their respective owners. 2008–2025 © TasteOrbits™ Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
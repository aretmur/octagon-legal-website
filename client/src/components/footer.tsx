import { Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer id="contact" className="bg-gray-800 text-white py-responsive-sm">
      <div className="container-responsive">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              {/* Firm Name Only */}
              <div className="flex flex-col">
                <h3 className="text-xl font-serif font-normal ml-6">
                  <span className="text-gold">O</span>
                  <span className="text-white">ctagon </span>
                  <span className="text-white">L</span>
                  <span className="text-white">egal</span>
                </h3>
                <p className="text-xs font-medium text-gold tracking-widest uppercase mt-0.5 ml-0.5">
                  Barristers & Solicitors
                </p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 mt-2">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors flex items-center -ml-0.5">
                <Facebook size={20} className="mr-2" />
                <span className="text-sm text-gray-400">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors flex items-center ml-1">
                <Linkedin size={20} className="mr-2" />
                <span className="text-sm text-gray-400">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-end">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-start">
                  <MapPin className="mr-2 text-gold mt-1 flex-shrink-0" size={16} />
                  <span>
                    Address: TBC
                  </span>
                </p>
                <p className="text-gray-300 flex items-center">
                  <Phone className="mr-2 text-gold" size={16} />
                  Phone: 1300 TBC
                </p>
                <p className="text-gray-300 flex items-center">
                  <Mail className="mr-2 text-gold" size={16} />
                  Email: TBC
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Octagon Legal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button onClick={() => (window as any).openPrivacyModal?.()} className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</button>
              <button onClick={() => (window as any).openTermsModal?.()} className="text-gray-300 hover:text-gold transition-colors">Terms of Service</button>
              <button onClick={() => (window as any).openDisclaimerModal?.()} className="text-gray-300 hover:text-gold transition-colors">Legal Disclaimer</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
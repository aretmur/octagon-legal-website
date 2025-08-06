import OctagonLogo from "@/components/octagon-logo";

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-12 text-navy">
          Octagon Legal Logo Showcase
        </h1>
        
        <div className="space-y-12">
          {/* Different sizes */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-6 text-navy">Logo Sizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <OctagonLogo size="sm" />
                <p className="mt-2 text-sm text-gray-600">Small</p>
              </div>
              <div className="text-center">
                <OctagonLogo size="md" />
                <p className="mt-2 text-sm text-gray-600">Medium</p>
              </div>
              <div className="text-center">
                <OctagonLogo size="lg" />
                <p className="mt-2 text-sm text-gray-600">Large</p>
              </div>
              <div className="text-center">
                <OctagonLogo size="xl" />
                <p className="mt-2 text-sm text-gray-600">Extra Large</p>
              </div>
            </div>
          </section>

          {/* On different backgrounds */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-navy">Background Variations</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-gray-700">White Background</h3>
              <div className="flex justify-center">
                <OctagonLogo size="lg" />
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-white">Dark Background</h3>
              <div className="flex justify-center">
                <OctagonLogo size="lg" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-white">Gradient Background</h3>
              <div className="flex justify-center">
                <OctagonLogo size="lg" />
              </div>
            </div>
          </section>

          {/* Design principles */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-6 text-navy">Design Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gold">Symbolism</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Classical Pillars:</strong> Representing Boaz and Jachin from Masonic tradition</li>
                  <li>• <strong>Gold Color:</strong> Prestige, excellence, and premium service</li>
                  <li>• <strong>Deep Navy:</strong> Trust, authority, and legal gravitas</li>
                  <li>• <strong>Symmetrical Design:</strong> Balance, fairness, and justice</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gold">Typography</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Serif Font:</strong> Traditional, authoritative, and elegant</li>
                  <li>• <strong>Letter Spacing:</strong> Enhanced readability and sophistication</li>
                  <li>• <strong>Italic Tagline:</strong> Elegant emphasis on core values</li>
                  <li>• <strong>Hierarchical Scale:</strong> Clear visual prominence</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage guidelines */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-6 text-navy">Usage Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold text-green-800 mb-2">✓ Recommended</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Business cards</li>
                  <li>Letterheads</li>
                  <li>Website headers</li>
                  <li>Legal documents</li>
                  <li>Professional signage</li>
                </ul>
              </div>
              <div className="text-center p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠ Use Caution</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>Very small sizes</li>
                  <li>Low contrast backgrounds</li>
                  <li>Busy patterns behind</li>
                  <li>Compressed formats</li>
                </ul>
              </div>
              <div className="text-center p-4 border border-red-200 rounded-lg bg-red-50">
                <h3 className="font-semibold text-red-800 mb-2">✗ Avoid</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Stretching or distorting</li>
                  <li>Changing colors arbitrarily</li>
                  <li>Adding drop shadows</li>
                  <li>Placing on conflicting imagery</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
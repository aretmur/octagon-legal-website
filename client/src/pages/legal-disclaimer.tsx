import { Link } from "wouter";

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-gold hover:text-yellow-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Legal Disclaimer</h1>
          <p className="text-gray-300 mt-2">Octagon Legal</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The information on this website is provided for general information purposes only. While we aim to keep the content accurate and up to date, laws and regulations change frequently, and the application of legal principles can vary depending on individual circumstances.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700 font-medium">
                <strong className="text-navy">Important:</strong> Nothing on this site constitutes legal advice, nor does it create a solicitor-client relationship. You should not act on the basis of any material on this site without first seeking professional legal advice tailored to your specific situation.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">No Warranties</h2>
            <p className="text-gray-700 mb-6">
              Although we take reasonable care in preparing and maintaining this site, Octagon Legal makes no warranties or guarantees as to the accuracy, completeness, or currency of the information provided. All content is provided "as is," without warranty of any kind — express or implied.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, Octagon Legal, its partners, employees, or agents accept no responsibility or liability for any loss, damage, or claim arising from reliance on information contained in this site, whether direct, indirect, or consequential.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              This website may contain links to third-party websites. Octagon Legal is not responsible for the content or availability of any external sites and makes no representations regarding their accuracy, relevance, or reliability.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-navy mb-3">Need Legal Advice?</h3>
              <p className="text-gray-700 mb-4">
                For specific legal advice tailored to your circumstances, please contact us directly to discuss your matter.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">📧 Email: TBC</p>
                <p className="text-gray-700">📞 Phone: 1300 TBC</p>
                <p className="text-gray-700">📍 Address: TBC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-gold hover:text-yellow-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Website Terms of Use</h1>
          <p className="text-gray-300 mt-2">Octagon Legal - Effective Date: [Insert Date]</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing or using this website (octagonlegal.au), you agree to the following terms and conditions. These terms govern your use of our website and should be read in conjunction with our <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Who We Are</h2>
            <p className="text-gray-700 mb-6">
              This website is operated by Octagon Legal, a law firm based in Victoria, Australia. We provide general information about our services and areas of legal practice. Any legal content on this website is for information purposes only and is not legal advice.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. No Legal Advice</h2>
            <p className="text-gray-700 mb-4">
              Content on this site is general in nature. It is not tailored to your individual circumstances and should not be relied upon as legal advice. If you need legal advice, you should contact us directly to discuss your specific matter.
            </p>
            <p className="text-gray-700 mb-6">
              Use of this website or contact form does not create a solicitor-client relationship between you and Octagon Legal.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Accuracy and Liability</h2>
            <p className="text-gray-700 mb-4">We make every effort to keep the information on this site accurate and up to date. However:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We make no guarantees regarding the completeness or accuracy of the content.</li>
              <li>We are not responsible for any direct or indirect loss arising from reliance on the information provided.</li>
            </ul>
            <p className="text-gray-700 mb-6">You use this site at your own risk.</p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Unless stated otherwise, all content on this site — including text, images, logos, and layout — is the intellectual property of Octagon Legal.
            </p>
            <div className="mb-6">
              <p className="text-gray-700 mb-2 font-semibold">You may:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>View and print for personal use only</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">You may not:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Reproduce, republish, or distribute our content for commercial purposes without permission.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              This website may contain links to external websites for convenience or reference. We do not endorse the content of those sites and are not responsible for their operation or accuracy. Accessing external links is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Security and Viruses</h2>
            <p className="text-gray-700 mb-6">
              While we take reasonable precautions, we do not guarantee that our website or downloads are free from viruses or other harmful components. You are responsible for using up-to-date antivirus software and securing your own systems.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We may update these terms at any time. Continued use of this site after changes are made constitutes acceptance of the updated terms. The latest version will always be available on this page.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Jurisdiction</h2>
            <p className="text-gray-700 mb-6">
              These terms are governed by the laws of Victoria, Australia. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Contact</h2>
            <p className="text-gray-700 mb-4">For any questions about these terms, contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-navy">Octagon Legal</p>
              <p className="text-gray-700">📧 Email: TBC</p>
              <p className="text-gray-700">📞 Phone: 1300 TBC</p>
              <p className="text-gray-700">📍 Address: TBC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
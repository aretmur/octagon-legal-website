import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-gold hover:text-yellow-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Octagon Legal - Effective Date: [Insert Date]</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At Octagon Legal, we take privacy seriously. We collect, use and store personal information to provide high-quality legal services while respecting your rights and complying with Australian privacy laws, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. What Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Your name, contact details and date of birth</li>
              <li>Identification details (e.g. driver licence, passport)</li>
              <li>Employment, financial, or medical information (if relevant to your legal matter)</li>
              <li>Government-issued identifiers (e.g. Medicare, Centrelink, Tax File Number)</li>
              <li>Any other information required to provide legal advice or comply with our obligations</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We only collect sensitive information (e.g. health records or criminal history) when it's directly relevant and with your consent, unless required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. How We Collect Information</h2>
            <p className="text-gray-700 mb-4">We collect information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Directly from you (e.g. when you contact us, engage our services, complete a form, or attend a meeting)</li>
              <li>From third parties with your consent (e.g. other professionals, government agencies, courts)</li>
              <li>From publicly available sources (e.g. property databases, business registries)</li>
              <li>Automatically via our website (see Cookies section below)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Why We Collect Your Information</h2>
            <p className="text-gray-700 mb-4">We collect, use, and store your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Deliver legal services and advice</li>
              <li>Verify your identity and manage your matter</li>
              <li>Communicate with you</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Manage conflicts, internal processes, and risk</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We never sell or trade your personal information.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Storage and Security</h2>
            <p className="text-gray-700 mb-4">Your information is stored securely in both physical and electronic formats. We use:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Encrypted document management systems</li>
              <li>Secure email and communication platforms</li>
              <li>Access controls and internal protocols to limit staff access</li>
              <li>Physical file storage in secure, restricted premises</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We retain client information for a minimum of seven (7) years after your matter is closed, or longer where required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Disclosure of Information</h2>
            <p className="text-gray-700 mb-4">We may share your personal information with:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Courts, tribunals, law enforcement, or regulators (if required)</li>
              <li>Third parties directly involved in your matter (e.g. barristers, experts, medical professionals)</li>
              <li>Administrative and IT service providers (e.g. secure cloud or case management platforms)</li>
              <li>Any other person or body where authorised by you or required by law</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Where we use external providers, they must comply with privacy and confidentiality obligations.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Cookies and Website Analytics</h2>
            <p className="text-gray-700 mb-4">We may use cookies and similar technologies on our website to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Improve performance and user experience</li>
              <li>Understand visitor behaviour</li>
              <li>Track traffic and technical data (e.g. browser type, pages visited, time spent)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Cookies do not collect personal information unless you provide it. You can disable cookies in your browser settings, though some features may not work as intended.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Access and Correction</h2>
            <p className="text-gray-700 mb-4">
              You may request access to your personal information or ask us to correct inaccurate or outdated details. To do so, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-navy">Octagon Legal</p>
              <p className="text-gray-700">📧 Email: TBC</p>
              <p className="text-gray-700">📞 Phone: 1300 TBC</p>
              <p className="text-gray-700">📍 Address: TBC</p>
            </div>
            <p className="text-gray-700 mb-6">
              We may ask for proof of identity and will usually respond within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Complaints</h2>
            <p className="text-gray-700 mb-4">
              If you believe your privacy has been breached, contact us directly. We take complaints seriously and aim to resolve them promptly.
            </p>
            <p className="text-gray-700 mb-4">If you're not satisfied with our response, you can contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-navy">Office of the Australian Information Commissioner (OAIC)</p>
              <p className="text-gray-700">📞 1300 363 992</p>
              <p className="text-gray-700">🌐 www.oaic.gov.au</p>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Policy Updates</h2>
            <p className="text-gray-700 mb-6">
              This policy may be updated periodically. The latest version will always be available at octagonlegal.au.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
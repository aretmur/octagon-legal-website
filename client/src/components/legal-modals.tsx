import { useState, useEffect } from "react";
import { X } from "lucide-react";

let setActiveModalGlobal: ((modal: string | null) => void) | null = null;

export function LegalModals() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  useEffect(() => {
    setActiveModalGlobal = setActiveModal;
    
    // Add global click handlers for debugging
    const handlePrivacy = () => setActiveModal('privacy');
    const handleTerms = () => setActiveModal('terms');
    const handleDisclaimer = () => setActiveModal('disclaimer');
    
    // Expose functions globally for debugging
    (window as any).openPrivacyModal = handlePrivacy;
    (window as any).openTermsModal = handleTerms;
    (window as any).openDisclaimerModal = handleDisclaimer;
    
    return () => {
      setActiveModalGlobal = null;
    };
  }, []);

  const privacyContent = `# Privacy Policy - Octagon Legal

**Effective Date:** [TBC]

At Octagon Legal, we are committed to protecting your privacy and handling your personal information with the utmost care and respect. This Privacy Policy explains how we collect, use, and safeguard your information when you engage our legal services or visit our website.

## Information We Collect

**Personal Information:** We collect information you provide directly, including:
• Name, contact details, and identification information
• Legal matter details and case-related documentation
• Financial information relevant to your legal matters
• Communication records and consultation notes

**Website Information:** When you visit our website, we may collect:
• Device and browser information
• Website usage patterns and preferences
• Location data (with your consent)

## How We Use Your Information

We use your personal information to:
• Provide legal services and advice
• Communicate about your legal matters
• Maintain accurate case records
• Comply with legal and regulatory requirements
• Improve our services and website functionality

## Information Sharing

We maintain strict confidentiality and only share your information:
• With your explicit consent
• As required by law or court order
• With trusted service providers under confidentiality agreements
• In anonymized form for research or training purposes

## Your Rights

Under Australian Privacy Law, you have the right to:
• Access your personal information
• Request corrections to inaccurate information
• Withdraw consent for certain uses
• Request deletion of your information (subject to legal obligations)

## Data Security

We implement comprehensive security measures including:
• Encrypted data transmission and storage
• Secure physical and digital access controls
• Regular security audits and updates
• Staff training on privacy protection

## Contact Information

For privacy-related inquiries:
**Email:** [TBC]
**Phone:** 1300 TBC
**Address:** [TBC]

This policy is reviewed regularly and updated as necessary to reflect changes in our practices and applicable laws.`;

  const termsContent = `# Terms of Service - Octagon Legal

**Effective Date:** [TBC]

These Terms of Service govern your use of legal services provided by Octagon Legal and your access to our website. By engaging our services or using our website, you agree to these terms.

## Legal Services

**Scope of Services:** We provide legal advice and representation in:
• Criminal Law matters
• Family Law disputes
• Immigration Law issues
• Workplace and Misconduct matters

**Professional Standards:** Our services are provided in accordance with:
• Victorian Legal Services Commissioner requirements
• Law Institute of Victoria professional standards
• Australian Solicitors' Rules of Professional Conduct

## Client Obligations

**Cooperation:** Clients must:
• Provide accurate and complete information
• Respond promptly to requests for documentation
• Attend scheduled appointments and court dates
• Follow legal advice and instructions

**Payment Terms:** 
• Fees are payable as outlined in your retainer agreement
• Costs may include court fees, expert witness fees, and disbursements
• Payment plans may be available upon request

## Limitation of Liability

**Professional Indemnity:** We maintain professional indemnity insurance as required by law.

**Scope of Responsibility:** Our liability is limited to:
• Direct losses arising from proven negligence
• The amount of professional indemnity insurance coverage
• Matters specifically within our retainer agreement

## Confidentiality

**Legal Professional Privilege:** All communications are protected by legal professional privilege and remain confidential unless you provide written consent or disclosure is required by law.

## Website Terms

**Acceptable Use:** You may not:
• Use our website for unlawful purposes
• Attempt to access restricted areas
• Interfere with website functionality
• Copy or redistribute our content without permission

**Intellectual Property:** All website content, including legal articles and firm materials, remains the intellectual property of Octagon Legal.

## Dispute Resolution

Any disputes arising from these terms will be resolved through:
1. Direct negotiation
2. Mediation (if required)
3. Victorian courts (as the exclusive jurisdiction)

## Governing Law

These terms are governed by Victorian and Commonwealth law.

## Contact Information

**Octagon Legal**
**Email:** [TBC]
**Phone:** 1300 TBC
**Address:** [TBC]

These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.`;

  const disclaimerContent = `# Legal Disclaimer - Octagon Legal

**IMPORTANT LEGAL NOTICES**

## No Legal Advice Disclaimer

**⚠️ WARNING:** The information provided on this website and in our materials is for general informational purposes only and does not constitute legal advice. 

**No Attorney-Client Relationship:** Viewing this website or contacting us does not create an attorney-client relationship until a formal retainer agreement is signed.

**Individual Circumstances:** Every legal matter is unique. Information that may be applicable to one situation may not apply to another. You should not rely on general information to make decisions about your specific legal matters.

## Website Information Disclaimer

**Accuracy:** While we strive to ensure accuracy, we make no warranties about:
• The completeness or currentness of information
• The accuracy of legal summaries or case studies
• The applicability of information to your situation

**Third-Party Content:** We are not responsible for:
• External website content linked from our site
• Information provided by third parties
• Comments or reviews posted by users

## Professional Liability

**Limitation of Liability:** We disclaim liability for:
• Decisions made based on website information
• Delays in updating legal information
• Technical issues affecting website access
• Indirect or consequential damages

**Professional Standards:** Our professional liability is governed by:
• Victorian Legal Services Commissioner requirements
• Professional indemnity insurance coverage
• Law Institute of Victoria professional conduct rules

## Time-Sensitive Information

**⚠️ CRITICAL WARNING:** Legal matters often involve strict time limits. Failure to act within required timeframes can result in:
• Loss of legal rights
• Inability to pursue claims
• Adverse legal consequences
• Irreversible procedural disadvantages

**Urgent Matters:** If you believe you have a time-sensitive legal matter, contact us immediately or seek alternative legal advice without delay.

## Confidentiality Limitations

**Public Information:** Information shared through:
• Website contact forms
• Email communications
• Social media platforms

May not be protected by legal professional privilege until a formal retainer agreement is established.

## Jurisdictional Limitations

**Practice Areas:** We practice primarily in Victoria, Australia. Laws vary significantly between jurisdictions, and information may not apply to:
• Other Australian states or territories
• Federal jurisdictions
• International legal matters
• Foreign legal systems

## Regulatory Compliance

**Professional Regulation:** Octagon Legal is regulated by:
• Victorian Legal Services Commissioner
• Law Institute of Victoria
• Australian Legal Profession Standards

**Complaints Process:** Professional conduct concerns should be directed to the Victorian Legal Services Commissioner.

## Emergency Situations

**Crisis Intervention:** For genuine emergency legal situations:
• Contact us immediately on 1300 TBC
• Consider contacting Legal Aid Victoria
• Seek urgent legal advice from any qualified practitioner

**Out of Hours:** For after-hours emergencies, contact Victoria Police or emergency services as appropriate.

## Contact Information

**Octagon Legal**
**Principal:** William Billings
**Email:** [TBC]
**Phone:** 1300 TBC
**Address:** [TBC]

This disclaimer is updated regularly. Please review it periodically for any changes.

---

**© 2025 Octagon Legal. All rights reserved.**`;

  const renderModal = (title: string, content: string) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8 relative">
          <button 
            onClick={() => setActiveModal(null)}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="prose prose-gray max-w-none">
            <div className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Modals */}
      {activeModal === 'privacy' && renderModal('Privacy Policy', privacyContent)}
      {activeModal === 'terms' && renderModal('Terms of Service', termsContent)}
      {activeModal === 'disclaimer' && renderModal('Legal Disclaimer', disclaimerContent)}
    </>
  );
}

// Export individual trigger functions for use in footer
export const openPrivacyModal = () => {
  if (setActiveModalGlobal) setActiveModalGlobal('privacy');
};

export const openTermsModal = () => {
  if (setActiveModalGlobal) setActiveModalGlobal('terms');
};

export const openDisclaimerModal = () => {
  if (setActiveModalGlobal) setActiveModalGlobal('disclaimer');
};

import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({
  title = "Octagon Legal | Criminal Defence & Family Lawyers Melbourne",
  description = "Melbourne criminal defence and family law specialists. Strategic legal advice for criminal charges, IVOs, divorce, parenting disputes, wills and estates. Book a confidential consultation.",
  keywords = "criminal lawyer melbourne, family lawyer melbourne, intervention order lawyer, assault lawyer, drink driving lawyer, divorce lawyer melbourne, wills and estates lawyer melbourne",
  canonical = "https://www.octagonlegal.au"
}: SEOHeadProps) {

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta
    setMeta("description", description);
    setMeta("keywords", keywords);

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Open Graph
    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    setOG("og:url", canonical);

    // Twitter
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // LEGAL SERVICE SCHEMA (CLEAN)
    const schema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Octagon Legal",
      "description": description,
      "url": canonical,
      "areaServed": "Victoria, Australia",
      "serviceType": [
        "Criminal Law",
        "Family Law",
        "Wills & Estates",
        "Family Violence & Intervention Orders"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "William Billings",
          "jobTitle": "Principal Lawyer"
        },
        {
          "@type": "Person",
          "name": "Aret Muradyan",
          "jobTitle": "Director & Co-Founder"
        }
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

  }, [title, description, keywords, canonical]);

  return null;
}

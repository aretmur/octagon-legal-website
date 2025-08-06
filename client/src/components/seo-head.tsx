import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({ 
  title = "Criminal Lawyer Melbourne | Family Law | Immigration Lawyer | Octagon Legal",
  description = "Leading criminal defence lawyers, family law specialists & immigration lawyers in Melbourne. Expert legal representation for assault, divorce, visa refusals & workplace misconduct. Book consultation today.",
  keywords = "criminal lawyer melbourne, family lawyer melbourne, immigration lawyer melbourne, divorce lawyer, criminal defence lawyer, visa lawyer, assault lawyer, child custody lawyer, criminal law firm melbourne, legal consultation melbourne",
  canonical = "https://octagonlegal.vercel.app"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: 'Octagon Legal' },
      { property: 'og:locale', content: 'en_AU' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ];
    
    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });
    
    // Add structured data for Legal Services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Octagon Legal",
      "description": "Leading criminal defence lawyers, family law specialists and immigration lawyers in Melbourne providing expert legal representation.",
      "url": canonical,
      "logo": `${canonical}/logo.png`,
      "telephone": "1300-TBC",
      "email": "TBC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TBC",
        "addressLocality": "Melbourne",
        "addressRegion": "Victoria", 
        "postalCode": "TBC",
        "addressCountry": "AU"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Victoria"
        },
        {
          "@type": "Country", 
          "name": "Australia"
        }
      ],
      "serviceType": [
        "Criminal Law",
        "Family Law", 
        "Immigration Law",
        "Employment Law",
        "Legal Consultation"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Legal Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Criminal Defence Lawyer",
              "description": "Expert criminal defence representation for assault, drug charges, drink driving and all criminal matters"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Family Lawyer",
              "description": "Comprehensive family law services including divorce, child custody, property settlement and domestic violence matters"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Immigration Lawyer",
              "description": "Immigration law specialists handling visa applications, refusals, partner visas and citizenship matters"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Employment Lawyer", 
              "description": "Workplace misconduct defense, unfair dismissal claims and employment law representation"
            }
          }
        ]
      },
      "founder": [
        {
          "@type": "Person",
          "name": "William Billings",
          "jobTitle": "Principal",
          "description": "Supreme Court credentials with extensive experience in Criminal, Administrative and Workplace Law"
        },
        {
          "@type": "Person", 
          "name": "Aret Muradyan",
          "jobTitle": "Co-Founder",
          "description": "30+ years law enforcement experience specializing in Criminal Law and Crisis Intervention"
        }
      ],
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-17:00"
    };
    
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, canonical]);
  
  return null;
}
export default function PracticeAreas() {
  const areas = [
    {
      title: "Criminal Law",
      icon: "⚖️",
      description:
        "Strong, strategic defence for clients facing police investigation, charges, or urgent court matters.",
      services: [
        "Police interviews, urgent legal advice & bail applications",
        "Representation for summary & indictable offences",
        "Traffic matters including licence loss, speeding & court hearings",
        "Drink & drug driving defence, negotiations & charge reduction",
        "Drug possession, trafficking & related allegations",
        "Appeals, sentence reductions & reopening matters",
        "Assault, affray, threats & violent offence defence",
        "Fraud, deception, dishonesty & white-collar offences",
      ],
      cta: "/contact",
    },
    {
      title: "Family Law",
      icon: "👨‍👩‍👧",
      description:
        "Clear, decisive guidance through family breakdown, parenting disputes, and financial separation.",
      services: [
        "Divorce & separation tailored advice",
        "Parenting disputes, consent orders & parenting plan solutions",
        "Property settlement: asset division, contributions & future needs",
        "Spousal maintenance advice & applications",
        "Urgent recovery, relocation & high-risk parenting matters",
        "Family violence considerations linked to parenting/property",
        "Binding financial agreements (prenup, postnup, cohabitation)",
        "Child support assessments, disputes & private agreements",
      ],
      cta: "/contact",
    },
    {
      title: "Family Violence & IVO Matters",
      icon: "🏠",
      description:
        "Strong, strategic representation for both respondents and protected persons in all Intervention Order matters.",
      services: [
        "Family Violence Intervention Orders (IVOs) – applications & defence",
        "Personal Safety Intervention Orders (PSIOs)",
        "Defending allegations & preparing evidence",
        "Varying, revoking or extending intervention orders",
        "Breach of IVO allegations & related criminal matters",
        "Urgent safety applications & risk assessments",
        "Representation in Magistrates’ Court hearings",
        "Safety planning, referrals & coordinated support pathways",
      ],
      cta: "/contact",
    },
    {
      title: "Wills & Estates",
      icon: "📜",
      description:
        "Future-focused estate planning and expert assistance with probate, disputes, and contested wills.",
      services: [
        "Simple & complex Wills tailored to your needs",
        "Testamentary Trust Wills",
        "Enduring Powers of Attorney (financial, medical, personal)",
        "Probate & Letters of Administration",
        "Estate administration from start to finish",
        "Contesting a Will & Family Provision (Part IV) claims",
        "Superannuation death benefit disputes",
        "Mediation & estate dispute resolution",
      ],
      cta: "/contact",
    },
  ];

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-serif font-bold text-center text-navy mb-6">
          Our Practice Areas
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Octagon Legal provides strong advocacy, clear advice, and tailored
          legal strategies for your most serious and personal matters.
        </p>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-8 flex flex-col"
            >
              <div className="text-5xl mb-4 text-center">{area.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-2 text-center">
                {area.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 text-center">
                {area.description}
              </p>

              <h4 className="text-lg font-semibold text-navy mt-4 mb-3">
                Core Services:
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm mb-6">
                {area.services.map((service, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <a
                href={area.cta}
                className="mt-auto inline-block text-center bg-navy text-white py-2 px-4 rounded-lg hover:bg-gold hover:text-navy transition-colors"
              >
                Book a Consultation →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

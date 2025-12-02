import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Users,
  Building,
  Home,
  FileText,
  Gavel,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

type PracticeArea = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  services: string[];
  enabled?: boolean;
};

const practiceAreas: PracticeArea[] = [
  {
  icon: Scale,
  title: "Criminal Law",
  services: [
    "Police interviews, urgent advice & bail applications",
    "Representation for summary and indictable offences",
    "Traffic matters including licence loss and court hearings",
    "Drink and drug driving charges – defence & negotiation",
    "Drug possession, trafficking & related offences",
    "Appeals, sentence reductions and reopening matters",
  ],
  enabled: true,
},

  {
  icon: Users,
  title: "Family Law",
  services: [
    "Divorce & separation guidance tailored to your situation",
    "Parenting disputes, consent orders & parenting plan solutions",
    "Property settlement and division of assets",
    "Spousal maintenance advice and applications",
    "Urgent recovery, relocation & high-risk parenting matters",
    "Family violence considerations linked to parenting or property",
    "Binding financial agreements (prenup, postnup & cohabitation)",
    "Child support assessments, disputes & private agreements",
  ],
  enabled: true,
},

 {
  icon: Home,
  title: "Family Violence & Intervention Orders",
  services: [
    "Family Violence Intervention Orders (IVOs) – applications & defence",
    "Personal Safety Intervention Orders (PSIOs)",
    "Defending allegations & preparing evidence",
    "Varying, revoking or extending intervention orders",
    "Breach of IVO allegations & related criminal matters",
    "Urgent safety applications and risk assessments",
    "Representation in Magistrates’ Court hearings",
    "Negotiated undertakings and consent resolutions",
    "Police Family Violence Safety Notices – advice & reviews",
    "Cross-applications and dual-party disputes",
    "Parenting implications where family violence is alleged",
    "Support for both respondents and protected persons",
  ],
  enabled: true,
},

  {
  icon: FileText,
  title: "Wills & Estates",
  services: [
    "Simple and complex Wills tailored to your circumstances",
    "Testamentary Trust Wills for wealth protection",
    "Enduring Powers of Attorney (financial, personal & medical)",
    "Advance Care Directives to plan future medical decisions",
    "Estate planning strategies to protect family assets",
    "Executor guidance and trustee support",
    "Applications for Probate and Letters of Administration",
    "Estate administration from start to final distribution",
    "Contesting a Will & estate dispute representation",
    "Family Provision (Part IV) claims for fair entitlements",
    "Superannuation death benefit disputes",
    "Disputes involving informal or invalid Wills",
    "Mediation and negotiated estate settlements",
  ],
  enabled: true,
},

];

export default function PracticeAreas() {
  const visibleAreas = practiceAreas.filter((a) => a.enabled);

  // Responsive column scheme auto-picked by count to keep rows centered & clean
  const colsByCount =
    visibleAreas.length <= 1
      ? "grid-cols-1"
      : visibleAreas.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : visibleAreas.length === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : visibleAreas.length === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section id="practice-areas" className="py-responsive-md bg-light-gray">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-responsive-3xl font-serif font-bold text-navy mb-2 sm:mb-4">
            Practice Areas
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-4xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, delivering
            strategic solutions tailored to your specific needs.
          </p>
        </div>

        <div
          className={[
            "grid gap-4 sm:gap-6 lg:gap-8",
            colsByCount,
            // Keep the whole grid centered within a comfortable width
            "max-w-7xl mx-auto",
            // Center grid tracks when there’s spare space
            "justify-center",
          ].join(" ")}
        >
          {visibleAreas.map((area, idx) => (
            <Card
              key={idx}
              className="bg-white shadow-sm hover:shadow-lg transition-shadow h-auto flex flex-col overflow-hidden w-full max-w-sm"
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-navy rounded-full mb-3">
                    <area.icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-navy mb-2 leading-tight">
                    {area.title}
                  </h3>
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-navy mb-3">Core Services:</h4>
                  <ul className="space-y-2 text-gray-600">
                    {area.services.map((service, sidx) => (
                      <li key={sidx} className="flex items-start">
                        <span className="text-gold mr-2 flex-shrink-0">•</span>
                        <span className="leading-tight text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

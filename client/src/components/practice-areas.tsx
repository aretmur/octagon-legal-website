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

/** Read feature flags from env (default OFF) */
const FF = {
  PROPERTY: process.env.NEXT_PUBLIC_FEATURE_PROPERTY === "on",
  WILLS: process.env.NEXT_PUBLIC_FEATURE_WILLS === "on",
  INJURY: process.env.NEXT_PUBLIC_FEATURE_INJURY === "on",
};

type PracticeArea = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  services: string[];
  enabled?: boolean; // computed at build-time from flags
};

const practiceAreas: PracticeArea[] = [
  {
    icon: Scale,
    title: "Criminal Law",
    services: [
      "Police interviews & bail applications",
      "Summary and indictable offences",
      "Family violence (IVOs & breach defence)",
      "Sexual offences",
      "White-collar and fraud matters",
      "Traffic offences",
      "Drink and Drug driving",
      "Drug offences",
      "Appeals and sentence reductions",
    ],
    enabled: true,
  },
  {
    icon: Users,
    title: "Family Law",
    services: [
      "Divorce & separation",
      "Parenting disputes and consent orders",
      "Property and asset division",
      "Urgent recovery, relocation & risk matters",
      "Intervention orders linked to family violence",
      "Binding financial agreements",
      "Child support disputes",
    ],
    enabled: true,
  },
  {
    icon: Building,
    title: "Immigration Law",
    services: [
      "Visa refusals, cancellations (s 501, s 116), character concerns",
      "AAT and Court appeals",
      "Partner, Parent & Family visas",
      "Skilled migration & Employer-sponsored visas",
      "Ministerial intervention and exceptional circumstances cases",
      "Bridging visas and unlawful stay regularisation",
      "Citizenship applications, refusals and appeals",
    ],
    enabled: true,
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    services: [
      "Unfair dismissal and show cause responses",
      "Discrimination, bullying, sexual harassment",
      "Whistleblower protections",
      "Internal dispute resolution",
    ],
    enabled: true,
  },

  // Feature-flagged (hidden until turned on)
  {
    icon: Home,
    title: "Property Law",
    services: [
      "Residential and commercial conveyancing",
      "Leases and tenancy disputes",
      "Easements and boundary issues",
      "Property development and subdivisions",
      "Title transfers and disputes",
    ],
    enabled: FF.PROPERTY,
  },
  {
    icon: FileText,
    title: "Wills & Estates",
    services: [
      "Drafting wills and powers of attorney",
      "Estate planning and asset protection",
      "Probate and letters of administration",
      "Contesting a will",
      "Executor and trustee advice",
    ],
    enabled: FF.WILLS,
  },
  {
    icon: Gavel,
    title: "Personal Injury",
    services: [
      "Workplace injury (WorkCover) claims",
      "Transport accident (TAC) claims",
      "Public liability claims",
      "Medical negligence claims",
      "Institutional abuse claims",
    ],
    enabled: FF.INJURY,
  },
];

export default function PracticeAreas() {
  const visibleAreas = practiceAreas.filter((a) => a.enabled);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {visibleAreas.map((area, idx) => (
            <Card key={idx} className="bg-white shadow-sm hover:shadow-lg transition-shadow h-auto flex flex-col overflow-hidden">
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

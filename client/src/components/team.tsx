import { useState } from "react";
import { X } from "lucide-react";

// IMAGE FILES
const williamImage = "/images/william_1754475178903.png";
const aretImage = "/images/aretM_1754475261149.PNG";
const ladyLawyerImage = "/images/ladyLawyer.jpg";

// ==============================
// TEAM DATA (EDIT HERE ONLY)
// ==============================
const teamMembers = [
  {
    name: "William Billings",
    role: "Principal and Co-Founder",
    legalTitle: "Lawyer",
    specialties: "Criminal Defence, Family Violence Law",
    languages: ["English", "Cantonese", "Mandarin"],
    image: williamImage,
    bio: `William Billings isn't your typical lawyer. He's calm under pressure, sharp on the detail and focused on getting results.

Whether it's challenging a weak prosecution, cross-examining a difficult witness, or navigating a complex tribunal matter, William brings a clear head and a steady hand.

Clients value his straight talking approach, strategic thinking, and ability to cut through legal noise.`,
  },
  {
    name: "Aret Muradyan",
    role: "Director and Co-Founder",
    legalTitle: "Lawyer",
    specialties: "Family Law, Wills & Estates",
    languages: ["English", "Armenian", "Turkish"],
    image: aretImage,
    bio: `Aret brings over 30 years of real world experience to the table, both in law enforcement and in the courtroom.

As a former Victoria Police Sergeant, he understands how the justice system works — operationally, institutionally and strategically.

Clients value Aret for his calm, clear approach and ability to cut through red tape with precision.`,
  },
  {
    name: "Penelope Pitstop",
    role: "Associate",
    legalTitle: "Lawyer",
    specialties: "Wills and Estates & Property Law",
    languages: ["English"],
    image: ladyLawyerImage,
    bio: `Penelope is a specialist in Wills, Estates and Property Law.`,
  },
  {
    name: "Judith Chromeedge",
    role: "Associate",
    legalTitle: "Lawyer",
    specialties: "Wills and Estates & Property Law",
    languages: ["English"],
    image: ladyLawyerImage,
    bio: `Penelope is a specialist in Wills, Estates and Property Law.`,
  },
];

// FILTER ENABLED MEMBERS
const activeMembers = teamMembers.filter((m) => m.enabled !== false);

// ==============================
// COMPONENT
// ==============================
export default function Team() {
  const [open, setOpen] = useState(null as any);

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-navy mb-3">
            Our Exceptional Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced, strategic and client-focused legal counsel across all major practice areas.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activeMembers.map((m, i) => (
            <div
              key={i}
              className="bg-white shadow-md border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setOpen(m)}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">

                {/* PHOTO */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                />

                {/* TEXT */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-serif font-bold text-navy">{m.name}</h3>
                  <p className="text-gold font-semibold">{m.role}</p>
                  <p className="text-gray-600 text-sm mb-1">{m.legalTitle}</p>
                  <p className="text-gray-700 text-sm italic mb-2">{m.specialties}</p>

                  {/* LANGUAGES */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1 mb-2">
                    {m.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  <span className="text-gold text-sm font-medium hover:text-navy transition">
                    View Full Profile →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl">

              {/* CLOSE BUTTON */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                onClick={() => setOpen(null)}
              >
                <X size={22} />
              </button>

              <div className="p-8">
                <div className="flex flex-col items-center mb-6">

                  <img
                    src={open.image}
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-md mb-4"
                  />

                  <h3 className="text-3xl font-serif font-bold text-navy">
                    {open.name}
                  </h3>
                  <p className="text-gold font-semibold text-lg">{open.role}</p>
                  <p className="text-gray-700 text-base">{open.specialties}</p>

                  <p className="text-blue-700 text-sm mt-2">
                    Languages: {open.languages.join(", ")}
                  </p>
                </div>

                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-justify">
                  {open.bio}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { useState } from "react";
import { X } from "lucide-react";

// Actual team photos - correct assignments
const williamImage = "/images/william_1754475178903.png";
const aretImage = "/images/aretM_1754475261149.PNG"; 
const friznikImage = "/images/friznik_new.png"; 
const ladyLawyerImage = "/images/ladyLawyer.jpg";

const teamMembers = [
  {
    name: "William Billings",
    title: "Principal and Co-Founder",
    legalTitle: "Laywer",
    subtitle: "Criminal Defence, Family Law & Employment Law",
    languages: ["English", "Cantonese", "Mandarin"],
    image: williamImage,
    description: "William Billings isn't your typical lawyer. He's calm under pressure, sharp on the detail and focused on getting results.\n\nWhether it's challenging a weak prosecution, cross-examining a difficult witness, or navigating a complex tribunal matter, William brings a clear head and a steady hand.\n\nClients value his straight talking approach, strategic thinking, and ability to cut through legal noise. He began his legal career at Midwinters Lawyers, working across criminal defence and administrative / employment disputes.\n\nIf you're in a tough spot and need someone who knows how to fight smart — get William to sort out your legal matters."
  },
  {
    name: "Aret Muradyan",
    title: "Director and Co-Founder",
    legalTitle: "Laywer",
    subtitle: "Criminal Defence, Family Law & Personal Injury",
    languages: ["English", "Armenian", "Turkish"],
    image: aretImage,
    description: "Aret brings over 30 years of real world experience to the table, both in law enforcement and in the courtroom.\n\nAs a former Victoria Police Sergeant, he understands how the justice system works on the ground and behind the scenes. Aret focuses on criminal defence, police discipline and legal matters affecting first responders, emergency service workers and government employees.\n\nHe's a subject matter expert on use-of-force incidents and workplace disputes in high-pressure environments. Clients value Aret for his calm clear approach and deep understanding of how institutions operate.\n\nHe knows how to cut through red tape, challenge unfair decisions and build strong, strategic defences when your career or reputation is on the line."
  },
  {
    name: "Friznik Bony",
    title: "Associate",
    legalTitle: "Laywer",
    subtitle: "Civil Litigation & Personal Injury",
    languages: ["English"],
    image: friznikImage,
    description: "Friznik Bony leads the Civil Litigation & Personal Injury practice at Octagon Legal." 
  },
  {
    name: "Penelope Pitstop",
    title: "Associate",
    legalTitle: "Laywer",
    subtitle: "Wills and Estates & Property Law",
    languages: ["English"],
    image: ladyLawyerImage,
    description: "Wills and Estates & Property Law specialist"
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="our-team" className="py-responsive-md bg-white">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-responsive-3xl font-serif font-bold text-navy mb-2 sm:mb-4">Our Exceptional Team</h2>
          <p className="text-responsive-sm text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
            Octagon Legal provides exceptional service and unmatched expertise for your most challenging legal matters.
          </p>
          
          {/* Four Features Under Team Heading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-navy rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold transition-colors duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-responsive-lg font-serif font-bold text-navy mb-2 sm:mb-3">
                Experienced Legal Counsel
              </h3>
              <p className="text-responsive-xs text-gray-600 leading-relaxed">
                Our team brings decades of combined experience across all practice areas.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-navy rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold transition-colors duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-responsive-lg font-serif font-bold text-navy mb-2 sm:mb-3">
                Client-Centred Approach
              </h3>
              <p className="text-responsive-xs text-gray-600 leading-relaxed">
                We prioritise your needs and provide personalised legal strategies.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-navy rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold transition-colors duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-responsive-lg font-serif font-bold text-navy mb-2 sm:mb-3">
                Proven Results
              </h3>
              <p className="text-responsive-xs text-gray-600 leading-relaxed">
                Our track record demonstrates consistent success for our clients.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-navy rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gold transition-colors duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-responsive-lg font-serif font-bold text-navy mb-2 sm:mb-3">
                Responsive Service
              </h3>
              <p className="text-responsive-xs text-gray-600 leading-relaxed">
                We believe in open communication and timely responses to all inquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-responsive-team gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold/20">
              <div className="p-responsive-sm">
                <div className="flex-responsive-col gap-3 sm:gap-4 items-center sm:items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-md border-3 border-gold/20 cursor-pointer hover:border-gold transition-colors ${
                        member.name === "Aret Muradyan" ? "object-center" : "object-top"
                      }`}
                      style={member.name === "Aret Muradyan" ? { 
                        objectPosition: "center",
                        transform: "translateY(3px)"
                      } : {}}
                      onClick={() => setSelectedMember(member)}
                    />
                  </div>
                  <div className="flex-1 mobile-center">
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="text-responsive-base font-serif font-bold text-navy mb-1 hover:text-gold transition-colors cursor-pointer block"
                    >
                      {member.name}
                    </button>
                    <p className="text-gold font-semibold text-sm sm:text-base mb-1">{member.title}</p>
                    {member.legalTitle && (
                      <p className="text-gray-600 font-medium text-xs sm:text-sm mb-1 sm:mb-2">{member.legalTitle}</p>
                    )}
                    {member.subtitle && (
                      <p className="text-gray-700 text-xs sm:text-sm mb-1 sm:mb-2 leading-tight">{member.subtitle}</p>
                    )}
                    {member.languages && (
                      <div className="mb-2 sm:mb-3">
                        <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                          {member.languages.map((lang, langIndex) => (
                            <span key={langIndex} className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center text-gold font-medium text-xs sm:text-sm hover:text-navy transition-colors group"
                    >
                      View Full Profile 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-responsive-sm relative">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <div className="flex-responsive-col gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={selectedMember.image}
                      alt={`${selectedMember.name} - ${selectedMember.title}`}
                      className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg border-4 border-gray-200 mx-auto ${
                        selectedMember.name === "Aret Muradyan" ? "object-center" : "object-top"
                      }`}
                      style={selectedMember.name === "Aret Muradyan" ? { 
                        objectPosition: "center",
                        transform: "translateY(6px)"
                      } : {}}
                    />
                  </div>
                  <div className="flex-1 mobile-center">
                    <h3 className="text-responsive-2xl font-serif font-bold text-navy mb-1 sm:mb-2">{selectedMember.name}</h3>
                    <p className="text-gold font-semibold mb-1 text-responsive-base">{selectedMember.title}</p>
                    {selectedMember.legalTitle && (
                      <p className="text-gold font-bold text-responsive-base mb-1 sm:mb-2">{selectedMember.legalTitle}</p>
                    )}
                    {selectedMember.subtitle && (
                      <p className="text-gray-700 font-medium text-responsive-xs mb-1 sm:mb-2 italic">{selectedMember.subtitle}</p>
                    )}
                    {selectedMember.languages && (
                      <div className="mb-3 sm:mb-4">
                        <p className="text-blue-600 font-medium text-responsive-xs">
                          Languages: {selectedMember.languages.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-responsive-xs text-justify whitespace-pre-line">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

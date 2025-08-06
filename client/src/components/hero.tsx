import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const messages = [
    {
      text: "When the ",
      emphasis: "DETAILS",
      textAfter: " matter",
      backgroundImage: "/images/contract_1754474660768.jpg", // Professional contract signing
      mood: "forensic",
      overlay: 0.25
    },
    {
      text: "We have the ",
      emphasis: "CREATIVE SOLUTIONS",
      textAfter: " for complex problems",
      backgroundImage: "/images/officeMeeting_1754474660768.jpg", // Team collaboration and strategy
      mood: "strategic",
      overlay: 0.25
    },
    {
      text: "Legal Precision – ",
      emphasis: "NO COMPROMISES",
      textAfter: " – When you need it most",
      backgroundImage: "/images/courtHouse_1754474660768.jpg", // Professional courthouse exterior
      mood: "cinematic",
      overlay: 0.3
    },
    {
      text: "Because ",
      emphasis: "STRATEGY BEATS SCALE",
      textAfter: "",
      backgroundImage: "/images/ladyJustice_1754474660768.jpg", // Lady Justice statue
      mood: "strategic",
      overlay: 0.3
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const advanceMessage = () => {
      setIsTransitioning(true);
      
      // Short delay for smooth transition
      setTimeout(() => {
        setCurrentMessageIndex((prev) => {
          const nextIndex = (prev + 1) % messages.length;
          setIsTransitioning(false);
          return nextIndex;
        });
      }, 200);
      
      // Set different timing for the next transition
      const isLastMessage = currentMessageIndex === messages.length - 1;
      const delay = isLastMessage ? 8000 : 6000; // 8 seconds after last message, 6 for others
      
      timeoutId = setTimeout(advanceMessage, delay);
    };

    // Start the first transition after 6 seconds (longer initial read time)
    timeoutId = setTimeout(advanceMessage, 6000);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentMessageIndex, messages.length]);

  const getMoodStyles = (mood: string) => {
    switch (mood) {
      case 'forensic':
        // Dimly lit, analytical, tight DOF
        return {
          filter: 'contrast(1.4) brightness(0.7) saturate(0.8) blur(0.5px)',
          backgroundPosition: 'center center'
        };
      case 'strategic':
        // Bright lighting, dynamic energy
        return {
          filter: 'contrast(1.2) brightness(1.3) saturate(1.3)',
          backgroundPosition: 'center center'
        };
      case 'cinematic':
        // High contrast, moody, grayscale with gold accent
        return {
          filter: 'contrast(1.6) brightness(0.6) saturate(0.3) sepia(0.2)',
          backgroundPosition: 'center center'
        };
      default:
        return {
          filter: 'contrast(1.1) brightness(0.9)',
          backgroundPosition: 'center center'
        };
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentMessage = messages[currentMessageIndex];

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-start overflow-hidden">
      {/* Dynamic Background Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === currentMessageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${message.backgroundImage}')`,
              ...getMoodStyles(message.mood)
            }}
          >
            {/* Dynamic Overlay */}
            <div 
              className="absolute inset-0 bg-black"
              style={{ opacity: message.overlay }}
            ></div>
            
            {/* Gold Accent for Cinematic Mood */}
            {message.mood === 'cinematic' && (
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold to-transparent opacity-20"></div>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-responsive">
        <div className="max-w-4xl">
          <div className="h-full flex items-center">
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`} style={{ transform: 'translateY(-20px) sm:translateY(-35px)' }}>
              {currentMessage.emphasis ? (
                <>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none" style={{
                    textShadow: '2px 4px 8px rgba(0,0,0,0.8)'
                  }}>
                    {currentMessage.text}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl xxl:text-8xl xxxl:text-9xl font-sans font-black text-white uppercase tracking-tight leading-none -mt-1 md:-mt-2" style={{
                    textShadow: '3px 6px 12px rgba(0,0,0,0.9)'
                  }}>
                    {currentMessage.emphasis}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none -mt-1 md:-mt-2" style={{
                    textShadow: '2px 4px 8px rgba(0,0,0,0.8)'
                  }}>
                    {currentMessage.textAfter}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl xxl:text-8xl xxxl:text-9xl font-sans font-black text-white uppercase tracking-tight leading-none" style={{
                    textShadow: '3px 6px 12px rgba(0,0,0,0.9)'
                  }}>
                    {currentMessage.text}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-sans font-light text-white uppercase tracking-wider leading-none -mt-1 md:-mt-2" style={{
                    textShadow: '2px 4px 8px rgba(0,0,0,0.8)'
                  }}>
                    {currentMessage.textAfter}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements for Strategic Mood */}
      {currentMessage.mood === 'strategic' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        </div>
      )}
    </section>
  );
}

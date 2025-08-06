interface OctagonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function OctagonLogo({ className = "", size = "md" }: OctagonLogoProps) {
  const sizeClasses = {
    sm: "w-32 h-20",
    md: "w-48 h-28", 
    lg: "w-64 h-36",
    xl: "w-80 h-44"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 400 180" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Navy background */}
        <rect width="400" height="180" fill="#2C5282" />
        
        {/* Left Classical Pillar (Boaz) */}
        <g transform="translate(30, 20)">
          {/* Base */}
          <rect x="0" y="135" width="40" height="8" fill="#D69E2E" />
          <rect x="3" y="130" width="34" height="5" fill="#D69E2E" />
          <rect x="6" y="125" width="28" height="5" fill="#D69E2E" />
          
          {/* Column shaft with fluting */}
          <rect x="12" y="25" width="16" height="100" fill="#D69E2E" />
          <line x1="14" y1="25" x2="14" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="16" y1="25" x2="16" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="18" y1="25" x2="18" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="20" y1="25" x2="20" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="22" y1="25" x2="22" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="24" y1="25" x2="24" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="26" y1="25" x2="26" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          
          {/* Ionic capital with volutes */}
          <rect x="8" y="18" width="24" height="7" fill="#2C5282" />
          <circle cx="12" cy="21.5" r="4" fill="#D69E2E" />
          <circle cx="28" cy="21.5" r="4" fill="#D69E2E" />
          <path d="M8 21.5 Q4 20, 4 21.5 Q4 23, 8 21.5" fill="#D69E2E" />
          <path d="M32 21.5 Q36 20, 36 21.5 Q36 23, 32 21.5" fill="#D69E2E" />
          
          {/* Entablature */}
          <rect x="0" y="8" width="40" height="10" fill="#D69E2E" />
          <rect x="3" y="3" width="34" height="5" fill="#D69E2E" />
          <rect x="6" y="0" width="28" height="3" fill="#D69E2E" />
        </g>
        
        {/* Right Classical Pillar (Jachin) */}
        <g transform="translate(330, 20)">
          {/* Base */}
          <rect x="0" y="135" width="40" height="8" fill="#D69E2E" />
          <rect x="3" y="130" width="34" height="5" fill="#D69E2E" />
          <rect x="6" y="125" width="28" height="5" fill="#D69E2E" />
          
          {/* Column shaft with fluting */}
          <rect x="12" y="25" width="16" height="100" fill="#D69E2E" />
          <line x1="14" y1="25" x2="14" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="16" y1="25" x2="16" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="18" y1="25" x2="18" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="20" y1="25" x2="20" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="22" y1="25" x2="22" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="24" y1="25" x2="24" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          <line x1="26" y1="25" x2="26" y2="125" stroke="#B7791F" strokeWidth="0.8" />
          
          {/* Ionic capital with volutes */}
          <rect x="8" y="18" width="24" height="7" fill="#2C5282" />
          <circle cx="12" cy="21.5" r="4" fill="#D69E2E" />
          <circle cx="28" cy="21.5" r="4" fill="#D69E2E" />
          <path d="M8 21.5 Q4 20, 4 21.5 Q4 23, 8 21.5" fill="#D69E2E" />
          <path d="M32 21.5 Q36 20, 36 21.5 Q36 23, 32 21.5" fill="#D69E2E" />
          
          {/* Entablature */}
          <rect x="0" y="8" width="40" height="10" fill="#D69E2E" />
          <rect x="3" y="3" width="34" height="5" fill="#D69E2E" />
          <rect x="6" y="0" width="28" height="3" fill="#D69E2E" />
        </g>
        
        {/* Central Logo Text */}
        <g transform="translate(200, 70)">
          {/* Octagon */}
          <text 
            x="0" 
            y="0" 
            textAnchor="middle" 
            fill="white" 
            fontSize="42" 
            fontFamily="serif" 
            fontWeight="400"
            letterSpacing="2px"
          >
            <tspan fill="#D69E2E">O</tspan>ctagon
          </text>
          
          {/* Legal */}
          <text 
            x="0" 
            y="45" 
            textAnchor="middle" 
            fill="white" 
            fontSize="42" 
            fontFamily="serif" 
            fontWeight="400"
            letterSpacing="2px"
          >
            <tspan fill="#D69E2E">L</tspan>egal
          </text>
          
          {/* Tagline */}
          <text 
            x="0" 
            y="75" 
            textAnchor="middle" 
            fill="#D69E2E" 
            fontSize="16" 
            fontFamily="serif" 
            fontStyle="italic"
            letterSpacing="1px"
          >
            Where Law Meets Strength and Stability
          </text>
        </g>
        
        {/* Subtle Masonic square and compass elements (very subtle) */}
        <g transform="translate(200, 25)" opacity="0.1">
          <circle cx="0" cy="0" r="8" fill="none" stroke="#D69E2E" strokeWidth="1" />
          <path d="M-6,-6 L6,6 M6,-6 L-6,6" stroke="#D69E2E" strokeWidth="1" />
        </g>
        
        {/* Decorative border frame */}
        <rect 
          x="5" 
          y="5" 
          width="390" 
          height="170" 
          fill="none" 
          stroke="#D69E2E" 
          strokeWidth="2" 
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
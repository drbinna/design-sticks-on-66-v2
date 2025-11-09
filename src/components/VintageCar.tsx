import { motion } from 'motion/react';

export function VintageCar() {
  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="turquoiseBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5FFBF1" />
          <stop offset="50%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="#20C5B5" />
        </linearGradient>
        <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        <linearGradient id="goldenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.1" />
        </linearGradient>
        <filter id="carShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
          <feOffset dx="0" dy="15" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Route 66 Road Background */}
      <g opacity="0.3">
        <path 
          d="M 0 280 Q 100 260 200 270 Q 300 280 400 260 L 500 250" 
          stroke="#8B7355" 
          strokeWidth="60" 
          fill="none"
        />
        {/* Road dashes */}
        <motion.path 
          d="M 20 280 L 60 275 M 100 270 L 140 268 M 180 272 L 220 271 M 260 274 L 300 276 M 340 268 L 380 262 M 420 258 L 460 254" 
          stroke="#FFD700" 
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </g>

      {/* Desert landscape silhouette */}
      <g opacity="0.2">
        {/* Mountains */}
        <path d="M 0 250 L 80 180 L 150 230 L 200 200 L 280 240 L 350 210 L 420 235 L 500 200 L 500 280 L 0 280 Z" fill="#D4A574" />
        {/* Cacti */}
        <ellipse cx="100" cy="230" rx="4" ry="25" fill="#5A7247" />
        <ellipse cx="95" cy="220" rx="3" ry="10" fill="#5A7247" transform="rotate(-30 95 220)" />
        <ellipse cx="105" cy="225" rx="3" ry="10" fill="#5A7247" transform="rotate(30 105 225)" />
      </g>

      {/* Golf ball in flight with motion blur */}
      <g opacity="0.6">
        <motion.circle 
          cx="80" 
          cy="140" 
          r="6" 
          fill="#FFFFFF"
          initial={{ x: -50, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.ellipse 
          cx="70" 
          cy="142" 
          rx="15" 
          ry="3" 
          fill="#FFFFFF" 
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </g>

      {/* Main Car Body - with shadow filter */}
      <g filter="url(#carShadow)" transform="rotate(-8 250 180)">
        
        {/* Car Body Structure */}
        <g>
          {/* Main chassis */}
          <path
            d="M 150 190 L 180 150 L 240 140 L 310 140 L 370 155 L 410 175 L 420 195 L 420 215 L 150 215 Z"
            fill="url(#turquoiseBody)"
            stroke="#20B2AA"
            strokeWidth="3"
          />
          
          {/* Roof */}
          <path 
            d="M 200 150 L 230 135 L 310 135 L 335 150 Z" 
            fill="#FFFFFF" 
            opacity="0.95"
            stroke="#E0E0E0"
            strokeWidth="2"
          />
          
          {/* Chrome trim strips */}
          <path d="M 150 200 L 420 200" stroke="url(#chrome)" strokeWidth="6" />
          <path d="M 150 185 L 420 185" stroke="url(#chrome)" strokeWidth="3" opacity="0.7" />
          
          {/* Windshield (friendly, Pixar-style) */}
          <path 
            d="M 210 150 L 235 138 L 295 138 L 315 150 L 295 158 L 230 158 Z" 
            fill="#87CEEB" 
            opacity="0.5"
            stroke="#5A9FD4"
            strokeWidth="2"
          />
          
          {/* Side window */}
          <path 
            d="M 320 152 L 345 145 L 365 158 Z" 
            fill="#87CEEB" 
            opacity="0.5"
            stroke="#5A9FD4"
            strokeWidth="2"
          />
          
          {/* Iconic 1950s tail fin */}
          <path 
            d="M 410 170 L 425 155 L 428 180 L 420 185 Z" 
            fill="url(#turquoiseBody)" 
            stroke="#20B2AA"
            strokeWidth="2"
          />
          <circle cx="424" cy="167" r="4" fill="#DC143C" opacity="0.8" />
          
          {/* Headlights - friendly eyes (Pixar style) */}
          <g>
            <ellipse cx="405" cy="183" rx="8" ry="10" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1.5" />
            <ellipse cx="405" cy="185" rx="5" ry="6" fill="#1a1a1a" />
            <ellipse cx="406" cy="183" rx="2" ry="2" fill="#FFFFFF" />
          </g>
          
          {/* Friendly grille smile */}
          <path 
            d="M 395 195 Q 405 200 415 195" 
            stroke="#1a1a1a" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Chrome bumper details */}
          <rect x="415" y="192" width="8" height="4" fill="url(#chrome)" rx="1" />
          <rect x="152" y="192" width="8" height="4" fill="url(#chrome)" rx="1" />
        </g>

        {/* Wheels with white walls */}
        <g>
          {/* Front wheel */}
          <circle cx="220" cy="218" r="26" fill="#1a1a1a" />
          <circle cx="220" cy="218" r="22" fill="#1a1a1a" />
          <circle cx="220" cy="218" r="18" fill="#FFFFFF" />
          <circle cx="220" cy="218" r="12" fill="url(#chrome)" />
          <circle cx="220" cy="218" r="8" fill="#2a2a2a" />
          {/* Hubcap details */}
          <circle cx="220" cy="218" r="6" fill="url(#chrome)" />
          <line x1="220" y1="212" x2="220" y2="224" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="214" y1="218" x2="226" y2="218" stroke="#E0E0E0" strokeWidth="1" />
        </g>
        
        <g>
          {/* Back wheel */}
          <circle cx="380" cy="218" r="26" fill="#1a1a1a" />
          <circle cx="380" cy="218" r="22" fill="#1a1a1a" />
          <circle cx="380" cy="218" r="18" fill="#FFFFFF" />
          <circle cx="380" cy="218" r="12" fill="url(#chrome)" />
          <circle cx="380" cy="218" r="8" fill="#2a2a2a" />
          {/* Hubcap details */}
          <circle cx="380" cy="218" r="6" fill="url(#chrome)" />
          <line x1="380" y1="212" x2="380" y2="224" stroke="#E0E0E0" strokeWidth="1" />
          <line x1="374" y1="218" x2="386" y2="218" stroke="#E0E0E0" strokeWidth="1" />
        </g>

        {/* Golf bag on roof rack */}
        <g transform="translate(280, 110)">
          {/* Roof rack */}
          <rect x="0" y="0" width="40" height="3" fill="#4a4a4a" rx="1" />
          <rect x="5" y="-2" width="2" height="5" fill="#4a4a4a" />
          <rect x="33" y="-2" width="2" height="5" fill="#4a4a4a" />
          
          {/* Golf bag */}
          <ellipse cx="20" cy="-5" rx="10" ry="3" fill="#2d5016" />
          <rect x="10" y="-25" width="20" height="20" fill="#2d5016" rx="2" />
          <rect x="11" y="-24" width="18" height="3" fill="#4a7c2f" />
          
          {/* Golf clubs sticking out */}
          <line x1="14" y1="-35" x2="14" y2="-25" stroke="#C0C0C0" strokeWidth="1.5" />
          <circle cx="14" cy="-36" r="2" fill="#1a1a1a" />
          
          <line x1="18" y1="-38" x2="18" y2="-25" stroke="#C0C0C0" strokeWidth="1.5" />
          <circle cx="18" cy="-39" r="2" fill="#1a1a1a" />
          
          <line x1="22" y1="-36" x2="22" y2="-25" stroke="#C0C0C0" strokeWidth="1.5" />
          <circle cx="22" cy="-37" r="2" fill="#1a1a1a" />
          
          <line x1="26" y1="-33" x2="26" y2="-25" stroke="#C0C0C0" strokeWidth="1.5" />
          <circle cx="26" cy="-34" r="2" fill="#1a1a1a" />
        </g>

        {/* American flag on antenna */}
        <g transform="translate(420, 140)">
          <line x1="0" y1="0" x2="0" y2="-25" stroke="#808080" strokeWidth="1.5" />
          <motion.g
            animate={{ 
              x: [0, 2, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect x="0" y="-25" width="18" height="12" fill="#DC143C" />
            <rect x="0" y="-25" width="7" height="5" fill="#1e3a8a" />
            <line x1="1" y1="-23" x2="6" y2="-23" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="1" y1="-21" x2="6" y2="-21" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="-19" x2="18" y2="-19" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="-17" x2="18" y2="-17" stroke="#FFFFFF" strokeWidth="0.5" />
            <line x1="0" y1="-15" x2="18" y2="-15" stroke="#FFFFFF" strokeWidth="0.5" />
          </motion.g>
        </g>

        {/* Golden hour rim lighting */}
        <path 
          d="M 180 150 L 240 140 L 310 140 L 370 155" 
          stroke="url(#goldenGlow)" 
          strokeWidth="3" 
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* Route 66 Shield Badge */}
      <g transform="translate(430, 260)">
        <path
          d="M 25 5 L 45 15 L 45 35 L 25 50 L 5 35 L 5 15 Z"
          fill="#FFFFFF"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
        <text
          x="25"
          y="35"
          textAnchor="middle"
          fill="#1a1a1a"
          style={{ fontSize: '18px', fontWeight: '700' }}
        >
          66
        </text>
        <text
          x="25"
          y="17"
          textAnchor="middle"
          fill="#1a1a1a"
          style={{ fontSize: '7px', fontWeight: '600' }}
        >
          ROUTE
        </text>
      </g>
    </svg>
  );
}

import { motion } from 'motion/react';

export function LightningMcQueenCar() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="redCarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc143c" />
          <stop offset="50%" stopColor="#ff6b35" />
          <stop offset="100%" stopColor="#c41e3a" />
        </linearGradient>
        <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
      </defs>
      
      {/* Golf bag on roof */}
      <motion.g
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: '140px 35px' }}
      >
        <rect x="135" y="20" width="12" height="30" rx="2" fill="#2d5016" />
        <line x1="138" y1="15" x2="138" y2="22" stroke="#8B4513" strokeWidth="1.5" />
        <line x1="142" y1="18" x2="142" y2="22" stroke="#8B4513" strokeWidth="1.5" />
        <line x1="144" y1="16" x2="144" y2="22" stroke="#8B4513" strokeWidth="1.5" />
      </motion.g>
      
      {/* Car body */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main body */}
        <path
          d="M30 70 L50 50 L80 45 L120 45 L150 50 L170 70 L170 85 L30 85 Z"
          fill="url(#redCarGradient)"
          stroke="#8b0000"
          strokeWidth="2"
        />
        
        {/* Windshield */}
        <path d="M60 50 L75 47 L95 47 L105 50 L95 55 L70 55 Z" fill="#4dabf7" opacity="0.7" />
        
        {/* Side window */}
        <path d="M110 52 L130 50 L145 55 L130 58 Z" fill="#4dabf7" opacity="0.7" />
        
        {/* Racing stripe */}
        <path d="M50 60 L160 60" stroke="#ffd700" strokeWidth="3" />
        
        {/* Headlight */}
        <circle cx="165" cy="75" r="4" fill="#fff4a3" />
        
        {/* Chrome details */}
        <rect x="85" y="82" width="30" height="3" fill="url(#chromeGradient)" />
        
        {/* Front wheels */}
        <g>
          <circle cx="55" cy="90" r="12" fill="#1a1a1a" stroke="url(#chromeGradient)" strokeWidth="3" />
          <circle cx="55" cy="90" r="6" fill="url(#chromeGradient)" />
        </g>
        
        {/* Back wheels */}
        <g>
          <circle cx="145" cy="90" r="12" fill="#1a1a1a" stroke="url(#chromeGradient)" strokeWidth="3" />
          <circle cx="145" cy="90" r="6" fill="url(#chromeGradient)" />
        </g>
        
        {/* Friendly "eyes" (headlights) */}
        <ellipse cx="150" cy="58" rx="5" ry="7" fill="#ffffff" />
        <ellipse cx="150" cy="60" rx="3" ry="4" fill="#1a1a1a" />
      </motion.g>
      
      {/* Golf balls on ground */}
      <motion.circle
        cx="25" cy="95" r="3" fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <circle cx="15" cy="98" r="3" fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" />
      <circle cx="35" cy="100" r="3" fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" />
      
      {/* Golf flag */}
      <motion.g
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: '180px 95px' }}
      >
        <line x1="180" y1="95" x2="180" y2="65" stroke="#8B4513" strokeWidth="2" />
        <path d="M180 65 L195 70 L180 75 Z" fill="#dc143c" />
        <text x="183" y="73" fill="#ffffff" fontSize="8" fontWeight="700">66</text>
      </motion.g>
    </svg>
  );
}

export function ChevroletBelAir() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="turquoiseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="50%" stopColor="#48D1CC" />
          <stop offset="100%" stopColor="#20B2AA" />
        </linearGradient>
        <radialGradient id="wheelGradient">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#808080" />
        </radialGradient>
      </defs>
      
      {/* Motion blur on wheels */}
      <motion.g opacity="0.3">
        <ellipse cx="50" cy="90" rx="15" ry="3" fill="#1a1a1a" />
        <ellipse cx="150" cy="90" rx="15" ry="3" fill="#1a1a1a" />
      </motion.g>
      
      {/* Car body - 1950s style */}
      <motion.g
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main body */}
        <path
          d="M25 75 L40 55 L70 50 L110 50 L140 55 L165 65 L175 75 L175 88 L25 88 Z"
          fill="url(#turquoiseGradient)"
          stroke="#1a8b8a"
          strokeWidth="2"
        />
        
        {/* Roof */}
        <path d="M55 55 L70 48 L110 48 L125 55 Z" fill="#FFFFFF" opacity="0.9" />
        
        {/* Chrome trim */}
        <path d="M25 82 L175 82" stroke="url(#wheelGradient)" strokeWidth="4" />
        <path d="M25 76 L175 76" stroke="url(#wheelGradient)" strokeWidth="2" />
        
        {/* Windows */}
        <path d="M60 55 L72 50 L95 50 L105 55 L95 58 L70 58 Z" fill="#4dabf7" opacity="0.6" />
        <path d="M110 55 L118 52 L135 58 Z" fill="#4dabf7" opacity="0.6" />
        
        {/* Tail fin (iconic 50s feature) */}
        <path d="M165 65 L175 60 L175 75 Z" fill="url(#turquoiseGradient)" stroke="#1a8b8a" strokeWidth="1.5" />
        
        {/* Headlights */}
        <circle cx="170" cy="73" r="3" fill="#fff4a3" />
        <circle cx="30" cy="73" r="3" fill="#dc143c" />
        
        {/* Front wheels with white walls */}
        <g>
          <circle cx="50" cy="90" r="12" fill="#1a1a1a" />
          <circle cx="50" cy="90" r="10" fill="#1a1a1a" />
          <circle cx="50" cy="90" r="8" fill="#FFFFFF" />
          <circle cx="50" cy="90" r="5" fill="url(#wheelGradient)" />
        </g>
        
        {/* Back wheels with white walls */}
        <g>
          <circle cx="150" cy="90" r="12" fill="#1a1a1a" />
          <circle cx="150" cy="90" r="10" fill="#1a1a1a" />
          <circle cx="150" cy="90" r="8" fill="#FFFFFF" />
          <circle cx="150" cy="90" r="5" fill="url(#wheelGradient)" />
        </g>
        
        {/* Antenna with flag */}
        <line x1="170" y1="55" x2="170" y2="35" stroke="#808080" strokeWidth="1" />
        <motion.path
          d="M170 35 L180 38 L170 41 Z"
          fill="#dc143c"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <rect x="176" y="37" width="2" height="5" fill="#FFFFFF" />
      </motion.g>
      
      {/* Route 66 highway */}
      <motion.g
        animate={{ x: [-200, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <rect x="0" y="100" width="50" height="8" fill="#ffd700" />
        <rect x="75" y="100" width="50" height="8" fill="#ffd700" />
        <rect x="150" y="100" width="50" height="8" fill="#ffd700" />
        <rect x="225" y="100" width="50" height="8" fill="#ffd700" />
      </motion.g>
    </svg>
  );
}

export function SallyPorsche() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="blueCarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4dabf7" />
          <stop offset="50%" stopColor="#228be6" />
          <stop offset="100%" stopColor="#1971c2" />
        </linearGradient>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4e8c1" />
          <stop offset="100%" stopColor="#e6d5a8" />
        </linearGradient>
      </defs>
      
      {/* Map background with Route 66 path */}
      <rect x="10" y="10" width="180" height="100" fill="url(#mapGradient)" rx="4" />
      
      {/* State outlines (simplified) */}
      <motion.path
        d="M20 50 L40 45 L60 50 L75 48 L95 55 L115 52 L135 58 L155 55 L175 60 L180 70"
        stroke="#ff6b35"
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
        animate={{ strokeDashoffset: [0, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Golf course markers */}
      <circle cx="35" cy="48" r="2" fill="#2d5016" />
      <circle cx="70" cy="50" r="2" fill="#2d5016" />
      <circle cx="105" cy="54" r="2" fill="#2d5016" />
      <circle cx="140" cy="56" r="2" fill="#2d5016" />
      <circle cx="168" cy="58" r="2" fill="#2d5016" />
      
      {/* State pins */}
      <g>
        <circle cx="30" cy="55" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="65" cy="58" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="62" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="135" cy="65" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="85" cy="75" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="120" cy="78" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="155" cy="72" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
        <circle cx="175" cy="75" r="3" fill="#dc143c" stroke="#fff" strokeWidth="1" />
      </g>
      
      {/* Porsche car (elegant, sporty) */}
      <motion.g
        animate={{ 
          y: [0, -1, 0],
          rotate: [0, 0.5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: '100px 85px' }}
      >
        {/* Sleek body */}
        <path
          d="M60 78 L75 68 L110 65 L135 68 L148 75 L148 88 L60 88 Z"
          fill="url(#blueCarGradient)"
          stroke="#1864ab"
          strokeWidth="2"
        />
        
        {/* Windshield (sloped) */}
        <path d="M78 70 L90 67 L108 67 L115 70 L105 73 L85 73 Z" fill="#74c0fc" opacity="0.6" />
        
        {/* Side window */}
        <path d="M118 70 L130 68 L138 73 Z" fill="#74c0fc" opacity="0.6" />
        
        {/* Sporty stripe */}
        <path d="M65 80 L145 80" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
        
        {/* Headlights (friendly eyes) */}
        <ellipse cx="135" cy="74" rx="4" ry="5" fill="#FFFFFF" />
        <ellipse cx="135" cy="75" rx="2" ry="3" fill="#1a1a1a" />
        <motion.path
          d="M133 76 Q135 77 137 76"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          fill="none"
          animate={{ d: ["M133 76 Q135 77 137 76", "M133 77 Q135 78 137 77", "M133 76 Q135 77 137 76"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Wheels */}
        <g>
          <circle cx="80" cy="90" r="10" fill="#1a1a1a" stroke="#C0C0C0" strokeWidth="2" />
          <circle cx="80" cy="90" r="5" fill="#C0C0C0" />
        </g>
        <g>
          <circle cx="130" cy="90" r="10" fill="#1a1a1a" stroke="#C0C0C0" strokeWidth="2" />
          <circle cx="130" cy="90" r="5" fill="#C0C0C0" />
        </g>
      </motion.g>
    </svg>
  );
}

export function DocHudsonCar() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="classicCarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a5568" />
          <stop offset="50%" stopColor="#2d3748" />
          <stop offset="100%" stopColor="#1a202c" />
        </linearGradient>
        <radialGradient id="fireworkGradient1">
          <stop offset="0%" stopColor="#dc143c" stopOpacity="1" />
          <stop offset="100%" stopColor="#dc143c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fireworkGradient2">
          <stop offset="0%" stopColor="#4dabf7" stopOpacity="1" />
          <stop offset="100%" stopColor="#4dabf7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fireworkGradient3">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Night sky gradient */}
      <rect x="0" y="0" width="200" height="80" fill="url(#nightGradient)" />
      <defs>
        <linearGradient id="nightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a202c" />
          <stop offset="100%" stopColor="#2d3748" />
        </linearGradient>
      </defs>
      
      {/* Stars */}
      <circle cx="20" cy="15" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="50" cy="10" r="0.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="80" cy="20" r="1" fill="#FFFFFF" opacity="0.7" />
      <circle cx="120" cy="12" r="0.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="160" cy="18" r="1" fill="#FFFFFF" opacity="0.6" />
      <circle cx="180" cy="8" r="0.5" fill="#FFFFFF" opacity="0.9" />
      
      {/* Fireworks */}
      <motion.g
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      >
        <circle cx="60" cy="25" r="15" fill="url(#fireworkGradient1)" />
        <line x1="60" y1="10" x2="60" y2="40" stroke="#dc143c" strokeWidth="2" />
        <line x1="45" y1="25" x2="75" y2="25" stroke="#dc143c" strokeWidth="2" />
        <line x1="48" y1="13" x2="72" y2="37" stroke="#dc143c" strokeWidth="1.5" />
        <line x1="72" y1="13" x2="48" y2="37" stroke="#dc143c" strokeWidth="1.5" />
      </motion.g>
      
      <motion.g
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, delay: 0.7 }}
      >
        <circle cx="140" cy="30" r="12" fill="url(#fireworkGradient2)" />
        <line x1="140" y1="18" x2="140" y2="42" stroke="#4dabf7" strokeWidth="2" />
        <line x1="128" y1="30" x2="152" y2="30" stroke="#4dabf7" strokeWidth="2" />
        <line x1="131" y1="21" x2="149" y2="39" stroke="#4dabf7" strokeWidth="1.5" />
        <line x1="149" y1="21" x2="131" y2="39" stroke="#4dabf7" strokeWidth="1.5" />
      </motion.g>
      
      <motion.g
        animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, delay: 1.4 }}
      >
        <circle cx="100" cy="20" r="10" fill="url(#fireworkGradient3)" />
        <line x1="100" y1="10" x2="100" y2="30" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="90" y1="20" x2="110" y2="20" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="92" y1="12" x2="108" y2="28" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="108" y1="12" x2="92" y2="28" stroke="#FFFFFF" strokeWidth="1" />
      </motion.g>
      
      {/* Clubhouse silhouette */}
      <rect x="120" y="55" width="70" height="35" fill="#1a1a1a" />
      <path d="M115 55 L155 35 L195 55 Z" fill="#2d2d2d" />
      <rect x="145" y="65" width="12" height="15" fill="#ffd700" opacity="0.8" />
      <rect x="165" y="65" width="12" height="15" fill="#ffd700" opacity="0.8" />
      <rect x="155" y="75" width="8" height="15" fill="#8B4513" />
      
      {/* American flag */}
      <motion.g
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: '125px 50px' }}
      >
        <line x1="125" y1="50" x2="125" y2="35" stroke="#808080" strokeWidth="1.5" />
        <rect x="125" y="35" width="15" height="10" fill="#dc143c" />
        <rect x="125" y="35" width="6" height="4" fill="#1e3a8a" />
        <line x1="125" y1="37" x2="130" y2="37" stroke="#FFFFFF" strokeWidth="0.5" />
        <line x1="125" y1="39" x2="130" y2="39" stroke="#FFFFFF" strokeWidth="0.5" />
        <line x1="125" y1="43" x2="140" y2="43" stroke="#FFFFFF" strokeWidth="0.5" />
      </motion.g>
      
      {/* Golf trophy on porch */}
      <g>
        <path d="M180 68 L182 65 L185 65 L187 68 Z" fill="#ffd700" />
        <rect x="182" y="68" width="5" height="4" fill="#ffd700" />
        <circle cx="184.5" cy="64" r="2" fill="#ffd700" />
      </g>
      
      {/* Classic car silhouette (Doc Hudson style) */}
      <motion.g
        animate={{ y: [0, -0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Dignified, classic car shape */}
        <path
          d="M20 75 L35 65 L65 62 L95 62 L115 68 L120 75 L120 88 L20 88 Z"
          fill="url(#classicCarGradient)"
          stroke="#000000"
          strokeWidth="1.5"
        />
        
        {/* Roof */}
        <path d="M45 65 L60 60 L85 60 L95 65 Z" fill="#4a5568" />
        
        {/* Windows */}
        <path d="M48 65 L62 61 L78 61 L88 65 Z" fill="#2d3748" opacity="0.8" />
        
        {/* Chrome bumper */}
        <rect x="115" y="82" width="5" height="3" fill="#C0C0C0" />
        
        {/* Wheels */}
        <g>
          <circle cx="40" cy="90" r="10" fill="#1a1a1a" stroke="#4a5568" strokeWidth="2" />
          <circle cx="40" cy="90" r="5" fill="#2d2d2d" />
        </g>
        <g>
          <circle cx="100" cy="90" r="10" fill="#1a1a1a" stroke="#4a5568" strokeWidth="2" />
          <circle cx="100" cy="90" r="5" fill="#2d2d2d" />
        </g>
        
        {/* Wise "eyes" expression */}
        <ellipse cx="108" cy="70" rx="4" ry="3" fill="#ffd700" opacity="0.6" />
      </motion.g>
    </svg>
  );
}

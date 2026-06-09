// Pasta sprite definitions - 10 plates of pasta to choose from

export const pastaSprites = [
  {
    id: 'cacio-e-pepe',
    name: 'Cacio e Pepe',
    emoji: '🧀',
    color: '#F5DEB3',
    accentColor: '#2C2C2C',
    description: 'Simple, elegant, and covered in pepper specks!',
    personality: 'The sophisticated one who drops knowledge bombs',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#F5DEB3" stroke="#D2B48C" stroke-width="2"/>
      <path d="M25 50 Q35 40 45 48 Q55 38 65 48 Q75 42 80 50" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <circle cx="35" cy="45" r="2" fill="#2C2C2C"/>
      <circle cx="55" cy="42" r="1.5" fill="#2C2C2C"/>
      <circle cx="45" cy="55" r="1" fill="#2C2C2C"/>
      <circle cx="65" cy="50" r="1.5" fill="#2C2C2C"/>
      <circle cx="30" cy="52" r="1" fill="#2C2C2C"/>`,
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    emoji: '🥓',
    color: '#FFFACD',
    accentColor: '#8B4513',
    description: 'Creamy, dreamy, with crispy bits of wisdom!',
    personality: 'The warm comforting friend who always knows what to say',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#FFFACD" stroke="#DAA520" stroke-width="2"/>
      <path d="M30 48 Q40 42 50 50 Q60 42 70 48" fill="none" stroke="#FFFACD" stroke-width="4"/>
      <rect x="32" y="44" width="8" height="4" rx="1" fill="#8B4513" transform="rotate(-15 36 46)"/>
      <rect x="55" y="46" width="7" height="3" rx="1" fill="#8B4513" transform="rotate(10 58 47)"/>
      <rect x="42" y="52" width="6" height="3" rx="1" fill="#8B4513"/>
      <circle cx="50" cy="45" r="6" fill="#FFD700" opacity="0.6"/>`,
  },
  {
    id: 'spaghetti-meatballs',
    name: 'Spaghetti & Meatballs',
    emoji: '🍝',
    color: '#FF6347',
    accentColor: '#8B0000',
    description: 'The classic! Three big meatballs and endless noodles!',
    personality: 'The energetic cheerleader who never runs out of enthusiasm',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#FF6347" stroke="#8B0000" stroke-width="2"/>
      <path d="M25 50 Q35 35 50 50 Q65 35 75 50" fill="none" stroke="#F5DEB3" stroke-width="2"/>
      <path d="M30 55 Q45 40 60 55 Q70 45 75 55" fill="none" stroke="#F5DEB3" stroke-width="2"/>
      <circle cx="35" cy="48" r="7" fill="#6B2E2E"/>
      <circle cx="55" cy="46" r="7" fill="#6B2E2E"/>
      <circle cx="45" cy="58" r="7" fill="#6B2E2E"/>`,
  },
  {
    id: 'fettuccine-alfredo',
    name: 'Fettuccine Alfredo',
    emoji: '🫕',
    color: '#FFFFF0',
    accentColor: '#FFD700',
    description: 'Creamy white ribbons of pure comfort!',
    personality: 'The calm, zen friend who speaks in gentle wisdom',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#FFFFF0" stroke="#DAA520" stroke-width="2"/>
      <path d="M28 45 Q38 55 48 45 Q58 55 68 45" fill="none" stroke="#FFFFF0" stroke-width="4"/>
      <path d="M25 52 Q40 62 55 52 Q65 62 75 52" fill="none" stroke="#FFFFF0" stroke-width="4"/>
      <path d="M30 58 Q45 68 60 58 Q70 65 72 58" fill="none" stroke="#FFFFF0" stroke-width="3"/>
      <circle cx="50" cy="50" r="3" fill="#FFD700" opacity="0.5"/>`,
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    emoji: '🌶️',
    color: '#DC143C',
    accentColor: '#FF4500',
    description: 'Angry pasta! Spicy attitude with a heart of gold!',
    personality: 'The sassy one who tells it like it is (perfect for aggressive reminders)',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#DC143C" stroke="#8B0000" stroke-width="2"/>
      <rect x="30" y="45" width="12" height="5" rx="2" fill="#F5DEB3" transform="rotate(-20 36 47)"/>
      <rect x="45" y="42" width="12" height="5" rx="2" fill="#F5DEB3" transform="rotate(10 51 44)"/>
      <rect x="58" y="48" width="12" height="5" rx="2" fill="#F5DEB3" transform="rotate(-5 64 50)"/>
      <rect x="35" y="55" width="12" height="5" rx="2" fill="#F5DEB3" transform="rotate(15 41 57)"/>
      <path d="M60 38 Q63 32 62 36" fill="#FF4500" stroke="#FF4500" stroke-width="1"/>
      <path d="M65 40 Q68 34 67 38" fill="#FF4500" stroke="#FF4500" stroke-width="1"/>`,
  },
  {
    id: 'ravioli',
    name: 'Ravioli',
    emoji: '🥟',
    color: '#F0E68C',
    accentColor: '#228B22',
    description: 'Little pillows of joy! Each one stuffed with encouragement!',
    personality: 'The cute bubbly friend who giggles at everything',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#FFF5E1" stroke="#DAA520" stroke-width="2"/>
      <rect x="28" y="42" width="16" height="14" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <rect x="48" y="40" width="16" height="14" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <rect x="38" y="55" width="16" height="14" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <circle cx="36" cy="48" r="2" fill="#228B22"/>
      <circle cx="56" cy="46" r="2" fill="#228B22"/>
      <circle cx="46" cy="61" r="2" fill="#228B22"/>`,
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    emoji: '🫓',
    color: '#CD853F',
    accentColor: '#228B22',
    description: 'Layers upon layers of delicious knowledge!',
    personality: 'The wise elder who speaks in layers of meaning',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <rect x="25" y="40" width="50" height="30" rx="3" fill="#CD853F" stroke="#8B4513" stroke-width="2"/>
      <rect x="25" y="40" width="50" height="6" fill="#F5DEB3"/>
      <rect x="25" y="46" width="50" height="5" fill="#FF6347"/>
      <rect x="25" y="51" width="50" height="5" fill="#FFFACD"/>
      <rect x="25" y="56" width="50" height="5" fill="#F5DEB3"/>
      <rect x="25" y="61" width="50" height="5" fill="#FF6347"/>
      <rect x="25" y="66" width="50" height="4" fill="#FFD700"/>`,
  },
  {
    id: 'tortellini',
    name: 'Tortellini in Brodo',
    emoji: '🍜',
    color: '#87CEEB',
    accentColor: '#F0E68C',
    description: 'Tiny pasta swimming in warm broth! Cozy vibes only!',
    personality: 'The cozy introvert who gives the best advice quietly',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#87CEEB" stroke="#4682B4" stroke-width="2" opacity="0.6"/>
      <path d="M30 48 Q33 42 36 48 Q33 50 30 48Z" fill="#F0E68C"/>
      <path d="M42 44 Q45 38 48 44 Q45 46 42 44Z" fill="#F0E68C"/>
      <path d="M55 50 Q58 44 61 50 Q58 52 55 50Z" fill="#F0E68C"/>
      <path d="M35 58 Q38 52 41 58 Q38 60 35 58Z" fill="#F0E68C"/>
      <path d="M50 60 Q53 54 56 60 Q53 62 50 60Z" fill="#F0E68C"/>
      <path d="M65 48 Q68 42 71 48 Q68 50 65 48Z" fill="#F0E68C"/>`,
  },
  {
    id: 'pesto-fusilli',
    name: 'Pesto Fusilli',
    emoji: '🌿',
    color: '#228B22',
    accentColor: '#006400',
    description: 'Twirly green goodness! Fresh and spirited!',
    personality: 'The health-conscious friend who reminds you to drink water',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#228B22" stroke="#006400" stroke-width="2"/>
      <path d="M30 48 Q32 42 34 48 Q36 42 38 48" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M42 45 Q44 39 46 45 Q48 39 50 45" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M54 50 Q56 44 58 50 Q60 44 62 50" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M35 56 Q37 50 39 56 Q41 50 43 56" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M50 58 Q52 52 54 58 Q56 52 58 58" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <circle cx="45" cy="48" r="2" fill="#90EE90"/>`,
  },
  {
    id: 'mac-and-cheese',
    name: 'Mac & Cheese',
    emoji: '🧈',
    color: '#FFA500',
    accentColor: '#FF8C00',
    description: 'The ultimate comfort! Gooey, cheesy, and always there for you!',
    personality: 'The ride-or-die bestie who supports you no matter what',
    svgBody: `<circle cx="50" cy="55" r="35" fill="#FFF8DC"/>
      <ellipse cx="50" cy="55" rx="35" ry="28" fill="#FFA500" stroke="#FF8C00" stroke-width="2"/>
      <path d="M30 48 C32 45 34 48 36 45" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M40 46 C42 43 44 46 46 43" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M50 50 C52 47 54 50 56 47" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M60 48 C62 45 64 48 66 45" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M35 56 C37 53 39 56 41 53" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <path d="M48 58 C50 55 52 58 54 55" fill="none" stroke="#F5DEB3" stroke-width="3"/>
      <ellipse cx="50" cy="50" rx="20" ry="8" fill="#FFD700" opacity="0.4"/>`,
  },
];

export function getSpriteById(id) {
  return pastaSprites.find(s => s.id === id) || pastaSprites[0];
}

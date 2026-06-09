// Pasta sprite definitions - 10 plates of pasta to choose from
// Detailed cartoon-style designs with individual noodles and realistic plating

export const pastaSprites = [
  {
    id: 'cacio-e-pepe',
    name: 'Cacio e Pepe',
    emoji: '🧀',
    color: '#F5DEB3',
    accentColor: '#2C2C2C',
    description: 'Simple, elegant, and covered in pepper specks!',
    personality: 'The sophisticated one who drops knowledge bombs',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Pasta nest - individual spaghetti strands -->
      <path d="M28 58 Q32 48 38 55 Q42 45 48 53 Q52 43 56 52 Q60 44 64 54 Q68 46 72 56" fill="none" stroke="#F5DEB3" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M26 62 Q34 50 40 58 Q46 48 52 56 Q56 46 62 55 Q66 47 74 60" fill="none" stroke="#EED9A0" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M30 65 Q36 54 42 61 Q48 52 54 59 Q58 50 64 58 Q70 52 72 62" fill="none" stroke="#F5DEB3" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 56 Q38 46 44 54 Q50 44 56 52 Q62 44 66 53" fill="none" stroke="#E8D08C" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M25 60 Q30 52 36 58 Q42 50 48 57 Q54 48 60 56 Q66 48 75 58" fill="none" stroke="#F0DC9A" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Twirled noodles on top -->
      <path d="M40 50 Q42 44 45 48 Q48 42 50 47 Q52 41 55 46 Q58 42 60 48" fill="none" stroke="#F5DEB3" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M42 52 Q46 46 50 50 Q54 44 58 50" fill="none" stroke="#EED9A0" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Cheese shavings -->
      <path d="M36 48 Q37 46 39 47" fill="#FFFACD" stroke="#F5DEB3" stroke-width="1"/>
      <path d="M52 44 Q54 42 55 44" fill="#FFFACD" stroke="#F5DEB3" stroke-width="1"/>
      <path d="M60 50 Q62 48 63 50" fill="#FFFACD" stroke="#F5DEB3" stroke-width="1"/>
      <path d="M44 46 Q45 44 47 45" fill="#FFFACD" stroke="#F5DEB3" stroke-width="0.8"/>
      <!-- Black pepper specks -->
      <circle cx="38" cy="52" r="0.8" fill="#2C2C2C"/>
      <circle cx="45" cy="48" r="0.6" fill="#2C2C2C"/>
      <circle cx="52" cy="50" r="0.7" fill="#2C2C2C"/>
      <circle cx="58" cy="47" r="0.5" fill="#2C2C2C"/>
      <circle cx="48" cy="54" r="0.6" fill="#2C2C2C"/>
      <circle cx="62" cy="52" r="0.7" fill="#2C2C2C"/>
      <circle cx="35" cy="56" r="0.5" fill="#2C2C2C"/>
      <circle cx="55" cy="55" r="0.6" fill="#2C2C2C"/>
      <circle cx="42" cy="50" r="0.4" fill="#2C2C2C"/>
      <circle cx="65" cy="55" r="0.5" fill="#2C2C2C"/>
      <!-- Steam wisps -->
      <path d="M40 40 Q42 36 40 32" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
      <path d="M50 38 Q52 34 50 30" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
      <path d="M60 40 Q62 36 60 32" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>`,
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    emoji: '🥓',
    color: '#FFFACD',
    accentColor: '#8B4513',
    description: 'Creamy, dreamy, with crispy bits of wisdom!',
    personality: 'The warm comforting friend who always knows what to say',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Creamy sauce base -->
      <ellipse cx="50" cy="58" rx="26" ry="10" fill="#FFF8DC" opacity="0.6"/>
      <!-- Spaghetti strands in cream -->
      <path d="M28 60 Q35 50 42 58 Q48 48 55 56 Q60 47 68 57 Q72 50 74 58" fill="none" stroke="#F5DEB3" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M26 63 Q32 54 40 61 Q46 52 54 59 Q60 50 66 58 Q72 52 75 60" fill="none" stroke="#EED9A0" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M30 57 Q36 48 44 55 Q50 46 56 53 Q62 46 68 54" fill="none" stroke="#F5DEB3" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 65 Q38 56 46 62 Q52 54 58 60 Q64 54 70 62" fill="none" stroke="#EED9A0" stroke-width="2.3" stroke-linecap="round"/>
      <path d="M34 55 Q40 46 46 53 Q52 44 58 52 Q64 44 68 52" fill="none" stroke="#F0DC9A" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Egg yolk center -->
      <circle cx="50" cy="52" r="6" fill="#FFD700" opacity="0.8"/>
      <circle cx="50" cy="52" r="3.5" fill="#FFA500" opacity="0.9"/>
      <circle cx="49" cy="51" r="1" fill="#FFFF00" opacity="0.6"/>
      <!-- Guanciale/pancetta pieces -->
      <rect x="34" y="50" width="7" height="4" rx="1" fill="#8B4513" transform="rotate(-15 37 52)"/>
      <rect x="56" y="48" width="6" height="3.5" rx="1" fill="#A0522D" transform="rotate(10 59 50)"/>
      <rect x="42" y="56" width="5" height="3" rx="1" fill="#8B4513" transform="rotate(-5 44 57)"/>
      <rect x="62" y="55" width="6" height="3" rx="1" fill="#A0522D" transform="rotate(8 65 56)"/>
      <!-- Crispy edges on guanciale -->
      <path d="M34 50 L35 49 L36 50" fill="none" stroke="#D2691E" stroke-width="0.5"/>
      <path d="M56 48 L57 47 L58 48" fill="none" stroke="#D2691E" stroke-width="0.5"/>
      <!-- Pecorino shavings -->
      <path d="M38 46 Q39 44 41 45" fill="#FFFACD" stroke="#EED9A0" stroke-width="0.8"/>
      <path d="M55 44 Q56 42 58 43" fill="#FFFACD" stroke="#EED9A0" stroke-width="0.8"/>
      <path d="M46 48 Q47 46 49 47" fill="#FFFACD" stroke="#EED9A0" stroke-width="0.8"/>
      <!-- Black pepper -->
      <circle cx="44" cy="52" r="0.6" fill="#2C2C2C"/>
      <circle cx="56" cy="54" r="0.5" fill="#2C2C2C"/>
      <circle cx="50" cy="58" r="0.6" fill="#2C2C2C"/>
      <circle cx="38" cy="55" r="0.5" fill="#2C2C2C"/>
      <!-- Steam -->
      <path d="M42 38 Q44 34 42 30" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
      <path d="M50 36 Q52 32 50 28" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
      <path d="M58 38 Q60 34 58 30" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>`,
  },
  {
    id: 'spaghetti-meatballs',
    name: 'Spaghetti & Meatballs',
    emoji: '🍝',
    color: '#FF6347',
    accentColor: '#8B0000',
    description: 'The classic! Three big meatballs and endless noodles!',
    personality: 'The energetic cheerleader who never runs out of enthusiasm',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Marinara sauce pool -->
      <ellipse cx="50" cy="60" rx="28" ry="11" fill="#CC2200" opacity="0.7"/>
      <ellipse cx="50" cy="58" rx="24" ry="9" fill="#FF4422" opacity="0.5"/>
      <!-- Spaghetti strands poking through sauce -->
      <path d="M26 62 Q34 48 42 58 Q48 44 56 55 Q62 44 70 56 Q74 48 76 58" fill="none" stroke="#F5DEB3" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 58 Q36 46 44 55 Q50 42 58 52 Q64 42 72 54" fill="none" stroke="#EED9A0" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M30 65 Q38 54 46 62 Q52 52 60 60 Q66 52 72 60" fill="none" stroke="#F5DEB3" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 55 Q38 44 46 53 Q52 42 58 50 Q64 42 70 52" fill="none" stroke="#EED9A0" stroke-width="2.3" stroke-linecap="round"/>
      <!-- Meatball 1 (left) -->
      <circle cx="36" cy="52" r="8" fill="#5C2E0E"/>
      <circle cx="36" cy="52" r="8" fill="url(#meatball-grad)" />
      <path d="M30 50 Q33 48 36 50" fill="none" stroke="#3D1F0A" stroke-width="0.5" opacity="0.5"/>
      <circle cx="34" cy="50" r="1" fill="#8B5A2B" opacity="0.6"/>
      <!-- Meatball 2 (right) -->
      <circle cx="62" cy="50" r="7.5" fill="#5C2E0E"/>
      <circle cx="62" cy="50" r="7.5" fill="url(#meatball-grad)" />
      <circle cx="60" cy="48" r="1" fill="#8B5A2B" opacity="0.6"/>
      <!-- Meatball 3 (center top) -->
      <circle cx="50" cy="46" r="7" fill="#5C2E0E"/>
      <circle cx="50" cy="46" r="7" fill="url(#meatball-grad)" />
      <circle cx="48" cy="44" r="1" fill="#8B5A2B" opacity="0.6"/>
      <!-- Sauce drips on meatballs -->
      <path d="M33 48 Q35 46 37 48" fill="#CC2200" stroke="none" opacity="0.7"/>
      <path d="M59 46 Q61 44 63 46" fill="#CC2200" stroke="none" opacity="0.7"/>
      <path d="M47 42 Q49 40 51 42" fill="#CC2200" stroke="none" opacity="0.7"/>
      <!-- Basil leaf -->
      <path d="M42 42 Q44 38 46 40 Q44 42 42 42Z" fill="#228B22"/>
      <path d="M43 41 L45 39" fill="none" stroke="#006400" stroke-width="0.4"/>
      <!-- Parmesan sprinkle -->
      <circle cx="55" cy="56" r="0.8" fill="#FFFACD" opacity="0.7"/>
      <circle cx="40" cy="58" r="0.6" fill="#FFFACD" opacity="0.7"/>
      <circle cx="60" cy="58" r="0.7" fill="#FFFACD" opacity="0.7"/>
      <!-- Steam -->
      <path d="M38 36 Q40 32 38 28" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
      <path d="M50 34 Q52 30 50 26" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
      <path d="M62 36 Q64 32 62 28" fill="none" stroke="white" stroke-width="1" opacity="0.4"/>
      <!-- Gradient def -->
      <defs>
        <radialGradient id="meatball-grad">
          <stop offset="0%" stop-color="#8B5A2B" stop-opacity="0.3"/>
          <stop offset="70%" stop-color="#5C2E0E" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#3D1F0A" stop-opacity="0.4"/>
        </radialGradient>
      </defs>`,
  },
  {
    id: 'fettuccine-alfredo',
    name: 'Fettuccine Alfredo',
    emoji: '🫕',
    color: '#FFFFF0',
    accentColor: '#FFD700',
    description: 'Creamy white ribbons of pure comfort!',
    personality: 'The calm, zen friend who speaks in gentle wisdom',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Creamy alfredo sauce pool -->
      <ellipse cx="50" cy="60" rx="26" ry="10" fill="#FFFFF0" opacity="0.7"/>
      <!-- Wide fettuccine ribbons -->
      <path d="M28 58 Q36 46 44 56 Q50 44 58 54 Q64 44 72 56" fill="none" stroke="#FFFFF0" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
      <path d="M30 62 Q38 50 46 60 Q52 48 60 58 Q66 48 74 58" fill="none" stroke="#FFF8DC" stroke-width="4.5" stroke-linecap="round" opacity="0.85"/>
      <path d="M26 56 Q34 44 42 54 Q48 42 56 52 Q62 42 70 52" fill="none" stroke="#FFFFF0" stroke-width="3.5" stroke-linecap="round" opacity="0.9"/>
      <path d="M32 64 Q40 54 48 62 Q54 52 62 60 Q68 52 72 60" fill="none" stroke="#FFF8DC" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
      <path d="M34 54 Q40 44 48 52 Q54 42 60 50 Q66 42 70 50" fill="none" stroke="#FFFFF0" stroke-width="3.8" stroke-linecap="round"/>
      <!-- Ribbon edges (subtle shadow to show width) -->
      <path d="M30 62 Q38 50 46 60" fill="none" stroke="#EEE8AA" stroke-width="0.5" opacity="0.6"/>
      <path d="M34 54 Q40 44 48 52" fill="none" stroke="#EEE8AA" stroke-width="0.5" opacity="0.6"/>
      <!-- Sauce glisten -->
      <ellipse cx="42" cy="54" rx="2" ry="1" fill="white" opacity="0.3"/>
      <ellipse cx="56" cy="52" rx="1.5" ry="0.8" fill="white" opacity="0.3"/>
      <ellipse cx="50" cy="58" rx="2" ry="1" fill="white" opacity="0.25"/>
      <!-- Butter pats melting -->
      <rect x="44" y="48" width="5" height="3" rx="1" fill="#FFD700" opacity="0.6"/>
      <rect x="56" y="50" width="4" height="2.5" rx="1" fill="#FFD700" opacity="0.5"/>
      <!-- Parsley flecks -->
      <circle cx="38" cy="56" r="0.8" fill="#228B22" opacity="0.7"/>
      <circle cx="55" cy="54" r="0.6" fill="#228B22" opacity="0.7"/>
      <circle cx="62" cy="58" r="0.7" fill="#228B22" opacity="0.7"/>
      <!-- Steam -->
      <path d="M40 38 Q42 34 40 30" fill="none" stroke="white" stroke-width="1.2" opacity="0.35"/>
      <path d="M50 36 Q52 32 50 28" fill="none" stroke="white" stroke-width="1.2" opacity="0.3"/>
      <path d="M60 38 Q62 34 60 30" fill="none" stroke="white" stroke-width="1.2" opacity="0.35"/>`,
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    emoji: '🌶️',
    color: '#DC143C',
    accentColor: '#FF4500',
    description: 'Angry pasta! Spicy attitude with a heart of gold!',
    personality: 'The sassy one who tells it like it is (perfect for aggressive reminders)',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Arrabbiata sauce -->
      <ellipse cx="50" cy="60" rx="26" ry="10" fill="#DC143C" opacity="0.6"/>
      <ellipse cx="48" cy="58" rx="20" ry="8" fill="#FF2200" opacity="0.3"/>
      <!-- Individual penne tubes -->
      <rect x="30" y="52" width="12" height="5" rx="2.5" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.8" transform="rotate(-20 36 54)"/>
      <rect x="44" y="48" width="11" height="5" rx="2.5" fill="#EED9A0" stroke="#D2B48C" stroke-width="0.8" transform="rotate(15 49 50)"/>
      <rect x="58" y="52" width="12" height="5" rx="2.5" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.8" transform="rotate(-10 64 54)"/>
      <rect x="36" y="58" width="11" height="5" rx="2.5" fill="#EED9A0" stroke="#D2B48C" stroke-width="0.8" transform="rotate(25 41 60)"/>
      <rect x="52" y="56" width="12" height="5" rx="2.5" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.8" transform="rotate(-15 58 58)"/>
      <rect x="40" y="44" width="10" height="4.5" rx="2.2" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.8" transform="rotate(5 45 46)"/>
      <rect x="55" y="46" width="10" height="4.5" rx="2.2" fill="#EED9A0" stroke="#D2B48C" stroke-width="0.8" transform="rotate(-25 60 48)"/>
      <rect x="28" y="60" width="10" height="4.5" rx="2.2" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.8" transform="rotate(10 33 62)"/>
      <rect x="62" y="58" width="10" height="4.5" rx="2.2" fill="#EED9A0" stroke="#D2B48C" stroke-width="0.8" transform="rotate(-8 67 60)"/>
      <!-- Penne ridges (rigate) -->
      <line x1="32" y1="53" x2="32" y2="56" stroke="#D2B48C" stroke-width="0.3" transform="rotate(-20 36 54)"/>
      <line x1="35" y1="53" x2="35" y2="56" stroke="#D2B48C" stroke-width="0.3" transform="rotate(-20 36 54)"/>
      <line x1="38" y1="53" x2="38" y2="56" stroke="#D2B48C" stroke-width="0.3" transform="rotate(-20 36 54)"/>
      <!-- Chili flakes -->
      <path d="M38 50 Q39 48 40 49 L39 51Z" fill="#FF4500"/>
      <path d="M56 52 Q57 50 58 51 L57 53Z" fill="#FF4500"/>
      <path d="M48 56 Q49 54 50 55 L49 57Z" fill="#FF4500"/>
      <path d="M64 54 Q65 52 66 53 L65 55Z" fill="#FF0000" opacity="0.8"/>
      <path d="M32 56 Q33 54 34 55 L33 57Z" fill="#FF4500"/>
      <!-- Whole chili pepper on top -->
      <path d="M44 42 Q46 40 50 41 Q48 43 46 42Z" fill="#CC0000"/>
      <path d="M50 41 Q51 39 50 38" fill="none" stroke="#228B22" stroke-width="0.8"/>
      <!-- Sauce splashes on penne -->
      <circle cx="36" cy="53" r="1.5" fill="#DC143C" opacity="0.5"/>
      <circle cx="60" cy="53" r="1.2" fill="#DC143C" opacity="0.5"/>
      <!-- Steam (angry red-tinted) -->
      <path d="M40 36 Q42 32 40 28" fill="none" stroke="#FFD4D4" stroke-width="1" opacity="0.5"/>
      <path d="M50 34 Q52 30 50 26" fill="none" stroke="#FFD4D4" stroke-width="1" opacity="0.4"/>
      <path d="M60 36 Q62 32 60 28" fill="none" stroke="#FFD4D4" stroke-width="1" opacity="0.5"/>`,
  },
  {
    id: 'ravioli',
    name: 'Ravioli',
    emoji: '🥟',
    color: '#F0E68C',
    accentColor: '#228B22',
    description: 'Little pillows of joy! Each one stuffed with encouragement!',
    personality: 'The cute bubbly friend who giggles at everything',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Light sage butter sauce -->
      <ellipse cx="50" cy="60" rx="24" ry="9" fill="#F5F5DC" opacity="0.4"/>
      <!-- Individual ravioli pillows -->
      <rect x="28" y="50" width="16" height="13" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <rect x="48" y="47" width="16" height="13" rx="4" fill="#EEE8AA" stroke="#DAA520" stroke-width="1"/>
      <rect x="66" y="52" width="14" height="12" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <rect x="35" y="62" width="15" height="12" rx="4" fill="#EEE8AA" stroke="#DAA520" stroke-width="1"/>
      <rect x="54" y="60" width="15" height="12" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <rect x="38" y="42" width="14" height="11" rx="4" fill="#F0E68C" stroke="#DAA520" stroke-width="1"/>
      <!-- Crimped edges on ravioli -->
      <path d="M28 54 Q29 52 30 54 Q31 52 32 54 Q33 52 34 54 Q35 52 36 54 Q37 52 38 54 Q39 52 40 54 Q41 52 42 54 Q43 52 44 54" fill="none" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M48 51 Q49 49 50 51 Q51 49 52 51 Q53 49 54 51 Q55 49 56 51 Q57 49 58 51 Q59 49 60 51 Q61 49 62 51 Q63 49 64 51" fill="none" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M66 56 Q67 54 68 56 Q69 54 70 56 Q71 54 72 56 Q73 54 74 56 Q75 54 76 56 Q77 54 78 56 Q79 54 80 56" fill="none" stroke="#DAA520" stroke-width="0.8"/>
      <!-- Filling bumps (shows they're stuffed) -->
      <ellipse cx="36" cy="55" rx="4" ry="2.5" fill="#F0E68C" stroke="#DAA520" stroke-width="0.3" opacity="0.5"/>
      <ellipse cx="56" cy="52" rx="4" ry="2.5" fill="#EEE8AA" stroke="#DAA520" stroke-width="0.3" opacity="0.5"/>
      <!-- Sage leaves -->
      <path d="M32 48 Q34 44 37 46 Q35 49 32 48Z" fill="#6B8E23" opacity="0.9"/>
      <path d="M33 47 L35 45" fill="none" stroke="#556B2F" stroke-width="0.3"/>
      <path d="M58 44 Q60 40 63 42 Q61 45 58 44Z" fill="#6B8E23" opacity="0.9"/>
      <path d="M59 43 L61 41" fill="none" stroke="#556B2F" stroke-width="0.3"/>
      <path d="M72 50 Q74 46 76 48 Q74 51 72 50Z" fill="#6B8E23" opacity="0.8"/>
      <!-- Brown butter drizzle -->
      <path d="M34 56 Q40 54 46 56" fill="none" stroke="#DEB887" stroke-width="1" opacity="0.5"/>
      <path d="M52 53 Q58 51 64 53" fill="none" stroke="#DEB887" stroke-width="1" opacity="0.5"/>
      <!-- Parmesan -->
      <circle cx="42" cy="48" r="0.8" fill="#FFFACD"/>
      <circle cx="54" cy="58" r="0.6" fill="#FFFACD"/>
      <circle cx="68" cy="56" r="0.7" fill="#FFFACD"/>
      <!-- Steam -->
      <path d="M38 36 Q40 32 38 28" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
      <path d="M52 34 Q54 30 52 26" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>`,
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    emoji: '🫓',
    color: '#CD853F',
    accentColor: '#228B22',
    description: 'Layers upon layers of delicious knowledge!',
    personality: 'The wise elder who speaks in layers of meaning',
    svgBody: `
      <!-- Plate/Dish -->
      <rect x="22" y="44" width="56" height="32" rx="3" fill="#8B4513" stroke="#5C3317" stroke-width="1.5"/>
      <rect x="24" y="46" width="52" height="28" rx="2" fill="#A0522D"/>
      <!-- Lasagna layers -->
      <!-- Bottom pasta sheet -->
      <rect x="26" y="68" width="48" height="4" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.5"/>
      <!-- Meat sauce layer -->
      <rect x="26" y="64" width="48" height="4" fill="#8B2500"/>
      <circle cx="34" cy="66" r="1.5" fill="#5C1A00" opacity="0.5"/>
      <circle cx="50" cy="65" r="1" fill="#5C1A00" opacity="0.5"/>
      <circle cx="64" cy="66" r="1.2" fill="#5C1A00" opacity="0.5"/>
      <!-- Pasta sheet -->
      <rect x="26" y="60" width="48" height="4" fill="#EED9A0" stroke="#D2B48C" stroke-width="0.3"/>
      <!-- Bechamel/ricotta layer -->
      <rect x="26" y="56" width="48" height="4" fill="#FFFFF0"/>
      <ellipse cx="35" cy="58" rx="3" ry="1.5" fill="white" opacity="0.4"/>
      <ellipse cx="55" cy="57" rx="2.5" ry="1.2" fill="white" opacity="0.4"/>
      <!-- Meat sauce layer -->
      <rect x="26" y="52" width="48" height="4" fill="#A03000"/>
      <circle cx="40" cy="54" r="1.2" fill="#5C1A00" opacity="0.5"/>
      <circle cx="58" cy="53" r="1" fill="#5C1A00" opacity="0.5"/>
      <!-- Top pasta sheet -->
      <rect x="26" y="48" width="48" height="4" fill="#F5DEB3" stroke="#D2B48C" stroke-width="0.3"/>
      <!-- Melted cheese on top -->
      <rect x="26" y="44" width="48" height="5" rx="1" fill="#FFD700" opacity="0.8"/>
      <ellipse cx="36" cy="46" rx="4" ry="2" fill="#FFA500" opacity="0.4"/>
      <ellipse cx="56" cy="47" rx="5" ry="2" fill="#FFA500" opacity="0.4"/>
      <!-- Bubbly cheese texture -->
      <circle cx="30" cy="45" r="1.5" fill="#FFD700" stroke="#FFA500" stroke-width="0.3"/>
      <circle cx="42" cy="46" r="1.2" fill="#FFD700" stroke="#FFA500" stroke-width="0.3"/>
      <circle cx="52" cy="45" r="1.8" fill="#FFD700" stroke="#FFA500" stroke-width="0.3"/>
      <circle cx="66" cy="46" r="1.3" fill="#FFD700" stroke="#FFA500" stroke-width="0.3"/>
      <!-- Browning spots -->
      <circle cx="35" cy="45" r="2" fill="#B8860B" opacity="0.3"/>
      <circle cx="60" cy="46" r="2.5" fill="#B8860B" opacity="0.25"/>
      <!-- Basil garnish -->
      <path d="M46 40 Q48 36 51 38 Q49 41 46 40Z" fill="#228B22"/>
      <path d="M47 39 L49 37" fill="none" stroke="#006400" stroke-width="0.4"/>
      <path d="M52 42 Q54 38 56 40 Q54 43 52 42Z" fill="#2E8B57"/>
      <!-- Sauce oozing from side -->
      <path d="M74 50 Q76 54 75 58 Q76 62 74 66" fill="#8B2500" opacity="0.6" stroke="none"/>
      <!-- Steam -->
      <path d="M36 34 Q38 30 36 26" fill="none" stroke="white" stroke-width="1.2" opacity="0.4"/>
      <path d="M50 32 Q52 28 50 24" fill="none" stroke="white" stroke-width="1.2" opacity="0.35"/>
      <path d="M64 34 Q66 30 64 26" fill="none" stroke="white" stroke-width="1.2" opacity="0.4"/>`,
  },
  {
    id: 'tortellini',
    name: 'Tortellini in Brodo',
    emoji: '🍜',
    color: '#87CEEB',
    accentColor: '#F0E68C',
    description: 'Tiny pasta swimming in warm broth! Cozy vibes only!',
    personality: 'The cozy introvert who gives the best advice quietly',
    svgBody: `
      <!-- Bowl -->
      <ellipse cx="50" cy="72" rx="36" ry="7" fill="#D4D4D4" opacity="0.4"/>
      <path d="M18 55 Q18 75 50 75 Q82 75 82 55" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="55" rx="32" ry="12" fill="#F0F0F0" stroke="#D4D4D4" stroke-width="1"/>
      <!-- Broth -->
      <ellipse cx="50" cy="58" rx="28" ry="10" fill="#FFE4B5" opacity="0.7"/>
      <ellipse cx="50" cy="56" rx="26" ry="9" fill="#FFDEAD" opacity="0.4"/>
      <!-- Individual tortellini shapes -->
      <path d="M32 54 Q34 48 38 50 Q36 54 34 55 Q32 56 32 54Z" fill="#F0E68C" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M44 50 Q46 44 50 46 Q48 50 46 51 Q44 52 44 50Z" fill="#EEE8AA" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M56 52 Q58 46 62 48 Q60 52 58 53 Q56 54 56 52Z" fill="#F0E68C" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M38 60 Q40 54 44 56 Q42 60 40 61 Q38 62 38 60Z" fill="#EEE8AA" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M52 58 Q54 52 58 54 Q56 58 54 59 Q52 60 52 58Z" fill="#F0E68C" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M66 54 Q68 48 72 50 Q70 54 68 55 Q66 56 66 54Z" fill="#EEE8AA" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M28 58 Q30 52 34 54 Q32 58 30 59 Q28 60 28 58Z" fill="#F0E68C" stroke="#DAA520" stroke-width="0.8"/>
      <path d="M68 58 Q70 52 74 54 Q72 58 70 59 Q68 60 68 58Z" fill="#EEE8AA" stroke="#DAA520" stroke-width="0.8"/>
      <!-- Tortellini folds (belly button shape) -->
      <path d="M35 52 Q36 51 35 50" fill="none" stroke="#B8860B" stroke-width="0.5"/>
      <path d="M47 48 Q48 47 47 46" fill="none" stroke="#B8860B" stroke-width="0.5"/>
      <path d="M59 50 Q60 49 59 48" fill="none" stroke="#B8860B" stroke-width="0.5"/>
      <!-- Broth shimmer -->
      <ellipse cx="40" cy="56" rx="3" ry="1" fill="white" opacity="0.2"/>
      <ellipse cx="60" cy="54" rx="2.5" ry="0.8" fill="white" opacity="0.2"/>
      <!-- Tiny carrot pieces in broth -->
      <circle cx="42" cy="60" r="1.2" fill="#FFA500" opacity="0.7"/>
      <circle cx="62" cy="58" r="1" fill="#FFA500" opacity="0.7"/>
      <!-- Celery bits -->
      <rect x="48" y="62" width="3" height="1" rx="0.5" fill="#90EE90" opacity="0.6"/>
      <rect x="34" y="56" width="2.5" height="0.8" rx="0.4" fill="#90EE90" opacity="0.6"/>
      <!-- Parsley -->
      <circle cx="55" cy="50" r="0.7" fill="#228B22" opacity="0.6"/>
      <circle cx="36" cy="52" r="0.5" fill="#228B22" opacity="0.6"/>
      <!-- Steam (more visible for soup) -->
      <path d="M36 42 Q38 36 36 30" fill="none" stroke="white" stroke-width="1.5" opacity="0.5"/>
      <path d="M50 40 Q52 34 50 28" fill="none" stroke="white" stroke-width="1.5" opacity="0.45"/>
      <path d="M64 42 Q66 36 64 30" fill="none" stroke="white" stroke-width="1.5" opacity="0.5"/>`,
  },
  {
    id: 'pesto-fusilli',
    name: 'Pesto Fusilli',
    emoji: '🌿',
    color: '#228B22',
    accentColor: '#006400',
    description: 'Twirly green goodness! Fresh and spirited!',
    personality: 'The health-conscious friend who reminds you to drink water',
    svgBody: `
      <!-- Plate -->
      <ellipse cx="50" cy="72" rx="38" ry="8" fill="#E8E8E8" opacity="0.5"/>
      <ellipse cx="50" cy="68" rx="36" ry="18" fill="#FAFAFA" stroke="#D4D4D4" stroke-width="1.5"/>
      <ellipse cx="50" cy="64" rx="32" ry="14" fill="#F0F0F0" stroke="#E0E0E0" stroke-width="1"/>
      <!-- Pesto sauce -->
      <ellipse cx="50" cy="60" rx="26" ry="10" fill="#228B22" opacity="0.4"/>
      <ellipse cx="48" cy="58" rx="22" ry="8" fill="#2E8B57" opacity="0.3"/>
      <!-- Individual fusilli spirals -->
      <path d="M30 56 Q32 52 34 56 Q36 52 38 56 Q40 52 42 56" fill="none" stroke="#F5DEB3" stroke-width="3" stroke-linecap="round"/>
      <path d="M40 52 Q42 48 44 52 Q46 48 48 52 Q50 48 52 52" fill="none" stroke="#EED9A0" stroke-width="3" stroke-linecap="round"/>
      <path d="M52 54 Q54 50 56 54 Q58 50 60 54 Q62 50 64 54" fill="none" stroke="#F5DEB3" stroke-width="3" stroke-linecap="round"/>
      <path d="M34 62 Q36 58 38 62 Q40 58 42 62 Q44 58 46 62" fill="none" stroke="#EED9A0" stroke-width="3" stroke-linecap="round"/>
      <path d="M48 60 Q50 56 52 60 Q54 56 56 60 Q58 56 60 60" fill="none" stroke="#F5DEB3" stroke-width="3" stroke-linecap="round"/>
      <path d="M62 58 Q64 54 66 58 Q68 54 70 58" fill="none" stroke="#EED9A0" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M26 60 Q28 56 30 60 Q32 56 34 60" fill="none" stroke="#F5DEB3" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M44 48 Q46 44 48 48 Q50 44 52 48" fill="none" stroke="#EED9A0" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Pesto coating on fusilli -->
      <path d="M30 56 Q32 52 34 56" fill="none" stroke="#228B22" stroke-width="1" opacity="0.5"/>
      <path d="M52 54 Q54 50 56 54" fill="none" stroke="#228B22" stroke-width="1" opacity="0.5"/>
      <path d="M48 60 Q50 56 52 60" fill="none" stroke="#228B22" stroke-width="1" opacity="0.5"/>
      <!-- Pine nuts -->
      <ellipse cx="36" cy="50" rx="2" ry="1.2" fill="#DEB887" stroke="#D2B48C" stroke-width="0.3"/>
      <ellipse cx="58" cy="48" rx="1.8" ry="1" fill="#DEB887" stroke="#D2B48C" stroke-width="0.3"/>
      <ellipse cx="50" cy="55" rx="1.5" ry="1" fill="#DEB887" stroke="#D2B48C" stroke-width="0.3"/>
      <!-- Basil leaves -->
      <path d="M42 44 Q44 40 47 42 Q45 45 42 44Z" fill="#228B22"/>
      <path d="M43 43 L45 41" fill="none" stroke="#006400" stroke-width="0.4"/>
      <path d="M62 50 Q64 46 66 48 Q64 51 62 50Z" fill="#2E8B57"/>
      <!-- Parmesan shavings -->
      <path d="M38 54 Q39 52 41 53" fill="#FFFACD" stroke="#EEE8AA" stroke-width="0.8"/>
      <path d="M56 56 Q57 54 59 55" fill="#FFFACD" stroke="#EEE8AA" stroke-width="0.8"/>
      <!-- Oil drizzle -->
      <ellipse cx="46" cy="52" rx="2" ry="1" fill="#9ACD32" opacity="0.3"/>
      <ellipse cx="54" cy="58" rx="1.5" ry="0.8" fill="#9ACD32" opacity="0.3"/>
      <!-- Steam -->
      <path d="M40 38 Q42 34 40 30" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
      <path d="M50 36 Q52 32 50 28" fill="none" stroke="white" stroke-width="1" opacity="0.25"/>
      <path d="M60 38 Q62 34 60 30" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>`,
  },
  {
    id: 'mac-and-cheese',
    name: 'Mac & Cheese',
    emoji: '🧈',
    color: '#FFA500',
    accentColor: '#FF8C00',
    description: 'The ultimate comfort! Gooey, cheesy, and always there for you!',
    personality: 'The ride-or-die bestie who supports you no matter what',
    svgBody: `
      <!-- Baking dish -->
      <rect x="20" y="46" width="60" height="30" rx="4" fill="#8B4513" stroke="#5C3317" stroke-width="1.5"/>
      <rect x="22" y="48" width="56" height="26" rx="3" fill="#A0522D"/>
      <!-- Mac base (cheesy) -->
      <rect x="24" y="50" width="52" height="22" rx="2" fill="#FFA500"/>
      <!-- Individual macaroni elbows -->
      <path d="M28 56 Q30 52 33 54 Q31 57 28 56Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M35 53 Q37 49 40 51 Q38 54 35 53Z" fill="#EED9A0" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M42 55 Q44 51 47 53 Q45 56 42 55Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M49 52 Q51 48 54 50 Q52 53 49 52Z" fill="#EED9A0" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M56 54 Q58 50 61 52 Q59 55 56 54Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M63 52 Q65 48 68 50 Q66 53 63 52Z" fill="#EED9A0" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M30 62 Q32 58 35 60 Q33 63 30 62Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M38 60 Q40 56 43 58 Q41 61 38 60Z" fill="#EED9A0" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M46 62 Q48 58 51 60 Q49 63 46 62Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M54 60 Q56 56 59 58 Q57 61 54 60Z" fill="#EED9A0" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M62 62 Q64 58 67 60 Q65 63 62 62Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <path d="M70 56 Q72 52 75 54 Q73 57 70 56Z" fill="#F5DEB3" stroke="#DAA520" stroke-width="0.6"/>
      <!-- Cheese strings (gooey stretchy cheese) -->
      <path d="M34 54 Q36 50 38 52" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>
      <path d="M50 52 Q52 48 54 50" fill="none" stroke="#FFD700" stroke-width="1.2" opacity="0.7" stroke-linecap="round"/>
      <path d="M44 58 Q46 54 48 56" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.6" stroke-linecap="round"/>
      <!-- Bubbly baked cheese top -->
      <ellipse cx="32" cy="50" rx="4" ry="2" fill="#FF8C00" opacity="0.5"/>
      <ellipse cx="50" cy="49" rx="5" ry="2.5" fill="#FF8C00" opacity="0.4"/>
      <ellipse cx="68" cy="50" rx="4" ry="2" fill="#FF8C00" opacity="0.5"/>
      <!-- Golden brown spots -->
      <circle cx="36" cy="50" r="2" fill="#B8860B" opacity="0.3"/>
      <circle cx="55" cy="49" r="2.5" fill="#B8860B" opacity="0.25"/>
      <circle cx="70" cy="50" r="1.8" fill="#B8860B" opacity="0.3"/>
      <!-- Breadcrumb topping -->
      <circle cx="30" cy="51" r="0.8" fill="#DEB887" opacity="0.7"/>
      <circle cx="40" cy="50" r="0.6" fill="#DEB887" opacity="0.7"/>
      <circle cx="46" cy="51" r="0.7" fill="#DEB887" opacity="0.7"/>
      <circle cx="60" cy="50" r="0.6" fill="#DEB887" opacity="0.7"/>
      <circle cx="66" cy="51" r="0.8" fill="#DEB887" opacity="0.7"/>
      <!-- Steam -->
      <path d="M34 40 Q36 36 34 32" fill="none" stroke="white" stroke-width="1.2" opacity="0.4"/>
      <path d="M50 38 Q52 34 50 30" fill="none" stroke="white" stroke-width="1.2" opacity="0.35"/>
      <path d="M66 40 Q68 36 66 32" fill="none" stroke="white" stroke-width="1.2" opacity="0.4"/>`,
  },
];

export function getSpriteById(id) {
  return pastaSprites.find(s => s.id === id) || pastaSprites[0];
}
// Escalating break reminders with pasta puns
// Level increases each time the user ignores a break suggestion

export const dialogueLevels = [
  // Level 0 - Soft and encouraging
  {
    level: 0,
    messages: [
      "Hey, nice job! You've been pasta-tively productive! 🍝 Time for a little break — you've earned it!",
      "Great work, friend! You've been on a roll (like fresh pasta dough). Take 5 and recharge!",
      "You're doing amazing! Even the best chefs rest between courses. Go enjoy yourself!",
      "Al dente work session complete! Time to let your brain cool down like fresh noodles.",
      "That was impasta-bly good focus! Reward yourself with a quick break! ✨",
    ],
  },
  // Level 1 - Friendly nudge
  {
    level: 1,
    messages: [
      "Hey, I noticed you skipped your break... Don't burn yourself out! You should stretch or grab a snack. 🍕",
      "Still going? You're brave, but even spaghetti snaps if you stretch it too far. Take a breather!",
      "Pssst... your brain called. It wants a break. Don't make me send the meatballs after you! 🍝",
      "You're pushing through like overcooked pasta — don't get mushy! Take a break, friend.",
      "I admire the dedication, but your eyes need rest. Go stare at something that isn't a screen!",
    ],
  },
  // Level 2 - Getting pushy
  {
    level: 2,
    messages: [
      "Okay bestie, this is getting ridic-olive oil. You NEED a break. Your brain is turning into alphabet soup! 🫠",
      "I'm not angry, I'm just... concerned. And a little angry. GO TAKE A BREAK. Mangia later!",
      "You've been going longer than it takes to make a proper bolognese. That's TOO LONG. Stop it.",
      "Your productivity is getting saucier but your health is getting... stale bread-ish. BREAK. NOW. Please?",
      "If you don't take a break soon, I'm going to start hiding your notes in lasagna layers! 🫣",
    ],
  },
  // Level 3 - Very aggressive (humorous)
  {
    level: 3,
    messages: [
      "LISTEN HERE, NERD! 🤓 You seem like you have NO LIFE so you need to go outside and TOUCH GRASS. Even grass is greener than your screen-fried eyeballs!",
      "OH MY PENNE! You're STILL HERE?! Do you even remember what the sun looks like?! GO. OUTSIDE. NOW. 🌞",
      "I'm calling your mother. Actually no, I'm calling EVERYONE'S mother. This is UNHINGED behavior. TAKE A BREAK!",
      "You absolute LINGUINE BRAIN! 🧠🍝 Your notes aren't going anywhere! But YOUR SANITY IS! BREAK! NOW! THIS IS NOT A DRILL!",
      "That's IT. I'm staging an intervention. Me, the meatballs, and the parmesan are ALL concerned. You're cut off. BREAK TIME OR I RIOT! 😤",
    ],
  },
  // Level 4 - Maximum chaos (still humorous)
  {
    level: 4,
    messages: [
      "I CANNOT BELIEVE YOU'RE STILL HERE. I've seen boiling water with more chill than you! 🔥 ARE YOU TRYING TO BECOME ONE WITH THE CHAIR?!",
      "EMERGENCY PASTA ALERT 🚨🍝🚨 THE HUMAN HAS FUSED WITH THEIR DESK. SEND HELP. SEND BREADSTICKS. SEND A LIFE!",
      "YOU ABSOLUTE ROTINI-BRAINED MANIAC! Go outside! Touch grass! Pet a dog! Do ANYTHING except stare at this screen! I'M BEGGING YOU! 😭",
      "At this point you're not studying, you're just PUNISHING yourself! Even PRISON has yard time! GO! SHOO! VAMOOSE! ANDIAMO! 🇮🇹",
      "I quit. I'm done. You win. You've out-stubborned a literal plate of pasta. But PLEASE, for the love of carbonara, TAKE A BREAK BEFORE YOU BECOME A FOSSIL! 💀",
    ],
  },
];

export function getDialogue(level) {
  const cappedLevel = Math.min(level, dialogueLevels.length - 1);
  const messages = dialogueLevels[cappedLevel].messages;
  return messages[Math.floor(Math.random() * messages.length)];
}

export function getGreeting(spriteName) {
  const greetings = [
    `Ciao, friend! I'm ${spriteName}! Ready to take some pasta-tively amazing notes? 🍝`,
    `Buongiorno! ${spriteName} here, reporting for duty! Let's get this bread... stick! 🥖`,
    `Hey there! It's me, ${spriteName}! Let's cook up some great notes today! 👨‍🍳`,
    `Welcome back! ${spriteName} missed you! Time to get saucy with some studying! 🍅`,
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getEncouragement() {
  const encouragements = [
    "You're doing great! Keep that penne moving! ✍️",
    "Ooh, that's a good note! *chef's kiss* 🤌",
    "Your notes are looking absolutely al dente! Perfect!",
    "Wow, you're on fire! (Not literally, please don't set me on fire) 🔥",
    "Keep going! You're pasta-tively killing it!",
  ];
  return encouragements[Math.floor(Math.random() * encouragements.length)];
}

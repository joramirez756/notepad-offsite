// Timer configuration mockery dialogue
// Sprite makes fun of the user for setting ridiculous timer values

export const timerMockery = {
  workTooShort: [
    "Wait... {time} minutes?! That's barely enough time to boil water! What are you, a goldfish? 🐠",
    "Lmao {time} minutes?? My noodles take longer to cook than your study session! 🍝😂",
    "A {time}-minute work session? Even a microwave meal takes longer than that! Are you speedrunning failure?",
    "{time} minutes... Bro that's not a Pomodoro, that's a Pomodor-NO. 🍅❌",
    "Setting the timer to {time} min... Bold strategy! I've seen longer TikToks. 📱",
  ],
  workTooLong: [
    "{time} MINUTES?! Are you trying to become a fossil?! Even I'd go stale by then! 💀",
    "Excuse me, {time} minutes?? That's not studying, that's a HOSTAGE SITUATION! 🚨",
    "You set it to {time} min?! Your brain will be more overcooked than my noodles! 🧠🔥",
    "{time} minutes without a break?! Even marathon runners stop for water! Are you okay?! 😰",
    "LOL {time} minutes. When's the last time you saw sunlight? Setting up a wellness check... 📞",
  ],
  breakTooShort: [
    "A {time}-minute break?! That's not a break, that's a BLINK! Your eyes literally need longer to rest! 👁️",
    "{time} minute break? What are you gonna do, breathe once and come back?! 😤",
    "Wow, {time} min break. So generous with yourself. You know rest isn't a crime, right? 🙄",
    "A {time}-minute break won't even give you time to stand up! This isn't a prison, take a REAL break!",
    "{time} minutes... You're like those people who 'sleep' for 10 minutes and call it a nap. Pathetic! 😂",
  ],
  breakTooLong: [
    "A {time}-minute break?! Are you going on VACATION?! This is a break, not a sabbatical! 🏖️",
    "{time} minutes?? That's not a break, that's RETIREMENT! Should I pack your bags? 🧳",
    "LOL {time} min break. At that point just close the app and be honest with yourself! 💅",
    "Setting break to {time} minutes... You know you're supposed to COME BACK, right?! 🤣",
    "A {time}-minute break?! I'll have gone cold, moldy, AND gotten composted by then! 🍝💀",
  ],
  justRight: [
    "Nice! {workTime} min work and {breakTime} min break — that's the sweet spot! You've got pasta-tive energy! 🍝✨",
    "Ooh, {workTime}/{breakTime} — a person of culture! That's a balanced recipe for success! 👨‍🍳",
    "Perfect timing! {workTime} min focus, {breakTime} min rest. *Chef's kiss* 🤌",
    "{workTime} on, {breakTime} off. That's what I call al dente productivity — not too hard, not too soft!",
  ],
};

export function getTimerMockery(type, values) {
  const messages = timerMockery[type];
  if (!messages) return '';
  const template = messages[Math.floor(Math.random() * messages.length)];
  return template
    .replace('{time}', values.time)
    .replace('{workTime}', values.workTime)
    .replace('{breakTime}', values.breakTime);
}

// Thresholds for mockery
export const TIMER_THRESHOLDS = {
  work: {
    tooShort: 5,    // < 5 min = mocked
    tooLong: 120,   // > 2 hours = mocked
    default: 25,
    min: 1,
    max: 480,       // Allow up to 8 hours (they'll be roasted)
  },
  break: {
    tooShort: 2,    // < 2 min = mocked
    tooLong: 30,    // > 30 min = mocked
    default: 5,
    min: 1,
    max: 120,       // Allow up to 2 hours (they'll be roasted)
  },
};

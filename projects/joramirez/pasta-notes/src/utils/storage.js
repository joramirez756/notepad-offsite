// Local storage utilities for notes persistence

const STORAGE_KEY = 'pasta-notes-data';
const SETTINGS_KEY = 'pasta-notes-settings';

export function loadNotes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function loadSettings() {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? JSON.parse(data) : getDefaultSettings();
  } catch {
    return getDefaultSettings();
  }
}

export function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getDefaultSettings() {
  return {
    selectedSprite: 'cacio-e-pepe',
    pomodoroLength: 25, // minutes
    breakLength: 5, // minutes
    theme: 'cute',
  };
}

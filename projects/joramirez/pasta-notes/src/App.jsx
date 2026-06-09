import { useState, useCallback } from 'react';
import RichTextEditor from './components/Editor/RichTextEditor';
import Sidebar from './components/Notes/Sidebar';
import PomodoroTimer from './components/Pomodoro/PomodoroTimer';
import PastaSprite from './components/Sprite/PastaSprite';
import SettingsPanel from './components/Settings/SettingsPanel';
import { usePomodoro } from './hooks/usePomodoro';
import { useNotes } from './hooks/useNotes';
import { getDialogue } from './utils/pomodoroDialogue';
import { getTimerMockery, TIMER_THRESHOLDS } from './utils/timerMockery';
import { loadSettings, saveSettings } from './utils/storage';
import './App.css';

function App() {
  const [settings, setSettings] = useState(() => loadSettings());
  const [spriteDialogue, setSpriteDialogue] = useState('');
  const [showBreakPrompt, setShowBreakPrompt] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const {
    notes,
    activeNote,
    activeNoteId,
    sections,
    setActiveNoteId,
    createNote,
    updateNote,
    deleteNote,
    createSection,
    deleteSection,
    getNotesBySection,
  } = useNotes();

  const handleBreakSuggested = useCallback((ignoreCount) => {
    const dialogue = getDialogue(ignoreCount);
    setSpriteDialogue(dialogue);
    setShowBreakPrompt(true);
  }, []);

  const pomodoro = usePomodoro(handleBreakSuggested, {
    pomodoroLength: settings.pomodoroLength,
    breakLength: settings.breakLength,
  });

  const handleTakeBreak = () => {
    pomodoro.takeBreak();
    setShowBreakPrompt(false);
    setSpriteDialogue("Good choice! Now go rest those eyes. I'll keep your pasta warm! 🍝✨");
  };

  const handleIgnoreBreak = () => {
    pomodoro.ignoreBreak();
    setShowBreakPrompt(false);
  };

  const handleSelectSprite = (spriteId) => {
    const newSettings = { ...settings, selectedSprite: spriteId };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleSaveSettings = ({ pomodoroLength, breakLength }) => {
    const newSettings = { ...settings, pomodoroLength, breakLength };
    setSettings(newSettings);
    saveSettings(newSettings);
    setShowSettings(false);
    pomodoro.resetTimer();

    // Check if settings are ridiculous and mock the user
    if (pomodoroLength < TIMER_THRESHOLDS.work.tooShort) {
      setSpriteDialogue(getTimerMockery('workTooShort', { time: pomodoroLength }));
    } else if (pomodoroLength > TIMER_THRESHOLDS.work.tooLong) {
      setSpriteDialogue(getTimerMockery('workTooLong', { time: pomodoroLength }));
    } else if (breakLength < TIMER_THRESHOLDS.break.tooShort) {
      setSpriteDialogue(getTimerMockery('breakTooShort', { time: breakLength }));
    } else if (breakLength > TIMER_THRESHOLDS.break.tooLong) {
      setSpriteDialogue(getTimerMockery('breakTooLong', { time: breakLength }));
    } else {
      setSpriteDialogue(getTimerMockery('justRight', { workTime: pomodoroLength, breakTime: breakLength }));
    }
  };

  const handleUpdateContent = (content) => {
    if (activeNoteId) {
      updateNote(activeNoteId, { content });
    }
  };

  // Ensure General section exists
  if (sections.length === 0) {
    createSection('General');
  }

  return (
    <div className="app" data-theme="cute">
      {/* Break overlay */}
      {pomodoro.isOnBreak && (
        <div className="break-overlay">
          <div className="break-overlay-content">
            <h2>🍅 Break Time! 🍅</h2>
            <p>Your notes are locked while you recharge.</p>
            <p className="break-countdown">{pomodoro.formattedBreakTime}</p>
            <p className="break-tip">Go stretch, grab water, pet a cat... anything but screens!</p>
          </div>
        </div>
      )}

      {/* Main layout */}
      <div className={`app-layout ${pomodoro.isOnBreak ? 'locked' : ''}`}>
        <Sidebar
          sections={sections}
          notes={notes}
          activeNoteId={activeNoteId}
          onSelectNote={setActiveNoteId}
          onCreateNote={createNote}
          onDeleteNote={deleteNote}
          onCreateSection={createSection}
          onDeleteSection={deleteSection}
          getNotesBySection={getNotesBySection}
          onUpdateNote={updateNote}
        />

        <main className="main-content">
          <header className="app-header">
            <div className="header-left">
              {activeNote && (
                <h1 className="note-title-header">{activeNote.title}</h1>
              )}
            </div>
            <div className="header-right">
              <button className="btn-settings" onClick={() => setShowSettings(true)} title="Timer Settings">
                ⚙️
              </button>
              <PomodoroTimer
                isRunning={pomodoro.isRunning}
                formattedTime={pomodoro.formattedTime}
                progress={pomodoro.progress}
                pomodorosCompleted={pomodoro.pomodorosCompleted}
                isOnBreak={pomodoro.isOnBreak}
                formattedBreakTime={pomodoro.formattedBreakTime}
                onStart={pomodoro.startTimer}
                onPause={pomodoro.pauseTimer}
                onReset={pomodoro.resetTimer}
              />
            </div>
          </header>

          <div className="editor-area">
            {activeNote ? (
              <RichTextEditor
                note={activeNote}
                onUpdate={handleUpdateContent}
              />
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🍝</div>
                <h2>No note selected</h2>
                <p>Create a new note or select one from the sidebar to get started!</p>
                <button className="btn-create-first" onClick={() => createNote('General')}>
                  + Create Your First Note
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Pasta sprite - always visible */}
      <PastaSprite
        selectedSpriteId={settings.selectedSprite}
        dialogue={spriteDialogue}
        showBreakPrompt={showBreakPrompt}
        onTakeBreak={handleTakeBreak}
        onIgnoreBreak={handleIgnoreBreak}
        onSelectSprite={handleSelectSprite}
      />

      {/* Settings panel */}
      {showSettings && (
        <SettingsPanel
          currentPomodoroLength={settings.pomodoroLength}
          currentBreakLength={settings.breakLength}
          onSave={handleSaveSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;

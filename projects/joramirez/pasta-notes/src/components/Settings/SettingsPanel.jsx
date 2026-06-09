import { useState } from 'react';
import { TIMER_THRESHOLDS } from '../../utils/timerMockery';
import './Settings.css';

export default function SettingsPanel({ currentPomodoroLength, currentBreakLength, onSave, onClose }) {
  const [workTime, setWorkTime] = useState(currentPomodoroLength || 25);
  const [breakTime, setBreakTime] = useState(currentBreakLength || 5);

  const handleSave = () => {
    onSave({
      pomodoroLength: workTime,
      breakLength: breakTime,
    });
  };

  const getWorkTimeWarning = () => {
    if (workTime < TIMER_THRESHOLDS.work.tooShort) return '⚠️ Too short! Sprite will mock you!';
    if (workTime > TIMER_THRESHOLDS.work.tooLong) return '⚠️ Too long! Sprite will mock you!';
    return '✅ Good range';
  };

  const getBreakTimeWarning = () => {
    if (breakTime < TIMER_THRESHOLDS.break.tooShort) return '⚠️ Too short! Sprite will mock you!';
    if (breakTime > TIMER_THRESHOLDS.break.tooLong) return '⚠️ Too long! Sprite will mock you!';
    return '✅ Good range';
  };

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <h2>⚙️ Timer Settings</h2>
        <p className="settings-subtitle">Configure your Pomodoro — but choose wisely... 🍝</p>

        <div className="setting-group">
          <label htmlFor="work-time">
            🍅 Work Session Length
            <span className="setting-value">{workTime} min</span>
          </label>
          <input
            id="work-time"
            type="range"
            min={TIMER_THRESHOLDS.work.min}
            max={TIMER_THRESHOLDS.work.max}
            value={workTime}
            onChange={(e) => setWorkTime(Number(e.target.value))}
            className="setting-slider"
          />
          <div className="setting-range-labels">
            <span>{TIMER_THRESHOLDS.work.min} min</span>
            <span>{TIMER_THRESHOLDS.work.max} min</span>
          </div>
          <div className={`setting-warning ${workTime < TIMER_THRESHOLDS.work.tooShort || workTime > TIMER_THRESHOLDS.work.tooLong ? 'warn' : 'ok'}`}>
            {getWorkTimeWarning()}
          </div>
          <input
            type="number"
            min={TIMER_THRESHOLDS.work.min}
            max={TIMER_THRESHOLDS.work.max}
            value={workTime}
            onChange={(e) => setWorkTime(Math.max(TIMER_THRESHOLDS.work.min, Math.min(TIMER_THRESHOLDS.work.max, Number(e.target.value))))}
            className="setting-number-input"
          />
        </div>

        <div className="setting-group">
          <label htmlFor="break-time">
            ☕ Break Length
            <span className="setting-value">{breakTime} min</span>
          </label>
          <input
            id="break-time"
            type="range"
            min={TIMER_THRESHOLDS.break.min}
            max={TIMER_THRESHOLDS.break.max}
            value={breakTime}
            onChange={(e) => setBreakTime(Number(e.target.value))}
            className="setting-slider"
          />
          <div className="setting-range-labels">
            <span>{TIMER_THRESHOLDS.break.min} min</span>
            <span>{TIMER_THRESHOLDS.break.max} min</span>
          </div>
          <div className={`setting-warning ${breakTime < TIMER_THRESHOLDS.break.tooShort || breakTime > TIMER_THRESHOLDS.break.tooLong ? 'warn' : 'ok'}`}>
            {getBreakTimeWarning()}
          </div>
          <input
            type="number"
            min={TIMER_THRESHOLDS.break.min}
            max={TIMER_THRESHOLDS.break.max}
            value={breakTime}
            onChange={(e) => setBreakTime(Math.max(TIMER_THRESHOLDS.break.min, Math.min(TIMER_THRESHOLDS.break.max, Number(e.target.value))))}
            className="setting-number-input"
          />
        </div>

        <div className="settings-actions">
          <button className="btn-save" onClick={handleSave}>
            💾 Save Settings
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

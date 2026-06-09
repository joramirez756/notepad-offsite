import './Pomodoro.css';

export default function PomodoroTimer({
  isRunning,
  formattedTime,
  progress,
  pomodorosCompleted,
  isOnBreak,
  formattedBreakTime,
  onStart,
  onPause,
  onReset,
}) {
  return (
    <div className={`pomodoro-widget ${isOnBreak ? 'on-break' : ''}`}>
      {isOnBreak ? (
        <div className="break-display">
          <span className="break-icon">☕</span>
          <span className="break-label">Break Time!</span>
          <span className="break-timer">{formattedBreakTime}</span>
          <div className="break-message">
            Relax! Your notes will be here when you get back 🍝
          </div>
        </div>
      ) : (
        <>
          <div className="pomodoro-progress">
            <svg viewBox="0 0 36 36" className="progress-ring">
              <path
                className="progress-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="progress-fill"
                strokeDasharray={`${progress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="pomodoro-time">{formattedTime}</span>
          </div>
          <div className="pomodoro-controls">
            {!isRunning ? (
              <button className="btn-pomodoro start" onClick={onStart}>▶</button>
            ) : (
              <button className="btn-pomodoro pause" onClick={onPause}>⏸</button>
            )}
            <button className="btn-pomodoro reset" onClick={onReset}>⟲</button>
          </div>
          <div className="pomodoro-count">
            🍅 × {pomodorosCompleted}
          </div>
        </>
      )}
    </div>
  );
}

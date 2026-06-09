import { useState, useEffect, useCallback, useRef } from 'react';

export function usePomodoro(onBreakSuggested) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // seconds
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakTimeLeft, setBreakTimeLeft] = useState(0);
  const [ignoreCount, setIgnoreCount] = useState(0);
  const [showBreakPrompt, setShowBreakPrompt] = useState(false);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  const intervalRef = useRef(null);
  const breakIntervalRef = useRef(null);

  const POMODORO_LENGTH = 25 * 60; // 25 minutes in seconds
  const BREAK_LENGTH = 5 * 60; // 5 minutes in seconds

  // Main work timer
  useEffect(() => {
    if (isRunning && !isOnBreak) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prev => {
          const next = prev + 1;
          if (next >= POMODORO_LENGTH && !showBreakPrompt) {
            setShowBreakPrompt(true);
            if (onBreakSuggested) onBreakSuggested(ignoreCount);
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, isOnBreak, showBreakPrompt, ignoreCount, onBreakSuggested]);

  // Break timer
  useEffect(() => {
    if (isOnBreak && breakTimeLeft > 0) {
      breakIntervalRef.current = setInterval(() => {
        setBreakTimeLeft(prev => {
          if (prev <= 1) {
            setIsOnBreak(false);
            setTimeElapsed(0);
            setShowBreakPrompt(false);
            clearInterval(breakIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(breakIntervalRef.current);
  }, [isOnBreak, breakTimeLeft]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const takeBreak = useCallback(() => {
    setIsRunning(false);
    setIsOnBreak(true);
    setBreakTimeLeft(BREAK_LENGTH);
    setShowBreakPrompt(false);
    setPomodorosCompleted(prev => prev + 1);
    setIgnoreCount(0);
    setTimeElapsed(0);
  }, []);

  const ignoreBreak = useCallback(() => {
    setShowBreakPrompt(false);
    setIgnoreCount(prev => prev + 1);
    // Reset timer for next reminder (shorter intervals as ignore count increases)
    const nextInterval = Math.max(5 * 60, POMODORO_LENGTH - (ignoreCount * 5 * 60));
    setTimeElapsed(POMODORO_LENGTH - nextInterval);
  }, [ignoreCount]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeElapsed(0);
    setIsOnBreak(false);
    setBreakTimeLeft(0);
    setShowBreakPrompt(false);
    setIgnoreCount(0);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isRunning,
    timeElapsed,
    isOnBreak,
    breakTimeLeft,
    ignoreCount,
    showBreakPrompt,
    pomodorosCompleted,
    startTimer,
    pauseTimer,
    takeBreak,
    ignoreBreak,
    resetTimer,
    formatTime,
    formattedTime: formatTime(timeElapsed),
    formattedBreakTime: formatTime(breakTimeLeft),
    progress: Math.min((timeElapsed / POMODORO_LENGTH) * 100, 100),
  };
}

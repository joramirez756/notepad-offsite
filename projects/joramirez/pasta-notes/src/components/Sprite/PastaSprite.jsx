import { useState, useEffect, useRef } from 'react';
import { getSpriteById, pastaSprites } from '../../utils/pastaSprites';
import { getGreeting, getEncouragement } from '../../utils/pomodoroDialogue';
import './Sprite.css';

export default function PastaSprite({
  selectedSpriteId,
  dialogue,
  showBreakPrompt,
  onTakeBreak,
  onIgnoreBreak,
  onSelectSprite,
}) {
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSpriteSelector, setShowSpriteSelector] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState('');
  const [showDialogue, setShowDialogue] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  const [sauceDrops, setSauceDrops] = useState([]);
  const [noodlePull, setNoodlePull] = useState(false);
  const dragRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const sprite = getSpriteById(selectedSpriteId);

  // Show greeting on mount
  useEffect(() => {
    const greeting = getGreeting(sprite.name);
    setCurrentDialogue(greeting);
    setShowDialogue(true);
    const timeout = setTimeout(() => setShowDialogue(false), 5000);
    return () => clearTimeout(timeout);
  }, [selectedSpriteId]);

  // Show dialogue from parent (pomodoro reminders)
  useEffect(() => {
    if (dialogue) {
      setCurrentDialogue(dialogue);
      setShowDialogue(true);
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 1000);
    }
  }, [dialogue]);

  // Dragging logic
  const handleMouseDown = (e) => {
    if (e.target.closest('.sprite-menu') || e.target.closest('.dialogue-bubble')) return;
    setIsDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offsetRef.current.x,
          y: e.clientY - offsetRef.current.y,
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Interactive: Pull noodles
  const handlePullNoodle = () => {
    setNoodlePull(true);
    setCurrentDialogue("Ow ow ow! That's my noodle! 🍝 Hehe, that tickles!");
    setShowDialogue(true);
    setTimeout(() => {
      setNoodlePull(false);
      setTimeout(() => setShowDialogue(false), 3000);
    }, 800);
  };

  // Interactive: Throw sauce
  const handleThrowSauce = () => {
    const colors = ['#FF6347', '#DC143C', '#228B22', '#FFFACD', '#FFA500'];
    const newDrops = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 10 + Math.random() * 20,
    }));
    setSauceDrops(prev => [...prev, ...newDrops]);
    setCurrentDialogue("Mamma mia! 🤌 Now THAT'S what I call adding some color to your notes!");
    setShowDialogue(true);
    setTimeout(() => {
      setSauceDrops(prev => prev.filter(d => !newDrops.includes(d)));
    }, 3000);
    setTimeout(() => setShowDialogue(false), 4000);
  };

  // Random encouragement
  const handleClick = () => {
    if (!showBreakPrompt && !showMenu) {
      const encouragement = getEncouragement();
      setCurrentDialogue(encouragement);
      setShowDialogue(true);
      setIsWiggling(true);
      setTimeout(() => {
        setIsWiggling(false);
        setTimeout(() => setShowDialogue(false), 3000);
      }, 500);
    }
  };

  return (
    <>
      {/* Sauce drops */}
      {sauceDrops.map(drop => (
        <div
          key={drop.id}
          className="sauce-drop"
          style={{
            left: drop.x,
            top: drop.y,
            width: drop.size,
            height: drop.size,
            backgroundColor: drop.color,
          }}
        />
      ))}

      {/* Sprite container */}
      <div
        className={`pasta-sprite ${isWiggling ? 'wiggle' : ''} ${noodlePull ? 'stretch' : ''}`}
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        ref={dragRef}
      >
        {/* Dialogue bubble */}
        {showDialogue && (
          <div className="dialogue-bubble">
            <p>{currentDialogue}</p>
            {showBreakPrompt && (
              <div className="break-actions">
                <button className="btn-break" onClick={onTakeBreak}>
                  🍅 Take a Break!
                </button>
                <button className="btn-ignore" onClick={onIgnoreBreak}>
                  ⏭️ Keep Going
                </button>
              </div>
            )}
          </div>
        )}

        {/* The sprite */}
        <div className="sprite-body" onClick={handleClick} onContextMenu={(e) => {
          e.preventDefault();
          setShowMenu(!showMenu);
        }}>
          <svg viewBox="0 0 100 100" width="80" height="80">
            {/* Face/eyes on top of pasta */}
            <g dangerouslySetInnerHTML={{ __html: sprite.svgBody }} />
            {/* Cute face */}
            <circle cx="40" cy="38" r="4" fill="#333" />
            <circle cx="60" cy="38" r="4" fill="#333" />
            <circle cx="41" cy="37" r="1.5" fill="white" />
            <circle cx="61" cy="37" r="1.5" fill="white" />
            <path d="M42 70 Q50 76 58 70" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            {/* Blush */}
            <circle cx="34" cy="65" r="4" fill="#FFB6C1" opacity="0.5" />
            <circle cx="66" cy="65" r="4" fill="#FFB6C1" opacity="0.5" />
          </svg>
          <span className="sprite-name">{sprite.emoji} {sprite.name}</span>
        </div>

        {/* Context menu */}
        {showMenu && (
          <div className="sprite-menu">
            <button onClick={() => { handlePullNoodle(); setShowMenu(false); }}>
              🍝 Pull Noodle
            </button>
            <button onClick={() => { handleThrowSauce(); setShowMenu(false); }}>
              🍅 Throw Sauce!
            </button>
            <button onClick={() => { setShowSpriteSelector(true); setShowMenu(false); }}>
              🔄 Change Pasta
            </button>
            <button onClick={() => setShowMenu(false)}>
              ❌ Close
            </button>
          </div>
        )}

        {/* Sprite selector modal */}
        {showSpriteSelector && (
          <div className="sprite-selector-modal">
            <h3>Choose Your Pasta Buddy! 🍝</h3>
            <div className="sprite-grid">
              {pastaSprites.map(s => (
                <button
                  key={s.id}
                  className={`sprite-option ${s.id === selectedSpriteId ? 'selected' : ''}`}
                  onClick={() => {
                    onSelectSprite(s.id);
                    setShowSpriteSelector(false);
                  }}
                >
                  <span className="sprite-emoji">{s.emoji}</span>
                  <span className="sprite-label">{s.name}</span>
                  <span className="sprite-desc">{s.description}</span>
                </button>
              ))}
            </div>
            <button className="btn-close-selector" onClick={() => setShowSpriteSelector(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

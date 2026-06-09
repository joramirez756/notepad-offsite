import { useState, useEffect, useRef } from 'react';
import { getSpriteById, pastaSprites } from '../../utils/pastaSprites';
import { getGreeting, getEncouragement } from '../../utils/pomodoroDialogue';
import './Sprite.css';

// Generate an organic splatter SVG path from random points
function generateSplatPath(points) {
  if (!points || points.length < 3) return 'M50,50 m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0';
  const cx = 50, cy = 50;
  const pathPoints = points.map(p => {
    const rad = (p.angle * Math.PI) / 180;
    const dist = p.distance * 35;
    return {
      x: cx + Math.cos(rad) * dist,
      y: cy + Math.sin(rad) * dist,
    };
  }).sort((a, b) => Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx));

  let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
  for (let i = 1; i < pathPoints.length; i++) {
    const prev = pathPoints[i - 1];
    const curr = pathPoints[i];
    const cpx = (prev.x + curr.x) / 2 + (Math.random() - 0.5) * 15;
    const cpy = (prev.y + curr.y) / 2 + (Math.random() - 0.5) * 15;
    d += ` Q ${cpx} ${cpy} ${curr.x} ${curr.y}`;
  }
  const first = pathPoints[0];
  const last = pathPoints[pathPoints.length - 1];
  d += ` Q ${(last.x + first.x) / 2 + (Math.random() - 0.5) * 10} ${(last.y + first.y) / 2 + (Math.random() - 0.5) * 10} ${first.x} ${first.y} Z`;
  return d;
}

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
      x: Math.random() * (window.innerWidth - 60) + 30,
      y: Math.random() * (window.innerHeight - 60) + 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 15 + Math.random() * 35,
      rotation: Math.random() * 360,
      // Generate splatter shape (random blob points)
      splatterPoints: Array.from({ length: 8 }, () => ({
        angle: Math.random() * 360,
        distance: 0.3 + Math.random() * 0.7,
      })),
    }));
    setSauceDrops(prev => [...prev, ...newDrops]);
    setCurrentDialogue("Mamma mia! 🤌 Now THAT'S what I call adding some color to your notes! Right-click me to clean up!");
    setShowDialogue(true);
    setTimeout(() => setShowDialogue(false), 4000);
  };

  // Clean up sauce stains
  const handleCleanSauce = () => {
    setSauceDrops([]);
    setCurrentDialogue("Squeaky clean! ✨ Your notes look good as new... for now! 😏");
    setShowDialogue(true);
    setShowMenu(false);
    setTimeout(() => setShowDialogue(false), 3000);
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
      {/* Sauce stains - persistent until cleaned */}
      {sauceDrops.map(drop => (
        <svg
          key={drop.id}
          className="sauce-stain"
          style={{
            position: 'fixed',
            left: drop.x - drop.size / 2,
            top: drop.y - drop.size / 2,
            width: drop.size * 2,
            height: drop.size * 2,
            zIndex: 9998,
            pointerEvents: 'none',
            transform: `rotate(${drop.rotation}deg)`,
          }}
          viewBox="0 0 100 100"
        >
          <path
            d={generateSplatPath(drop.splatterPoints)}
            fill={drop.color}
            opacity="0.7"
          />
          {/* Inner darker spot */}
          <circle cx="50" cy="50" r="15" fill={drop.color} opacity="0.9" />
          {/* Shine/glisten */}
          <ellipse cx="42" cy="42" rx="5" ry="3" fill="white" opacity="0.2" transform="rotate(-30 42 42)" />
          {/* Drip */}
          <path
            d={`M50 70 Q${48 + Math.random() * 4} ${80 + Math.random() * 10} ${49 + Math.random() * 2} ${90 + Math.random() * 5}`}
            fill={drop.color}
            opacity="0.6"
            strokeWidth="0"
          />
        </svg>
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
            {sauceDrops.length > 0 && (
              <button onClick={handleCleanSauce}>
                🧽 Clean Up Stains
              </button>
            )}
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

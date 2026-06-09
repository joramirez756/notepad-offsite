import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({
  sections,
  notes,
  activeNoteId,
  onSelectNote,
  onCreateNote,
  onDeleteNote,
  onCreateSection,
  onDeleteSection,
  getNotesBySection,
  onUpdateNote,
}) {
  const [newSectionName, setNewSectionName] = useState('');
  const [showNewSection, setShowNewSection] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleCreateSection = (e) => {
    e.preventDefault();
    if (newSectionName.trim()) {
      onCreateSection(newSectionName.trim());
      setNewSectionName('');
      setShowNewSection(false);
    }
  };

  const startRename = (note) => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
  };

  const finishRename = (id) => {
    if (editTitle.trim()) {
      onUpdateNote(id, { title: editTitle.trim() });
    }
    setEditingNoteId(null);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">🍝 Pasta Notes</h2>
        <button
          className="btn-new-section"
          onClick={() => setShowNewSection(!showNewSection)}
          title="New Section"
        >
          +📁
        </button>
      </div>

      {showNewSection && (
        <form className="new-section-form" onSubmit={handleCreateSection}>
          <input
            type="text"
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            placeholder="Section name..."
            autoFocus
          />
          <button type="submit">✓</button>
        </form>
      )}

      <div className="sections-list">
        {sections.map(section => {
          const sectionNotes = getNotesBySection(section.name);
          return (
            <div key={section.name} className="section">
              <div className="section-header">
                <span className="section-name">📁 {section.name}</span>
                <div className="section-actions">
                  <button
                    className="btn-icon"
                    onClick={() => onCreateNote(section.name)}
                    title="New Note"
                  >
                    +
                  </button>
                  {section.name !== 'General' && (
                    <button
                      className="btn-icon btn-danger"
                      onClick={() => onDeleteSection(section.name)}
                      title="Delete Section"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
              <div className="notes-list">
                {sectionNotes.map(note => (
                  <div
                    key={note.id}
                    className={`note-item ${note.id === activeNoteId ? 'active' : ''}`}
                    onClick={() => onSelectNote(note.id)}
                  >
                    {editingNoteId === note.id ? (
                      <input
                        className="note-rename-input"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={() => finishRename(note.id)}
                        onKeyDown={(e) => e.key === 'Enter' && finishRename(note.id)}
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <>
                        <span
                          className="note-title"
                          onDoubleClick={() => startRename(note)}
                        >
                          📝 {note.title}
                        </span>
                        <span className="note-date">
                          {new Date(note.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          className="btn-delete-note"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteNote(note.id);
                          }}
                        >
                          🗑️
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

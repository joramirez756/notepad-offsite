import { useState, useCallback } from 'react';
import { loadNotes, saveNotes } from '../utils/storage';
import { v4 as uuidv4 } from 'uuid';

export function useNotes() {
  const [notes, setNotes] = useState(() => loadNotes());
  const [activeNoteId, setActiveNoteId] = useState(notes.length > 0 ? notes[0].id : null);
  const [sections, setSections] = useState(() => {
    const sectionMap = {};
    notes.forEach(note => {
      const section = note.section || 'General';
      if (!sectionMap[section]) {
        sectionMap[section] = { name: section, createdAt: note.createdAt };
      }
    });
    return Object.values(sectionMap).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  });

  const persist = useCallback((updatedNotes) => {
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  }, []);

  const createNote = useCallback((section = 'General') => {
    const newNote = {
      id: uuidv4(),
      title: 'Untitled Note',
      content: '',
      section,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    persist(updated);
    setActiveNoteId(newNote.id);

    // Ensure section exists
    if (!sections.find(s => s.name === section)) {
      setSections(prev => [...prev, { name: section, createdAt: newNote.createdAt }]);
    }

    return newNote;
  }, [notes, sections, persist]);

  const updateNote = useCallback((id, updates) => {
    const updated = notes.map(note =>
      note.id === id
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note
    );
    persist(updated);
  }, [notes, persist]);

  const deleteNote = useCallback((id) => {
    const updated = notes.filter(note => note.id !== id);
    persist(updated);
    if (activeNoteId === id) {
      setActiveNoteId(updated.length > 0 ? updated[0].id : null);
    }
  }, [notes, activeNoteId, persist]);

  const createSection = useCallback((name) => {
    if (!sections.find(s => s.name === name)) {
      setSections(prev => [...prev, { name, createdAt: new Date().toISOString() }]);
    }
  }, [sections]);

  const deleteSection = useCallback((name) => {
    setSections(prev => prev.filter(s => s.name !== name));
    // Move notes from deleted section to General
    const updated = notes.map(note =>
      note.section === name ? { ...note, section: 'General' } : note
    );
    persist(updated);
  }, [notes, sections, persist]);

  const activeNote = notes.find(n => n.id === activeNoteId) || null;

  const getNotesBySection = useCallback((sectionName) => {
    return notes
      .filter(n => n.section === sectionName)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [notes]);

  return {
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
  };
}

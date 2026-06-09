import { useState } from 'react';
import './Editor.css';

const FONTS = [
  { label: 'Default', value: '' },
  { label: 'Serif', value: 'Georgia, serif' },
  { label: 'Mono', value: 'JetBrains Mono, monospace' },
  { label: 'Comic', value: 'Comic Sans MS, cursive' },
  { label: 'Arial', value: 'Arial, sans-serif' },
];

const SIZES = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px'];

const COLORS = [
  '#000000', '#DC143C', '#FF6347', '#FFA500', '#FFD700',
  '#228B22', '#4169E1', '#8A2BE2', '#FF69B4', '#808080',
];

const HIGHLIGHT_COLORS = [
  '#FFFF00', '#00FF00', '#00FFFF', '#FF69B4', '#FFA500',
  '#E6E6FA', '#98FB98', '#FFB6C1', '#FFDAB9', '#B0E0E6',
];

export default function EditorToolbar({ editor }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const [showSizePicker, setShowSizePicker] = useState(false);

  if (!editor) return null;

  const insertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const insertChart = (type) => {
    const chartHtml = `<div class="chart-placeholder" data-chart-type="${type}" contenteditable="false">
      <span>📊 ${type === 'line' ? 'Line' : 'Pie'} Chart (click to edit)</span>
    </div>`;
    editor.chain().focus().insertContent(chartHtml).run();
  };

  return (
    <div className="editor-toolbar">
      {/* Text formatting */}
      <div className="toolbar-group">
        <button
          className={`toolbar-btn ${editor.isActive('bold') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('italic') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('underline') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline"
        >
          <u>U</u>
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('strike') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
        >
          <s>S</s>
        </button>
      </div>

      {/* Font family */}
      <div className="toolbar-group">
        <div className="dropdown-wrapper">
          <button
            className="toolbar-btn"
            onClick={() => setShowFontPicker(!showFontPicker)}
            title="Font Family"
          >
            Aa
          </button>
          {showFontPicker && (
            <div className="dropdown-menu">
              {FONTS.map(font => (
                <button
                  key={font.label}
                  className="dropdown-item"
                  style={{ fontFamily: font.value }}
                  onClick={() => {
                    if (font.value) {
                      editor.chain().focus().setFontFamily(font.value).run();
                    } else {
                      editor.chain().focus().unsetFontFamily().run();
                    }
                    setShowFontPicker(false);
                  }}
                >
                  {font.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Font size */}
      <div className="toolbar-group">
        <div className="dropdown-wrapper">
          <button
            className="toolbar-btn"
            onClick={() => setShowSizePicker(!showSizePicker)}
            title="Font Size"
          >
            T↕
          </button>
          {showSizePicker && (
            <div className="dropdown-menu">
              {SIZES.map(size => (
                <button
                  key={size}
                  className="dropdown-item"
                  style={{ fontSize: size }}
                  onClick={() => {
                    editor.chain().focus().selectAll;
                    setShowSizePicker(false);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Text color */}
      <div className="toolbar-group">
        <div className="dropdown-wrapper">
          <button
            className="toolbar-btn"
            onClick={() => setShowColorPicker(!showColorPicker)}
            title="Text Color"
          >
            🎨
          </button>
          {showColorPicker && (
            <div className="dropdown-menu color-grid">
              {COLORS.map(color => (
                <button
                  key={color}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    editor.chain().focus().setColor(color).run();
                    setShowColorPicker(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Highlight */}
      <div className="toolbar-group">
        <div className="dropdown-wrapper">
          <button
            className="toolbar-btn"
            onClick={() => setShowHighlightPicker(!showHighlightPicker)}
            title="Highlight"
          >
            🖍️
          </button>
          {showHighlightPicker && (
            <div className="dropdown-menu color-grid">
              {HIGHLIGHT_COLORS.map(color => (
                <button
                  key={color}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    editor.chain().focus().toggleHighlight({ color }).run();
                    setShowHighlightPicker(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Headings */}
      <div className="toolbar-group">
        <button
          className={`toolbar-btn ${editor.isActive('heading', { level: 1 }) ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="Heading 1"
        >
          H1
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('heading', { level: 2 }) ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Heading 2"
        >
          H2
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('heading', { level: 3 }) ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Heading 3"
        >
          H3
        </button>
      </div>

      {/* Lists */}
      <div className="toolbar-group">
        <button
          className={`toolbar-btn ${editor.isActive('bulletList') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet List"
        >
          •
        </button>
        <button
          className={`toolbar-btn ${editor.isActive('orderedList') ? 'active' : ''}`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Numbered List"
        >
          1.
        </button>
      </div>

      {/* Table & Charts */}
      <div className="toolbar-group">
        <button className="toolbar-btn" onClick={insertTable} title="Insert Table">
          📋
        </button>
        <button className="toolbar-btn" onClick={() => insertChart('line')} title="Insert Line Chart">
          📈
        </button>
        <button className="toolbar-btn" onClick={() => insertChart('pie')} title="Insert Pie Chart">
          🥧
        </button>
      </div>

      {/* Alignment */}
      <div className="toolbar-group">
        <button
          className="toolbar-btn"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          title="Align Left"
        >
          ⬅
        </button>
        <button
          className="toolbar-btn"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          title="Center"
        >
          ↔
        </button>
        <button
          className="toolbar-btn"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          title="Align Right"
        >
          ➡
        </button>
      </div>
    </div>
  );
}

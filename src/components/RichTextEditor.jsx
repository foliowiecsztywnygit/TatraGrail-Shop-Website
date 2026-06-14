import React, { useEffect, useMemo, useRef } from 'react'
import { Bold, Italic, Link as LinkIcon, List, ListOrdered, Image as ImageIcon, Underline } from 'lucide-react'

const actions = [
  { icon: Bold, label: 'Pogrubienie', command: 'bold' },
  { icon: Italic, label: 'Kursywa', command: 'italic' },
  { icon: Underline, label: 'Podkreslenie', command: 'underline' },
  { icon: List, label: 'Lista', command: 'insertUnorderedList' },
  { icon: ListOrdered, label: 'Lista numerowana', command: 'insertOrderedList' }
];

export default function RichTextEditor({ value, onChange, placeholder = 'Wpisz tresc...' }) {
  const editorRef = useRef(null);
  const safeValue = useMemo(() => value || '', [value]);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== safeValue) {
      editorRef.current.innerHTML = safeValue;
    }
  }, [safeValue]);

  const exec = (command, commandValue = null) => {
    document.execCommand(command, false, commandValue);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleLink = () => {
    const url = window.prompt('Podaj adres URL');
    if (url) exec('createLink', url);
  };

  const handleImage = () => {
    const url = window.prompt('Podaj adres obrazka');
    if (url) exec('insertImage', url);
  };

  return (
    <div className="border border-zinc-700 bg-zinc-950">
      <div className="flex flex-wrap gap-2 border-b border-zinc-800 p-3">
        {actions.map(({ icon: Icon, label, command }) => (
          <button
            key={command}
            type="button"
            onClick={() => exec(command)}
            className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-900 text-zinc-100 transition hover:border-white"
            title={label}
          >
            <Icon size={16} />
          </button>
        ))}
        <button
          type="button"
          onClick={handleLink}
          className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-900 text-zinc-100 transition hover:border-white"
          title="Dodaj link"
        >
          <LinkIcon size={16} />
        </button>
        <button
          type="button"
          onClick={handleImage}
          className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-900 text-zinc-100 transition hover:border-white"
          title="Dodaj obraz"
        >
          <ImageIcon size={16} />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[260px] w-full bg-zinc-950 p-4 text-sm leading-7 text-zinc-100 focus:outline-none [&_a]:text-sky-400 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-bold [&_img]:my-4 [&_img]:max-h-64 [&_img]:w-auto [&_li]:ml-6"
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        data-placeholder={placeholder}
      />
    </div>
  )
}

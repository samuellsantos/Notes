import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { motion } from 'framer-motion';

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { closeBigNote } from '../redux/userSlice';
import { saveNote } from '../redux/saveNoteSlice';

export const BigNote = () => {
  const color = useSelector((state: RootState) => state.app.color);
  const BigNote = useSelector((state: RootState) => state.app.BigNote);
  const notesFromRedux = useSelector((state: RootState) => state.save);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const maxLines = 4;

  interface NotesProps {
    id: number;
    note: string;
    color: string;
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const lines = event.target.value.split('\n');
    if (lines.length <= maxLines) {
      setText(event.target.value);
    }
  };

  function closeNote() {
    dispatch(closeBigNote());
    setText('');
  }

  const handleSaveNote = (note: string, color: string) => {
    const id = notesFromRedux.length;

    dispatch(saveNote({ id, note, color }));
    closeNote();
    setTimeout(() => {
      setText('');
    }, 500);
  };

  function closeNotePressEsc(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Escape') {
      dispatch(closeBigNote());
      setText('');
    }
  }

  //SAVE LOCALSTORAGE
  useEffect(() => {
    const storedNotes = window.localStorage.getItem('notes');

    if (storedNotes) {
      const parsedTodos = JSON.parse(storedNotes);
      parsedTodos.forEach((notes: NotesProps) => dispatch(saveNote(notes)));
    }
  }, []);

  return (
    <>
      {BigNote && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center flex-col justify-center shadow-md"
        >
          <textarea
            name="note"
            id="note"
            cols={40}
            rows={5}
            maxLength={100}
            placeholder="Type your note here!"
            autoFocus
            value={text}
            onChange={handleTextareaChange}
            onKeyDown={closeNotePressEsc}
            className={`${color} border-none focus:outline-none p-4 text-black resize-none rounded-t  overflow-hidden placeholder:text-black/20 placeholder:italic transition-all`}
          ></textarea>

          <div
            className={`${color} w-full h-16 rounded-b flex items-center justify-between p-4`}
          >
            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => closeNote()}
            >
              <AiOutlineCloseCircle size={40} />
            </motion.div>

            <div>
              <p className="font-bold transition-all pointer-events-none">
                {text.length}/100
              </p>
            </div>

            <motion.div
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSaveNote(text, color)}
            >
              <AiOutlineCheckCircle size={40} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

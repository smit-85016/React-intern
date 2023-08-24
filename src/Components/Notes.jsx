import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import '../App.css';

export default function Notes() {
  useEffect(() => {
    read();
  }, []);

  const [noteContent, setNoteContent] = useState('');
  const [mynotes, setMyNotes] = useState([]);
  const notes = collection(db, 'notes');

  const write = async () => {
    if (noteContent.trim() === '') {
      return;
    }

    await addDoc(notes, { value: noteContent });
    setNoteContent('');
  };

  const read = async () => {
    const mydata = await getDocs(notes);
    setMyNotes(mydata.docs.map((doc) => doc.data()));
  };

  const removeAllNotes = async () => {
    const notesSnapshot = await getDocs(notes);
    notesSnapshot.forEach(async (noteDoc) => {
      await deleteDoc(noteDoc.ref);
    });

    setMyNotes([]);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className='heading'>Enter a Note:</h1>
        <textarea
          className='textarea border border-white-300 p-2 rounded-md focus:ring-white-300 w-4/12 h-56'
          style={{ backgroundColor: '#191532', color: 'white', marginTop: '20px' }}
          onChange={(event) => {
            setNoteContent(event.target.value);
          }}
          value={noteContent}
          id='text'
        ></textarea>
        <br></br>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          style={{ marginTop: '20px' }}
          onClick={write}
        >
          Write
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          style={{ marginTop: '20px', marginLeft: '5vw' }}
          onClick={read}
        >
          Read
        </button>
        <button
          className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded'
          style={{ marginTop: '20px', marginLeft: '5vw' }}
          onClick={removeAllNotes}
        >
          Remove All
        </button>
        <hr style={{ color: 'white', marginTop: '30px' }}></hr>
        <h1 className='heading' style={{ marginTop: '5px', marginBottom: '20px' }}>
          All Notes:
        </h1>
        <hr style={{ color: 'white', marginBottom: '10px' }}></hr>
        <ol type='1' style={{ color: 'white' }}>
          {mynotes.map((note, index) => {
            return (
              <p style={{ color: 'white', fontSize: '19px', marginBottom: '10px' }} key={index}>
                {note.value}
              </p>
            );
          })}
        </ol>
      </div>
    </>
  );
}

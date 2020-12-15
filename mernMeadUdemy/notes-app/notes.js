const fs = require('fs');
const chalk = require('chalk');

const getNote = title => {
  return 'hi';
};

const addNote = (title, body) => {
  const notes = loadNotes();

  //check if title exists
  const duplicateNotes = notes.filter(value => {
    return value.title === title;
  });

  if (duplicateNotes.length === 0) {
    console.log('added new note');
    notes.push({ title: title, body: body });
  } else {
    console.log('Duplicate note');
  }

  saveNotes(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => {
    return note.title !== title;
  });

  if (updatedNotes.length === notes.length) {
    console.log(chalk.bgRed('no note removed'));
  } else {
    console.log(chalk.bgGreen(title + 'removed'));
  }

  saveNotes(updatedNotes);
};

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  getNote: getNote,
  removeNote: removeNote,
};

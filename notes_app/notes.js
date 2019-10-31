const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
}

const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title)
  

  if (findNote) {
    console.log('Title: ' + findNote.title);
    console.log('Body: ' + findNote.body);
  } else 
    console.log(chalk.red('Note not found'));
}
const addNote = (title,body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter((note) => note.title === title)
  const findNote = notes.find(note => note.title === title)

  if (!findNote) {
    notes.push({
      title: title,
      body: body
    });
  
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Title taked');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  
  const wantedNotes = notes.filter((note) => note.title === title)

  if (wantedNotes.length === 0) {
    console.log(chalk.red('Note not found'));
  } else {
    const editNotes = notes.filter((note) => note.title !== title)

    saveNotes(editNotes);

    console.log(chalk.green('Note removed'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your notes.....'));
  notes.forEach(note => {
    //console.log('--------------------------------');
    console.log('-- ' + note.title);
    //console.log('Body: ' + note.body);
  });
  //console.log('--------------------------------');
}



const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => { 
  try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
  } catch (e) {
      return [];
  }
}

module.exports =  {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes, 
  readNote: readNote
}
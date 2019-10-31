// const notes = require('./notes.js');
// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
     } ,
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }

  },
  handler(argv){
    getNotes.addNote(argv.title, argv.body);
  } 
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
     } 
  },
  handler(argv){
    getNotes.removeNote(argv.title);
  }
});

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(argv){
      getNotes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Print a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
       } 
    },
    handler(argv){
      getNotes.readNote(argv.title);
    }
});

//console.log(process.argv);
//console.log(yargs.argv);

yargs.parse();

// switch(command){
//   case 'add':
//     console.log('Adding note...');
//     break;
//   case 'remove':
//     console.log('Removing note...');
//     break;
//   default:
//     console.log('Invalid Command');  
    
// }



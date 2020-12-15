const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes');
const { title } = require('process');

//add remove read list
yargs.command({
  command: 'add',
  desc: 'add a note',
  builder: {
    title: {
      desc: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      desc: 'Note body',
      type: 'string',
      demandOption: true,
    },
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  desc: 'removing a note',
  builder: {
    title: {
      desc: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'read',
  desc: 'reading a note',
  handler: argv => {
    console.log('reading a note');
  },
});

yargs.command({
  command: 'list',
  desc: 'listing all notes',
  handler: argv => {
    console.log('listing notes');
  },
});

yargs.parse();

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Add note
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});

// Remove note
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing a note')
    }
});

// List note
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing a note')
    }
});

// Read note
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note')
    }
});


// console.log(yargs.argv);
yargs.parse()

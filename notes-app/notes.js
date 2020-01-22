const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return "Your notes..."
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log("Note added!")
    } else {
        console.log("Title is taken!")
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

};

const removeNote = function (title) {
    const notes = loadNotes();

    const noteToRemove = notes.filter(function (note) {
        return note.title === title

    })
    const notesAfterRemove = notes.filter(function (note) {
        return note.title != title
    });

    if (noteToRemove.length !== 0) {
        saveNotes(notesAfterRemove)
        console.log(chalk.bgGreen("Note with title " + title + " is deleted"))
        // console.log()
    } else {
        console.log(chalk.bgRed("Unable to find a note with title: " + title))
        // console.log("Unable to find a note with title: " + title)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};
// Grab Notes from local storage if there, if not, display default
function getNotes() {
    if (localStorage.getItem('note')) {
        var note = localStorage.getItem('note');
    } else {
        var note = "Type note...";
    }
    document.getElementById('notePad').innerHTML = note;
}

// Save Notes to local storage
function saveNotes(id) {
    var note = document.getElementById('notePad').innerHTML;
    localStorage.setItem('note', note);
}

// Clear notes from notepad
function clearNotes() {
    clear: localStorage.clear();
}

// TO DOs
// Figure out how to clear the default note automatically when start to type



getNotes();
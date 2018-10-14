const APP_CONST = {
    NAVIGATION: {
        HEADER: {
            title: "My Notes..."
        }
    },
    HOME: {
        MODAL: {
            NEW_NOTE: {
                title: "New note...",
                description: "Add a new note and either save or cancel when you're done.",
                notepad: {
                    inputField: {
                        inputLabel: "Title",
                        labelValue: "Title:",
                        placeholderText: "Enter title..."
                    },
                    textArea: {
                        inputLabel: "Description",
                        labelValue: "Description:",
                        placeholderText: "Add note here..."
                    },
                    buttons: {
                        ok: "Add note",
                        cancel: "Cancel"
                    }
                }
              },
              VIEW_NOTE: {
                title: "View existing note...",
                description: "Remember, you can always update your note.",
                notepad: {
                    buttons: {
                        cancel: "Cancel"
                    }
                }
              },
        },
        NOTE_LIST: {
            NOTE: {
                BUTTONS: {
                    VIEW_NOTE: "View Note..."
                }
            }
        },
        BUTTONS: {
            ADD_NOTE: "Add note..."
        }
    }
}

export default APP_CONST;
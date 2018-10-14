
export const NEW_NOTE = "NEW_NOTE";
export const HIDE_MODAL = "HIDE_MODAL";
export const NOTE_ADDED = "ADD_NOTE";


export const newNote = () => {
    return {
        type: NEW_NOTE
    }
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
};

export const addNote = (newNote) => {
    return {
        type: NOTE_ADDED,
        newNote
    }
};

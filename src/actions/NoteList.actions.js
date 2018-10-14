
export const NEW_NOTE = "NEW_NOTE";
export const HIDE_MODAL = "HIDE_MODAL";

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

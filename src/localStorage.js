export const loadState = () => (localStorage.getItem("notesAppState") === null) ?
            undefined : JSON.parse(localStorage.getItem("notesAppState"));

export const saveState = (notesAppState) => {
    try {
        const serialiseState = JSON.stringify(notesAppState);
        localStorage.setItem("notesAppState", serialiseState);
    } catch (err) {}
};

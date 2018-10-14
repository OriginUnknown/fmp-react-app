import {
    NEW_NOTE,
    HIDE_MODAL,
    NOTE_ADDED,
    VIEW_NOTE
} from './actions/NoteList.actions';

const initialState = {
    notes: [],
    modal: {
        contentKey: null
    },
    showModal: false
  };

export function reducer(state = initialState, action) {
    switch(action.type) {
        case NEW_NOTE: {
            let newModalState = {
                ...state.modal,
                contentKey: action.type
            };
            return {
                ...state,
                showModal: true,
                modal: newModalState
              }
        }
        case HIDE_MODAL: {
            let newModalState = {
                ...state.modal,
                contentKey: null
            };
            return {
                ...state,
                modal: newModalState,
                showModal: false
              }
        }
        case NOTE_ADDED: {
            let newModalState = {
                ...state.modal,
                contentKey: null
            };
            return {
                ...state,
                notes: [...state.notes, action.newNote],
                modal: newModalState,
                showModal: false
              }
        }
        case VIEW_NOTE: {
            let newModalState = {
                ...state.modal,
                contentKey: action.type
            };
            return {
                ...state,
                modal: newModalState,
                showModal: true
              }
        }
        default:
            return state;
    }
}
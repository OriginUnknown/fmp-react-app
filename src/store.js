import {
    NEW_NOTE,
    HIDE_MODAL
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
            let newModalObj = {
                ...state.modal,
                contentKey: action.type
            };
            return {
                ...state,
                showModal: true,
                modal: newModalObj
              }
        }
        case HIDE_MODAL: {
            let newModalObj = {
                ...state.modal,
                contentKey: null
            };
            return {
                ...state,
                modal: newModalObj,
                showModal: false
              }
        }
        default:
            return state;
    }
}
import {
    NEW_NOTE
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
        default:
            return state;
    }
}
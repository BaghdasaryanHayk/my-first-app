import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likscount: 11},
                {id: 2, message: 'Hello', likscount: 21},
            ],
            newPostText: 'ggg'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Hayk'},
                {id: 2, name: 'Tatevik'},
                {id: 3, name: 'Arshak'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hooo'},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}





export default store;
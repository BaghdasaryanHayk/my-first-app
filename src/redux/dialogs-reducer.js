const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Hayk'},
        {id: 2, name: 'Tatevik'},
        {id: 3, name: 'Arshak'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hooo'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreatoor = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;
import React from 'react';
import c from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";





const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

if (!props.isAuth){
    return <Redirect to={"login"}/>;
};
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div> {messagesElements} </div>

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>

    )
}


export default Dialogs;
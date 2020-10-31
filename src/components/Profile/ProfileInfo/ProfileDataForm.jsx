import React from 'react';
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import c from './ProfileInfo.module.css';
import style from "../../Common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} >
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b> Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b> Looking for a job</b>:{createField("", "lookingForAJob", [], Input, {type:"checkbox"})}
        </div>

        <div>
            <b> My professional Skills</b>: {createField("My professional Skills", "lookingForAJobDescription", [], Textarea)}
        </div>


        <div>
            <b> About me</b>: {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <b> Contacts</b>:{Object.keys(profile.contacts).map(key => {
            return <div key={key} className={c.contact}>
                <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form:'editProfile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
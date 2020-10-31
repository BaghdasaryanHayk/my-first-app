import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";



const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message ={p.message} likscount ={p.likscount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
     props.addPost(values.newPostText);
    }

    return(

            <div className={c.postsBlok}>
                <h3> My posts</h3>
                <AddNewPostFormRedux onSubmit = {onAddPost} />
                <div className={c.posts}>
                    {postsElements}
        </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name ="newPostText" placeholder="Enter your message"
                validate = {[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
                {/*<button>Remove</button>*/}
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts
import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}

let MapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


it('length of posts should be incremented', () => {
    let action = addPostActionCreator("hao");
    let state = {
        posts: [
            {id: 1, message: 'Hi', likscount: 11},
            {id: 2, message: 'Hello', likscount: 21},
        ]
    };
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(3);
    expect (newState.posts[2].message).toBe("hao");
});

it('after deleting length of message be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect (newState.posts.length).toBe(1);
});
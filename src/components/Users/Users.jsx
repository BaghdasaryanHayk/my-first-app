import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, totalUsersCount, pageSize, onPageChanges, users, ...props}) => {
    return <div>

<Paginator currentPage={currentPage} onPageChanges={onPageChanges}
           totalItemsCount={totalUsersCount} pageSize={pageSize} />
           <div>
        {
            users.map(u => <User user ={u}
                                 followingInProgress = {props.followingInProgress}
                                 key={u.id}
                                 unfollow = {props.unfollow}
                                 follow = {props.follow}
            />)

        }
           </div>
    </div>

}

export default Users;


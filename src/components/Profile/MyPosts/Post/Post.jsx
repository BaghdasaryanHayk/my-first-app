import React from 'react';
import c from './Post.module.css'


const Post = (props) => {
    return(
            <div className={c.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxZ08AF-RDFvJ8JfV2wEvWeLH_tgW7bOPHKTH9GovdH2Og9EmSg&s'/>
                {props.message}
                <div> <span>like</span> {props.likscount}
                </div>
            </div>
    )
}

export default Post
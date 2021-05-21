import React from 'react';

const ReviewList = (props) =>{
    //just pass in mapped reviews
    return(
        <div>
            {props.reviews}
        </div>
    )
}
export default ReviewList;
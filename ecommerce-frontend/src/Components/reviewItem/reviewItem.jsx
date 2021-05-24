import React from 'react';
import {Comment} from 'semantic-ui-react';

const ReviewItem = (props) =>{
    return(
        <div>
        <Comment>
        <Comment.Content>
        <Comment.Author as='a'>{props.user.username}</Comment.Author>
        <Comment.Metadata>
            {props.review.rating}
        </Comment.Metadata>
        <Comment.Text>{props.review.text}</Comment.Text>
        </Comment.Content>
        </Comment>
        </div>
    )
}
export default ReviewItem;
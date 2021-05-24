import React, { useState } from 'react';
import ReviewList from '../reviewList/reviewList';
import PostReview from '../postReview/postReview';
import ReviewItem from '../reviewItem/reviewItem';

const ReviewContainer = (props) => {
    const [mappedReviews, setMappedReviews] = useState();

    const mapReviews = () =>{
        let temp = props.reviews.map(review =>{
            <ReviewItem review={review} key={review.id} user={props.user} product={props.product}/>
        });
        setMappedReviews(temp);
    }
    
    //map reviews When mapping each product.
    return(
        <div>
            {/* <PostReview user={props.user} product={props.product}/> */}
            <ReviewList reviews={mappedReviews}/>
            {/* Maybe don't need review list to have this prop. */}
        </div>
    )
}
export default ReviewContainer;
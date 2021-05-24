import React from 'react';
import {postReview} from '../services/Service';
import {UseForm} from '../forms/UseForm';
import {Form, Label, FormInput, Button} from 'semantic-ui-react';

const PostReview = (props) =>{
    const [newReview, setNewReview] = UseForm({
        text: '',
        rating: 0,
        userId: props.user.id,
        productId: props.product.id
    });


    const addNewReview = (newReview) => {
        postReview(newReview);
    }

    return (//MAKE MESSAGE TEXTAREA IDK HOW.
        // MAKE RATING LOOK PRETTY IDK HOW
        <Form>
            <Label>
                Message:
                <FormInput
                    type="text"
                    name="Name"
                    value={newReview.text}
                    onChange={setNewReview}
                    placeholder='Leave a review'
                />
                <br />
                Rating:
                <FormInput
                    type="number"
                    name="Rating"
                    value={newReview.rating}
                    onChange={setNewReview}
                />

            </Label>
            <Button primary color="blue" onClick={() => addNewReview(newReview)}>
                Add Review
            </Button>
        </Form>
    );
}
export default PostReview;
import React from 'react';
import {postReview} from '../services/Service';
import {UseForm} from '../forms/UseForm';
import {Form, Label, FormInput, Button} from 'semantic-ui-react';

const PostReview = (props) =>{
    const [newReview, setNewReview] = UseForm({
        Text: '',
        Rating: 0,
        UserId: props.user.Id,
        ProductId: props.product.Id
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
                    value={newReview.Text}
                    onChange={setNewReview}
                    placeholder='Leave a review'
                />
                <br />
                Rating:
                <FormInput
                    type="number"
                    name="Rating"
                    value={newReview.Rating}
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
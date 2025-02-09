interface Review {
    id: number; 
    content: string; 
    rating: number; 
}

export const ADD_REVIEW = 'ADD_REVIEW';

interface AddReviewAction {
    type: typeof ADD_REVIEW;
    payload: Review;
}

export const addReview = (review: Review): AddReviewAction => {
    return {
        type: ADD_REVIEW,
        payload: review,
    };
};
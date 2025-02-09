interface Review {
    id: number; 
    content: string; 
    rating: number; 
}

type ReviewState = Review[];

interface AddReviewAction {
    type: 'ADD_REVIEW';
    payload: Review;
}

type ReviewAction = AddReviewAction;
const initialState: ReviewState = [];
const reviewReducer = (state: ReviewState = initialState, action: ReviewAction): ReviewState => {
    switch (action.type) {
        case 'ADD_REVIEW':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default reviewReducer;
type Category = string;

export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

interface SetSelectedCategoryAction {
    type: typeof SET_SELECTED_CATEGORY;
    payload: Category;
}

export const setSelectedCategory = (category: Category): SetSelectedCategoryAction => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});
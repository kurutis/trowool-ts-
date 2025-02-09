type SelectedCategory = string;

export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

interface SetSelectedCategoryAction {
    type: typeof SET_SELECTED_CATEGORY;
    payload: SelectedCategory;
}

export const setSelectedCategory = (category: SelectedCategory): SetSelectedCategoryAction => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});
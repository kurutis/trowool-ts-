type SearchTerm = string;

export const FILTER_CITIES = 'FILTER_CITIES';

interface FilterCitiesAction {
    type: typeof FILTER_CITIES;
    payload: SearchTerm;
}

export const filterCities = (searchTerm: SearchTerm): FilterCitiesAction => ({
    type: FILTER_CITIES,
    payload: searchTerm,
});
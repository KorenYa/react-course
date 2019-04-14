import { SEARCH_BY } from '../utils/constants';

export default (defaultSearchBy = 'title', action) => {
    const { type, searchBy } = action;

    switch (type) {
        case SEARCH_BY:
            return searchBy;
    }

    return defaultSearchBy;
};

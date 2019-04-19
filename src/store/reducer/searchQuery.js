import { SEARCH_QUERY } from '../../utils/constants';

export default (deafultSearchQuery = 'Adventure', action) => {
    const { type, searchQuery } = action;

    switch (type) {
        case SEARCH_QUERY:
            return searchQuery;
    }

    return deafultSearchQuery;
};

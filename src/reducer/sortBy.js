import { SORT_BY } from '../utils/constants';

export default (deafultSortBy = 'release_date', action) => {
    const { type, sortBy } = action;

    switch (type) {
        case SORT_BY:
            return sortBy;
    }

    return deafultSortBy;
};

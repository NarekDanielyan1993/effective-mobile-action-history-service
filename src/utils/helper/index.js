import { PAGINATION_PARAMS_DEFAULT } from '@constant/pagination';

export const parsePaginationParams = ({ pageSize, page, filters }) => {
    const parsedPaginatedParams = {};
    parsedPaginatedParams.pageSize = pageSize
        ? Number(pageSize)
        : PAGINATION_PARAMS_DEFAULT.PAGE_SIZE;
    parsedPaginatedParams.pageNumber = page
        ? Number(page)
        : PAGINATION_PARAMS_DEFAULT.page;
    parsedPaginatedParams.skip =
        (parsedPaginatedParams.pageNumber - 1) * parsedPaginatedParams.pageSize;

    if (filters) {
        parsedPaginatedParams.filters = JSON.parse(filters);
    }
    return parsedPaginatedParams;
};

export const generatePrismaFilters = (filters) => {
    const where = {};
    const buildFilterOptions = (filterOptions) => {
        const filterConditions = [];
        if (filterOptions && filterOptions.length > 0) {
            filterConditions.push(
                ...filterOptions.map((searchFilter) => {
                    const { name, value, keyword = 'in' } = searchFilter;
                    return {
                        [name]: {
                            [keyword]: value,
                        },
                    };
                }),
            );
        }
        return filterConditions;
    };

    if (filters && filters.length > 0) {
        where.AND = buildFilterOptions(filters);
    }

    return where;
};

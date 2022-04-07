import _ from "lodash";

export const paginate = (news, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    return _(news)
        .slice(startIndex)
        .take(perPage)
        .value();
};

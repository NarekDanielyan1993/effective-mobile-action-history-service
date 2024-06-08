import { generatePrismaFilters } from '@utils/helper';

class HistoryService {
    constructor(repository) {
        this.repository = repository;
    }

    async logAction(action) {
        const { type, user } = action;
        return await this.repository.create({
            type,
            userId: user.id,
            user: JSON.stringify(user),
        });
    }

    async getPaginatedHistories(limit, skip, filters) {
        let filterInput = {};
        if (filters) {
            filterInput = generatePrismaFilters(filters);
        }

        return await this.repository.find({
            where: filterInput,
            skip,
            take: limit,
        });
    }
}

export default HistoryService;

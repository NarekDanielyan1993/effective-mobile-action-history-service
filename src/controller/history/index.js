import { parsePaginationParams } from '@utils/helper';

class HistoryController {
    constructor(historyService) {
        this.historyService = historyService;
    }

    async getPaginatedHistory(req, res, next) {
        try {
            const { listSize, page, filters } = req.query;

            const {
                pageSize,
                skip,
                filters: parsedFilters,
            } = parsePaginationParams({ pageSize: listSize, page, filters });

            const histories = await this.historyService.getPaginatedHistories(
                pageSize,
                skip,
                parsedFilters,
            );
            const parsedHistories = histories.map((entry) => ({
                ...entry,
                user: JSON.parse(entry.user),
            }));
            res.status(200).json(parsedHistories);
        } catch (error) {
            next(error);
        }
    }
}
export default HistoryController;

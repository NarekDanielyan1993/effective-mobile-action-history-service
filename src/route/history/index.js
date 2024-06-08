import { HISTORY_API } from '@constant/api';
import HistoryController from '@controller/history';
import HistoryRepository from '@repository/history';
import HistoryService from '@service/history';
import express from 'express';

const historyRepository = new HistoryRepository();
const historyService = new HistoryService(historyRepository);
const historyController = new HistoryController(historyService);

const historyRoutes = express.Router();

historyRoutes.get(
    HISTORY_API.GET_ALL,

    historyController.getPaginatedHistory.bind(historyController),
);

export default historyRoutes;

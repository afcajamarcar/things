import express from 'express'
import { handleStoreAction, handleQueryAction } from '../controllers/thingsController';

export const router = express.Router();

router.use(express.json());

router
    .post("/store", (req, res) => { handleStoreAction(req, res) });


router
    .get("/query/:id", (req, res) => { handleQueryAction(req, res) });
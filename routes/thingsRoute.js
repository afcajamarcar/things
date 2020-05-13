import express from 'express'
export const router = express.Router();

router.use(express.json());

router
    .route("/store")
    .post((req, res) => {
        res.status(200);
        res.send('post operation');
    });


router
    .route("/query/:id")
    .get((req, res) => {
        console.log('id');
        console.log(req.params.id);
        res.status(200);
        res.send('get operation');
    });
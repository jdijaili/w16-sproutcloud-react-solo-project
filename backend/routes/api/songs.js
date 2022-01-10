const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const db = require('../../db/models');

router.get('/songs', asyncHandler( async (req, res) => {
    const songs = await db.Songs.findAll();
    res.json(songs);
}));

module.exports = router;

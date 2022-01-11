const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Song } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    res.json(songs);
}));

router.post('/', asyncHandler(async (req, res) => {
    const newSong = await Song.create(req.body);
    res.json(newSong);
}));

module.exports = router;

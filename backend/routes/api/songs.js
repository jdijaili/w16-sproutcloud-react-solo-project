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

router.get('/:id(\\d+)')

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const song = await Song.findByPk(id);
    const editedSong = await song.update(req.body);
    res.json(editedSong);
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const song = await Song.findByPk(id);
    await song.destroy();
}));

module.exports = router;

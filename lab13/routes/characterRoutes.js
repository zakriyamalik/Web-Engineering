const express = require('express');
const router = express.Router();
const character_controller = require('../controllers/character_controller');

router.post('/character', character_controller.create_character);
router.get('/characters', character_controller.get_all_characters);

module.exports = router;
